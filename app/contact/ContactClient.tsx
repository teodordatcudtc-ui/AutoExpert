'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Navigation, Car, Wrench, Shield } from 'lucide-react'
import { ContactInfo } from '@/lib/constants'
import ContactForm from '@/components/ContactForm'

export default function ContactClient() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-black via-primary-dark to-primary-black text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Contactează-ne
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Suntem aici să răspundem la toate întrebările tale și să te ajutăm cu serviciile de care ai nevoie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-heading font-bold text-primary-black mb-8">
                Informații de Contact
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-red" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-primary-black mb-2">
                      Adresa
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {ContactInfo.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-red" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-primary-black mb-2">
                      Telefon
                    </h3>
                    <a 
                      href={`tel:${ContactInfo.phone}`}
                      className="text-primary-red hover:text-primary-red/80 font-semibold text-lg"
                    >
                      {ContactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-red" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-primary-black mb-2">
                      Email
                    </h3>
                    <a 
                      href={`mailto:${ContactInfo.email}`}
                      className="text-primary-red hover:text-primary-red/80 font-semibold"
                    >
                      {ContactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-red" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-primary-black mb-2">
                      Program de Lucru
                    </h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Luni - Vineri: 08:00 - 18:00</p>
                      <p>Sâmbătă: 08:00 - 14:00</p>
                      <p>Duminică: Închis</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Services */}
              <div className="mt-12">
                <h3 className="text-xl font-heading font-semibold text-primary-black mb-6">
                  Servicii Rapide
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Car, title: 'Schimb Anvelope' },
                    { icon: Wrench, title: 'Echilibrare' },
                    { icon: Shield, title: 'Vulcanizare' },
                    { icon: Navigation, title: 'Depanare' },
                  ].map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-primary-light rounded-lg p-4 text-center group hover:bg-primary-red/10 transition-colors"
                    >
                      <service.icon className="w-8 h-8 text-primary-red mx-auto mb-2" />
                      <span className="text-sm font-medium text-primary-black">
                        {service.title}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-heading font-bold text-primary-black mb-8">
                Trimite-ne un Mesaj
              </h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-primary-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-heading font-bold text-primary-black mb-6">
              Locația Noastră
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ne găsești în București, acces facil și parcare disponibilă.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="card overflow-hidden"
          >
            <div className="aspect-video">
              <iframe
                src={ContactInfo.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Directions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-heading font-bold text-primary-black mb-6">
              Cum Să Ajungi la Noi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Instrucțiuni simple pentru a ajunge la atelierul nostru.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Cu Mașina',
                description: 'SPrelungirea Ghencea, București 077025. Parcare disponibilă în fața atelierului.',
                icon: Car,
              },
              {
                title: 'Cu Transportul Public',
                description: 'Transport public în zonă, stații la câteva minute de mers pe jos.',
                icon: Navigation,
              },
              {
                title: 'Cu Taxi/Uber',
                description: 'Căutare: "Auto Expert Group" sau adresa exactă. Timp de ajungere: 10-15 minute din centru.',
                icon: Clock,
              },
            ].map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary-red/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-red/20 transition-colors duration-300">
                  <method.icon className="w-8 h-8 text-primary-red" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary-black mb-4">
                  {method.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {method.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="section-padding bg-gradient-to-r from-primary-red to-primary-blue text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Ai O Problemă de Urgență?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Pentru situații de urgență sau depanare la fața locului, contactează-ne imediat.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <a 
                href={`tel:${ContactInfo.phone}`}
                className="bg-white text-primary-red hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:translate-y-[-3px] hover:shadow-xl text-lg"
              >
                Sună Acum: {ContactInfo.phone}
              </a>
              <a 
                href={`mailto:${ContactInfo.email}`}
                className="border-2 border-white text-white hover:bg-white hover:text-primary-red px-8 py-4 rounded-lg font-semibold transition-all duration-200 text-lg"
              >
                Trimite Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
