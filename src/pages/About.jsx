import React from "react";
import { Heading, Text, Flex, Image, Icon } from "@chakra-ui/react";

import { Team, Achievement } from "../features/about";

import vision from "../assets/home/vision.svg";
import { ReactComponent as mission } from "../assets/home/biometrics.svg";

import ResponsiveWidth from "../layouts/ResponsiveWidth";
import AboutBackground from "../assets/home/about.png";

const About = () => {
  document.title = "About Us - SPE BUOG";
  return (
    <Flex w="100%" flexDir="column">
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
        <Flex
          justify="space-between"
          gap="3em"
          w="fit-content"
          flexDir={{ base: "column", lg: "row" }}
        >
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
              Student Chapter with more than 1000 member, managed by students
              from Basrah University of Oil and Gas passionate about the oil and
              gas engineering, we aspire with support from our university to
              provide help and benefit to our students as well as anyone
              interested in the oil and gas industry.
            </Text>
          </Flex>
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
              Several seminars on our campus, Online workshops, training
              courses, software, webinars presented by specialists instructors
              in the oil and gas industry from over Iraq and the world, improve
              the Technical and not technical skills of students, supportive the
              role of women in the oil industry, Hold competitions، field trips
              to the oil and gas international Companies as Schlumberger,
              Halliburton, weatherford and other companies that work in oil and
              gas industry
            </Text>
          </Flex>
        </Flex>
        <Team />
        <Achievement />
      </ResponsiveWidth>
    </Flex>
  );
};

export default About;
