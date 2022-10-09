import React from 'react'
import { Flex } from '@chakra-ui/react'

const Layout = ({ children, ...props }) => {
    return (
        <Flex
            pt="5em"
            flexDir="column"
            align="center"
            pb="5em"
            {...props}
        >
            {children}
        </Flex>
    )
}

export default Layout