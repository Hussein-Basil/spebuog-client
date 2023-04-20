import React from 'react'
import { Divider, Flex, Heading, Icon, Text } from '@chakra-ui/react'
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io'

const FAQ = () => {

    const data = [
        {
            question: 'What is SPE?',
            answer: 'SPE is Society of Petroleum Engineers'
        },
        {
            question: 'Are certificates free?',
            answer: 'SPE is Society of Petroleum Engineers'
        },
        {
            question: 'How can I get the certificate?',
            answer: 'SPE is Society of Petroleum Engineers'
        },
    ]

    const Question = ({ item }) => {
        const [isOpen, setOpen] = React.useState(false)
        return (
            <Flex flexDir="column" p="1em" onClick={() => setOpen(!isOpen)} cursor="pointer">
                <Flex justify="space-between">
                    <Text fontSize="18px" fontWeight="medium">{item.question}</Text>
                    <Icon as={isOpen ? IoIosArrowDropup : IoIosArrowDropdown} w="25px" h="25px" />
                </Flex>
                {isOpen && <Text fontSize="16px" mt="1em">{item.answer}</Text>}
            </Flex>
        )
    }

    return (
        <Flex flexDir="column" w={{ base: "100%", lg: "960px" }} id="faq">
            <Heading fontSize="24px" fontWeight="medium" mb="1em">Frequently Asked Questions</Heading>
            <Flex flexDir="column" border="1px solid #c8c8c8" borderRadius="10px" overflow="hidden">
                {data.map((item, i) => (<React.Fragment key={i}>
                    <Question item={item} />
                    <Divider />
                </React.Fragment>
                ))}
            </Flex>

        </Flex>
    )
}

export default FAQ