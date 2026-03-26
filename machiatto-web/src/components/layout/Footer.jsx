import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">MACHIATTO</h3>
          <p className="footer-description">
            Un viaje cinematográfico a través de la memoria, la narrativa y el juego.
            Cada carta es una historia. Cada partida se recuerda.
          </p>
          <div className="social-icons">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-discord"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-section">
            <h4>Explorar</h4>
            <ul>
              <li><Link to="/universo">Universo Machiatto</Link></li>
              <li><Link to="/como-jugar">Cómo Jugar</Link></li>
              <li><Link to="/colecciones">Colecciones</Link></li>
              <li><Link to="/arte">Galería de Arte</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Comunidad</h4>
            <ul>
              <li><Link to="/comunidad">Timeline</Link></li>
              <li><Link to="/eventos">Eventos</Link></li>
              <li><Link to="/torneos">Torneos</Link></li>
              <li><Link to="/noticias">Noticias</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Soporte</h4>
            <ul>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/reglas">Reglas</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
              <li><Link to="/privacidad">Privacidad</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Punky Tiger Labs. Todos los derechos reservados.</p>
        <p>Machiatto es una marca registrada de Punky Tiger Labs.</p>
      </div>
    </footer>
  );
};

export default Footer;
