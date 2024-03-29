import React, { useState, useEffect } from 'react'
import { Flex, Heading, Show, Hide } from '@chakra-ui/react'

const LectureVideo = ({ video, loading }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleWindowResize)
        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])

    const youtube_regex = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/

    if (loading || !video || !youtube_regex.test(video)) {
        return ''
    }

    return (
        <Flex flexDir="column" gap="2em" mt="2em" id="lectures">
            <Heading fontSize="24px" fontWeight="medium">
                Lecture Video
            </Heading>
            <Flex flexDir={{ base: "column", xl: "row" }} gap="2em" >
                <Flex flexDir="column" gap="1em">
                    <Show above="lg">
                        <iframe
                            width="960"
                            height="539"
                            style={{ background: '#c8c8c8' }}
                            src={`https://www.youtube.com/embed/${video.split("https://youtu.be/").pop()}`}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                        />
                    </Show>
                    <Hide above="lg" >
                        <iframe
                            width={windowWidth}
                            height={Math.round(windowWidth * 9 / 16)}
                            style={{ background: '#c8c8c8', marginRight: 'auto', marginLeft: -0.05 * windowWidth }}
                            src={`https://www.youtube.com/embed/${video.split("https://youtu.be/").pop()}`}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                        />
                    </Hide>
                </Flex>
            </Flex>
        </Flex>

    )
}

export default LectureVideo