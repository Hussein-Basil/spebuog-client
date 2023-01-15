
import React, { useState, useEffect } from 'react'
import ResponsiveWidth from '../../components/ResponsiveWidth'
import {
    Flex, Text, Heading, Input,
    Button,
    InputGroup, InputRightElement
} from '@chakra-ui/react'
import { useUser } from '../../auth/UserContext'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'

const Certificate = () => {
    useEffect(() => {
        document.title = 'Verify Certificate - SPE BUOG'
    }, [])
    const [certificateID, setCertificateID] = useState('')
    const [certificate, setCertificate] = useState(null)
    const [buttonText, setButtonText] = useState('Verify')
    const [displayMessage, setDisplayMessage] = useState(null)
    const { client } = useUser()

    const handleClick = (certificateID) => {
        if (certificateID && buttonText === 'Verify') {
            setButtonText('Wait..')
            client.fetch(`
                *[_type == 'certificate' && lower(certificate_id) == lower('${certificateID}')][0]
            `)
            .then(result => {
                if (result) {
                    setDisplayMessage({
                        message: 'This certificate is issued by Basra University for Oil & Gas SPE Student Chapter.',
                        valid: true
                    })
                } else {
                    setDisplayMessage({
                        message: 'This certificate is not issued by our Student Chapter.',
                        valid: false
                    })
                }
                setCertificate(result)
                setButtonText('Verify')
            })
        }
    }

    return (
        <ResponsiveWidth gap="1em" my="3em">
            <Flex flexDir="column" gap="1em" maxW={{ base: "90vw", lg: "770px"}}>
                <Heading>Verify Certificate</Heading>
                <Text mt="-0.5em">Entering the ID printed on the certificate will allow you to verify its validity if it was issued by our student chapter.</Text>
                <InputGroup mt="1em" p="0" display="flex" justify="space-between" position="relative">
                    <Input  
                        placeholder="Enter your certificate ID" 
                        bg="#f1f1f1" 
                        border="1px solid white" value={certificateID} 
                        onChange={e => setCertificateID(e.target.value)} 
                    />
                    <InputRightElement   >
                        <Button 
                            minW="100px" 
                            style={{ height: '38.5px', marginTop: '-2px'}} 
                            position="absolute" 
                            right="0" 
                            px="1em" 
                            color="black" 
                            borderLeftRadius="0" 
                            type="submit"
                            onClick={() => handleClick(certificateID)}
                            onKey={() => handleClick(certificateID)}
                        >{buttonText}</Button>
                    </InputRightElement>
                </InputGroup>
                {displayMessage && (
                    <Flex 
                        bg={displayMessage.valid ? '#d1e7dd' : '#fce4e4'}
                        borderColor={displayMessage.valid ? 'green' : '#fcc2c3'}
                        fontFamily="Helvetica, Arial, sans-serif"
                        lineHeight="20px"
                        color={displayMessage.valid ? "#0f5132" : "#cc0033"}
                        paddingX="2em"
                        paddingY="1em"
                        gap="1em"
                        align="center"
                    >
                        {displayMessage.valid ? <CheckIcon color="#0f5132" /> : <CloseIcon />}
                        <Text>
                            <Text as="span" fontWeight="bold" color={displayMessage.valid ? "#0f5132" : "#A63232"}>
                                {displayMessage.valid ? 'Valid. ' : 'Invalid. '}
                            </Text>
                            <Text as="span">
                                {displayMessage.message}
                            </Text>
                        </Text>
                    </Flex>
                )}
                {certificate &&
                <Flex flexDir="column" bg="#f1f1f1" borderRadius="5px" px="2.5em" py="2em" gap="0.5em">
                    <Text>Certificate ID: {certificate?.certificate_id}</Text>
                    <Text>Training: {certificate?.course}</Text>
                    <Text>Name: {certificate?.name}</Text>
                    <Text>Date: {certificate?.course_date?.start_date} {certificate?.course_date?.end_date && `to ${certificate.course_date.end_date}`}</Text>
                    <Text>Days: {certificate?.days}</Text>
                    <Text>Hours: {certificate?.hours}</Text>
                </Flex>}
            </Flex>
        </ResponsiveWidth>
    )
}

export default Certificate