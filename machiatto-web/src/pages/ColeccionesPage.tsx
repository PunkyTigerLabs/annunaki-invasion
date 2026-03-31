import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { fadeUp, staggerContainer } from '../lib/animations';
import annunakiCard from '../assets/images/annunaki-card.jpg';





const cardTypeBreakdown = [
  { type: 'Personaje', count: 72, color: '#60A5FA', icon: '👤', percent: 24 },
  { type: 'Escenario', count: 54, color: '#34D399', icon: '🏛️', percent: 18 },
  { type: 'Evento', count: 84, color: '#F87171', icon: '⚡', percent: 28 },
  { type: 'Giro', count: 42, color: '#A78BFA', icon: '🌀', percent: 14 },
  { type: 'Interrupción', count: 30, color: '#FB923C', icon: '🛡️', percent: 10 },
  { type: 'Final', count: 18, color: '#FCD34D', icon: '👑', percent: 6 },
];

const rarities = [
  { name: 'Común', color: '#9CA3AF', symbol: '◆', count: '150 cartas', desc: 'La base del universo. Esenciales para cualquier estrategia.' },
  { name: 'Infrecuente', color: '#34D399', symbol: '◈', count: '75 cartas', desc: 'Mecánicas más complejas. El corazón de las estrategias intermedias.' },
  { name: 'Rara', color: '#60A5FA', symbol: '◉', count: '45 cartas', desc: 'Efectos únicos. Las piezas que definen los arquetipos de juego.' },
  { name: 'Ultra Rara', color: '#A78BFA', symbol: '✦', count: '18 cartas', desc: 'Poder narrativo excepcional. Solo para los narradores más devotos.' },
  { name: 'Legendaria', color: '#FFD700', symbol: '★', count: '9 cartas', desc: 'Los Annunaki originales. Una por ciclo narrativo. Finales incluidos.' },
  { name: 'Secreta', color: '#FF00FF', symbol: '∞', count: '3 cartas', desc: 'Los Códigos Maestros. Nadie sabe exactamente qué hacen. Todavía.' },
];

const cycles = [
  { name: 'Creación', color: '#00F0FF', cards: 43 },
  { name: 'Diluvio', color: '#4A90D9', cards: 41 },
  { name: 'Rebelión', color: '#FF00FF', cards: 44 },
  { name: 'Guerras Divinas', color: '#CC0066', cards: 46 },
  { name: 'Ascensión', color: '#FFD700', cards: 42 },
  { name: 'Conocimiento Prohibido', color: '#FF8C00', cards: 40 },
  { name: 'Retorno', color: '#9B59B6', cards: 44 },
];

const futureEditions = [
  { title: 'Edición II', name: 'Las Guerras de los Dioses', status: 'En Desarrollo', color: '#FF8C00' },
  { title: 'Edición III', name: 'El Despertar de Enki', status: 'Conceptual', color: '#9B59B6' },
  { title: 'Edición IV', name: 'Los Guardianes de Nibiru', status: 'Conceptual', color: '#60A5FA' },
];

