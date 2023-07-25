// Importing necessary dependencies and components from external libraries and files
import React, { useEffect, useState } from "react";
import {
  Icon,
  Flex,
  Heading,
  Text,
  Image,
  Avatar,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { GiAchievement } from "react-icons/gi";
import { PortableText } from "@portabletext/react";

// Importing necessary components and utilities for the Swiper carousel
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css";

// Importing the Course component and other custom hooks and contexts
import Course from "../features/courses/components/Course";
import { useUser } from "../contexts/UserContext";
import NotFound from "./NotFound";
import useGetInstructorProfile from "../hooks/useGetInstructorProfile";

// Functional component for rendering the speaker profile page
const SpeakerProfile = () => {
  // Getting URL parameters using React Router
  const params = useParams();

  // Using custom hook from 'UserContext' to get the URL for the speaker's image
  const { urlFor } = useUser();

  // Using Chakra UI's 'useBreakpointValue' hook to set the number of slides per view based on screen size
  const responsiveSlides = useBreakpointValue({ base: 1, md: 2, lg: 3, xl: 4 });

  // Using Chakra UI's 'useBreakpointValue' hook to set the padding-bottom for the Swiper container based on screen size
  const paddingBottom = useBreakpointValue({ base: "5em", xl: "" });

  // Using custom hook 'useGetInstructorProfile' to fetch the speaker's profile based on the 'id' parameter
  const { speaker, isLoading } = useGetInstructorProfile({ id: params.id });

  // Setting the document title to the speaker's name when the speaker data is loaded
  useEffect(() => {
    if (speaker?.name) {
      document.title = `${speaker.name} - SPE BUOG`;
    }
  }, [speaker?.name]);

  // Creating an array of placeholder slides when loading the courses
  const nullSlides = [...Array(4)].map((_, key) => (
    <SwiperSlide style={{ display: "flex", gap: "1em" }}>
      <Course loading={true} />
    </SwiperSlide>
  ));

  // If the speaker data is not yet loaded or not found, render the 'NotFound' component
  if (!isLoading && !speaker?.name) {
    return <NotFound />;
  }

  // Rendering the speaker profile page
  // JSX code for rendering the speaker profile page
  return (
    // Main container using Flex with column direction and center alignment
    <Flex flexDir="column" align="center" gap="1em" mb="5em" w="100vw">
      {/* Section for displaying speaker details */}
      <Flex
        bg="#0D4C94"
        pt={{ base: "3em", lg: "7em" }}
        pb={{ base: "3em", lg: 0 }}
        width="100%"
        justify="center"
        align="end"
        mb="60px"
      >
        {/* Inner container with responsive width */}
        <Flex
          w={{
            base: "90%",
            md: "768px",
            lg: "1024px",
            xl: "1440px",
            "2xl": "1500px",
          }}
          justify="space-between"
          flexDir={{ base: "column", lg: "row" }}
          align={{ base: "center", lg: "unset" }}
        >
          {/* Speaker's image and details */}
          <Flex
            gap="2.5em"
            flexDir={{ base: "column", lg: "row" }}
            align={{ base: "center", lg: "unset" }}
            textAlign={{ base: "center", lg: "unset" }}
          >
            {/* Displaying the speaker's image as an Avatar */}
            <Image
              src={speaker?.image ? urlFor(speaker.image).toString() : ""}
              w={{ base: "150px", lg: "200px" }}
              h={{ base: "150px", lg: "200px" }}
              mb="-45px"
              as={Avatar}
            />
            {/* Speaker's name, position, and organization */}
            <Flex flexDir="column" color="white" gap="1em" mt="15px">
              <Heading fontSize={{ base: "24px", lg: "32px" }}>
                {speaker?.name}
              </Heading>
              <Flex flexDir="column">
                <Text fontSize="18px" fontWeight="light">
                  {speaker?.position}
                </Text>
                <Text fontSize="18px">{speaker?.organization}</Text>
              </Flex>
            </Flex>
          </Flex>

          {/* Section for displaying completed lectures */}
          <Flex flexDir="row" gap="1em" align="center">
            {/* Icon for "Achievement" */}
            <Icon as={GiAchievement} w="56px" h="56px" color="#e0a800" />
            {/* Displaying the number of completed lectures */}
            <Flex gap="1em" align="center" color="white">
              <Text fontSize="64px" fontWeight="semibold">
                {speaker?.events?.length}
              </Text>
              <Text>
                Completed
                <br />
                Lectures
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      {/* Section for displaying speaker's experience */}
      <Flex
        w={{
          base: "90%",
          md: "768px",
          lg: "1024px",
          xl: "1440px",
          "2xl": "1500px",
        }}
        flexDir="column"
        gap="3em"
      >
        {/* Checking if the speaker has a description and displaying it */}
        {speaker?.description && (
          <Flex flexDir="column" gap="1em" maxW="800px">
            {/* Heading for the experience section */}
            <Heading fontSize="24px" fontWeight="medium">
              Experience
            </Heading>
            {/* Displaying the speaker's description using PortableText */}
            <PortableText value={speaker.description} />
          </Flex>
        )}

        {/* Section for displaying speaker's courses */}
        <Flex flexDir="column" gap="1em">
          {/* Heading for the courses section */}
          <Heading fontSize="24px" fontWeight="medium">
            Courses
          </Heading>
          {/* Flex container for the Swiper carousel */}
          <Flex flexDir="row" gap="3em" width="100%" overflow="auto">
            {/* Swiper carousel to display speaker's courses */}
            <Swiper
              modules={[Autoplay, Pagination, EffectFade]}
              effect
              speed={800}
              style={{
                width: "100%",
                height: "530px",
                paddingBottom: paddingBottom,
                gap: "1em",
              }}
              slidesPerView={responsiveSlides}
              slidesPerGroup={responsiveSlides}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
            >
              {/* Conditional rendering based on loading state and speaker's events */}
              {isLoading
                ? nullSlides // Show loading placeholders if data is still loading
                : // Otherwise, map through the speaker's events and render each course
                  speaker?.events?.map((group, idx) => (
                    <SwiperSlide
                      key={idx}
                      style={{ display: "flex", gap: "1em" }}
                    >
                      {/* Render the Course component with course details */}
                      <Course course={group} />
                    </SwiperSlide>
                  )) || <Text>No results found</Text>}
            </Swiper>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SpeakerProfile;
