import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { fadeUp, staggerContainer } from '../lib/animations';
import { Link } from 'react-router-dom';





const cardTypes = [
  {
    name: 'Personaje',
    color: '#1E40AF',
    textColor: '#60A5FA',
    icon: '👤',
    desc: 'Protagonistas, antagonistas y secundarios que establecen el tono narrativo. Cada personaje porta una esencia que transforma el arco completo.',
    subtypes: ['Protagonista', 'Antagonista', 'Secundario'],
    nv: '3-8',
  },
  {
    name: 'Escenario',
    color: '#065F46',
    textColor: '#34D399',
    icon: '🏛️',
    desc: 'El contexto espacial y temporal donde la acción transcurre. Los escenarios amplifican o inhiben las habilidades de otros tipos de carta.',
    subtypes: ['Locación', 'Atmósfera', 'Era'],
    nv: '2-6',
  },
  {
    name: 'Evento',
    color: '#7F1D1D',
    textColor: '#F87171',
    icon: '⚡',
    desc: 'Acciones, sucesos y revelaciones que impulsan la narrativa hacia el clímax. Los eventos aumentan el Potencial Narrativo significativamente.',
    subtypes: ['Acción', 'Incidente', 'Revelación'],
    nv: '4-10',
  },
  {
    name: 'Giro',
    color: '#4C1D95',
    textColor: '#A78BFA',
    icon: '🌀',
    desc: 'Alteran inesperadamente el curso de la narrativa. Flashbacks, presagios y giros de trama que redefinen todo lo que ocurrió antes.',
    subtypes: ['Giro de Trama', 'Flashback', 'Presagio'],
    nv: '5-9',
  },
  {
    name: 'Interrupción',
    color: '#7C2D12',
    textColor: '#FB923C',
    icon: '🛡️',
    desc: 'Equivalente a las reversiones. Neutralizan narrativas del oponente con justificación dramática. El Deus Ex Machina en tu mano.',
    subtypes: ['Contra-giro', 'Deus Ex Machina', 'Subversión'],
    nv: '3-7',
  },
  {
    name: 'Final',
    color: '#78350F',
    textColor: '#FCD34D',
    icon: '👑',
    desc: 'La conclusión narrativa más poderosa. Requiere el Clímax adecuado y coherencia narrativa acumulada. Cuando se juega bien, la victoria es inevitable.',
    subtypes: ['Épico', 'Íntimo', 'Abierto'],
    nv: '10-15',
  },
];

const arcPhases = [
  {
    num: '01',
    phase: 'Exposición',
    color: '#00F0FF',
    desc: 'Establece personajes, escenarios y el conflicto inicial. Es la fase de construcción donde defines el tono de tu narrativa.',
    tip: 'Juega Personajes y Escenarios para establecer la base. El PN es bajo, pero cada carta cuenta.',
    np: '0-8',
  },
  {
    num: '02',
    phase: 'Desarrollo',
    color: '#4A90D9',
    desc: 'El conflicto se intensifica. Introduces Eventos que complican la historia. Las alianzas y traiciones toman forma.',
    tip: 'Combina Eventos con personajes ya establecidos para maximizar la Coherencia Narrativa.',
    np: '8-18',
  },
  {
    num: '03',
    phase: 'Clímax',
    color: '#FF00FF',
    desc: 'La tensión narrativa alcanza su punto máximo. Los Giros más poderosos entran en juego. Cada carta importa.',
    tip: 'Los Giros de Trama en este momento tienen un modificador +3 al PN. Úsalos estratégicamente.',
    np: '18-28',
  },
  {
    num: '04',
    phase: 'Resolución',
    color: '#FFD700',
    desc: 'El Final cierra la historia. Si has construido coherencia a lo largo del arco, el efecto del Finisher se multiplica.',
    tip: 'Necesitas PN ≥ 25 y Clímax ≥ 20 para jugar los Finales más devastadores.',
    np: '25+',
  },
];

