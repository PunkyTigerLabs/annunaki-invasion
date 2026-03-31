import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/universo', label: 'Universo' },
  { to: '/como-jugar', label: 'Cómo Jugar' },
  { to: '/colecciones', label: 'Colecciones' },
  { to: '/arte', label: 'Galería' },
  { to: '/comunidad', label: 'Comunidad' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0D0A1F]/95 backdrop-blur-md border-b border-[#2A2555] shadow-lg shadow-[#00F0FF]/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <span
              className="text-2xl md:text-3xl font-orbitron font-black tracking-widest gradient-text-gold group-hover:text-glow-gold transition-all duration-300"
            >
              MACHIATTO
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 text-sm font-medium font-inter tracking-wide transition-all duration-300 rounded-md ${
                  location.pathname === link.to
                    ? 'text-[#00F0FF] text-glow-cyan'
                    : 'text-gray-300 hover:text-[#00F0FF] hover:text-glow-cyan'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/tienda"
              className={`ml-4 px-5 py-2 text-sm font-bold font-orbitron tracking-widest rounded-md border transition-all duration-300 ${
                location.pathname === '/tienda'
                  ? 'bg-[#FFD700] text-[#0D0A1F] border-[#FFD700]'
                  : 'bg-transparent text-[#FFD700] border-[#FFD700] hover:bg-[#FFD700] hover:text-[#0D0A1F] hover:shadow-lg hover:shadow-[#FFD700]/30'
              }`}
            >
              TIENDA
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-[#00F0FF] hover:text-[#FFD700] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0D0A1F]/98 backdrop-blur-md border-t border-[#2A2555]"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-3 text-base font-medium font-inter tracking-wide rounded-md transition-all duration-300 ${
                    location.pathname === link.to
                      ? 'text-[#00F0FF] bg-[#13103A] text-glow-cyan'
                      : 'text-gray-300 hover:text-[#00F0FF] hover:bg-[#13103A]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/tienda"
                className="mt-2 px-4 py-3 text-center text-base font-bold font-orbitron tracking-widest rounded-md bg-[#FFD700] text-[#0D0A1F] hover:bg-[#FFC200] transition-all duration-300"
              >
                TIENDA
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
