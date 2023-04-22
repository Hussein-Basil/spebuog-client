import React from 'react'
import { Flex, Heading, Text, Button, Link } from "@chakra-ui/react";

const Contact = () => {
    return (
        <Flex
          w="100vw"
          bg="#F6BB43"
          py="4em"
          align="center"
          justify="center"
          flexDir="column"
        >
          <Heading
            fontSize={{ base: "32px", lg: "42px" }}
            fontWeight="medium"
            textAlign="center"
          >
            Don't be hesitated to contact us
          </Heading>
          <Text
            mt="1em"
            fontSize={{ base: "16px", lg: "18px" }}
            fontWeight="medium"
          >
            Be sure to follow us for new events
          </Text>
          <Link href="/contact" _hover={{ textDecoration: "none" }}>
            <Button
              bg="#0d4c94"
              borderRadius="10px"
              px="2em"
              mt="1em"
              size="lg"
            >
              Contact
            </Button>
          </Link>
        </Flex>
    )
}

export default Contact