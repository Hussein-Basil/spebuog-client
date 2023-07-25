// Importing necessary dependencies and components from external libraries
import React from "react";
import Navbar from "./NavbarSLB";
import Footer from "./Footer";
import { Grid, Box } from "@chakra-ui/react";
import { useUser } from "../contexts/UserContext";
import Notification from "./Notification";
import { SWRConfig } from "swr";

// Defining the BasicLayout component which acts as a wrapper for the main content
const BasicLayout = ({ children, ...props }) => {
  // Using the useUser() hook to access user-related data and functions
  const { notifications, setNotification, client, language } = useUser();

  // Rendering the Grid container for the layout, with Navbar, main content, and Footer
  return (
    <Grid
      minH="100vh"
      maxW="100vw"
      style={{ overflowX: "clip" }}
      gridTemplateRows="auto 1fr auto"
      // Setting the text direction based on the language
      dir={language.lang === "ar" ? "rtl" : "ltr"}
      {...props}
    >
      {/* Rendering the Navbar component */}
      <Navbar />

      {/* Box component for the main content */}
      <Box>
        {/* Rendering notifications, if any */}
        {notifications &&
          notifications.map((text, index) => (
            <Notification
              key={index}
              text={text}
              handleClose={() =>
                // Handling notification close by updating the notification state
                setNotification(notifications.filter((_, idx) => idx !== index))
              }
            />
          ))}

        {/* SWRConfig is used to configure the fetcher function for SWR data fetching */}
        <SWRConfig value={{ fetcher: (query) => client.fetch(query) }}>
          {/* Rendering the children, which represent the main content of the page */}
          {children}
        </SWRConfig>
      </Box>

      {/* Rendering the Footer component */}
      <Footer />
    </Grid>
  );
};

// Exporting the BasicLayout component as the default export
export default BasicLayout;
