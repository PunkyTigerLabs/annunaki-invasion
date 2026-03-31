import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { fadeUp, staggerContainer } from '../lib/animations';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import heroBanner from '../assets/images/hero-banner.jpg';





const pricingTiers = [
  {
    id: 'starter',
    name: 'Pack Iniciador',
    subtitle: 'Tu primer arco narrativo',
    price: '$299',
    currency: 'MXN',
    color: '#00F0FF',
    highlight: false,
    includes: [
      '60 cartas de juego',
      '1 carta Premisa',
      '15 cartas Subtrama',
      'Reglamento completo',
      'Guía de inicio rápido',
      'Acceso a la app companion',
    ],
    cta: 'PRE-ORDENAR PACK',
    badge: null,
  },
  {
    id: 'collector',
    name: 'Edición Coleccionista',
    subtitle: 'Para los narradores serios',
    price: '$699',
    currency: 'MXN',
    color: '#FFD700',
    highlight: true,
    includes: [
      'Pack Iniciador completo',
      '2 sobres de expansión (15c c/u)',
      'Caja de almacenamiento metálica',
      'Playmat Invasión Annunaki',
      '1 carta Ultra Rara garantizada',
      'Código de desbloqueo digital',
      'Acceso beta a torneos',
    ],
    cta: 'MÁS POPULAR — PRE-ORDENAR',
    badge: '🔥 MÁS POPULAR',
  },
  {
    id: 'vip',
    name: 'Edición VIP Día Cero',
    subtitle: 'Solo 1,000 unidades',
    price: '$1,499',
    currency: 'MXN',
    color: '#FF00FF',
    highlight: false,
    includes: [
      'Todo de Edición Coleccionista',
      'Carta numerada y firmada',
      '3 cartas Legendarias garantizadas',
      'Acceso a servidor VIP privado',
      'Reconocimiento como Fundador',
      'Invitación al Torneo Fundacional',
      'Caja exclusiva numerada',
      'Contenido digital exclusivo de por vida',
    ],
    cta: 'RESERVAR VIP',
    badge: '⚡ EDICIÓN LIMITADA',
  },
];

const faqItems = [
  {
    question: '¿Cuándo llegará mi pedido?',
    answer: 'La fecha estimada de envío es Q4 2025. Los pedidos VIP recibirán notificación con 2 semanas de anticipación. Todos los compradores serán notificados por correo con actualizaciones de producción.',
  },
  {
    question: '¿Qué incluye el acceso a la app companion?',
    answer: 'La app companion rastrea automáticamente el PN, Clímax y Coherencia durante las partidas. También genera resúmenes narrativos de cada juego, sugerencias de construcción de mazos y — para la versión completa — el trailer generado por IA exclusivo de cada partida.',
  },
  {
    question: '¿Las cartas son compatibles con futuras ediciones?',
    answer: 'Sí. Machiatto está diseñado como un multiverso expandible. Las cartas de Invasión Annunaki serán compatibles con todas las ediciones futuras, con posibles restricciones en formatos competitivos oficiales.',
  },
  {
    question: '¿Qué es la carta numerada y firmada del VIP?',
    answer: 'Cada una de las 1,000 ediciones VIP incluye una carta Legendaria numerada (ej. 0042/1000) y firmada físicamente por el equipo de Punky Tiger Labs. Estas cartas son coleccionables únicos con verificación de autenticidad.',
  },
  {
    question: '¿Puedo cancelar mi pre-orden?',
    answer: 'Sí. Los pre-órdenes pueden cancelarse hasta 30 días antes de la fecha de envío para reembolso completo. Después de ese plazo, se aplica una tarifa de cancelación del 15%.',
  },
  {
    question: '¿Hay envíos internacionales?',
    answer: 'Sí, hacemos envíos a México, Estados Unidos, Latinoamérica y España. Los costos de envío internacionales se calculan al momento del checkout. Las ediciones VIP tienen envío estándar incluido dentro de México.',
  },
  {
    question: '¿Qué es el servidor VIP privado?',
    answer: 'Un canal de Discord exclusivo para compradores VIP donde el equipo de desarrollo comparte contenido behind-the-scenes, previews exclusivos de futuras ediciones, responde preguntas directas y organiza eventos privados para fundadores.',
  },
  {
    question: '¿Cuántas cartas tiene una edición completa de Invasión Annunaki?',
    answer: 'La edición completa consta de 300 cartas únicas organizadas en 7 ciclos narrativos con 6 niveles de rareza, incluyendo 3 cartas Secretas cuya funcionalidad completa aún no ha sido revelada públicamente.',
  },
];

