import React, { useState } from "react";

import {
  Flex,
  GridItem,
  Link,
  Grid,
  Hide,
  Image,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
  Box,
} from "@chakra-ui/react";

import RightArrowIcon from "../assets/arrow-right-blue.svg";
import CloseIcon from "../assets/close.svg";

import "./Navbar.css";

const NavbarSLB = () => {
  const handleSelected = (e) => {
    for (let item of document.getElementsByClassName("selected-link")) {
      item.classList.remove("selected-link");
    }
    e.target.classList.toggle("selected-link");
  };

  return (
    <nav>
      <Grid
        width="100%"
        gridTemplateColumns={{ base: "120px 1fr", lg: "120px 1fr 1fr" }}
        gridTemplateRows={{ base: "1fr", lg: "1fr 1fr" }}
        templateAreas={{
          base: `"image control"`,
          lg: `"image main control"
                                "image secondary secondary"`,
        }}
        position="relative"
      >
        <GridItem
          area="image"
          as={Flex}
          maxH="100%"
          objectFit="contain"
          maxW="120px"
          justify="center"
          p="1em"
          className="logo-container"
        ></GridItem>
        <Hide below="lg">
          <GridItem
            as={Flex}
            area="main"
            justify="start"
            align="center"
            color="white"
            className="primary-links"
          >
            <Link className="selected-link" onClick={handleSelected} href="#">
              Home
            </Link>
            <Link onClick={handleSelected} href="#">
              Careers
            </Link>
            <Link onClick={handleSelected} href="#">
              Investors
            </Link>
            <Link onClick={handleSelected} href="#">
              Partners
            </Link>
          </GridItem>
        </Hide>

        <GridItem
          as={Flex}
          area="control"
          justify="end"
          align="center"
          color="white"
          className="control-links"
        >
          <Link onClick={handleSelected}>Contact</Link>
          <Link className="profile-link" onClick={handleSelected}></Link>
          <Link className="search-link" onClick={handleSelected}></Link>
        </GridItem>
      </Grid>
    </nav>
  );
};

export default NavbarSLB;
