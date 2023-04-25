import React from "react";

import CheckIcon from "../../../assets/home/check.svg";

import { useUser } from "../../../contexts/UserContext";

const Features = () => {
  const { language } = useUser();
  return (
    <section className="features-container">
      <h2>{language.HOMEPAGE.FEATURES.HEADLINE}</h2>
      <div className="features-grid">
        <div className="features-grid__item">
          <img src={CheckIcon} alt="check icon" />
          <div className="features-grid__item-text">
            <h3>{language.HOMEPAGE.FEATURES.F1_HEADLINE}</h3>
            <p>{language.HOMEPAGE.FEATURES.F1_TEXT}</p>
          </div>
        </div>
        <div className="features-grid__item">
          <img src={CheckIcon} alt="check icon" />
          <div className="features-grid__item-text">
            <h3>{language.HOMEPAGE.FEATURES.F2_HEADLINE}</h3>
            <p>{language.HOMEPAGE.FEATURES.F2_TEXT}</p>
          </div>
        </div>
        <div className="features-grid__item">
          <img src={CheckIcon} alt="check icon" />
          <div className="features-grid__item-text">
            <h3>{language.HOMEPAGE.FEATURES.F3_HEADLINE}</h3>
            <p>{language.HOMEPAGE.FEATURES.F3_TEXT}</p>
          </div>
        </div>
        <div className="features-grid__item">
          <img src={CheckIcon} alt="check icon" />
          <div className="features-grid__item-text">
            <h3>{language.HOMEPAGE.FEATURES.F4_HEADLINE}</h3>
            <p>{language.HOMEPAGE.FEATURES.F4_TEXT}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
