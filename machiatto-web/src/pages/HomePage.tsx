import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { fadeUp, staggerContainer } from '../lib/animations';
import heroBanner from '../assets/images/hero-banner.jpg';
import annunakiCard from '../assets/images/annunaki-card.jpg';
import gameplayClimax from '../assets/images/gameplay-climax.jpg';
import timelineSocial from '../assets/images/timeline-social.jpg';





const HomePage: React.FC = () => {
  return (
    <PageTransition>
      <div className="bg-[#0D0A1F]">
        {/* Hero Section */}
        <section
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: `url(${heroBanner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0A1F]/50 via-[#0D0A1F]/40 to-[#0D0A1F]" />
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' as const }}
            >
              <p className="text-[#00F0FF] font-orbitron text-xs sm:text-sm tracking-[0.4em] mb-4 text-glow-cyan">
                PRIMERA EDICIÓN
              </p>
              <h1 className="text-6xl sm:text-8xl md:text-9xl font-orbitron font-black tracking-widest mb-4 gradient-text-gold text-glow-gold">
                MACHIATTO
              </h1>
              <h2 className="text-lg sm:text-2xl font-orbitron font-light tracking-widest text-[#00F0FF] mb-6 text-glow-cyan">
                INVASIÓN ANNUNAKI
              </h2>
              <p className="text-gray-300 font-inter text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
                El primer juego de cartas narrativas phygital. Descifra los códigos sumerios,
                construye tu arco narrativo y descubre la verdad olvidada de la humanidad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/como-jugar"
                  className="px-8 py-4 bg-transparent border-2 border-[#00F0FF] text-[#00F0FF] font-orbitron font-bold text-sm tracking-widest rounded-md hover:bg-[#00F0FF] hover:text-[#0D0A1F] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]"
                >
                  CÓMO JUGAR
                </Link>
                <Link
                  to="/tienda"
                  className="px-8 py-4 bg-[#FFD700] text-[#0D0A1F] font-orbitron font-black text-sm tracking-widest rounded-md hover:bg-[#FFC200] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,215,0,0.5)]"
                >
                  PRE-ORDENAR AHORA
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <span className="text-gray-500 text-xs font-inter tracking-widest">DESCUBRE MÁS</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-px h-8 bg-gradient-to-b from-[#00F0FF] to-transparent"
            />
          </motion.div>
        </section>

        {/* Annunaki Invasion Section */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp}>
                <p className="text-[#FF00FF] font-orbitron text-xs tracking-[0.4em] mb-4 text-glow-magenta">
                  LA PRIMERA EDICIÓN
                </p>
                <h2 className="text-4xl sm:text-5xl font-orbitron font-black text-white mb-6 leading-tight">
                  INVASIÓN{' '}
                  <span className="gradient-text-cyan text-glow-cyan">ANNUNAKI</span>
                </h2>
                <p className="text-gray-300 font-inter text-base leading-relaxed mb-4">
                  Sumérgete en los misterios de la antigua Sumeria y descubre los secretos de los
                  dioses que descendieron de las estrellas. 300 cartas meticulosamente diseñadas
                  que tejen una narrativa de conspiración, poder y conocimiento prohibido.
                </p>
                <p className="text-gray-400 font-inter text-sm leading-relaxed mb-8">
                  7 ciclos narrativos. Códigos sumerios ocultos. Frecuencias resonantes.
                  Un universo donde cada descubrimiento abre nuevas preguntas.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {['300 Cartas', '7 Ciclos', 'Códigos Ocultos', 'IA Integrada'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-orbitron text-[#00F0FF] border border-[#00F0FF]/30 rounded-full bg-[#00F0FF]/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to="/colecciones"
                  className="inline-block px-6 py-3 border border-[#FFD700] text-[#FFD700] font-orbitron font-bold text-sm tracking-widest rounded-md hover:bg-[#FFD700] hover:text-[#0D0A1F] transition-all duration-300"
                >
                  EXPLORAR COLECCIÓN
                </Link>
              </motion.div>
              <motion.div variants={fadeUp} className="relative">
                <div className="relative mx-auto w-fit">
                  <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' as const }}
                  >
                    <img
                      src={annunakiCard}
                      alt="Carta Annunaki"
                      className="rounded-xl max-w-xs sm:max-w-sm mx-auto shadow-2xl border border-[#2A2555]"
                      style={{ filter: 'drop-shadow(0 0 30px rgba(0,240,255,0.3))' }}
                    />
                  </motion.div>
                  <div className="absolute -inset-4 rounded-xl bg-[#00F0FF]/5 -z-10 blur-xl" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Gameplay Section */}
        <section className="py-24 px-4 bg-[#080618]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="order-2 lg:order-1 relative">
                <img
                  src={gameplayClimax}
                  alt="Clímax narrativo"
                  className="rounded-xl shadow-2xl border border-[#2A2555]"
                  style={{ filter: 'drop-shadow(0 0 30px rgba(255,0,255,0.3))' }}
                />
              </motion.div>
              <motion.div variants={fadeUp} className="order-1 lg:order-2">
                <p className="text-[#FF00FF] font-orbitron text-xs tracking-[0.4em] mb-4 text-glow-magenta">
                  MECÁNICAS REVOLUCIONARIAS
                </p>
                <h2 className="text-4xl sm:text-5xl font-orbitron font-black text-white mb-6 leading-tight">
                  EL CLÍMAX{' '}
                  <span className="gradient-text-magenta">DECIDE</span>
                  <br />LA HISTORIA
                </h2>
                <p className="text-gray-300 font-inter text-base leading-relaxed mb-4">
                  Olvida el maná y la energía. En Machiatto, el Potencial Narrativo (PN) es el
                  motor del juego. Cada carta jugada contribuye a la historia, aumentando la
                  tensión dramática y desbloqueando efectos más poderosos.
                </p>
                <p className="text-gray-400 font-inter text-sm leading-relaxed mb-8">
                  4 fases: Exposición → Desarrollo → Clímax → Resolución. Construye tu
                  arco narrativo y cierra la historia con un Finisher cinematográfico.
                </p>
                <Link
                  to="/como-jugar"
                  className="inline-block px-6 py-3 border border-[#FF00FF] text-[#FF00FF] font-orbitron font-bold text-sm tracking-widest rounded-md hover:bg-[#FF00FF] hover:text-[#0D0A1F] transition-all duration-300"
                >
                  APRENDER A JUGAR
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 7 Cycles Teaser */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
            >
              <motion.p
                variants={fadeUp}
                className="text-[#00F0FF] font-orbitron text-xs tracking-[0.4em] mb-4 text-glow-cyan"
              >
                UNIVERSO ANNUNAKI
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-4xl sm:text-5xl font-orbitron font-black text-white mb-6"
              >
                7 CICLOS{' '}
                <span className="gradient-text-gold">NARRATIVOS</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-gray-400 font-inter text-base max-w-2xl mx-auto mb-14"
              >
                Desde la Creación hasta el Retorno. Cada ciclo revela una capa más profunda
                de la verdad oculta que los Annunaki dejaron grabada en el tiempo.
              </motion.p>
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3"
              >
                {[
                  { name: 'CREACIÓN', num: '01', color: '#00F0FF' },
                  { name: 'DILUVIO', num: '02', color: '#4A90D9' },
                  { name: 'REBELIÓN', num: '03', color: '#FF00FF' },
                  { name: 'GUERRAS DIVINAS', num: '04', color: '#CC0066' },
                  { name: 'ASCENSIÓN', num: '05', color: '#FFD700' },
                  { name: 'CONOCIMIENTO PROHIBIDO', num: '06', color: '#FF8C00' },
                  { name: 'RETORNO', num: '07', color: '#9B59B6' },
                ].map((cycle) => (
                  <motion.div
                    key={cycle.name}
                    variants={fadeUp}
                    className="card-cosmic p-4 text-center hover:scale-105 transition-transform duration-300 cursor-pointer group"
                    style={{ borderColor: `${cycle.color}40` }}
                  >
                    <div
                      className="text-2xl font-orbitron font-black mb-2 group-hover:scale-110 transition-transform"
                      style={{ color: cycle.color }}
                    >
                      {cycle.num}
                    </div>
                    <div
                      className="text-xs font-orbitron font-semibold tracking-wider"
                      style={{ color: cycle.color }}
                    >
                      {cycle.name}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div variants={fadeUp} className="mt-10">
                <Link
                  to="/universo"
                  className="inline-block px-8 py-4 border border-[#00F0FF] text-[#00F0FF] font-orbitron font-bold text-sm tracking-widest rounded-md hover:bg-[#00F0FF] hover:text-[#0D0A1F] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]"
                >
                  EXPLORAR EL UNIVERSO
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Community / Timeline Section */}
        <section className="py-24 px-4 bg-[#080618]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp}>
                <p className="text-[#FFD700] font-orbitron text-xs tracking-[0.4em] mb-4 text-glow-gold">
                  RED SOCIAL NARRATIVA
                </p>
                <h2 className="text-4xl sm:text-5xl font-orbitron font-black text-white mb-6 leading-tight">
                  CADA PARTIDA{' '}
                  <span className="gradient-text-gold text-glow-gold">SE RECUERDA</span>
                </h2>
                <p className="text-gray-300 font-inter text-base leading-relaxed mb-4">
                  Machiatto no es solo un juego, es una plataforma creativa donde los jugadores
                  no solo compiten: cuentan historias, desbloquean recuerdos y se convierten
                  en autores de su propio legado digital.
                </p>
                <p className="text-gray-400 font-inter text-sm leading-relaxed mb-8">
                  Comparte tus momentos épicos, participa en torneos temáticos y construye
                  tu legado en la comunidad de narradores más exclusiva del universo.
                </p>
                <Link
                  to="/comunidad"
                  className="inline-block px-6 py-3 border border-[#FFD700] text-[#FFD700] font-orbitron font-bold text-sm tracking-widest rounded-md hover:bg-[#FFD700] hover:text-[#0D0A1F] transition-all duration-300"
                >
                  UNIRSE A LA COMUNIDAD
                </Link>
              </motion.div>
              <motion.div variants={fadeUp}>
                <img
                  src={timelineSocial}
                  alt="Timeline social de Machiatto"
                  className="rounded-xl shadow-2xl border border-[#2A2555]"
                  style={{ filter: 'drop-shadow(0 0 30px rgba(255,215,0,0.2))' }}
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0A1F] via-[#1A0D3D] to-[#0D0A1F]" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(0,240,255,0.1) 40px, rgba(0,240,255,0.1) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(0,240,255,0.1) 40px, rgba(0,240,255,0.1) 41px)',
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.p
                variants={fadeUp}
                className="text-[#FF00FF] font-orbitron text-xs tracking-[0.4em] mb-4 text-glow-magenta"
              >
                ES EL MOMENTO
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-4xl sm:text-6xl font-orbitron font-black text-white mb-4 leading-tight"
              >
                ÚNETE A LA{' '}
                <span className="gradient-text-cyan text-glow-cyan">PRIMERA</span>
                <br />
                GENERACIÓN
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-gray-300 font-inter text-lg max-w-2xl mx-auto mb-10"
              >
                1,000 unidades VIP. Primera tirada. Pre-orden disponible ahora.
                Sé parte de la historia antes de que empiece.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link
                  to="/tienda"
                  className="inline-block px-10 py-5 bg-[#FFD700] text-[#0D0A1F] font-orbitron font-black text-base tracking-widest rounded-md hover:bg-[#FFC200] transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,215,0,0.6)] hover:scale-105"
                >
                  PRE-ORDENAR AHORA →
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default HomePage;
