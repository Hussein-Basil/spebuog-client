// Importing necessary dependencies and assets
import React, {useRef, useState} from "react";
import "./ContactForm.css"
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha'

// defining the contact form component
const ContactForm = () => {

    const form = useRef();
    const refCaptcha = useRef();

    const [shown, setShown] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        const token = refCaptcha.current.getValue();
        const params = {
            'g-recaptcha-response': token
        }

        emailjs.send(process.env.REACT_APP_SERVICE_ID,
                        process.env.REACT_APP_TEMPLATE_ID,
                        params, 
                        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
                        )
          .then((response) => {
              console.log("Email sent succesfully", response.status, response.text);
          }, (error) => {
              console.log(error.text);
              
          });
      };
      console.log({shown})
    return (
        <div className="main-flex-container">
            <h2>أرسل لنا رسالة</h2>
            <h3>سيتم ايصال هذه الرسالة الى البريد الخاص بفرعنا</h3>
            <div className="horizontal-flex-container">
                <div className="contact-form">
                    <form action="url" ref={form} onSubmit={sendEmail} method="POST">
                    <div className="text-field">
                        <p>الاسم</p>
                        <input type="text" name="name" placeholder="الاسم" required />
                    </div>
                    <div className="text-field">
                        <p>البريد الالكتروني</p>
                        <input type="text" name="email" placeholder="البريد الالكتروني" required />
                    </div>
                    <div className="text-field">
                        <p>الرسالة</p>
                        <input type="text" name="message"  className="message-field" placeholder="الرسالة" required/>
                    </div>
                    <ReCAPTCHA
                      sitekey= {process.env.REACT_APP_RECAPTCHA_PUBLIC_KEY}
                      onChange={() => setShown(true)}
                      ref={refCaptcha}  
                      style={{
                        margin: "10px 0px",
                      }} />
                    { shown ?
                    <button
                        type="submit"
                        className="submit-button" 
                        data-sitekey= {process.env.REACT_APP_RECAPTCHA_PUBLIC_KEY}
                        value="send"
                        >  ارسال  </button> 
                        : null}
                    </form>
                </div>
                <div className="logo-image">
                    <div className="image-text">
                        <h2>SPE BUOG Student Chapter </h2>
                    </div>
                    <img src="http://localhost:3000/static/media/spe-logo-2020.4999ae094217ce787101.png" alt="contact form logo" />
                   
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
