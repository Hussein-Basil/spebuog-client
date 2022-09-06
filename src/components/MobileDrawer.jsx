import { useDisclosure, Flex, Button, VStack } from "@chakra-ui/react";
import Drawer from './Drawer';
import { IoMdMenu } from 'react-icons/io';
import { Link } from 'react-scroll';
import React from "react";

const MobileDrawer = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef()

    return (
        <Flex {...props}>
            <Button ref={btnRef} onClick={onOpen}>
                <IoMdMenu size="26px" />
            </Button>

            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <VStack alignItems="left">
                    <Link to="">
                        <Button variant="text">Home</Button>
                    </Link>
                    <Link to="">
                        <Button variant="text">Wish list</Button>
                    </Link>
                    <Link to="">
                        <Button variant="text">Cart</Button>
                    </Link>
                    <Button bg="blue.500" color="white">
                        Sign in
                    </Button>
                </VStack>
            </Drawer>
        </Flex>
    );
};

export default MobileDrawer