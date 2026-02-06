import './CallUs.css'

function CallUs() {

  return (
    <>
      <div className="line_style">
        <span className="line" style={{ flex: 1 }} aria-hidden="true"></span>

        <h2 className="title">اتصل بنا</h2>

        <span className="line" style={{ flex: 1 }} aria-hidden="true"></span>
      </div>

      <div className="first text section">
        <p>
          في جمعية سعادة طفل - إرث محمد نؤمن أن التواصل أساس نجاح رسالتنا. نرحب
          بأي استفسار، مساهمة، أو شراكة تساعدنا على نشر الأمل وصناعة مستقبل أفضل
          للأطفال. كن جزءًا من رحلتنا، وتواصل معنا عبر قنواتنا الرسمية.
        </p>
      </div>
 <div className="contacts-section">
      <div className="contacts-container">
        <div className="contact-item">
          <div className="icon">
            {/* بدل SVG ده بأي أيقونة تحبي */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="9" r="2.2" fill="currentColor"/>
            </svg>
          </div>
          <h3 className="title">العنوان</h3>
          <p className="text">حفر الباطن ، شارع رقم 232<br/>مبنى الإدارة</p>
        </div>

        <div className="contact-item">
          <div className="icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.4"/>
              <path d="M22 7l-10 7L2 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="title">تواصل علي</h3>
          <p className="text">ErthMohamed@gmail.com</p>
        </div>

        <div className="contact-item">
          <div className="icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h3a1 1 0 0 1 1 .75c.12.7.35 1.73.63 2.49a1 1 0 0 1-.24 1L8.7 9.7a16 16 0 0 0 6.6 6.6l1.46-1.46a1 1 0 0 1 1-.24c.76.28 1.79.51 2.49.63A1 1 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="title">اتصل بنا علي</h3>
          <p className="text">+996 123 132 1234</p>
        </div>
      </div>
    </div>

    </>
  );
}

export default CallUs;
