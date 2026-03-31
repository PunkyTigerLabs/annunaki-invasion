import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { fadeUp, staggerContainer } from '../lib/animations';





const cycles = [
  {
    num: '01',
    name: 'Ciclo de la Creación',
    nameShort: 'CREACIÓN',
    color: '#00F0FF',
    glow: 'rgba(0,240,255,0.3)',
    desc: 'Enki y Ninhursag moldean la primera chispa de humanidad. La manipulación genética sagrada da origen a seres capaces de portar el conocimiento celestial. El Adamu despierta.',
    cards: '43 Cartas',
  },
  {
    num: '02',
    name: 'Ciclo del Diluvio',
    nameShort: 'DILUVIO',
    color: '#4A90D9',
    glow: 'rgba(74,144,217,0.3)',
    desc: 'La catástrofe global no fue accidental. Linajes selectos fueron preservados en arcas de conocimiento y metal. El diluvio borra lo que fue. Solo los elegidos recuerdan.',
    cards: '41 Cartas',
  },
  {
    num: '03',
    name: 'Ciclo de la Rebelión',
    nameShort: 'REBELIÓN',
    color: '#FF00FF',
    glow: 'rgba(255,0,255,0.3)',
    desc: 'Los Igigi, cansados de trabajar las minas de la Tierra, se levantan contra los señores del cielo. La fractura en el panteón Annunaki cambia el destino de dos mundos.',
    cards: '44 Cartas',
  },
  {
    num: '04',
    name: 'Ciclo de las Guerras Divinas',
    nameShort: 'GUERRAS DIVINAS',
    color: '#CC0066',
    glow: 'rgba(204,0,102,0.3)',
    desc: 'La rivalidad entre Enki y Enlil escala a un conflicto cósmico. Facciones se forman. Ciudades se elevan y caen. Los humanos, peones y héroes al mismo tiempo.',
    cards: '46 Cartas',
  },
  {
    num: '05',
    name: 'Ciclo de la Ascensión',
    nameShort: 'ASCENSIÓN',
    color: '#FFD700',
    glow: 'rgba(255,215,0,0.3)',
    desc: 'Ciertos linajes humanos son elevados a estados semi-divinos. Reyes que llevan sangre celeste. Sacerdotes que hablan directamente con las estrellas. El umbral se cruza.',
    cards: '42 Cartas',
  },
  {
    num: '06',
    name: 'Ciclo del Conocimiento Prohibido',
    nameShort: 'CONOCIMIENTO PROHIBIDO',
    color: '#FF8C00',
    glow: 'rgba(255,140,0,0.3)',
    desc: 'Secretos tecnológicos y espirituales son transferidos a la humanidad. Anti-gravedad. Ingeniería genética. Manipulación del tiempo. Algunos dones no deberían existir.',
    cards: '40 Cartas',
  },
  {
    num: '07',
    name: 'Ciclo del Retorno',
    nameShort: 'RETORNO',
    color: '#9B59B6',
    glow: 'rgba(155,89,182,0.3)',
    desc: 'Nibiru se aproxima en su órbita milenaria. Los preparativos comenzaron hace siglos. Las profecías codificadas en piedra apuntan a un momento que está muy cerca.',
    cards: '44 Cartas',
  },
];

const aestheticPillars = [
  {
    title: 'Iconografía Auténtica',
    desc: 'Cada símbolo parte de investigación real en textos cuneiformes sumerios, acadios y babilónicos. La base histórica es real.',
    icon: '𒀭',
  },
  {
    title: 'Reinterpretación Tecnológica',
    desc: 'Los atributos divinos reinterpretados como tecnología avanzada incomprensible para la mente antigua. Lo sagrado era técnico.',
    icon: '⚡',
  },
  {
    title: 'Códigos Visuales',
    desc: 'Múltiples capas de información visual: desde elementos obvios hasta códigos simbólicos que recompensan la observación atenta.',
    icon: '🔮',
  },
  {
    title: 'Tipografía Integrada',
    desc: 'Tipografía personalizada que integra elementos cuneiformes con legibilidad contemporánea. Antiguo y futuro en perfecta armonía.',
    icon: '𒁹',
  },
];

const UniversoPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="bg-[#0D0A1F] pt-20">
        {/* Hero */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(0,240,255,0.3) 60px, rgba(0,240,255,0.3) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(0,240,255,0.3) 60px, rgba(0,240,255,0.3) 61px)',
            }}
          />
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.p
                variants={fadeUp}
                className="text-[#00F0FF] font-orbitron text-xs tracking-[0.4em] mb-4 text-glow-cyan"
              >
                EL UNIVERSO
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="text-5xl sm:text-7xl font-orbitron font-black text-white mb-6 leading-tight"
              >
                AQUELLOS QUE DEL{' '}
                <span className="gradient-text-cyan text-glow-cyan">CIELO</span>
                <br />A LA TIERRA VINIERON
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-gray-300 font-inter text-lg max-w-3xl mx-auto leading-relaxed mb-8"
              >
                Los Annunaki emergen de los textos cuneiformes sumerios como los arquitectos
                olvidados de la civilización humana. ¿Mitología? ¿Historia alternativa?
                ¿O una verdad demasiado profunda para la narrativa convencional?
              </motion.p>
              <motion.div
                variants={fadeUp}
                className="inline-block px-6 py-2 border border-[#FFD700]/30 bg-[#FFD700]/10 rounded-full"
              >
                <span className="text-[#FFD700] font-orbitron text-xs tracking-widest">
                  𒀭 FUTURISMO ANCESTRAL — UNA NUEVA FORMA DE RECORDAR 𒀭
                </span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Context Section */}
        <section className="py-16 px-4 bg-[#080618]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h2
                  variants={fadeUp}
                  className="text-3xl font-orbitron font-black text-white mb-6"
                >
                  LOS ARQUITECTOS{' '}
                  <span className="gradient-text-gold">OLVIDADOS</span>
                </motion.h2>
                <motion.div variants={fadeUp} className="space-y-4 text-gray-300 font-inter text-sm leading-relaxed">
                  <p>
                    La historiografía convencional los interpreta como construcciones mitológicas,
                    personificaciones de fuerzas naturales o proyecciones psicológicas colectivas.
                  </p>
                  <p>
                    Investigadores alternativos como Zecharia Sitchin, Anton Parks y Michael
                    Tellinger proponen algo radicalmente diferente: los Annunaki como seres
                    extraterrestres avanzados del planeta Nibiru, que visitaron la Tierra en busca
                    de recursos minerales y crearon a los humanos modernos mediante manipulación
                    genética de homínidos existentes.
                  </p>
                  <p>
                    <span className="text-[#00F0FF]">Invasión Annunaki</span> navega deliberadamente
                    el intersticio entre estas interpretaciones, creando un espacio narrativo donde
                    historia documentada, especulación arqueológica e imaginación conspirativa
                    se entrelazan en un tapiz coherente pero multidimensional.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h2
                  variants={fadeUp}
                  className="text-3xl font-orbitron font-black text-white mb-6"
                >
                  EL SISTEMA DE{' '}
                  <span className="gradient-text-magenta">METADATOS</span>
                </motion.h2>
                <motion.div variants={fadeUp} className="space-y-4">
                  {[
                    {
                      title: 'Códigos Sumerios',
                      desc: 'Cada carta contiene un código alfanumérico basado en escritura cuneiforme. Los códigos conectan cartas aparentemente no relacionadas en "constelaciones de significado".',
                      color: '#00F0FF',
                    },
                    {
                      title: 'Líneas Temporales',
                      desc: 'Cada carta pertenece a una de cinco eras cronológicas: Pre-Diluviana, Diluviana, Post-Diluviana, Oculta, Retorno.',
                      color: '#FFD700',
                    },
                    {
                      title: 'Frecuencias Resonantes',
                      desc: 'Valor numérico oculto que representa la "frecuencia vibracional" de cada carta. Cartas con frecuencias complementarias activan efectos de resonancia.',
                      color: '#FF00FF',
                    },
                    {
                      title: 'Niveles de Revelación',
                      desc: 'Las capas más profundas de significado se desbloquean con la exploración comunitaria colaborativa. El juego más profundo vive más allá de las cartas.',
                      color: '#FF8C00',
                    },
                  ].map((item) => (
                    <div key={item.title} className="card-cosmic p-4 border-l-2" style={{ borderLeftColor: item.color }}>
                      <h4 className="font-orbitron font-bold text-sm mb-1" style={{ color: item.color }}>
                        {item.title}
                      </h4>
                      <p className="text-gray-400 font-inter text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 7 Cycles */}
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
                ESTRUCTURA DE LA EDICIÓN
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-4xl sm:text-5xl font-orbitron font-black text-white mb-4"
              >
                7 CICLOS{' '}
                <span className="gradient-text-gold text-glow-gold">NARRATIVOS</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-gray-400 font-inter text-base max-w-2xl mx-auto"
              >
                300 cartas organizadas en ciclos narrativos interconectados que reflejan
                la cosmología y mitología sumeria. 300: el número del panteón Annunaki.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-4"
            >
              {cycles.map((cycle, idx) => (
                <motion.div
                  key={cycle.num}
                  variants={fadeUp}
                  className="card-cosmic rounded-xl overflow-hidden border hover:scale-[1.01] transition-transform duration-300 cursor-pointer group"
                  style={{ borderColor: `${cycle.color}30` }}
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6">
                    <div className="flex-shrink-0 text-center">
                      <div
                        className="text-5xl font-orbitron font-black group-hover:scale-110 transition-transform duration-300"
                        style={{ color: cycle.color, textShadow: `0 0 20px ${cycle.glow}` }}
                      >
                        {cycle.num}
                      </div>
                      <div className="text-xs font-orbitron text-gray-500 mt-1">{cycle.cards}</div>
                    </div>
                    <div className="w-px h-16 bg-[#2A2555] hidden md:block flex-shrink-0" />
                    <div className="flex-1">
                      <h3
                        className="text-xl font-orbitron font-bold mb-2 tracking-wide"
                        style={{ color: cycle.color }}
                      >
                        {cycle.name}
                      </h3>
                      <p className="text-gray-400 font-inter text-sm leading-relaxed">{cycle.desc}</p>
                    </div>
                    <div
                      className="flex-shrink-0 px-4 py-2 rounded-full text-xs font-orbitron font-bold border opacity-60 group-hover:opacity-100 transition-opacity"
                      style={{ borderColor: cycle.color, color: cycle.color }}
                    >
                      CICLO {idx + 1}/7
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Ancient Futurism */}
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
                DIRECCIÓN ESTÉTICA
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-4xl sm:text-5xl font-orbitron font-black text-white mb-4"
              >
                <span className="gradient-text-cyan">FUTURISMO</span>{' '}
                ANCESTRAL
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-gray-400 font-inter text-base max-w-2xl mx-auto"
              >
                Una síntesis cuidadosa de iconografía histórica auténtica y extrapolación
                tecnológica especulativa. Lo que los antiguos llamaban divino, nosotros
                llamamos tecnología incomprensible.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {aestheticPillars.map((pillar) => (
                <motion.div
                  key={pillar.title}
                  variants={fadeUp}
                  className="card-cosmic p-6 text-center hover:border-[#00F0FF]/40 transition-all duration-300 group"
                >
                  <div className="text-4xl mb-4">{pillar.icon}</div>
                  <h3 className="text-sm font-orbitron font-bold text-[#00F0FF] mb-3 tracking-wide group-hover:text-glow-cyan">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-400 font-inter text-xs leading-relaxed">{pillar.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Hidden Codes Teaser */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0A1F] via-[#1A0D3D] to-[#0D0A1F]" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeUp}
                className="text-6xl sm:text-8xl font-orbitron font-black text-[#2A2555] mb-6 tracking-widest"
              >
                𒀭𒁹𒀭𒋾𒀭
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-5xl font-orbitron font-black text-white mb-6"
              >
                EL JUEGO{' '}
                <span className="gradient-text-cyan text-glow-cyan">DETRÁS</span>
                {' '}DEL JUEGO
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-gray-400 font-inter text-base max-w-2xl mx-auto mb-10"
              >
                Los códigos sumerios en las cartas no son decorativos. Son un sistema de
                descubrimiento colaborativo diseñado para revelar sus secretos a lo largo de
                meses y años de juego comunitario. ¿Estás listo para descifrarlos?
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link
                  to="/colecciones"
                  className="inline-block px-8 py-4 bg-[#FFD700] text-[#0D0A1F] font-orbitron font-black text-sm tracking-widest rounded-md hover:bg-[#FFC200] transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,215,0,0.5)] hover:scale-105"
                >
                  VER LA COLECCIÓN →
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default UniversoPage;
