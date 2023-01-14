import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import { SelectField, InputGroup, InputLeftElement, Icon } from '@chakra-ui/react'
import React from 'react'
import { MdHouse, MdWork, MdTimeline } from 'react-icons/md'


const FilterModal = ({ 
    isOpen, 
    onClose, 
    setFilterPosition,
    setFilterCompany,
    filterPosition,
    filterCompany 
}) => (
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent position="absolute" top="20px" my="0" maxW={{ base: "95%", lg: "428px" }}>
            <ModalHeader>Filter</ModalHeader>
            <ModalCloseButton ml="1em" />
            <ModalBody >
            <InputGroup mt="1em" mb="0.5em" w="100%" >
                <SelectField
                    w="100%"
                    minW="150px"
                    placeholder="Position"
                    onChange={e => setFilterPosition(e.target.value)}
                    value={filterPosition}
                    h="65px"
                    borderRadius="10px"
                    border="1px solid #C8C8C8"
                    pl="3.5em"
                >
                    <option>Petroleum Engineer</option>
                    <option>Drilling Engineer</option>
                </SelectField>
                <InputLeftElement h="65px" my="auto" ml="0.75em"><Icon as={MdWork} w="24px" h="24px" color="gray" /></InputLeftElement>
            </InputGroup>
            <InputGroup mt="1em" mb="0.5em" w="100%">
                <SelectField
                    w="100%"
                    minW="150px"
                    placeholder="Company"
                    onChange={e => setFilterCompany(e.target.value)}
                    value={filterCompany}
                    h="65px"
                    borderRadius="10px"
                    border="1px solid #C8C8C8"
                    pl="3.5em"
                >
                    {/* {companies.map((company, index) => (
                        <option key={index} value={company}>{company}</option>
                    ))} */}
                    <option>Schlumberger</option>
                    <option>Haliburton</option>
                    <option>Basra University of Oil and Gas</option> 
                    <option>National Companies</option> 
                </SelectField>
                <InputLeftElement h="65px" my="auto" ml="0.75em"><Icon as={MdHouse} w="24px" h="24px" color="gray" /></InputLeftElement>
            </InputGroup>
            <InputGroup mt="1em" mb="0.5em" w="100%">
                <SelectField
                    w="100%"
                    minW="150px"
                    placeholder="Sort"
                    // onChange={e => setFilterCompany(e.target.value)}
                    // value={filterCompany}
                    // value={sortOrder}
                    h="65px"
                    borderRadius="10px"
                    border="1px solid #C8C8C8"
                    pl="3.5em"
                >
                    {/* {companies.map((company, index) => (
                        <option key={index} value={company}>{company}</option>
                    ))} */}
                    <option>Newest</option>
                    <option>Oldest</option>
                </SelectField>
                <InputLeftElement h="65px" my="auto" ml="0.75em"><Icon as={MdTimeline} w="24px" h="24px" color="gray" /></InputLeftElement>
            </InputGroup>
            </ModalBody>
        </ModalContent>
    </Modal>
)

export default FilterModal