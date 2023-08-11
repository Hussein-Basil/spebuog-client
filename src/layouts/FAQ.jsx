import React from "react";
import "../styles/FAQ.css";
import Faq from "react-faq-component";



const FAQ = () => {

    // used for react-faq-component, better than repeating code
    const data = {
        title: <h2>الاسألة الأكثر شيوعًا </h2>,
        rows: [
            {
                title: <h3>السؤال الأول</h3>,
                content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                  ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                  In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                  Fusce sed commodo purus, at tempus turpis.</p>,
            },
            {
                title: <h3>السؤال الثاني</h3>,
                content:
                    <p>Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.</p>,
            },
            {
                title: <h3>السؤال الثالث</h3>,
                content: <p>Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. </p>,
            },
            {
                title: <h3>السؤال الرابع</h3>,
                content: <p>اختبار للنص باللغة العربية<br /> x)</p>,
            },
        ],
    };
    
    // used to style the FAQ list, use for general styles only because it has the heighest priority
    const styles = {
        titleTextColor: "black",
        bgColor : "white",
        rowContentColor: "black"
    }
    
    return (
        <div className="main-container">
            <div className="header">
                <h1>لديك سؤال؟  <br />لدينا الاجابة.</h1>
                <h5>تصفح لائحتنا للأسالة الشائعة في الأسفل</h5>

                <svg width="390" height="104" viewBox="0 0 390 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M108.5 43.0677C79.4158 57.8079 65.5 -22.7176
                -4 6.40041L-1 65.8256V101.313L394
                104V85.1226C384.678 80.3946 318 46.8423 254.231
                74.9924C204.885 96.7755 200 -3.30555 108.5 43.0677Z" fill="white"/>
                </svg>

            </div>

            <div className="question-section">
                <Faq
                 data={data}
                 styles={styles}    />
            </div>

            {/* <ContactForm /> */}
        </div>
    )
}

export default FAQ