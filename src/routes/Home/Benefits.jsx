import React from 'react'
import { Flex, HStack, Image, Text } from '@chakra-ui/react'

const Benefits = () => {
    return (
        <Flex flexDir="column" align="center" gap="3em" my="2em">
            <HStack gap="2em" fontWeight="semibold">
                <Flex flexDir="column" gap="1em" align="center">
                    {/* <Image src={book}  bg="none" objectFit="contain" /> */}
                    <Image
                        loading="lazy"
                        src="https://www.deeplearning.ai/wp-content/uploads/2020/12/icon-education.svg"
                        alt=""
                        srcset="https://www.deeplearning.ai/wp-content/uploads//2020/12/icon-education.svg 150w, https://www.deeplearning.ai/wp-content/uploads//2020/12/icon-education.svg 300w, https://www.deeplearning.ai/wp-content/uploads//2020/12/icon-education.svg 1024w, https://www.deeplearning.ai/wp-content/uploads//2020/12/icon-education.svg 1536w, https://www.deeplearning.ai/wp-content/uploads//2020/12/icon-education.svg 2048w, https://www.deeplearning.ai/wp-content/uploads//2020/12/icon-education.svg 156w"
                        maxWidth="220px"
                        width="220px"
                        height="219px"
                    />
                    <Flex justify="center" textAlign="center" border="1px" bo3rderColor="gray.200" p="1em" mt="-60px" zIndex={-1} w="300px">
                        <Text>Gain <strong>world-class education</strong><br />to expand your technical knowledge</Text>
                    </Flex>
                </Flex>
                <Flex flexDir="column" gap="1em" align="center">
                    <Image
                        loading="lazy"
                        src="https://www.deeplearning.ai/wp-content/uploads/2020/12/icon-community.svg"
                        alt=""
                        srcset="https://www.deeplearning.ai/wp-content/uploads//2020/12/icon-community.svg 150w, https://www.deeplearning.ai/wp-content/uploads//2020/12/icon-community.svg 300w, https://www.deeplearning.ai/wp-content/uploads//2020/12/icon-community.svg 1024w, https://www.deeplearning.ai/wp-content/uploads//2020/12/icon-community.svg 1536w, https://www.deeplearning.ai/wp-content/uploads//2020/12/icon-community.svg 2048w, https://www.deeplearning.ai/wp-content/uploads//2020/12/icon-community.svg 220w"
                        sizes="(max-width: 220px) 100vw, 220px"
                        maxWidth="220px"
                        width="220px"
                        height="219px"
                    />
                    <Flex justify="center" textAlign="center" border="1px" borderColor="gray.200" p="1em" mt="-60px" zIndex={-1} w="300px">
                        <Text>Learn from a<br /><strong>collaborative community</strong><br />of peers and mentors</Text>
                    </Flex>
                </Flex>
            </HStack>
        </Flex>
    )
}

export default Benefits