import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-part">
          <h2 className="footer-logo">SportTandau</h2>
          <ul className="footer-link-list">
            <li className="footer-link-item">Басты бет</li>
            <li className="footer-link-item">Ойын алаңы</li>
            <li className="footer-link-item">Біз туралы</li>
          </ul>
        </div>
        <div className="footer-part">
          <div className="footer-social-list">
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              className="footer-social-item"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a
              href="https://ru-ru.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="footer-social-item"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://twitter.com/?lang=ru"
              target="_blank"
              rel="noreferrer"
              className="footer-social-item"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>2024 &copy; Все права защищены</p>
      </div>
    </footer>







  );
}

export default Footer;