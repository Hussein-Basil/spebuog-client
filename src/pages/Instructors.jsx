// Importing necessary dependencies and components from external libraries and files
import React, { useState } from "react";
import { useBreakpointValue, Flex, Divider } from "@chakra-ui/react";
import { SearchBar, ViewControl, View } from "../features/instructors";
import useGetInstructors from "../hooks/useGetInstructors";

// Functional component for rendering the speakers page
const Speakers = () => {
  // State variables for managing search, view, and filter options
  const [searchQuery, setSearchQuery] = useState("");
  const [gridView, setGridView] = useState(true);
  const [filterPosition, setFilterPosition] = useState("");
  const [filterCompany, setFilterCompany] = useState("");
  const [filteredSpeakers, setFilteredSpeakers] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc");

  // Using Chakra UI's 'useBreakpointValue' hook to set responsive grid view based on screen size
  const responsiveGridView = useBreakpointValue({ base: false, lg: true });

  // Using custom hook 'useGetInstructors' to fetch the list of speakers based on search, filter, and sort options
  const { speakers, isLoading } = useGetInstructors({
    searchQuery,
    filterPosition,
    sortOrder,
  });

  // Setting the document title for the speakers page
  document.title = "Instructors - SPE BUOG";

  // Rendering the speakers page
  return (
    <Flex
      flexDir="column"
      w={{
        base: "90%",
        md: "768px",
        lg: "1114px",
        xl: "1440px",
        "2xl": "1500px",
      }}
      mt={{ base: "50px", xl: "100px" }}
      mb={{ base: "25px", lg: "50px" }}
      pb="2.5em"
      mx="auto"
    >
      {/* Rendering the search bar component */}
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        speakers={speakers}
        filterPosition={filterPosition}
        filterCompany={filterCompany}
        setFilteredSpeakers={setFilteredSpeakers}
        setFilterPosition={setFilterPosition}
        setFilterCompany={setFilterCompany}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      {/* Rendering the view control component */}
      <ViewControl
        setSearchQuery={setSearchQuery}
        setFilterPosition={setFilterPosition}
        setFilterCompany={setFilterCompany}
        gridView={gridView}
        setGridView={setGridView}
      />
      {/* Divider for separating the components */}
      <Divider mt="1em" mb="2em" borderColor="gray" />
      {/* Rendering the view component */}
      <View
        gridView={gridView}
        responsiveGridView={responsiveGridView}
        loading={isLoading}
        filteredSpeakers={filteredSpeakers}
      />
    </Flex>
  );
};

export default Speakers;
