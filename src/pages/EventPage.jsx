import React, { useEffect } from "react";
import { Flex } from "@chakra-ui/react";

import {
  Navbar,
  Speakers,
  LectureVideo,
  CourseLectures,
  Header,
  About,
  InternshipCourses,
  RelatedEvents,
} from "../features/event";
import NotFound from "./NotFound";

import useGetEvent from "../hooks/useGetEvent";

const EventPage = () => {
  const { event, isLoading } = useGetEvent();

  useEffect(() => {
    if (event?.title) {
      document.title = `${event.title} - SPE BUOG`;
    }
  }, [event?.title]);

  // if (!isLoading && !data?.title) {
  //     return <NotFound />
  // }

  if (!isLoading && !event?.title) {
    return <NotFound />;
  }

  return (
    <Flex direction="column" w="100vw" mb={{ base: "0", xl: "3em" }}>
      <Header event={event} loading={isLoading} />
      <Navbar event={event} loading={isLoading} />
      <Flex direction="column" align="center">
        <Flex
          w={{
            base: "90%",
            lg: "1024px",
            xl: "1440px",
            "2xl": "1500px",
          }}
          flexDir="column"
          gap="1em"
        >
          <About
            description={event?.description}
            target={event?.target}
            agenda={event?.agenda}
            loading={isLoading}
          />
          <Speakers instructors={event?.instructors} loading={isLoading} />
          {["course_lecture", "webinar"].includes(event?.event_type) ? (
            <LectureVideo
              video={event?.video}
              image={event?.image}
              loading={isLoading}
            />
          ) : event?.event_type === "course" ? (
            <CourseLectures lectures={event?.children} loading={isLoading} />
          ) : (
            <InternshipCourses courses={event?.children} loading={isLoading} />
          )}
          <RelatedEvents
            type={event?.event_type}
            tags={event?.tags}
            eventID={event?._id}
            categoryID={event?.category?._ref}
          />
          {/* <Files /> */}
          {/* <FAQ /> */}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default EventPage;
