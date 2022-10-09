import React from 'react'
import { Flex } from '@chakra-ui/react'

const ResponsiveWidth = ({ children }) => {
    return <Flex
        w={{
            sm: "90%",
            md: "768px",
            lg: "1024px",
            xl: "1440px",
            '2xl': "1500px"
        }}
        mx="auto"
        flexDir="column"
    >
        {children}
    </Flex>
}

export default ResponsiveWidth