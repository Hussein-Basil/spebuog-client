import React from "react";
import { Flex } from "@chakra-ui/react";

const ResponsiveWidth = ({ children, ...props }) => {
  return (
    <Flex
      w={{
        base: "90%",
        tablet: 768,
        desktop: 1440,
      }}
      mx="auto"
      flexDir="column"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default ResponsiveWidth;