const TiendaPage: React.FC = () => {
  const [notifyEmail, setNotifyEmail] = useState('');
  const [notifySubmitted, setNotifySubmitted] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (notifyEmail) {
      setNotifySubmitted(true);
      setNotifyEmail('');
    }
  };

  return (
    <PageTransition>
      <div className="bg-[#0D0A1F] pt-20">

        {/* Hero */}
        <section
          className="relative py-32 px-4 overflow-hidden"
          style={{
            backgroundImage: `url(${heroBanner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0A1F]/70 via-[#0D0A1F]/60 to-[#0D0A1F]" />
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF00FF]/10 border border-[#FF00FF]/30 rounded-full mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-[#FF00FF] animate-pulse" />
                <span className="text-[#FF00FF] font-orbitron text-xs tracking-widest">
                  PRE-ORDEN DISPONIBLE
                </span>
              </motion.div>
              <motion.h1
                variants={fadeUp}
                className="text-5xl sm:text-7xl font-orbitron font-black text-white mb-4 leading-tight"
              >
                TIENDA{' '}
                <span className="gradient-text-gold text-glow-gold">OFICIAL</span>
              </motion.h1>
              <motion.h2
                variants={fadeUp}
                className="text-2xl sm:text-3xl font-orbitron font-light text-[#00F0FF] mb-6 text-glow-cyan"
              >
                INVASIÓN ANNUNAKI — PRIMERA EDICIÓN
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-gray-300 font-inter text-lg max-w-2xl mx-auto leading-relaxed mb-8"
              >
                Solo 1,000 unidades VIP disponibles. Una vez agotadas, no habrá reimpresión
                de la edición numerada. Sé parte de la historia desde el primer momento.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-6">
                {[
                  { label: 'Unidades VIP', value: '1,000', color: '#FF00FF' },
                  { label: 'Fecha estimada', value: 'Q4 2025', color: '#FFD700' },
                  { label: 'Cartas únicas', value: '300', color: '#00F0FF' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div
                      className="text-3xl font-orbitron font-black mb-1"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400 font-inter tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* VIP Urgency Banner */}
        <section className="py-8 px-4 bg-gradient-to-r from-[#FF00FF]/10 via-[#FF00FF]/5 to-[#FF00FF]/10 border-y border-[#FF00FF]/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <span className="text-2xl">⚡</span>
              <p className="text-[#FF00FF] font-orbitron font-bold text-sm tracking-wide">
                EDICIÓN VIP DÍA CERO — 1,000 UNIDADES NUMERADAS Y FIRMADAS
              </p>
              <span className="text-2xl">⚡</span>
            </motion.div>
          </div>
        </section>

        {/* Pricing Tiers */}
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
                ELIGE TU EDICIÓN
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-4xl sm:text-5xl font-orbitron font-black text-white mb-4"
              >
                PAQUETES DE{' '}
                <span className="gradient-text-cyan">PRE-ORDEN</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-gray-400 font-inter text-base max-w-2xl mx-auto"
              >
                Todos los pre-órdenes incluyen acceso anticipado a la app companion.
                Precios en pesos mexicanos, IVA incluido.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
            >
              {pricingTiers.map((tier) => (
                <motion.div
                  key={tier.id}
                  variants={fadeUp}
                  className={`relative flex flex-col rounded-2xl border transition-all duration-300 cursor-pointer ${
                    tier.highlight
                      ? 'scale-105 shadow-2xl'
                      : 'hover:scale-[1.02]'
                  } ${
                    selectedTier === tier.id ? 'ring-2' : ''
                  }`}
                  style={{
                    borderColor: `${tier.color}40`,
                    background: tier.highlight
                      ? `linear-gradient(135deg, #13103A 0%, #1a1060 100%)`
                      : '#13103A',
                    boxShadow: tier.highlight
                      ? `0 0 40px ${tier.color}20`
                      : undefined,
                    // ringColor: tier.color,
                  }}
                  onClick={() => setSelectedTier(tier.id)}
                >
                  {tier.badge && (
                    <div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-orbitron font-black text-[#0D0A1F] whitespace-nowrap"
                      style={{ background: tier.color }}
                    >
                      {tier.badge}
                    </div>
                  )}

                  <div className="p-8 flex-1 flex flex-col">
                    <div className="mb-6">
                      <h3
                        className="text-xl font-orbitron font-black mb-1"
                        style={{ color: tier.color }}
                      >
                        {tier.name}
                      </h3>
                      <p className="text-gray-500 font-inter text-sm">{tier.subtitle}</p>
                    </div>

                    <div className="mb-8">
                      <div className="flex items-baseline gap-2">
                        <span
                          className="text-5xl font-orbitron font-black"
                          style={{ color: tier.color }}
                        >
                          {tier.price}
                        </span>
                        <span className="text-gray-500 font-inter text-sm">{tier.currency}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 flex-1 mb-8">
                      {tier.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm font-inter text-gray-300">
                          <span style={{ color: tier.color }} className="mt-0.5 text-xs flex-shrink-0">
                            ✓
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <button
                      className="w-full py-4 font-orbitron font-black text-sm tracking-widest rounded-xl transition-all duration-300 hover:scale-105"
                      style={
                        tier.highlight
                          ? {
                              background: tier.color,
                              color: '#0D0A1F',
                              boxShadow: `0 0 20px ${tier.color}40`,
                            }
                          : {
                              background: 'transparent',
                              color: tier.color,
                              border: `2px solid ${tier.color}`,
                            }
                      }
                      onMouseEnter={(e) => {
                        if (!tier.highlight) {
                          e.currentTarget.style.background = tier.color;
                          e.currentTarget.style.color = '#0D0A1F';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!tier.highlight) {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = tier.color;
                        }
                      }}
                    >
                      {tier.cta}
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Notify Me Form */}
        <section className="py-16 px-4 bg-[#080618]">
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
                ALERTA DE DISPONIBILIDAD
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl font-orbitron font-black text-white mb-4"
              >
                AVÍSAME CUANDO{' '}
                <span className="gradient-text-gold">ESTÉ LISTO</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-gray-400 font-inter text-base mb-8"
              >
                Regístrate para ser el primero en saber cuando abra la venta oficial
                y recibe un descuento exclusivo de pre-lanzamiento.
              </motion.p>

              {notifySubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="card-cosmic p-8 rounded-xl border border-[#FFD700]/30"
                >
                  <div className="text-5xl mb-4">✨</div>
                  <h3 className="text-xl font-orbitron font-bold text-[#FFD700] mb-2">
                    ¡Registrado con Éxito!
                  </h3>
                  <p className="text-gray-400 font-inter text-sm">
                    Te avisaremos en cuanto la venta esté disponible. Revisa tu correo
                    para confirmar tu registro.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  variants={fadeUp}
                  onSubmit={handleNotify}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <input
                    type="email"
                    value={notifyEmail}
                    onChange={(e) => setNotifyEmail(e.target.value)}
                    placeholder="tu@correo.com"
                    required
                    className="flex-1 px-5 py-4 bg-[#13103A] border border-[#2A2555] rounded-xl text-white font-inter text-sm placeholder-gray-600 focus:outline-none focus:border-[#FFD700] transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-[#FFD700] text-[#0D0A1F] font-orbitron font-black text-sm tracking-widest rounded-xl hover:bg-[#FFC200] transition-all duration-300 whitespace-nowrap hover:shadow-[0_0_20px_rgba(255,215,0,0.4)]"
                  >
                    AVISARME
                  </button>
                </motion.form>
              )}
            </motion.div>
          </div>
        </section>

        {/* What's Included Visual */}
        <section className="py-24 px-4">
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
                ¿QUÉ{' '}
                <span className="gradient-text-magenta">RECIBES?</span>
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                {
                  icon: '🃏',
                  title: 'Cartas Físicas',
                  desc: 'Impresas en cartón premium con acabado mate laminado y bordes dorados. Cada carta es una obra de arte coleccionable.',
                  color: '#00F0FF',
                },
                {
                  icon: '📱',
                  title: 'App Companion',
                  desc: 'Rastrea PN, Clímax y Coherencia. Genera resúmenes narrativos. La versión completa crea tráilers únicos por partida con IA.',
                  color: '#FF00FF',
                },
                {
                  icon: '📖',
                  title: 'Reglamento Completo',
                  desc: 'Libro de reglas impreso + versión digital. Incluye ejemplos detallados, guía de construcción de mazos y referencia rápida.',
                  color: '#FFD700',
                },
                {
                  icon: '🌐',
                  title: 'Acceso Digital',
                  desc: 'Cuenta en la plataforma Machiatto. Timeline personal. Torneos online. Comunidad exclusiva de narradores.',
                  color: '#9B59B6',
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="card-cosmic p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300"
                  style={{ borderColor: `${item.color}30` }}
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3
                    className="text-base font-orbitron font-bold mb-3"
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

        {/* FAQ */}
        <section className="py-24 px-4 bg-[#080618]">
          <div className="max-w-3xl mx-auto">
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
                RESPUESTAS
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-4xl sm:text-5xl font-orbitron font-black text-white mb-4"
              >
                PREGUNTAS{' '}
                <span className="gradient-text-cyan">FRECUENTES</span>
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <Accordion type="single" collapsible className="space-y-3">
                {faqItems.map((item, idx) => (
                  <AccordionItem
                    key={idx}
                    value={`item-${idx}`}
                    className="border border-[#2A2555] rounded-xl px-6 bg-[#13103A] data-[state=open]:border-[#00F0FF]/30 transition-all duration-300"
                  >
                    <AccordionTrigger className="text-white font-orbitron font-semibold text-sm tracking-wide hover:no-underline hover:text-[#00F0FF] transition-colors py-5">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400 font-inter text-sm leading-relaxed pb-5">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0A1F] via-[#1A0D3D] to-[#0D0A1F]" />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,215,0,0.3) 40px, rgba(255,215,0,0.3) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,215,0,0.3) 40px, rgba(255,215,0,0.3) 41px)',
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeUp}
                className="text-8xl font-orbitron font-black text-[#2A2555]/50 mb-4 tracking-widest"
              >
                𒀭
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="text-4xl sm:text-6xl font-orbitron font-black text-white mb-4 leading-tight"
              >
                EL TIEMPO DE{' '}
                <span className="gradient-text-gold text-glow-gold">LOS ANNUNAKI</span>
                <br />
                HA LLEGADO
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-gray-300 font-inter text-lg max-w-2xl mx-auto mb-10"
              >
                1,000 unidades. Una sola oportunidad de ser un Fundador.
                Cuando se agoten, esta puerta se cierra para siempre.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => document.querySelector('.pricing-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-5 bg-[#FFD700] text-[#0D0A1F] font-orbitron font-black text-base tracking-widest rounded-xl hover:bg-[#FFC200] transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,215,0,0.6)] hover:scale-105"
                >
                  VER PAQUETES →
                </button>
                <button
                  onClick={() => {
                    const section = document.getElementById('notify-section');
                    section?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-10 py-5 bg-transparent border-2 border-[#00F0FF] text-[#00F0FF] font-orbitron font-bold text-base tracking-widest rounded-xl hover:bg-[#00F0FF] hover:text-[#0D0A1F] transition-all duration-300"
                >
                  AVISARME
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
};

export default TiendaPage;
