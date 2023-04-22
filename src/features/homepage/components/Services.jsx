import React from 'react'

const Services = () => {
    return (
        <section id="services">
            <h2>ماذا نقدم أيضاً؟</h2>
            <div className="services-container">
                <div className="service-item">
                    <img />
                    <div className="service-content">
                        <h3>مسابقات طلابية</h3>
                        <p>
                        نقيم سنوياً مسابقات عروض تقديمية طلابية تركز على مواضيع علمية حديثة في مجال النفط والغاز والطاقة المتجددة. يعمل الطلاب فيها على صقل مهارات الالقاء والبحث العلمي بعد تلقيهم ملاحظات لجنة التحكيم المكونة من مهندسين واساتذة جامعيين
                        </p>
                    </div>
                </div>
                <div className="service-item">
                    <img />
                    <div className="service-content">
                        <h3>رحلات حقلية</h3>
                        <p>
                        من خلال اشتراكك بدوراتنا التدريبية الصيفية يمكنك التأهل لزيارة أحد حقول النفط والغاز في البصرة لرؤية المنشئات والمعدات عن قرب مما يعزز معرفتك المكتسبة نظرياً من الدورة
                        </p>
                    </div>
                </div>
                <div className="service-item">
                    <img />
                    <div className="service-content">
                        <h3>خدمات عضوية SPE</h3>
                        <p>
                        بمجرد امتلاكك عضوية جمعية مهندسي النفط العالمية في فرعنا الطلابي يمكنك الوصول الى العديد من الخدمات المجانية المفيدة مثل منصة onepetro البحثية ومجلة JPT النفطية وغيرهم
                        </p>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Services