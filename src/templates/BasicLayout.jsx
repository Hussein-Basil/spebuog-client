import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Grid, Box } from '@chakra-ui/react'
import { useUser } from '../auth/UserContext'
import Notification from '../components/Notification'

const BasicLayout = ({ children }) => {
    const { notifications, setNotification } = useUser()

    return (
        <Grid minH="100vh" maxW="100vw" style={{ overflowX: 'hidden', overflowX: 'clip' }} gridTemplateRows="auto 1fr auto" >
            <Navbar />
            <Box
            // w={{
            //     sm: "320px",
            //     md: "768px",
            //     lg: "1024px",
            //     xl: "1440px",
            //     '2xl': "1500px"
            // }}
            // mx="auto"
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
                {children}
            </Box>
            <Footer />
        </Grid>
    )
}

export default BasicLayout