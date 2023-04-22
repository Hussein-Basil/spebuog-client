import React from "react";
import ResponsiveWidth from "../../../layouts/ResponsiveWidth";

import CheckIcon from '../../../assets/home/check.svg'

const Features = () => {
  return (
    <div className="features-container">
      <ResponsiveWidth
        mb="4em"
        // as={motion.div}
        // whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        align="center"
      >
        <h2>سهلنا لك الوصول لخبرات القطاع النفطي</h2>
        <div className="features-grid">
          <div className="features-grid__item">
            <img src={CheckIcon} alt="check icon"/>
            <div className="features-grid__item-text">
              <h5>دورات تزيد مهاراتك</h5>
              <p>سوف تلاحظ تطورك وتفوقك على أقرانك سواء في الدراسة أو العمل</p>
            </div>
          </div>
          <div className="features-grid__item">
            <img src={CheckIcon} alt="check icon"/>
            <div className="features-grid__item-text">
              <h5>مهندسين، قادة، واساتذة جامعيين</h5>
              <p>يمكنك الاستفادة من خبراتهم والاستفسار منهم حول تساؤلاتك</p>
            </div>
          </div>
          <div className="features-grid__item">
            <img src={CheckIcon} alt="check icon"/>
            <div className="features-grid__item-text">
              <h5>دورات بمختلف المستويات</h5>
              <p>سواء كنت مبتدئ أو خبير سوف تجد ما يهمك</p>
            </div>
          </div>
          <div className="features-grid__item">
            <img src={CheckIcon} alt="check icon"/>
            <div className="features-grid__item-text">
              <h5>معلومات متقدمة سهلة الوصول</h5>
              <p>نقدم محتوى متقدم لا تجده عادة بشكل مجاني</p>
            </div>
          </div>
        </div>
      </ResponsiveWidth>
    </div>
  );
};

export default Features;
