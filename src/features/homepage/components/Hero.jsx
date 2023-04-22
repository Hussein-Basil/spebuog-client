import React from "react";
import {
  Button,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";

import WatchButton from '../../../assets/home/watch-button.svg'

const Hero = () => {
  return (
    <section id="hero">
        <div className="hero-content">
          <h1 className="hero-heading">
            اكتسب معرفة عملية.
            <br />
            نّمي مهاراتك الشخصية.
            <br />
            <span>انضم لفعالياتنا!</span>
          </h1>
          <p className="hero-subheading">
            نطمح لاعطاء اعضائنا محاضرات غنية بالمعلومات
            مقدمة من مهندسين وخبراء في القطاع النفطي
          </p>
          <LinkBox>
            <LinkOverlay href="/membership">
              <Button
                // size={{ base: "md", lg: "huge" }}
                px={{ base: "1em", md: "3em" }}
                borderRadius="10px"
                color="black"
                fontSize={{ base: "16px", xl: "20px" }}
                fontWeight="bold"
                textTransform="none"
                height="52px"
                className="primary-button"
              >
                انضم كعضو
              </Button>
            </LinkOverlay>
          </LinkBox>
        </div>
        <div className="hero-video">
            <img src={WatchButton} alt="Watch Video" fill="white" />
            <span>شاهد الفيديو</span>
        </div>
        <div className="grid-lines"></div>
        <div className="hero-swoop"></div>
    </section>
  );
};

export default Hero;
