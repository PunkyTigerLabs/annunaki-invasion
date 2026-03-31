import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { fadeUp, staggerContainer } from '../lib/animations';
import heroBanner from '../assets/images/hero-banner.jpg';
import annunakiCard from '../assets/images/annunaki-card.jpg';
import gameplayClimax from '../assets/images/gameplay-climax.jpg';
import timelineSocial from '../assets/images/timeline-social.jpg';





const galleryImages = [
  {
    src: heroBanner,
    title: 'El Descenso',
    subtitle: 'Annunaki llegando a la Tierra',
    category: 'Escenarios',
    cycle: 'Ciclo de la Creación',
    artist: 'Artista Machiatto',
  },
  {
    src: annunakiCard,
    title: 'Enki el Arquitecto',
    subtitle: 'Señor de las Aguas y la Sabiduría',
    category: 'Personajes',
    cycle: 'Ciclo de la Creación',
    artist: 'Artista Machiatto',
  },
  {
    src: gameplayClimax,
    title: 'El Gran Clímax',
    subtitle: 'La batalla en los cielos primordiales',
    category: 'Eventos',
    cycle: 'Ciclo de las Guerras Divinas',
    artist: 'Artista Machiatto',
  },
  {
    src: timelineSocial,
    title: 'Los Archivos Olvidados',
    subtitle: 'El conocimiento que no debería existir',
    category: 'Artefactos',
    cycle: 'Ciclo del Conocimiento Prohibido',
    artist: 'Artista Machiatto',
  },
];

const categories = ['Todos', 'Personajes', 'Escenarios', 'Eventos', 'Artefactos'];

const placeholderSections = [
  {
    title: 'Personajes Annunaki',
    color: '#60A5FA',
    items: ['Anu — Padre del Cielo', 'Enlil — Señor del Viento', 'Enki — Señor de las Aguas', 'Ninhursag — Madre Tierra', 'Inanna — Reina de los Cielos'],
    coming: true,
  },
  {
    title: 'Escenarios Primordiales',
    color: '#34D399',
    items: ['El Templo E.KUR', 'Las Minas de Oro de África', 'El Jardín de Edén', 'La Ciudad de Nibiru', 'Las Cámaras de Abzu'],
    coming: true,
  },
  {
    title: 'Artefactos Prohibidos',
    color: '#FCD34D',
    items: ['La Tablilla del Destino', 'El Me Divino', 'El Arca de Noe\'', 'El Cubo de Metatrón', 'Las Llaves de Enlil'],
    coming: true,
  },
];

const GaleriaPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = activeCategory === 'Todos'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <PageTransition>
      <div className="bg-[#0D0A1F] pt-20">
        {/* Hero */}
        <section className="py-24 px-4 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeUp}
              className="text-[#FFD700] font-orbitron text-xs tracking-[0.4em] mb-4 text-glow-gold"
            >
              EL ARTE DE MACHIATTO
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-7xl font-orbitron font-black text-white mb-6"
            >
              GALERÍA DE{' '}
              <span className="gradient-text-gold text-glow-gold">ARTE</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-gray-300 font-inter text-lg max-w-3xl mx-auto leading-relaxed"
            >
              El Futurismo Ancestral hecho visible. Cada pieza es una ventana a la verdad
              que los Annunaki dejaron grabada en la memoria colectiva de la humanidad.
            </motion.p>
          </motion.div>
        </section>

        {/* Aesthetic Description */}
        <section className="py-16 px-4 bg-[#080618]">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                {
                  title: 'Paleta Cósmica',
                  desc: 'Azul lapislázuli profundo para los orígenes celestiales. Oro y ámbar para la manifestación terrena. Cian y magenta para la tecnología Annunaki.',
                  icon: '🎨',
                  color: '#00F0FF',
                },
                {
                  title: 'Símbolos Reales',
                  desc: 'Cada símbolo parte de investigación en iconografía sumeria, acadia y babilónica auténtica. Los jeroglíficos son reales. Los significados, reveladores.',
                  icon: '𒀭',
                  color: '#FFD700',
                },
                {
                  title: 'Tecnología Divina',
                  desc: 'Los atributos que los sumerios describían como poderes divinos, reinterpretados como tecnología avanzada. Lo sagrado y lo científico convergen.',
                  icon: '⚡',
                  color: '#FF00FF',
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="card-cosmic p-6 text-center rounded-xl"
                  style={{ borderColor: `${item.color}30` }}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3
                    className="text-sm font-orbitron font-bold mb-3 tracking-wide"
                    style={{ color: item.color }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-400 font-inter text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Category Filter */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  variants={fadeUp}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 text-sm font-orbitron font-bold tracking-wide rounded-full border transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-[#00F0FF] text-[#0D0A1F] border-[#00F0FF]'
                      : 'text-gray-400 border-[#2A2555] hover:text-[#00F0FF] hover:border-[#00F0FF]'
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </motion.div>

            {/* Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <AnimatePresence>
                {filteredImages.map((img, idx) => (
                  <motion.div
                    key={img.title}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="relative rounded-xl overflow-hidden cursor-pointer group border border-[#2A2555] hover:border-[#00F0FF]/40 transition-all duration-300"
                    onClick={() => setSelectedImage(img)}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={img.src}
                        alt={img.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0A1F] via-[#0D0A1F]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-xs font-orbitron text-[#00F0FF] mb-1">{img.category}</div>
                      <h3 className="text-xl font-orbitron font-black text-white mb-1">{img.title}</h3>
                      <p className="text-gray-400 font-inter text-sm">{img.subtitle}</p>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-8 h-8 rounded-full bg-[#00F0FF]/20 border border-[#00F0FF] flex items-center justify-center text-[#00F0FF] text-xs">
                        ↗
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Placeholder Sections */}
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
                MÁS ARTE EN CAMINO
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-4xl sm:text-5xl font-orbitron font-black text-white mb-4"
              >
                COLECCIONES{' '}
                <span className="gradient-text-magenta">PRÓXIMAMENTE</span>
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {placeholderSections.map((section) => (
                <motion.div
                  key={section.title}
                  variants={fadeUp}
                  className="card-cosmic p-6 rounded-xl border border-dashed"
                  style={{ borderColor: `${section.color}30` }}
                >
                  <h3
                    className="text-lg font-orbitron font-bold mb-4"
                    style={{ color: section.color }}
                  >
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li
                        key={item}
                        className="text-gray-500 font-inter text-sm flex items-center gap-2"
                      >
                        <span style={{ color: section.color }}>›</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  {section.coming && (
                    <div className="mt-4 text-center">
                      <span
                        className="text-xs font-orbitron px-3 py-1 rounded-full border"
                        style={{ borderColor: section.color, color: section.color, background: `${section.color}10` }}
                      >
                        EN PRODUCCIÓN
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Artist Attribution */}
        <section className="py-16 px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeUp}
              className="text-gray-600 font-inter text-sm"
            >
              Arte conceptual por el equipo artístico de{' '}
              <span className="text-[#FFD700]">Punky Tiger Labs</span>.
              Créditos completos disponibles en la edición física.
            </motion.p>
          </motion.div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full rounded-xl border border-[#2A2555]"
                />
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-orbitron font-black text-white">{selectedImage.title}</h3>
                    <p className="text-gray-400 font-inter text-sm">{selectedImage.subtitle} · {selectedImage.cycle}</p>
                  </div>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="text-gray-400 hover:text-white text-2xl font-orbitron transition-colors"
                  >
                    ✕
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
};

export default GaleriaPage;
