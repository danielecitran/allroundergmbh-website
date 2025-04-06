'use client';

import { motion } from 'framer-motion';
import { BuildingOfficeIcon, WrenchScrewdriverIcon, PaintBrushIcon, ClipboardDocumentCheckIcon, ChatBubbleLeftRightIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

export default function Home() {
<<<<<<< HEAD
  const services = [
    {
      title: 'Bauleitung',
      description: 'Professionelle Koordination und Überwachung Ihrer Bauprojekte',
      icon: ClipboardDocumentCheckIcon,
    },
    {
      title: 'Beratung',
      description: 'Fachkundige Beratung für Ihr Bauvorhaben',
      icon: ChatBubbleLeftRightIcon,
    },
    {
      title: 'Maurerarbeiten',
      description: 'Präzise Ausführung von Mauerwerksarbeiten',
      icon: BuildingOfficeIcon,
    },
    {
      title: 'Gipserarbeiten',
      description: 'Hochwertige Verputz- und Gipserarbeiten',
      icon: PaintBrushIcon,
    },
    {
      title: 'Renovationen',
      description: 'Umfassende Renovierungsarbeiten nach Ihren Wünschen',
      icon: ArrowPathIcon,
    },
    {
      title: 'Bodenverlegung',
      description: 'Professionelle Verlegung verschiedener Bodenbeläge',
      icon: WrenchScrewdriverIcon,
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-[url('/placeholder-construction.jpg')] bg-cover bg-center opacity-20"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Umbau-Allrounder GmbH
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Ihr zuverlässiger Partner für Bau- und Umbauprojekte in der Schweiz
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            Kontakt aufnehmen
          </motion.a>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Unsere Leistungen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Über uns</h2>
              <p className="text-gray-600 mb-4">
                Die Umbau-Allrounder GmbH ist ein zuverlässiges Familienunternehmen mit Sitz in der Schweiz. 
                Mit unserem erfahrenen Team von 2-3 Mitarbeitern bieten wir Ihnen professionelle Bau- und 
                Umbauleistungen auf höchstem Niveau.
              </p>
              <p className="text-gray-600">
                Unser Fokus liegt auf Qualität, Zuverlässigkeit und Kundenzufriedenheit. 
                Wir arbeiten eng mit unseren Kunden zusammen, um ihre Visionen zu verwirklichen.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-96"
            >
              <div className="absolute inset-0 bg-[url('/placeholder-team.jpg')] bg-cover bg-center rounded-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Kontaktieren Sie uns</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-center text-gray-600 mb-8">
              Haben Sie Fragen zu unseren Leistungen oder möchten Sie ein Angebot anfordern? 
              Kontaktieren Sie uns per E-Mail oder Telefon.
            </p>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">E-Mail</h3>
                  <p className="text-gray-600">info@umbau-allrounder.ch</p>
                </div>
                <div>
                  <h3 className="font-semibold">Telefon</h3>
                  <p className="text-gray-600">+41 XX XXX XX XX</p>
                </div>
                <div>
                  <h3 className="font-semibold">Adresse</h3>
                  <p className="text-gray-600">Musterstrasse 123, 8000 Zürich, Schweiz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
=======
  return (
    <main className="min-h-screen p-8">
      <h1>Willkommen bei Allrounder GmbH</h1>
>>>>>>> 42bf86f70deeabb1794c0a877cca0b89aba4f10b
    </main>
  );
}
