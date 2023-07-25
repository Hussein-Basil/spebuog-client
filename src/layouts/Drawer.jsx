// Importing necessary dependencies and components from Chakra UI
import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Text,
} from "@chakra-ui/react";

// Defining the DrawerExample component with various props
const DrawerExample = ({
  p = 15,
  placement = "right",
  width,
  isOpen,
  onClose,
  children,
  btnRef,
  title = "Menu",
  footer,
}) => {
  return (
    // A Flex component used to set the width of the drawer
    <Flex w={width}>
      {/* The Chakra UI Drawer component */}
      <Drawer
        isOpen={isOpen} // Boolean to control whether the drawer is open or closed
        placement={placement} // The position of the drawer (e.g., "right", "left", "top", "bottom")
        onClose={onClose} // Function to handle the close event of the drawer
        finalFocusRef={btnRef} // Ref for the element that should receive focus when the drawer closes
      >
        {/* A semi-transparent overlay that covers the rest of the page when the drawer is open */}
        <DrawerOverlay />

        {/* The main content of the drawer */}
        <DrawerContent alignItems="center">
          {" "}
          {/* Align the content center vertically */}
          {/* A button to close the drawer */}
          <DrawerCloseButton alignSelf="end" mx={p} my={p} />{" "}
          {/* Align the button to the end (right) */}
          <DrawerHeader my={p}>
            <Text as="p"> {title} </Text>
          </DrawerHeader>
          <DrawerBody>{children}</DrawerBody>
          <DrawerFooter>{footer}</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

// Exporting the DrawerExample component as the default export
export default DrawerExample;
