// Importing necessary dependencies and assets
import React from "react";
import "./ContactForm.css"

// defining the contact form component
const ContactForm = () => {
    return (
        <div className="main-flex-container">
            <h2>أرسل لنا رسالة</h2>
            <h3>سيتم ايصال هذه الرسالة الى البريد الخاص بفرعنا</h3>
            <div className="horizontal-flex-container">
                <div className="contact-form">
                    <form action="url">
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
                        <input type="text" name="message" placeholder="الرسالة" required className="message-field"/>
                    </div>
                    <button type="submit" className="submit-button">ارسال</button>
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
