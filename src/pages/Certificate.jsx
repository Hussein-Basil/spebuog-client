// Importing required libraries and components from external modules
import React, { useState, useEffect } from "react";
import {
  Flex,
  Text,
  Heading,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import ResponsiveWidth from "../layouts/ResponsiveWidth";
import { useUser } from "../contexts/UserContext";

// The main component for verifying certificates
const Certificate = () => {
  // useEffect to update the document title when the component mounts
  useEffect(() => {
    document.title = "Verify Certificate - SPE BUOG";
  }, []);

  // State variables to store certificate ID, certificate data, button text, and display messages
  const [certificateID, setCertificateID] = useState("");
  const [certificate, setCertificate] = useState(null);
  const [buttonText, setButtonText] = useState("Verify");
  const [displayMessage, setDisplayMessage] = useState(null);

  // Using the custom hook 'useUser' to get the 'client' object from the UserContext
  const { client } = useUser();

  // Function to handle the click event when the 'Verify' button is clicked
  const handleClick = (certificateID) => {
    // Check if the certificate ID is provided and the button text is 'Verify'
    if (certificateID && buttonText === "Verify") {
      // Update the button text to indicate that verification is in progress
      setButtonText("Wait..");

      // Fetch the certificate data from the server using the provided certificate ID
      client
        .fetch(
          `*[_type == 'certificate' && lower(certificate_id) == lower('${certificateID}')][0]`
        )
        .then((result) => {
          // Check if the certificate data is retrieved successfully
          if (result) {
            // Set the display message for a valid certificate
            setDisplayMessage({
              message:
                "This certificate is issued by Basra University for Oil & Gas SPE Student Chapter.",
              valid: true,
            });
          } else {
            // Set the display message for an invalid certificate
            setDisplayMessage({
              message: "This certificate is not issued by our Student Chapter.",
              valid: false,
            });
          }
          // Store the retrieved certificate data in the state variable
          setCertificate(result);

          // Reset the button text back to 'Verify' after the verification process
          setButtonText("Verify");
        });
    }
  };

  // JSX code for rendering the certificate verification form and result
  return (
    <ResponsiveWidth gap="1em" my="3em">
      <Flex flexDir="column" gap="1em" maxW={{ base: "90vw", lg: "770px" }}>
        <Heading>Verify Certificate</Heading>
        <Text mt="-0.5em">
          Entering the ID printed on the certificate will allow you to verify
          its validity if it was issued by our student chapter.
        </Text>
        <InputGroup
          mt="1em"
          p="0"
          display="flex"
          justify="space-between"
          position="relative"
        >
          <Input
            placeholder="Enter your certificate ID"
            bg="#f1f1f1"
            border="1px solid white"
            value={certificateID}
            onChange={(e) => setCertificateID(e.target.value)}
          />
          <InputRightElement>
            <Button
              minW="100px"
              style={{ height: "38.5px", marginTop: "-2px" }}
              position="absolute"
              right="0"
              px="1em"
              color="black"
              borderLeftRadius="0"
              type="submit"
              onClick={() => handleClick(certificateID)}
              onKey={() => handleClick(certificateID)}
            >
              {buttonText}
            </Button>
          </InputRightElement>
        </InputGroup>
        {displayMessage && (
          <Flex
            bg={displayMessage.valid ? "#d1e7dd" : "#fce4e4"}
            borderColor={displayMessage.valid ? "green" : "#fcc2c3"}
            fontFamily="Helvetica, Arial, sans-serif"
            lineHeight="20px"
            color={displayMessage.valid ? "#0f5132" : "#cc0033"}
            paddingX="2em"
            paddingY="1em"
            gap="1em"
            align="center"
          >
            {displayMessage.valid ? (
              <CheckIcon color="#0f5132" />
            ) : (
              <CloseIcon />
            )}
            <Text>
              <Text
                as="span"
                fontWeight="bold"
                color={displayMessage.valid ? "#0f5132" : "#A63232"}
              >
                {displayMessage.valid ? "Valid. " : "Invalid. "}
              </Text>
              <Text as="span">{displayMessage.message}</Text>
            </Text>
          </Flex>
        )}
        {certificate && (
          <Flex
            flexDir="column"
            bg="#f1f1f1"
            borderRadius="5px"
            px="2.5em"
            py="2em"
            gap="0.5em"
          >
            <Text>Certificate ID: {certificate?.certificate_id}</Text>
            <Text>Training: {certificate?.course}</Text>
            <Text>Name: {certificate?.name}</Text>
            <Text>
              Date: {certificate?.course_date?.start_date}{" "}
              {certificate?.course_date?.end_date &&
                `to ${certificate.course_date.end_date}`}
            </Text>
            <Text>Days: {certificate?.days}</Text>
            <Text>Hours: {certificate?.hours}</Text>
          </Flex>
        )}
      </Flex>
    </ResponsiveWidth>
  );
};

export default Certificate;
