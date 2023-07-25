import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'

const Files = () => {
    return (
        <Flex flexDir="column" gap="2em" mt="2em" id="files" maxW="960px">
            <Heading fontSize="24px" fontWeight="medium">Files</Heading>
            <iframe
                src="https://drive.google.com/embeddedfolderview?id=1cu4254q1Llsr8DX5gzgoTBDkf2LikeWF#list"
                style={{ width: "100%", height: "220px", border: '1px solid #c8c8c8', borderRadius: '10px', paddingTop: '1.5em' }}
                title="Google drive"
                allowTransparency="flip-list-last-modified-header"
            />
        </Flex>
    )
}

export default Files