// Importing necessary dependencies and components from external libraries
import React, { useState, useRef } from "react";
import { Flex, Heading, Text, CloseButton } from "@chakra-ui/react";

// Importing custom components from other files
import TagSelector from "../features/courses/components/TagSelector";
import Search from "../features/courses/components/Search";
import CoursesPreview from "../features/courses/components/CoursesPreview";
import FilterResults from "../features/courses/components/FilterResults";
import { useUser } from "../contexts/UserContext";
import ResponsiveWidth from "../layouts/ResponsiveWidth";

// Functional component for rendering the Courses page
const Courses = () => {
  // Using useRef to create a reference to the sticky element in the UI
  const stickyRef = useRef(null);

  // Using the useUser hook to access the user's language preference
  const { language } = useUser();

  // Using useState to manage the state for the search query (search term and selected tag)
  const [query, setQuery] = useState({
    search: "",
    tag: {},
  });

  // Setting the document title for the page
  document.title = "Courses - SPE BUOG";

  // Rendering the main content of the Courses page
  return (
    <Flex
      py={{ base: "1em", lg: "3em" }}
      flexDir="column"
      gap="0.5em"
      w="100vw"
    >
      {/* ResponsiveWidth component to manage the width of the page content */}
      <ResponsiveWidth>
        {/* Heading for the Courses page */}
        <Heading fontSize="42px" letterSpacing={-1} fontWeight="semibold">
          {language.COURSES.HEADLINE}
        </Heading>

        {/* Subheading text for the Courses page */}
        <Text fontSize="16px" mt="0.25em" color="#5f6368" maxW="600px" minW="50%">
          {language.COURSES.SUBHEADLINE}
        </Text>
      </ResponsiveWidth>

      {/* Flex container to handle the search and filter section */}
      <Flex h={{ base: "134px", lg: query.tag?.value ? "134px" : "200px" }}>
        <Flex
          bg="white"
          flexDir="column"
          ref={stickyRef}
          top="-1px"
          zIndex={1}
          pb="1em"
          w="99vw"
        >
          {/* ResponsiveWidth component for managing the width of this section */}
          <ResponsiveWidth>
            {/* Rendering the search input and filter selection */}
            <Search query={query} setQuery={setQuery} language={language} />

            {/* Conditional rendering based on whether a tag has been selected */}
            {query.tag?.value ? (
              // If a tag is selected, display the selected tag and a close button
              <Flex
                bg="#dadce0"
                borderRadius="20px"
                width="fit-content"
                align="center"
                py="0px"
                px="12px"
                mt="0.5em"
                zIndex={10}
              >
                <Text lineHeight="20px" fontSize="14px">
                  {query.tag.name}
                </Text>
                <CloseButton onClick={() => setQuery({ ...query, tag: {} })} />
              </Flex>
            ) : (
              // If no tag is selected, display the TagSelector component
              <TagSelector setQuery={setQuery} language={language} />
            )}
          </ResponsiveWidth>
        </Flex>
      </Flex>

      {/* Another ResponsiveWidth component to manage the width of the page content */}
      <ResponsiveWidth
        w={{
          base: "100vw",
          md: "768px",
          lg: "1114px",
          xl: "1440px",
          "2xl": "1400px",
        }}
      >
        {/* Conditional rendering based on whether a tag or search term is selected */}
        {query.tag?.value || query.search ? (
          // If a tag or search term is selected, display the FilterResults component
          <FilterResults query={query} />
        ) : (
          // If no tag or search term is selected, display the CoursesPreview component
          <CoursesPreview />
        )}
      </ResponsiveWidth>
    </Flex>
  );
};

// Exporting the Courses component as the default export
export default Courses;
