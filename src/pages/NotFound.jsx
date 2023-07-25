// Importing necessary dependencies and components from external libraries
import React from "react";
import { Flex, Text } from "@chakra-ui/react";

// Functional component for rendering the "Not Found" page
const NotFound = () => {
  // Rendering a flex container that vertically and horizontally centers its content,
  // occupying 50% of the viewport height (h="50vh")
  return (
    <Flex justify="center" align="center" h="50vh">
      {/* Displaying a text message in a larger font size (fontSize="28px") */}
      <Text fontSize="28px">Page Not Found {":("}</Text>
    </Flex>
  );
};

// Exporting the NotFound component as the default export
export default NotFound;
