import Drawer from "./Drawer";
import {
  useDisclosure,
  Icon,
  Flex,
  Button,
  VStack,
  Image,
} from "@chakra-ui/react";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import React from "react";

import Logo from "../assets/shared/spe-logo-2020.png";
import { motion } from "framer-motion";

const MobileDrawer = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex {...props}>
      <Icon as={IoMdMenu} w="36px" h="36px" ref={btnRef} onClick={onOpen} />
      <motion.nav
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, x: 0 },
          closed: { opacity: 0, x: "-100%" },
        }}
      >
        <Drawer isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef}>
          <Flex flexDir="column" gap="3em">
            <Image src={Logo} h="100px" w="auto" objectFit="contain" mt="5em" />
            <VStack alignItems="center">
              <Link to="/">
                <Button variant="text" onClick={onClose}>
                  Home
                </Button>
              </Link>
              <Link to="/courses">
                <Button variant="text" onClick={onClose}>
                  Courses
                </Button>
              </Link>
              <Link to="/instructors">
                <Button variant="text" onClick={onClose}>
                  Instructors
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="text" onClick={onClose}>
                  About
                </Button>
              </Link>
              <Link to="/certificate">
                <Button variant="text" onClick={onClose}>
                  Verify Certificate
                </Button>
              </Link>
            </VStack>
          </Flex>
        </Drawer>
      </motion.nav>
    </Flex>
  );
};

export default MobileDrawer;
