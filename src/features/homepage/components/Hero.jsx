import {
  Button,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import React from "react";

import WatchButton from '../../../assets/home/watch-button.svg';
import { useUser } from '../../../contexts/UserContext';

const Hero = () => {
  const { language } = useUser()

  return (
    <section id="hero">
        <div className="hero-content">
          <h1 className="hero-heading">
            {language.HOMEPAGE.HERO.HEADLINE_REGULAR.split('.').slice(0,-1).map(text => <>{text}.<br /></>)}
            <span>{language.HOMEPAGE.HERO.HEADLINE_HIGHLIGHTED}</span>
          </h1>
          <p className="hero-subheading">{language.HOMEPAGE.HERO.SUBHEADING}</p>
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
                {language.HOMEPAGE.HERO.CTA_BUTTON}
              </Button>
            </LinkOverlay>
          </LinkBox>
        </div>
        <div className="hero-video">
            <img src={WatchButton} alt="Watch Video" fill="white" />
            <span>{language.HOMEPAGE.HERO.WATCH_VIDEO}</span>
        </div>
        <div className="grid-lines"></div>
        <div className="hero-swoop"></div>
    </section>
  );
};

export default Hero;