const ColeccionesPage: React.FC = () => {
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
                <p className="text-[#FFD700] font-orbitron text-xs tracking-[0.4em] mb-4 text-glow-gold">
                  PRIMERA EDICIÓN
                </p>
                <h1 className="text-5xl sm:text-6xl font-orbitron font-black text-white mb-4 leading-tight">
                  INVASIÓN{' '}
                  <span className="gradient-text-cyan text-glow-cyan">ANNUNAKI</span>
                </h1>
                <p className="text-gray-300 font-inter text-lg leading-relaxed mb-6">
                  La edición inaugural de Machiatto. 300 cartas meticulosamente diseñadas
                  que representan una excavación arqueológica narrativa — una invitación a
                  descifrar los códigos primordiales de la civilización humana.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { num: '300', label: 'Cartas Únicas' },
                    { num: '7', label: 'Ciclos Narrativos' },
                    { num: '6', label: 'Niveles de Rareza' },
                  ].map((stat) => (
                    <div key={stat.label} className="card-cosmic p-4 text-center">
                      <div className="text-3xl font-orbitron font-black text-[#FFD700] gradient-text-gold mb-1">
                        {stat.num}
                      </div>
                      <div className="text-xs text-gray-400 font-inter">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link
                    to="/tienda"
                    className="px-6 py-3 bg-[#FFD700] text-[#0D0A1F] font-orbitron font-black text-sm tracking-widest rounded-md hover:bg-[#FFC200] transition-all duration-300"
                  >
                    PRE-ORDENAR
                  </Link>
                  <Link
                    to="/universo"
                    className="px-6 py-3 border border-[#00F0FF] text-[#00F0FF] font-orbitron font-bold text-sm tracking-widest rounded-md hover:bg-[#00F0FF] hover:text-[#0D0A1F] transition-all duration-300"
                  >
                    VER LORE
                  </Link>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="relative">
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' as const }}
                  className="relative mx-auto w-fit"
                >
                  <img
                    src={annunakiCard}
                    alt="Cartas Invasión Annunaki"
                    className="rounded-xl max-w-sm mx-auto shadow-2xl"
                    style={{ filter: 'drop-shadow(0 0 40px rgba(0,240,255,0.4))' }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Card Type Breakdown */}
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
                className="text-[#00F0FF] font-orbitron text-xs tracking-[0.4em] mb-4 text-glow-cyan"
              >
                COMPOSICIÓN
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-4xl sm:text-5xl font-orbitron font-black text-white mb-4"
              >
                DISTRIBUCIÓN POR{' '}
                <span className="gradient-text-cyan">TIPO</span>
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {cardTypeBreakdown.map((card) => (
                <motion.div
                  key={card.type}
                  variants={fadeUp}
                  className="card-cosmic p-6 rounded-xl hover:scale-105 transition-transform duration-300"
                  style={{ borderColor: `${card.color}30` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
                      style={{ background: `${card.color}15`, border: `1px solid ${card.color}40` }}
                    >
                      {card.icon}
                    </div>
                    <div>
                      <h3
                        className="text-lg font-orbitron font-bold"
                        style={{ color: card.color }}
                      >
                        {card.type}
                      </h3>
                      <span className="text-gray-400 font-inter text-sm">{card.count} cartas</span>
                    </div>
                    <div className="ml-auto text-2xl font-orbitron font-black" style={{ color: card.color }}>
                      {card.percent}%
                    </div>
                  </div>
                  {/* Progress bar */}
                  <div className="w-full h-2 bg-[#2A2555] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: card.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${card.percent}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 7 Cycles with card count */}
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
                ESTRUCTURA NARRATIVA
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-4xl sm:text-5xl font-orbitron font-black text-white mb-4"
              >
                LOS 7{' '}
                <span className="gradient-text-magenta">CICLOS</span>
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3"
            >
              {cycles.map((cycle, idx) => (
                <motion.div
                  key={cycle.name}
                  variants={fadeUp}
                  className="card-cosmic p-4 text-center rounded-xl hover:scale-105 transition-transform duration-300"
                  style={{ borderColor: `${cycle.color}40` }}
                >
                  <div
                    className="text-3xl font-orbitron font-black mb-2"
                    style={{ color: cycle.color }}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div
                    className="text-xs font-orbitron font-semibold tracking-wider mb-2"
                    style={{ color: cycle.color }}
                  >
                    {cycle.name.toUpperCase()}
                  </div>
                  <div className="text-gray-500 font-inter text-xs">{cycle.cards} cartas</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Rarity System */}
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
                SISTEMA DE RAREZA
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-4xl sm:text-5xl font-orbitron font-black text-white mb-4"
              >
                CADA CARTA{' '}
                <span className="gradient-text-gold">TIENE SU VALOR</span>
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {rarities.map((rarity) => (
                <motion.div
                  key={rarity.name}
                  variants={fadeUp}
                  className="card-cosmic p-5 rounded-xl border hover:border-opacity-60 transition-all duration-300 group hover:scale-105"
                  style={{ borderColor: `${rarity.color}30` }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <span
                      className="text-3xl"
                      style={{ color: rarity.color }}
                    >
                      {rarity.symbol}
                    </span>
                    <div>
                      <h3
                        className="font-orbitron font-bold text-sm group-hover:text-glow-cyan"
                        style={{ color: rarity.color }}
                      >
                        {rarity.name}
                      </h3>
                      <span className="text-gray-500 font-inter text-xs">{rarity.count}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 font-inter text-xs leading-relaxed">{rarity.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Future Editions */}
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
                className="text-[#9B59B6] font-orbitron text-xs tracking-[0.4em] mb-4"
              >
                EL MULTIVERSO MACHIATTO
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-4xl sm:text-5xl font-orbitron font-black text-white mb-4"
              >
                PRÓXIMAS{' '}
                <span className="text-[#9B59B6]">EDICIONES</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-gray-400 font-inter text-base max-w-2xl mx-auto"
              >
                Invasión Annunaki es solo el comienzo. El multiverso de Machiatto se expandirá
                a lo largo de años con nuevas ediciones que explorarán otros mitos, otras eras,
                otras verdades ocultas.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {futureEditions.map((ed) => (
                <motion.div
                  key={ed.name}
                  variants={fadeUp}
                  className="card-cosmic p-8 rounded-xl text-center border border-dashed border-[#2A2555] hover:border-opacity-60 transition-all duration-300"
                >
                  <div className="text-xs font-orbitron text-gray-500 tracking-widest mb-3">
                    {ed.title}
                  </div>
                  <h3
                    className="text-xl font-orbitron font-bold mb-4"
                    style={{ color: ed.color }}
                  >
                    {ed.name}
                  </h3>
                  <div
                    className="inline-block px-4 py-1 rounded-full text-xs font-orbitron font-bold border"
                    style={{ borderColor: ed.color, color: ed.color, background: `${ed.color}10` }}
                  >
                    {ed.status}
                  </div>
                  <div className="mt-6 text-6xl opacity-10">?</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 bg-[#080618] text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeUp}
              className="text-4xl font-orbitron font-black text-white mb-6"
            >
              CONSIGUE LA{' '}
              <span className="gradient-text-gold text-glow-gold">PRIMERA EDICIÓN</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-gray-400 font-inter text-base max-w-xl mx-auto mb-8"
            >
              1,000 unidades VIP disponibles. Sé parte de la primera generación.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                to="/tienda"
                className="inline-block px-10 py-5 bg-[#FFD700] text-[#0D0A1F] font-orbitron font-black text-sm tracking-widest rounded-md hover:bg-[#FFC200] transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,215,0,0.5)] hover:scale-105"
              >
                IR A LA TIENDA →
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
};

export default ColeccionesPage;
