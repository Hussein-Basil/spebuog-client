// Importing necessary dependencies and components from external libraries
import React from "react";
import { Heading, Text, Flex, Image, Icon } from "@chakra-ui/react";

// Importing custom components from other files
import { Team, Achievement } from "../features/about";

// Importing SVG image and other assets
import vision from "../assets/home/vision.svg";
import { ReactComponent as mission } from "../assets/home/biometrics.svg";

import ResponsiveWidth from "../layouts/ResponsiveWidth";
import AboutBackground from "../assets/home/about.png";

// Functional component for rendering the About Us page
const About = () => {
  // Updating the document title for the About Us page
  document.title = "About Us - SPE BUOG";

  // Rendering the main content of the About Us page
  return (
    <Flex w="100%" flexDir="column">
      {/* Header section with background image and heading */}
      <Flex bg="#0D4C94" justify="center" position="relative" userSelect="none">
        <Image
          src={AboutBackground}
          minW="100%"
          objectFit="cover"
          maxH="420px"
        />
        <Heading
          position="absolute"
          color="white"
          top="calc(50%)"
          fontSize="56px"
          textAlign="center"
        >
          We Are SPE
        </Heading>
      </Flex>

      <ResponsiveWidth
        mx="auto"
        gap={{ base: "4em", lg: "8em" }}
        align="center"
        my="5em"
      >
        {/* Two sections for "Who We Are" and "Our Mission" */}
        <Flex
          justify="space-between"
          gap="3em"
          w="fit-content"
          flexDir={{ base: "column", lg: "row" }}
        >
          {/* "Who We Are" section */}
          <Flex
            flexDir="column"
            gap="2.5em"
            py="2em"
            w="fit-content"
            border="1px solid #c8c8c8"
            borderRadius="10px"
          >
            <Icon
              as={mission}
              w="50px"
              h="50px"
              alignSelf="center"
              color="red"
            />
            <Heading fontWeight="semibold" fontSize="28px" textAlign="center">
              Who We Are
            </Heading>
            <Text fontSize="18px" maxW="80%" alignSelf="center">
              Student Chapter with more than 1000 members, managed by students
              from Basrah University of Oil and Gas, passionate about the oil
              and gas engineering. We aspire, with support from our university,
              to provide help and benefit to our students as well as anyone
              interested in the oil and gas industry.
            </Text>
          </Flex>

          {/* "Our Mission" section */}
          <Flex
            flexDir="column"
            gap="2.5em"
            py="2em"
            w="fit-content"
            border="1px solid #c8c8c8"
            borderRadius="10px"
          >
            <Image src={vision} w="50px" h="50px" alignSelf="center" />
            <Heading fontWeight="semibold" fontSize="28px" textAlign="center">
              Our Mission
            </Heading>
            <Text fontSize="18px" maxW="80%" alignSelf="center">
              Our mission includes several seminars on our campus, online
              workshops, training courses, software, webinars presented by
              specialist instructors in the oil and gas industry from all over
              Iraq and the world. We aim to improve the technical and
              non-technical skills of students, support the role of women in the
              oil industry, and organize competitions and field trips to oil and
              gas international companies such as Schlumberger, Halliburton,
              Weatherford, and others in the industry.
            </Text>
          </Flex>
        </Flex>

        {/* Rendering the "Team" component */}
        <Team />

        {/* Rendering the "Achievement" component */}
        <Achievement />
      </ResponsiveWidth>
    </Flex>
  );
};

// Exporting the About component as the default export
export default About;