const mechanics = [
  {
    title: 'Sistema de Coherencia Narrativa',
    color: '#00F0FF',
    desc: 'Las cartas deben hacer sentido en el contexto narrativo establecido. Jugar cartas con Tags coherentes otorga bonos de PN. La incoherencia genera Disonancia Narrativa — una penalidad que puede costar la partida.',
    icon: '🔗',
  },
  {
    title: 'Arcos Paralelos',
    color: '#FF00FF',
    desc: 'El tablero se divide en hasta 3 Hilos Narrativos. Puedes desarrollar múltiples líneas simultáneamente. Cuando convergen, los efectos combinados son devastadores.',
    icon: '⚡',
  },
  {
    title: 'Clímax Dinámico',
    color: '#FFD700',
    desc: 'El Clímax no es un valor estático — fluctúa según la tensión narrativa. Niveles extremos (muy alto o muy bajo) permiten efectos especiales únicos que pueden cambiar el resultado de la partida.',
    icon: '📈',
  },
  {
    title: 'Resonancia Multiversal',
    color: '#9B59B6',
    desc: 'Las cartas con la característica "Nexo" pueden conectar diferentes géneros y universos narrativos. Los Puntos de Convergencia generan efectos únicos al combinar elementos dispares.',
    icon: '🌐',
  },
];

