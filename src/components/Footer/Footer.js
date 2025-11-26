import React from "react";
import "./Footer.css";

import Group_40 from "../../assets/Group 40.png";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">


        <div className="footer-col footer-right">
          <div className="quick-title">روابط الانتقال السريع</div>
          <ul className="quick-links">
            <li><a href="/">الصفحة الرئيسية</a></li>
            <li><a href="/projects">المشاريع</a></li>
            <li><a href="/about">عن الجمعية</a></li>
            <li><a href="/store">المتجر الخيري</a></li>
            <li><a href="/articles">الأخبار و المقالات</a></li>
          </ul>
        </div>


        <div className="footer-col footer-center">
          <img src={Group_40} alt="vision logo" className="footer-logo" />
        </div>

        {/* Left column - donate + contact + socials */}
        <div className="footer-col footer-left">
          <button className="donate">تبرع الآن</button>

          <div className="contact-box">
            <div className="contact-label">اتصل بنا</div>
            <div className="contact-number">0506125552</div>
          </div>
{/* 
          <div className="socials">
            <div className="contact-label">تجدنا علي</div>
            <a href="#" aria-label="instagram" className="social">IG</a>
            <a href="#" aria-label="facebook" className="social">FB</a>
            <a href="#" aria-label="linkedin" className="social">IN</a>
          </div> */}
        </div>



      </div>

      {/* bottom bar */}
      <div className="footer-bottom">
        <div className="bottom-inner">
          جميع الحقوق محفوظة © جمعية سعادة طفل 2024
        </div>
      </div>
    </footer>
  );
}
