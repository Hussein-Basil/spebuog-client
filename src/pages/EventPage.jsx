// Importing necessary dependencies and components from external libraries
import React, { useEffect } from "react";
import { Flex } from "@chakra-ui/react";

// Importing custom components from other files
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

// Importing custom hook to fetch event data
import useGetEvent from "../hooks/useGetEvent";

// Functional component for rendering the Event Page
const EventPage = () => {
  // Using the custom hook to fetch event data
  const { event, isLoading } = useGetEvent();

  // Updating the document title with the event title when available
  useEffect(() => {
    if (event?.title) {
      document.title = `${event.title} - SPE BUOG`;
    }
  }, [event?.title]);

  // Handling the case when the event data is not found
  if (!isLoading && !event?.title) {
    return <NotFound />;
  }

  // Rendering the main content of the Event Page
  return (
    <Flex direction="column" w="100vw" mb={{ base: "0", xl: "3em" }}>
      {/* Rendering the Header component with event data */}
      <Header event={event} loading={isLoading} />
      
      {/* Rendering the Navbar component with event data */}
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
          {/* Rendering the About component with event description, target, and agenda */}
          <About
            description={event?.description}
            target={event?.target}
            agenda={event?.agenda}
            loading={isLoading}
          />

          {/* Rendering the Speakers component with event instructors */}
          <Speakers instructors={event?.instructors} loading={isLoading} />

          {/* Conditional rendering based on the type of event */}
          {["course_lecture", "webinar"].includes(event?.event_type) ? (
            // If it's a course lecture or webinar, render the LectureVideo component
            <LectureVideo
              video={event?.video}
              image={event?.image}
              loading={isLoading}
            />
          ) : event?.event_type === "course" ? (
            // If it's a course, render the CourseLectures component
            <CourseLectures lectures={event?.children} loading={isLoading} />
          ) : (
            // If it's an internship event, render the InternshipCourses component
            <InternshipCourses courses={event?.children} loading={isLoading} />
          )}

          {/* Rendering the RelatedEvents component with related event data */}
          <RelatedEvents
            type={event?.event_type}
            tags={event?.tags}
            eventID={event?._id}
            categoryID={event?.category?._ref}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

// Exporting the EventPage component as the default export
export default EventPage;
