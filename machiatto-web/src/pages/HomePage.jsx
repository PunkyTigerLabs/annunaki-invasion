import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';
import heroBanner from '../assets/images/hero-banner.jpg';
import annunakiCard from '../assets/images/annunaki-card.jpg';
import gameplayClimax from '../assets/images/gameplay-climax.jpg';
import timelineSocial from '../assets/images/timeline-social.jpg';

const HomePage = () => {
  useEffect(() => {
    // Efecto de parallax y animaciones al hacer scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroContent = document.querySelector('.hero-content');
      const sections = document.querySelectorAll('.section-animated');
      
      if (heroContent) {
        heroContent.style.transform = `translateY(${scrollPosition * 0.4}px)`;
        heroContent.style.opacity = 1 - scrollPosition / 700;
      }
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.85 && sectionBottom > 0) {
          section.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${heroBanner})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">MACHIATTO</h1>
          <h2 className="hero-subtitle">UN VIAJE CINEMATOGRÁFICO A TRAVÉS DE LA MEMORIA, LA NARRATIVA Y EL JUEGO</h2>
          <p className="hero-description">
            El primer juego físico de cartas narrativas que integra inteligencia artificial 
            para generar historias únicas al final de cada partida.
          </p>
          <div className="hero-buttons">
            <Link to="/como-jugar" className="btn btn-primary">DESCUBRE CÓMO JUGAR</Link>
            <Link to="/tienda" className="btn btn-secondary">PRE-ORDENAR AHORA</Link>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Descubre más</span>
          <i className="fas fa-chevron-down"></i>
        </div>
      </section>

      {/* Annunaki Invasion Section */}
      <section className="section-animated annunaki-section">
        <div className="section-container">
          <div className="section-content">
            <h2 className="section-title">INVASIÓN ANNUNAKI</h2>
            <h3 className="section-subtitle">LA PRIMERA EDICIÓN</h3>
            <p className="section-description">
              Sumérgete en los misterios de la antigua Sumeria y descubre los secretos de los dioses 
              que descendieron de las estrellas. La primera edición de Machiatto te invita a explorar 
              una narrativa enigmática basada en los Annunaki, con 300 cartas que tejen una historia 
              de conspiración, poder y conocimiento prohibido.
            </p>
            <p className="section-description">
              Cada carta contiene pistas ocultas, cada partida revela fragmentos de una verdad mayor. 
              ¿Estás preparado para descubrir lo que realmente sabemos?
            </p>
            <Link to="/colecciones/annunaki" className="btn btn-outline">EXPLORAR LA COLECCIÓN</Link>
          </div>
          <div className="section-image">
            <img src={annunakiCard} alt="Carta Annunaki de Machiatto" className="floating-card" />
          </div>
        </div>
      </section>

      {/* Gameplay Section */}
      <section className="section-animated gameplay-section">
        <div className="section-container reverse">
          <div className="section-image">
            <img src={gameplayClimax} alt="Clímax narrativo en Machiatto" />
          </div>
          <div className="section-content">
            <h2 className="section-title">EL CLÍMAX DECIDE LA HISTORIA</h2>
            <h3 className="section-subtitle">MECÁNICAS REVOLUCIONARIAS</h3>
            <p className="section-description">
              Olvida el maná y la energía. En Machiatto, el Clímax narrativo es el motor del juego. 
              Cada carta jugada contribuye a una historia en desarrollo, aumentando la tensión dramática 
              y desbloqueando efectos más poderosos a medida que la narrativa se intensifica.
            </p>
            <p className="section-description">
              Protagonistas, eventos, objetos y terrenos se entrelazan para crear una experiencia coherente. 
              Y cuando alcanzas el punto culminante, el Finisher cierra la historia con un impacto cinematográfico 
              que se transforma en un tráiler generado por IA, único para cada partida.
            </p>
            <Link to="/como-jugar" className="btn btn-outline">APRENDER A JUGAR</Link>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-animated timeline-section">
        <div className="section-container">
          <div className="section-content">
            <h2 className="section-title">CADA PARTIDA SE RECUERDA</h2>
            <h3 className="section-subtitle">UNA RED SOCIAL NARRATIVA</h3>
            <p className="section-description">
              Machiatto no es solo un juego, es una plataforma creativa y una red social cerrada 
              donde los jugadores no solo compiten: cuentan historias, desbloquean recuerdos y 
              se convierten en autores de su propio legado digital.
            </p>
            <p className="section-description">
              Comparte tus tráilers cinematográficos, comenta las historias de otros jugadores, 
              desbloquea logros narrativos y participa en torneos temáticos de romance, horror, 
              ciencia ficción y más. Tu Timeline es el archivo de tus momentos más épicos.
            </p>
            <Link to="/comunidad" className="btn btn-outline">UNIRSE A LA COMUNIDAD</Link>
          </div>
          <div className="section-image">
            <img src={timelineSocial} alt="Timeline social de Machiatto" />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-overlay"></div>
        <div className="cta-content">
          <h2 className="cta-title">ES TIEMPO DE JUGAR, DE CREAR, DE RECORDAR</h2>
          <h3 className="cta-subtitle">ES TIEMPO DE MACHIATTO</h3>
          <p className="cta-description">
            Únete a la revolución narrativa. Pre-ordena ahora la edición Invasión Annunaki 
            y sé parte de la primera generación de narradores de Machiatto.
          </p>
          <Link to="/tienda" className="btn btn-primary btn-large">PRE-ORDENAR AHORA</Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
