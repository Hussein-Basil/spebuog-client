import Drawer from './Drawer';
import { useDisclosure, Icon, Flex, Button, VStack, Image } from "@chakra-ui/react";
import { IoMdMenu } from 'react-icons/io';
import { Link } from 'react-router-dom';
import React from "react";

import Logo from '../assets/spe-logo-2020.png'

const MobileDrawer = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef()

    return (
        <Flex {...props}>
            <Icon as={IoMdMenu} w="36px" h="36px" ref={btnRef} onClick={onOpen} />

            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <Flex flexDir="column" gap="3em">
                    <Image src={Logo} h="100px" w="auto" objectFit="contain" mt="5em" />
                    <VStack alignItems="center">
                        <Link to="/">
                            <Button variant="text" onClick={onClose}>Home</Button>
                        </Link>
                        <Link to="/courses">
                            <Button variant="text" onClick={onClose}>Courses</Button>
                        </Link>
                        <Link to="/speakers">
                            <Button variant="text" onClick={onClose}>Instructors</Button>
                        </Link>
                        <Link to="/about">
                            <Button variant="text" onClick={onClose}>About</Button>
                        </Link>
                    </VStack>
                </Flex>
            </Drawer>
        </Flex>
    );
};

export default MobileDrawer