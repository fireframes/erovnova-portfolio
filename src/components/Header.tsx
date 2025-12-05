import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { telegramLink, whatsupLink } from "../constants";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(true);
  };

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.tagName === "A") {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isMenuOpen ? "show" : ""}`}>
      <nav className="navbar">
        <a
          className="fix-home"
          href="#"
          onClick={handleScrollToTop}
          style={{ right: "0", bottom: "10%", position: "fixed" }}
        >
          <FontAwesomeIcon icon={faArrowUp} size="xl" />
        </a>

        <div className="container">
          <div className="nav-menu">
            <button className="menu-btn" onClick={toggleMenu}>
              <svg
                className="menu-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  stroke={isMenuOpen ? "#8b645a" : "currentColor"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div
            className={`nav ${isMenuOpen ? "show" : ""}`}
            onClick={handleNavClick}
          >
            {/* <a href="#sex-therapy">Cекс-терапия?</a> */}
            <a href="#about">Обо мне</a>
            <a href="#help">С чем я могу помочь</a>
            <a href="#values">Ценности</a>
            <a href="#education">Образование</a>
            <a href="#prices">Стоимость</a>
            <a href="#faq">FAQ</a>
            <a href="#contacts">Контакты</a>
          </div>
          <div className={`social ${isMenuOpen ? "show" : ""}`}>
            <a href={telegramLink} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTelegram} size="lg" />
            </a>
            <a href={whatsupLink} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} size="lg" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
