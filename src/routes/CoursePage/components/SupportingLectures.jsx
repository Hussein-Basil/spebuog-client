import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'

const SupportingLectures = () => {
    return (
        <Flex flexDir="column" gap="2em" id="supporting-lectures">
            <Heading fontSize="24px" fontWeight="medium">Supporting Lectures</Heading>
            <Flex gap="1em" overflow="auto">
                <iframe width="480" height="270" src="https://www.youtube.com/embed/DuGeFVB6h6U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                <iframe width="480" height="270" src="https://www.youtube.com/embed/uLiDfyr6ZGo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                <iframe width="480" height="270" src="https://www.youtube.com/embed/tUMVQ8-psYw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            </Flex>
        </Flex>
    )
}

export default SupportingLectures