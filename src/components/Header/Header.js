import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo_66d368304b3ee.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isMenuOpen ? "menu-open" : ""}`} dir="rtl">

      {/* الشريط الأسود الرفيع فوق */}
      <div className="top-strip"></div>

      {/* صف اللوجو + الاتصال */}
      <div className="top-bar">
        <div className="logo-contact">
          <div className="contact">
            <span className="contact-label">اتصل بنا</span>
            <span className="contact-number">0506125552</span>
          </div>
          <div className="divider"></div>
          <img src={logo} alt="logo" className="logo-img" />
        </div>
      </div>

      {/* صف الروابط + زر التبرع - Desktop */}
      <nav className="nav-bar">
        <ul className="nav-links">
          <Link to="/"><li>الصفحة الرئيسية</li></Link>
          <Link to="/campaigns"><li>الحملات</li></Link>
          <Link to="/aboutcharity"><li>عن الجمعية</li></Link>
          <Link to="/store"><li>المتجر الخيري</li></Link>
          <Link to="/newsandarticles"><li>الأخبار والمقالات</li></Link>
          <Link to="/callus"><li>اتصل بنا</li></Link>
        </ul>
        <button className="donate-btn">تبرع الآن</button>
      </nav>

      {/* Hamburger + Donate - Mobile */}
      <div className="mobile-menu-header">
        <button
          onClick={toggleMenu}
          className="hamburger-btn"
          aria-label="فتح القائمة"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        <button className="donate-btn">تبرع الآن</button>
      </div>

      {/* Mobile dropdown menu */}
      <nav className="mobile-nav" aria-hidden={!isMenuOpen}>
        <ul className="mobile-nav-links">
          <Link to="/" onClick={closeMenu}><li className="mobile-nav-item">الصفحة الرئيسية</li></Link>
          <Link to="/campaigns" onClick={closeMenu}><li className="mobile-nav-item">الحملات</li></Link>
          <Link to="/aboutcharity" onClick={closeMenu}><li className="mobile-nav-item">عن الجمعية</li></Link>
          <Link to="/store" onClick={closeMenu}><li className="mobile-nav-item">المتجر الخيري</li></Link>
          <Link to="/newsandarticles" onClick={closeMenu}><li className="mobile-nav-item">الأخبار والمقالات</li></Link>
          <Link to="/callus" onClick={closeMenu}><li className="mobile-nav-item">اتصل بنا</li></Link>
        </ul>
      </nav>

    </header>
  );
}
