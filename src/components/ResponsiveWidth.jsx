import React from 'react'
import { Flex } from '@chakra-ui/react'

const ResponsiveWidth = ({ children, ...props }) => {
    return <Flex
        w={{
            base: "90%",
            md: "768px",
            lg: "1114px",
            xl: "1440px",
            '2xl': "1400px"
        }}
        mx="auto"
        flexDir="column"
        {...props}
    >
        {children}
    </Flex>
}

export default ResponsiveWidth