import React from "react";
import { Flex } from '@chakra-ui/react'
import Layout from "../layouts/Layout";

import {
  Hero,
  Features,
  Courses,
  Services,
  Stats,
  Mission
} from "../features/homepage";

const Home = () => {
  return (
    <Flex direction="column" w="100vw">
      <Hero />
      <Layout>
        <Features />
        <Courses />
        <Services />
        <Stats />
        <Mission />
      </Layout>
    </Flex>
  );
};

export default Home;
