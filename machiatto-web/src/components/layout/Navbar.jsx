import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">MACHIATTO</span>
        </Link>

        <div className="menu-icon" onClick={toggleMobileMenu}>
          <i className={mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/universo" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              Universo
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/como-jugar" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              Cómo Jugar
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/colecciones" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              Colecciones
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/arte" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              Galería de Arte
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/comunidad" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              Comunidad
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tienda" className="nav-link nav-link-highlight" onClick={() => setMobileMenuOpen(false)}>
              Tienda
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
