import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { fadeUp, staggerContainer } from '../lib/animations';
import timelineSocial from '../assets/images/timeline-social.jpg';





const socialLinks = [
  { name: 'Discord', desc: 'Únete al servidor oficial. Estrategias, torneos y comunidad.', color: '#5865F2', icon: 'DC', action: 'UNIRSE AL SERVIDOR', members: '+2,400 miembros' },
  { name: 'Instagram', desc: 'Arte oficial, previews y momentos behind-the-scenes.', color: '#E1306C', icon: 'IG', action: 'SEGUIR', members: '+8,900 seguidores' },
  { name: 'Twitter/X', desc: 'Noticias en tiempo real, spoilers y comunidad activa.', color: '#1DA1F2', icon: 'X', action: 'SEGUIR', members: '+5,200 seguidores' },
  { name: 'YouTube', desc: 'Videos de gameplay, tutoriales y lore deepdives.', color: '#FF0000', icon: 'YT', action: 'SUSCRIBIRSE', members: '+1,800 suscriptores' },
  { name: 'TikTok', desc: 'Clips de torneos, highlights y cultura Machiatto.', color: '#010101', icon: 'TK', action: 'SEGUIR', members: '+3,400 seguidores' },
  { name: 'Twitch', desc: 'Streams de torneos y sesiones de juego en vivo.', color: '#9146FF', icon: 'TV', action: 'SEGUIR', members: 'Próximamente' },
];

const tournaments = [
  {
    name: 'Torneo Fundacional',
    type: 'Presencial',
    date: 'Por confirmar — 2025',
    location: 'Ciudad de México',
    prize: 'Colección VIP + Títulos Fundadores',
    status: 'PRÓXIMAMENTE',
    color: '#FFD700',
  },
  {
    name: 'Liga Online Temporada 1',
    type: 'Digital',
    date: 'Post-lanzamiento',
    location: 'Plataforma Machiatto',
    prize: 'Cartas exclusivas + Títulos digitales',
    status: 'EN DESARROLLO',
    color: '#00F0FF',
  },
  {
    name: 'Campeonato Narrativo',
    type: 'Híbrido',
    date: '2026',
    location: 'CDMX + Online',
    prize: 'Premio mayor + Reconocimiento permanente',
    status: 'CONCEPTUAL',
    color: '#FF00FF',
  },
];

const spotlightPlaceholders = [
  {
    handle: '@Narrador_Alpha',
    title: 'El Primero en Alcanzar el Clímax Máximo',
    desc: 'Construyó un arco narrativo de 47 cartas en una sola partida. La IA generó un tráiler de 3 minutos.',
    color: '#FFD700',
  },
  {
    handle: '@Lorekeeper_X',
    title: 'Descifrador de Códigos',
    desc: 'Fue el primero en conectar 5 cartas con el mismo código sumerio. El efecto desbloqueado todavía es misterioso.',
    color: '#00F0FF',
  },
  {
    handle: '@ArcMaster_Z',
    title: 'Campeón del Torneo Beta',
    desc: 'Ganó los 3 partidos del torneo beta usando exclusivamente el Ciclo del Conocimiento Prohibido.',
    color: '#FF00FF',
  },
];

const ComunidadPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <PageTransition>
      <div className="bg-[#0D0A1F] pt-20">
        {/* Hero */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp}>
                <p className="text-[#00F0FF] font-orbitron text-xs tracking-[0.4em] mb-4 text-glow-cyan">
                  LA TRIBU
                </p>
                <h1 className="text-5xl sm:text-6xl font-orbitron font-black text-white mb-6 leading-tight">
                  COMUNIDAD{' '}
                  <span className="gradient-text-cyan text-glow-cyan">MACHIATTO</span>
                </h1>
                <p className="text-gray-300 font-inter text-lg leading-relaxed mb-8">
                  No solo jugadores. Narradores, descubridores, arqueólogos del conocimiento
                  prohibido. La comunidad Machiatto es la capa más profunda del juego.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { num: '12K+', label: 'Seguidores Totales' },
                    { num: '2.4K', label: 'Miembros Discord' },
                    { num: '∞', label: 'Historias Posibles' },
                  ].map((stat) => (
                    <div key={stat.label} className="card-cosmic p-4 text-center rounded-xl">
                      <div className="text-2xl font-orbitron font-black gradient-text-cyan mb-1">{stat.num}</div>
                      <div className="text-xs text-gray-400 font-inter">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div variants={fadeUp}>
                <img
                  src={timelineSocial}
                  alt="Comunidad Machiatto"
                  className="rounded-xl border border-[#2A2555] shadow-2xl"
                  style={{ filter: 'drop-shadow(0 0 30px rgba(0,240,255,0.2))' }}
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Discord CTA */}
        <section className="py-16 px-4 bg-[#080618]">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="card-cosmic rounded-2xl p-10 text-center border border-[#5865F2]/30"
              style={{ background: 'linear-gradient(135deg, #13103A 0%, #1a1060 100%)' }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="text-6xl mb-4">💬</motion.div>
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl font-orbitron font-black text-white mb-4"
              >
                ÚNETE AL SERVIDOR{' '}
                <span style={{ color: '#5865F2' }}>DISCORD</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-gray-300 font-inter text-base mb-8 max-w-xl mx-auto"
              >
                El servidor oficial es el corazón de la comunidad. Estrategias,
                teorías del lore, torneos, previews exclusivos y las personas más
                apasionadas del universo Machiatto.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mb-8">
                {['#estrategias', '#lore-annunaki', '#torneos', '#previas-exclusivas', '#ayuda', '#off-topic'].map((channel) => (
                  <span
                    key={channel}
                    className="text-sm font-inter text-[#5865F2]/70 border border-[#5865F2]/20 px-3 py-1 rounded"
                  >
                    {channel}
                  </span>
                ))}
              </motion.div>
              <motion.div variants={fadeUp}>
                <a
                  href="#"
                  className="inline-block px-10 py-4 font-orbitron font-black text-sm tracking-widest rounded-md text-white transition-all duration-300 hover:scale-105"
                  style={{ background: '#5865F2', boxShadow: '0 0 30px rgba(88,101,242,0.4)' }}
                >
                  UNIRSE AL SERVIDOR →
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Social Links */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.p
                variants={fadeUp}
                className="text-[#FF00FF] font-orbitron text-xs tracking-[0.4em] mb-4 text-glow-magenta"
              >
                ECOSISTEMA DIGITAL
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-4xl sm:text-5xl font-orbitron font-black text-white mb-4"
              >
                SÍGUENOS EN{' '}
                <span className="gradient-text-magenta">TODAS PARTES</span>
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {socialLinks.map((social) => (
                <motion.div
                  key={social.name}
                  variants={fadeUp}
                  className="card-cosmic p-6 rounded-xl hover:scale-105 transition-all duration-300 group cursor-pointer"
                  style={{ borderColor: `${social.color}30` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-orbitron font-black text-sm"
                      style={{ background: social.color }}
                    >
                      {social.icon}
                    </div>
                    <div>
                      <h3
                        className="font-orbitron font-bold text-base"
                        style={{ color: social.color }}
                      >
                        {social.name}
                      </h3>
                      <span className="text-gray-500 font-inter text-xs">{social.members}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 font-inter text-sm mb-4">{social.desc}</p>
                  <a
                    href="#"
                    className="text-xs font-orbitron font-bold tracking-widest transition-all duration-300"
                    style={{ color: social.color }}
                  >
                    {social.action} →
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-24 px-4 bg-[#080618]">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.p
                variants={fadeUp}
                className="text-[#FFD700] font-orbitron text-xs tracking-[0.4em] mb-4 text-glow-gold"
              >
                TRANSMISIÓN SECRETA
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl font-orbitron font-black text-white mb-4"
              >
                RECIBE LOS{' '}
                <span className="gradient-text-gold">MENSAJES</span>
                {' '}OCULTOS
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-gray-400 font-inter text-base mb-8"
              >
                Noticias exclusivas, previews de cartas, revelaciones del lore y
                acceso prioritario a pre-órdenes. Solo para los iniciados.
              </motion.p>
              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="card-cosmic p-6 rounded-xl border border-[#FFD700]/30 text-center"
                >
                  <div className="text-4xl mb-4">✨</div>
                  <h3 className="text-xl font-orbitron font-bold text-[#FFD700] mb-2">
                    ¡Bienvenido a los Iniciados!
                  </h3>
                  <p className="text-gray-400 font-inter text-sm">
                    Recibirás la primera transmisión muy pronto.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  variants={fadeUp}
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    required
                    className="flex-1 px-5 py-3 bg-[#13103A] border border-[#2A2555] rounded-md text-white font-inter text-sm placeholder-gray-600 focus:outline-none focus:border-[#FFD700] transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-8 py-3 bg-[#FFD700] text-[#0D0A1F] font-orbitron font-black text-sm tracking-widest rounded-md hover:bg-[#FFC200] transition-all duration-300 whitespace-nowrap"
                  >
                    SUSCRIBIRSE
                  </button>
                </motion.form>
              )}
              <motion.p
                variants={fadeUp}
                className="text-gray-600 font-inter text-xs mt-4"
              >
                Sin spam. Solo transmisiones del universo Annunaki.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Tournaments */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.p
                variants={fadeUp}
                className="text-[#00F0FF] font-orbitron text-xs tracking-[0.4em] mb-4 text-glow-cyan"
              >
                COMPETICIÓN NARRATIVA
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-4xl sm:text-5xl font-orbitron font-black text-white mb-4"
              >
                TORNEOS{' '}
                <span className="gradient-text-cyan">OFICIALES</span>
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {tournaments.map((tournament) => (
                <motion.div
                  key={tournament.name}
                  variants={fadeUp}
                  className="card-cosmic p-6 rounded-xl border hover:border-opacity-60 transition-all duration-300"
                  style={{ borderColor: `${tournament.color}30` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-xs font-orbitron font-bold px-3 py-1 rounded-full border"
                      style={{ borderColor: tournament.color, color: tournament.color, background: `${tournament.color}10` }}
                    >
                      {tournament.status}
                    </span>
                    <span className="text-xs font-inter text-gray-500 border border-[#2A2555] px-2 py-1 rounded">
                      {tournament.type}
                    </span>
                  </div>
                  <h3
                    className="text-xl font-orbitron font-bold mb-4"
                    style={{ color: tournament.color }}
                  >
                    {tournament.name}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-400 font-inter">
                      <span className="text-xs" style={{ color: tournament.color }}>📅</span>
                      {tournament.date}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 font-inter">
                      <span className="text-xs" style={{ color: tournament.color }}>📍</span>
                      {tournament.location}
                    </div>
                    <div className="flex items-start gap-2 text-gray-400 font-inter">
                      <span className="text-xs mt-0.5" style={{ color: tournament.color }}>🏆</span>
                      {tournament.prize}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Player Spotlight */}
        <section className="py-24 px-4 bg-[#080618]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.p
                variants={fadeUp}
                className="text-[#FFD700] font-orbitron text-xs tracking-[0.4em] mb-4 text-glow-gold"
              >
                LEYENDAS DE LA COMUNIDAD
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-4xl sm:text-5xl font-orbitron font-black text-white mb-4"
              >
                NARRADORES{' '}
                <span className="gradient-text-gold">DESTACADOS</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-gray-400 font-inter text-sm"
              >
                (Perfiles de la fase beta — nombres reales próximamente)
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {spotlightPlaceholders.map((player) => (
                <motion.div
                  key={player.handle}
                  variants={fadeUp}
                  className="card-cosmic p-6 rounded-xl border hover:scale-105 transition-transform duration-300"
                  style={{ borderColor: `${player.color}30` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center font-orbitron font-black text-lg"
                      style={{ background: `${player.color}20`, border: `2px solid ${player.color}`, color: player.color }}
                    >
                      {player.handle.charAt(1).toUpperCase()}
                    </div>
                    <div>
                      <div className="font-orbitron font-bold text-sm" style={{ color: player.color }}>
                        {player.handle}
                      </div>
                      <div className="text-xs text-gray-500 font-inter">Narrador Beta</div>
                    </div>
                  </div>
                  <h4 className="text-sm font-orbitron font-bold text-white mb-2">{player.title}</h4>
                  <p className="text-gray-400 font-inter text-xs leading-relaxed">{player.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default ComunidadPage;
