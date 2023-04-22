import React from "react";

import {
  Flex,
  GridItem,
  Link,
  Grid,
  Hide,
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
              الرئيسية
            </Link>
            <Link onClick={handleSelected} href="#">
              الدورات
            </Link>
            <Link onClick={handleSelected} href="#">
              المحاضرين
            </Link>
            <Link onClick={handleSelected} href="#">
              العضوية
            </Link>
            <Link onClick={handleSelected} href="#">
              تعرف علينا
            </Link>
          </GridItem>
          <GridItem
            as={Flex}
            area="secondary"
            justify="start"
            align="center"
            color="white"
            className="secondary-links"
          >
            <Link href="#">هندسة المكامن</Link>
            <Link href="#">هندسة الحفر</Link>
            <Link href="#">هندسة الانتاج</Link>
            <Link href="#">السلامة</Link>
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
          <Link onClick={handleSelected}>تواصل معنا</Link>
          <Link className="profile-link" onClick={handleSelected}></Link>
          <Link className="search-link" onClick={handleSelected}></Link>
        </GridItem>
      </Grid>
    </nav>
  );
};

export default NavbarSLB;
