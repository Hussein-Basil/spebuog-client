import React from 'react'
import Navbar from './NavbarSLB'
import Footer from './Footer'
import { Grid, Box } from '@chakra-ui/react'
import { useUser } from '../contexts/UserContext'
import Notification from './Notification'
import { SWRConfig } from 'swr'

const BasicLayout = ({ children }) => {
    const { notifications, setNotification, client } = useUser()

    return (
        <Grid minH="100vh" maxW="100vw" style={{ overflowX: 'clip' }} gridTemplateRows="auto 1fr auto" >
            <Navbar />
            <Box
            >
                {notifications &&
                    notifications.map((text, index) => (
                        <Notification
                            key={index}
                            text={text}
                            handleClose={() => setNotification(notifications.filter((_, idx) => idx !== index))}
                        />
                    ))
                }
                <SWRConfig value={{ fetcher: query => client.fetch(query)}}>
                    {children}
                </SWRConfig>
            </Box>
            <Footer />
        </Grid>
    )
}

export default BasicLayout