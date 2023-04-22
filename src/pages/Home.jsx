import React from "react";
import { Flex } from '@chakra-ui/react'
import Layout from "../layouts/Layout";

import {
  About,
  CompaniesProof,
  Features,
  Hero,
  Courses,
  Contact,
} from "../features/homepage";

const Home = () => {
  return (
    <Flex direction="column" w="100vw">
      <Hero />
      <Layout >
        <About />
        <Features />
        <CompaniesProof />
        <Courses />
        <Contact />
      </Layout>
    </Flex>
  );
};

export default Home;
