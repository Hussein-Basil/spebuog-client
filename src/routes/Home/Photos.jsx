import React from 'react'
import { Flex, Grid, Heading, Image } from '@chakra-ui/react'
import classroom from '../../assets/photos/lecture_classroom.jpg'
import competition from '../../assets/photos/competition.jpg'
import presentation from '../../assets/photos/presentation.jpg'
import spe_presentation from '../../assets/photos/spe_presentation.jpg'
import volunteering from '../../assets/photos/volunteering.jpg'
import bazaar from '../../assets/photos/bazaar.jpg'

const Photos = () => {
    // const photos = [
    //     'https://walksf.org/wp-content/uploads/2018/10/6th-street.jpg',
    //     'https://previews.123rf.com/images/bialasiewicz/bialasiewicz1605/bialasiewicz160500108/56110896-image-of-a-teacher-giving-a-lecture-to-his-students.jpg',
    //     'https://thearabweekly.com/sites/default/files/styles/article_image_800x450_/public/2021-03/20210228060358appp--23222.h.jpg?itok=ESjfAkv_',
    //     'https://telanganatoday.com/wp-content/uploads/2021/02/Iraqi-Women.jpg',
    //     'https://www.reuters.com/resizer/_766Nt5vJ496W_G4Ct13hYKcID8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/OWKA2TYM2RNXLM57GVT2OTFZZE.jpg',
    //     'https://s35691.pcdn.co/wp-content/uploads/2016/03/iStock_000037379776_Medium.160328.jpg'
    // ]
    const photos = [
        classroom,
        competition,
        presentation,
        spe_presentation,
        volunteering,
        bazaar
    ]
    return (
        <Flex flexDir="column" align="center" gap="2em">
            <Heading>Photos</Heading>
            <Grid gridTemplateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }} gap="1em">
                {photos.map(photo => (
                    <Image src={photo} w="300px" h="300px" objectFit="cover" />
                ))}
            </Grid>
        </Flex>
    )
}

export default Photos