// Importing necessary dependencies and components from external libraries and files
import React from "react";
import { Flex } from "@chakra-ui/react";
import Layout from "../layouts/Layout";

// Importing custom components (page sections) from the 'features/homepage' directory
import {
  Hero,
  Features,
  Courses,
  Services,
  Stats,
  Mission,
} from "../features/homepage";

// Functional component for the home page
const Home = () => {
  return (
    // Using the Flex component from Chakra UI to create a column layout with full viewport width
    <Flex direction="column" w="100vw">
      <Hero />
      <Layout> 
        <Features />
        {/*
        commented because they're just empty placeholders for now
        once a system to fetch courses from sanity is made they will be 
        uncommented
        <Courses />
        */}
        <Services />
        <Stats />
        <Mission />
      </Layout>
    </Flex>
  );
};

export default Home;
