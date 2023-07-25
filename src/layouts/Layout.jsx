import React from "react";
import { Flex } from "@chakra-ui/react";

const Layout = ({ children, ...props }) => {
  return (
    <Flex
      // pt="5em"
      // pb="5em"
      py="0"
      flexDir="column"
      align="center"
      position="relative"
      gap="0"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default Layout;
