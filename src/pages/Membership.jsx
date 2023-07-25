// Importing necessary dependencies and components from external libraries and files
import React from "react";
import { Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import ResponsiveWidth from "../layouts/ResponsiveWidth";

// Functional component for rendering the membership page
const Membership = () => {
  // Setting the document title for the membership page
  document.title = "Membership - SPE BUOG";

  // Rendering the membership page with responsive layout and embedded videos
  return (
    <ResponsiveWidth
      gap="1em"
      my="3em"
      sx={{
        ".membership-container": {
          maxW: {
            base: "90vw",
            lg: "850px",
          },
        },
        ".embeded-video": {
          width: {
            base: "90%",
            lg: "560px",
          },
          height: {
            base: "calc(0.56*90vw)",
            lg: "315px",
          },
        },
      }}
    >
      <div className="membership-container">
        {/* Membership section heading */}
        <Heading size="md" fontWeight="semibold">
          SPE Membership
        </Heading>

        {/* First case: Creating Membership */}
        <Text>
          In order to get membership in our student chapter, there are two
          cases:
        </Text>
        <ol>
          {/* Step 1: Creating Membership video */}
          <Text as="li">
            <b>Creating Membership:</b> If you are not already registered in our
            student chapter, you may follow the steps of the video below to
            create a membership.
          </Text>
          <Flex
            as="iframe"
            className="embeded-video"
            src="https://www.youtube-nocookie.com/embed/Yt9tMJoLOa8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />

          {/* Step 2: Membership Renewal video */}
          <Text as="li">
            <b>Membership Renewal:</b> If you are a member in the student
            chapter, you should renew your membership annually. Please follow
            the steps in the video below to renew your membership.
          </Text>
          <Flex
            as="iframe"
            className="embeded-video"
            src="https://www.youtube-nocookie.com/embed/ztdU1NqxgaM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </ol>

        {/* Membership form link */}
        <Text>
          After you have created or renewed your membership in the student
          chapter, you may fill the Student Chapter Data Form right below:
        </Text>
        <Text color="#0D4C94" textDecor="underline">
          <Link href="https://forms.gle/W25aogBHvr1WQTKx8">
            https://forms.gle/W25aogBHvr1WQTKx8
          </Link>
        </Text>

        {/* Additional notes and images */}
        <Text>
          <Text fontWeight="medium">
            *Before filling the form please notice that:
          </Text>{" "}
          Form may be filled only by students who have a membership card that is
          valid until the end of the current year.{" "}
          {"(Expires: 12/31/2022) - Not expired membership"}
        </Text>
        <Image
          w="560px"
          objectFit="contain"
          src={"/assets/membership_data_form.png"}
        />

        <Flex flexDir="column">
          <Text fontWeight="medium">
            *When creating or renewing membership, the following should be
            considered:
          </Text>
          <Text>
            To link your account to Basrah University for Oil & Gas Student
            Chapter, be sure to select{" "}
            <b>{"(Basrah University for Oil & Gas)"}</b> even if you are not
            a student at it
          </Text>
        </Flex>
        <Image
          src="/assets/university_membership.png"
          w="560px"
          objectFit="contain"
        />

        {/* Contact information */}
        <Text>
          If you had any problems during the registration process, please
          contact us via this{" "}
          <Link
            href="https://t.me/SPE_members_1_bot"
            textDecor="underline"
            color="#0D4C94"
          >
            Telegram bot
          </Link>
        </Text>
        <Text>
          If all of your registration attempts were not successful, you may
          register via this{" "}
          <Link
            href="https://forms.gle/SrSvf3ZRtZfn3rdw8"
            textDecor="underline"
            color="#0D4C94"
          >
            form
          </Link>{" "}
          and join this{" "}
          <Link
            href="https://t.me/+HbT8hUOGua5lMTMy"
            textDecor="underline"
            color="#0D4C94"
          >
            Telegram channel
          </Link>{" "}
          in order to respond to you later.
        </Text>
      </div>
    </ResponsiveWidth>
  );
};

// Exporting the Membership component as the default export
export default Membership;
