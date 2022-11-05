import React, { useState, useEffect } from 'react'
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { useSwipeable } from "react-swipeable"

export const CarouselItem = ({ width, title, description, image }) => {
    return (
        <Box
            display="inline-flex"
            height={{ base: "300px", lg: "600px" }}
            maxHeight={{ base: "300px", lg: "600px" }}
            bg="light.500"
            style={{ width: width }}
            flexDir="column"
            position="relative"
        >
            <Flex
                flexDir="column"
                gap="35px"
                zIndex={10}
                position="absolute"
                top={{ sm: "10%", md: "20%" }}
                left={{ sm: "30px", md: "85px" }}
                color="dark.500"
            >
                <Heading
                    fontSize={{ base: "28px", lg: "56px" }}
                    fontWeight="semibold"
                    _after={{
                        content: "''",
                        display: 'block',
                        height: '7px',
                        width: {
                            base: '113px',
                            sm: '85px',
                        },
                        bg: 'primary.500',
                        marginTop: { sm: '8px', md: '16px' },
                    }}
                >
                    {title}
                </Heading>
                <Text
                    as="span"
                    fontSize={{ sm: "16px", md: "24px" }}
                    width={{ sm: "85%", md: "724px" }}
                    wordBreak='break-word'
                    height={[`${description.length > 30 ? "60px" : "40px"}`, "40px"]}
                    style={{
                        whiteSpace: "normal",
                        wordWrap: "break-word",
                    }}
                >
                    {description}
                </Text>
                <Button
                    variant="primary"
                    mt="28px"
                    py="16px"
                    w={{ sm: "120px", md: "163px" }}
                    fontSize={{ sm: "16px", md: "20px" }}
                >
                    View Now
                </Button>
            </Flex>
            <Image
                src={image}
                display={{ base: "none", lg: "flex" }}
                objectFit="cover"
                position={{ sm: "unset", lg: "absolute" }}
                top="40px"
                right="190px"
                h={{ sm: "70%", md: "496px" }}
                w={{ sm: "70%", md: "413px" }}
            />
        </Box>
    )
}

export const Carousel = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [paused, setPaused] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateIndex(activeIndex + 1)
            }
        }, 5000)

        return () => {
            if (interval) clearInterval(interval)
        }
    })


    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            setActiveIndex(items.length - 1)
        } else if (newIndex >= items.length) {
            setActiveIndex(0)
        } else {
            setActiveIndex(newIndex)
        }
    }

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1),
    })

    return (
        <Box
            position="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            {...handlers}
        >
            <Box overflow="hidden">
                <Box
                    transform={`translateX(-${activeIndex * 100}%)`}
                    transition="transform 0.3s"
                    whiteSpace="nowrap"
                >
                    {items.map((item, index) => {
                        return (
                            <CarouselItem
                                key={index}
                                title={item.title}
                                description={item.description}
                                image={item.image}
                                width="100%"
                            />
                        )
                    })}
                </Box>
            </Box>
            <Button
                m={5}
                position="absolute"
                top="50%"
                transform="translateY(-100%)"
                left="-85px"
                width="auto"
                p="16px"
                color="primary.500"
                fontWeight="bold"
                fontSize="18px"
                transition="0.6s ease"
                borderRadius="3px 0 0 3px"
                userSelect="none"
                bg='none'
                _active={{ bg: 'none' }}
                _hover={{ bg: 'none' }}
                onClick={() => updateIndex(activeIndex - 1)}
            >
                &#10094;
            </Button>
            <Button
                m={5}
                position="absolute"
                top="50%"
                transform="translateY(-100%)"
                right="-85px"
                bg='none'
                _active={{ bg: 'none' }}
                _hover={{ bg: 'none' }}
                width="auto"
                p="16px"
                color="primary.500"
                fontWeight="bold"
                fontSize="18px"
                transition="0.6s ease"
                borderRadius="0 3px 3px 0"
                userSelect="none"
                onClick={() => updateIndex(activeIndex + 1)}
            >
                &#10095;
            </Button>
            <Flex
                justifyContent="center"
                position="absolute"
                bottom={{ sm: "-6px", md: "13px" }}
                left="50%"
                transform="translateX(-50%)"
                mb={2}
                gap="5px"
            >
                {items.map((item, index) => {
                    return (
                        <Button
                            key={index}
                            onClick={() => {
                                updateIndex(index)
                            }}
                            bg='none'
                            _active={{ bg: 'none' }}
                            _hover={{ bg: 'none' }}
                            color={index === activeIndex ? 'white' : 'unset'}
                            p="0"
                            minW="12px"
                        >
                            <Box
                                h="12px"
                                w="12px"
                                bg={index === activeIndex ? "primary.500" : "primary.100"}
                                borderRadius="50%"
                                display="inline-block"
                                transition="background-color 0.3s ease"
                            />
                        </Button>
                    )
                })}
            </Flex>
        </Box>
    )
}