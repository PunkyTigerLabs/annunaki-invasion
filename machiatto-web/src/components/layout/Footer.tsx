import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080618] border-t border-[#2A2555] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-orbitron font-black tracking-widest gradient-text-gold mb-4">
              MACHIATTO
            </h3>
            <p className="text-gray-400 font-inter text-sm leading-relaxed mb-6 max-w-xs">
              El primer juego de cartas narrativas phygital. Cada carta es una historia.
              Cada partida se recuerda. Cada ciclo revela la verdad.
            </p>
            <div className="flex gap-4">
              {[
                { label: 'Twitter', icon: 'X', href: '#' },
                { label: 'Instagram', icon: 'IG', href: '#' },
                { label: 'Discord', icon: 'DC', href: '#' },
                { label: 'YouTube', icon: 'YT', href: '#' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-md border border-[#2A2555] flex items-center justify-center text-xs font-bold text-gray-400 hover:text-[#00F0FF] hover:border-[#00F0FF] hover:shadow-[0_0_10px_rgba(0,240,255,0.3)] transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Explorar */}
          <div>
            <h4 className="text-sm font-orbitron font-semibold text-[#00F0FF] tracking-widest mb-4">
              EXPLORAR
            </h4>
            <ul className="space-y-2">
              {[
                { to: '/universo', label: 'Universo Annunaki' },
                { to: '/como-jugar', label: 'Cómo Jugar' },
                { to: '/colecciones', label: 'Colecciones' },
                { to: '/arte', label: 'Galería de Arte' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-400 hover:text-white font-inter transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Comunidad */}
          <div>
            <h4 className="text-sm font-orbitron font-semibold text-[#FF00FF] tracking-widest mb-4">
              COMUNIDAD
            </h4>
            <ul className="space-y-2">
              {[
                { to: '/comunidad', label: 'Discord' },
                { to: '/comunidad', label: 'Torneos' },
                { to: '/tienda', label: 'Pre-Orden' },
                { to: '/tienda', label: 'FAQ' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-400 hover:text-white font-inter transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#2A2555] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 font-inter">
            © {new Date().getFullYear()} Punky Tiger Labs. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-500 font-inter">
            Machiatto® es una marca registrada de Punky Tiger Labs.
          </p>
          <div className="flex gap-4">
            <span className="text-xs text-gray-500 cursor-pointer hover:text-gray-300 transition-colors">
              Privacidad
            </span>
            <span className="text-xs text-gray-500 cursor-pointer hover:text-gray-300 transition-colors">
              Términos
            </span>
            <span className="text-xs text-gray-500 cursor-pointer hover:text-gray-300 transition-colors">
              Contacto
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
