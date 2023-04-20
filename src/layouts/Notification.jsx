import React from 'react'
import { Flex, Text, Icon, CloseButton } from '@chakra-ui/react'
import { InfoIcon } from '@chakra-ui/icons'

const Notification = ({ variant, text, handleClose }) => {
    return (
        <Flex
            position="fixed"
            zIndex={1}
            bottom="10px"
            right="10px"
            p="20px"
            borderRadius="10px"
            align="center"
            justify="center"
            mb="10px"
            bg="accent.100"
            _hover={{ bg: "accent.200" }}
        >
            <Icon as={InfoIcon} mr="0.65em" color="primary.500" />
            <Text>{text}</Text>
            <CloseButton
                _hover={{ color: "red", bg: "none" }}
                _focus={{ bg: "none" }}
                onClick={handleClose}
            />
        </Flex>
    )
}

export default Notification