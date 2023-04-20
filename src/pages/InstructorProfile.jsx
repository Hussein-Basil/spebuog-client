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
import { GiAchievement } from "react-icons/gi";
import { PortableText } from "@portabletext/react";

import { useParams } from "react-router-dom";
import Course from "../features/courses/components/Course";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css";
import { useUser } from "../contexts/UserContext";
import NotFound from "./NotFound";
import useGetInstructorProfile from "../hooks/useGetInstructorProfile";

const SpeakerProfile = () => {
  const params = useParams();
  const { urlFor } = useUser();
  const responsiveSlides = useBreakpointValue({ base: 1, md: 2, lg: 3, xl: 4 });
  const paddingBottom = useBreakpointValue({ base: "5em", xl: "" });
  const { speaker, isLoading } = useGetInstructorProfile({ id: params.id });

  useEffect(() => {
    if (speaker?.name) {
      document.title = `${speaker.name} - SPE BUOG`;
    }
  }, [speaker?.name]);

  const nullSlides = [...Array(4)].map((_, key) => (
    <SwiperSlide style={{ display: "flex", gap: "1em" }}>
      <Course loading={true} />
    </SwiperSlide>
  ));

  if (!isLoading && !speaker?.name) {
    return <NotFound />;
  }

  return (
    <Flex flexDir="column" align="center" gap="1em" mb="5em" w="100vw">
      <Flex
        bg="#0D4C94"
        pt={{ base: "3em", lg: "7em" }}
        pb={{ base: "3em", lg: 0 }}
        width="100%"
        justify="center"
        align="end"
        mb="60px"
      >
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
          <Flex
            gap="2.5em"
            flexDir={{ base: "column", lg: "row" }}
            align={{ base: "center", lg: "unset" }}
            textAlign={{ base: "center", lg: "unset" }}
          >
            <Image
              src={speaker?.image ? urlFor(speaker.image).toString() : ""}
              w={{ base: "150px", lg: "200px" }}
              h={{ base: "150px", lg: "200px" }}
              mb="-45px"
              as={Avatar}
            />
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

          <Flex flexDir="row" gap="1em" align="center">
            <Icon as={GiAchievement} w="56px" h="56px" color="#e0a800" />
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
        {speaker?.description && (
          <Flex flexDir="column" gap="1em" maxW="800px">
            <Heading fontSize="24px" fontWeight="medium">
              Experience
            </Heading>
            <PortableText value={speaker.description} />
          </Flex>
        )}
        <Flex flexDir="column" gap="1em">
          <Heading fontSize="24px" fontWeight="medium">
            Courses
          </Heading>
          <Flex flexDir="row" gap="3em" width="100%" overflow="auto">
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
              {isLoading
                ? nullSlides
                : speaker?.events?.map((group, idx) => (
                    <SwiperSlide
                      key={idx}
                      style={{ display: "flex", gap: "1em" }}
                    >
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