const ComoJugarPage: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <PageTransition>
      <div className="bg-[#0D0A1F] pt-20">
        {/* Hero */}
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.p
                variants={fadeUp}
                className="text-[#00F0FF] font-orbitron text-xs tracking-[0.4em] mb-4 text-glow-cyan"
              >
                REGLAS Y MECÁNICAS
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="text-5xl sm:text-7xl font-orbitron font-black text-white mb-6"
              >
                CÓMO{' '}
                <span className="gradient-text-magenta text-glow-magenta">JUGAR</span>
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-gray-300 font-inter text-lg max-w-3xl mx-auto leading-relaxed"
              >
                Machiatto transforma la competencia en narración colaborativa. No se trata
                de destruir — se trata de crear la historia más poderosa y coherente.
                Aquí comienza tu viaje.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Resource System */}
        <section className="py-16 px-4 bg-[#080618]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp}>
                <p className="text-[#FFD700] font-orbitron text-xs tracking-[0.4em] mb-4 text-glow-gold">
                  EL RECURSO CENTRAL
                </p>
                <h2 className="text-3xl sm:text-4xl font-orbitron font-black text-white mb-6">
                  POTENCIAL{' '}
                  <span className="gradient-text-gold">NARRATIVO</span>
                </h2>
                <p className="text-gray-300 font-inter text-base leading-relaxed mb-6">
                  El <strong className="text-[#FFD700]">PN (Potencial Narrativo)</strong> reemplaza
                  al maná tradicional. No representa solo poder — representa profundidad narrativa y
                  complejidad emocional. A mayor PN, más poderosas las cartas disponibles.
                </p>
                <div className="space-y-4">
                  {[
                    { label: 'Inicio de partida', value: 'PN = 0', color: '#4A90D9' },
                    { label: 'Cartas exitosas', value: '+PN según Valor Narrativo', color: '#00F0FF' },
                    { label: 'Interrupciones o calma', value: '-PN temporal', color: '#FF00FF' },
                    { label: 'Coherencia narrativa', value: 'Bonus PN adicional', color: '#FFD700' },
                    { label: 'Disonancia narrativa', value: 'Penalidad PN', color: '#F87171' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-4 card-cosmic p-3 rounded-lg">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: item.color }} />
                      <span className="text-gray-400 font-inter text-sm flex-1">{item.label}</span>
                      <span className="font-orbitron text-xs font-bold" style={{ color: item.color }}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp}>
                <p className="text-[#FF00FF] font-orbitron text-xs tracking-[0.4em] mb-4 text-glow-magenta">
                  TURNO DE JUEGO
                </p>
                <h2 className="text-3xl sm:text-4xl font-orbitron font-black text-white mb-6">
                  SECUENCIA DEL{' '}
                  <span className="gradient-text-cyan">TURNO</span>
                </h2>
                <div className="space-y-4">
                  {[
                    { phase: 'Inspiración', num: '1', desc: 'Roba cartas. Tu mente se abre al flujo narrativo del universo.' },
                    { phase: 'Desarrollo', num: '2', desc: 'Juega cartas para avanzar tu narrativa. Construye coherencia.' },
                    { phase: 'Reflexión', num: '3', desc: 'Activa efectos especiales y ajusta recursos narrativos.' },
                    { phase: 'Anticipación', num: '4', desc: 'Prepara elementos para el siguiente turno. El futuro se forma.' },
                  ].map((step) => (
                    <div key={step.num} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full border-2 border-[#00F0FF] flex items-center justify-center flex-shrink-0 text-[#00F0FF] font-orbitron font-black text-sm">
                        {step.num}
                      </div>
                      <div>
                        <h4 className="text-[#00F0FF] font-orbitron font-bold text-sm mb-1">
                          {step.phase}
                        </h4>
                        <p className="text-gray-400 font-inter text-sm">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Narrative Arc */}
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
                ESTRUCTURA CENTRAL
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-4xl sm:text-5xl font-orbitron font-black text-white mb-4"
              >
                EL{' '}
                <span className="gradient-text-cyan">ARCO</span>
                {' '}NARRATIVO
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-gray-400 font-inter text-base max-w-2xl mx-auto"
              >
                Cada partida es una historia. Las 4 fases del Arco Narrativo guían tu estrategia
                desde la primera carta hasta el Finisher definitivo.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="relative"
            >
              {/* Connection line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-[#00F0FF] via-[#FF00FF] to-[#FFD700] -translate-y-1/2 z-0" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {arcPhases.map((phase, idx) => (
                  <motion.div
                    key={phase.num}
                    variants={fadeUp}
                    className="card-cosmic p-6 rounded-xl relative z-10 hover:scale-105 transition-transform duration-300"
                    style={{ borderColor: `${phase.color}40` }}
                  >
                    <div
                      className="text-4xl font-orbitron font-black mb-3"
                      style={{ color: phase.color }}
                    >
                      {phase.num}
                    </div>
                    <h3
                      className="text-lg font-orbitron font-bold mb-3"
                      style={{ color: phase.color }}
                    >
                      {phase.phase}
                    </h3>
                    <p className="text-gray-400 font-inter text-xs leading-relaxed mb-4">
                      {phase.desc}
                    </p>
                    <div
                      className="p-3 rounded-lg text-xs font-inter leading-relaxed"
                      style={{ background: `${phase.color}10`, borderLeft: `2px solid ${phase.color}` }}
                    >
                      <span className="font-bold" style={{ color: phase.color }}>PN Requerido: </span>
                      <span className="text-gray-300">{phase.np}</span>
                    </div>
                    <div className="mt-3 text-xs text-gray-500 font-inter italic">{phase.tip}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Card Types */}
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
                className="text-[#FF00FF] font-orbitron text-xs tracking-[0.4em] mb-4 text-glow-magenta"
              >
                ANATOMÍA DEL JUEGO
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-4xl sm:text-5xl font-orbitron font-black text-white mb-4"
              >
                6 TIPOS DE{' '}
                <span className="gradient-text-magenta">CARTA</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-gray-400 font-inter text-base max-w-2xl mx-auto"
              >
                Cada tipo tiene su función narrativa y mecánica. La maestría viene de
                saber cuándo y cómo combinarlos para construir la historia perfecta.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {cardTypes.map((card, idx) => (
                <motion.div
                  key={card.name}
                  variants={fadeUp}
                  className="card-cosmic p-6 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300 group"
                  style={{ borderColor: `${card.textColor}30` }}
                  onClick={() => setActiveCard(activeCard === idx ? null : idx)}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
                      style={{ background: `${card.textColor}15`, border: `1px solid ${card.textColor}40` }}
                    >
                      {card.icon}
                    </div>
                    <div>
                      <h3
                        className="text-lg font-orbitron font-bold group-hover:text-glow-cyan"
                        style={{ color: card.textColor }}
                      >
                        {card.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-gray-500 font-inter">Valor Narrativo:</span>
                        <span
                          className="text-xs font-orbitron font-bold"
                          style={{ color: card.textColor }}
                        >
                          {card.nv}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 font-inter text-sm leading-relaxed mb-4">
                    {card.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {card.subtypes.map((sub) => (
                      <span
                        key={sub}
                        className="px-2 py-1 text-xs font-inter rounded"
                        style={{
                          background: `${card.textColor}10`,
                          color: card.textColor,
                          border: `1px solid ${card.textColor}30`,
                        }}
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Innovative Mechanics */}
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
                className="text-[#FFD700] font-orbitron text-xs tracking-[0.4em] mb-4 text-glow-gold"
              >
                LO QUE NOS HACE ÚNICOS
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-4xl sm:text-5xl font-orbitron font-black text-white mb-4"
              >
                MECÁNICAS{' '}
                <span className="gradient-text-gold">INNOVADORAS</span>
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {mechanics.map((mech) => (
                <motion.div
                  key={mech.title}
                  variants={fadeUp}
                  className="card-cosmic p-8 rounded-xl border hover:border-opacity-60 transition-all duration-300"
                  style={{ borderColor: `${mech.color}30` }}
                >
                  <div className="text-4xl mb-4">{mech.icon}</div>
                  <h3
                    className="text-xl font-orbitron font-bold mb-3"
                    style={{ color: mech.color }}
                  >
                    {mech.title}
                  </h3>
                  <p className="text-gray-400 font-inter text-sm leading-relaxed">{mech.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Victory Conditions */}
        <section className="py-24 px-4 bg-[#080618]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeUp}
                className="text-4xl sm:text-5xl font-orbitron font-black text-white mb-4"
              >
                CONDICIONES DE{' '}
                <span className="gradient-text-cyan">VICTORIA</span>
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                {
                  title: 'Final Satisfactorio',
                  color: '#FFD700',
                  desc: 'Juega un Final que cumpla los requisitos de Coherencia y Clímax. Cuantos más elementos resuelva, más devastador el efecto.',
                  req: 'PN ≥ 25 + Clímax ≥ 20',
                },
                {
                  title: 'Narrativa Superior',
                  color: '#00F0FF',
                  desc: 'Acumula Puntos de Impacto Narrativo (PIN) a lo largo de la partida mediante coherencia, creatividad y momentos memorables.',
                  req: 'PIN ≥ 20-25',
                },
                {
                  title: 'Colapso del Oponente',
                  color: '#FF00FF',
                  desc: 'Fuerza a tu oponente a crear una narrativa incoherente. Si su Disonancia Narrativa alcanza el nivel crítico, su historia colapsa.',
                  req: 'Disonancia Narrativa crítica',
                },
              ].map((vic) => (
                <motion.div
                  key={vic.title}
                  variants={fadeUp}
                  className="card-cosmic p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300"
                  style={{ borderColor: `${vic.color}30` }}
                >
                  <h3
                    className="text-xl font-orbitron font-bold mb-4"
                    style={{ color: vic.color }}
                  >
                    {vic.title}
                  </h3>
                  <p className="text-gray-400 font-inter text-sm leading-relaxed mb-4">{vic.desc}</p>
                  <div
                    className="px-4 py-2 rounded-full text-xs font-orbitron font-bold"
                    style={{
                      background: `${vic.color}15`,
                      border: `1px solid ${vic.color}40`,
                      color: vic.color,
                    }}
                  >
                    {vic.req}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 text-center">
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
              ¿LISTO PARA{' '}
              <span className="gradient-text-gold text-glow-gold">COMENZAR?</span>
            </motion.h2>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/colecciones"
                className="px-8 py-4 border-2 border-[#00F0FF] text-[#00F0FF] font-orbitron font-bold text-sm tracking-widest rounded-md hover:bg-[#00F0FF] hover:text-[#0D0A1F] transition-all duration-300"
              >
                VER COLECCIONES
              </Link>
              <Link
                to="/tienda"
                className="px-8 py-4 bg-[#FFD700] text-[#0D0A1F] font-orbitron font-black text-sm tracking-widest rounded-md hover:bg-[#FFC200] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,215,0,0.5)]"
              >
                PRE-ORDENAR AHORA
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
};

export default ComoJugarPage;
