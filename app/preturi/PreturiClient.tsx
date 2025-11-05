'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Star, Phone, Mail, Clock, Shield, Award } from 'lucide-react'
import { Pricing, ContactInfo } from '@/lib/constants'
import Link from 'next/link'

export default function PreturiClient() {
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
              Prețurile Noastre
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Prețuri transparente și competitive pentru toate serviciile noastre de vulcanizare și întreținere auto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/programari" className="btn-primary text-lg px-8 py-4">
                Programează-te Acum
              </Link>
              <a 
                href={`tel:${ContactInfo.phone}`}
                className="btn-secondary text-lg px-8 py-4"
              >
                Sună: {ContactInfo.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-black mb-6">
              Pachete de Servicii
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Alege pachetul care se potrivește cel mai bine nevoilor tale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Pricing.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`card p-8 relative ${
                  plan.popular ? 'ring-2 ring-primary-red shadow-xl' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-red text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Cel mai popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-heading font-bold text-primary-black mb-4">
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-bold text-primary-red mb-2">
                    {plan.price}
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary-red mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/programari"
                  className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-primary-red text-white hover:bg-primary-red/90'
                      : 'bg-gray-100 text-primary-black hover:bg-gray-200'
                  }`}
                >
                  Alege Pachetul
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Services Pricing */}
      <section className="section-padding bg-primary-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-black mb-6">
              Prețuri Servicii Individuale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Prețuri clare pentru fiecare serviciu pe care îl oferim.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary-red text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Serviciu</th>
                      <th className="px-6 py-4 text-left font-semibold">Descriere</th>
                      <th className="px-6 py-4 text-right font-semibold">Preț</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      {
                        service: 'Schimb anvelope (4 bucăți)',
                        description: 'Demontare, montare și echilibrare',
                        price: '80-120 RON',
                      },
                      {
                        service: 'Echilibrare roți',
                        description: 'Echilibrare computerizată pe 4 roți',
                        price: '40-60 RON',
                      },
                      {
                        service: 'Vulcanizare anvelopă',
                        description: 'Reparație pană sau deteriorare',
                        price: '30-50 RON',
                      },
                      {
                        service: 'Reparație jantă',
                        description: 'Reparație jantă deteriorată',
                        price: '100-200 RON',
                      },
                      {
                        service: 'Verificare presiune TPMS',
                        description: 'Verificare și calibrare sistem TPMS',
                        price: '50-80 RON',
                      },
                      {
                        service: 'Depanare la fața locului',
                        description: 'Servicii de urgență la domiciliu',
                        price: '150-300 RON',
                      },
                      {
                        service: 'Depozitare anvelope',
                        description: 'Depozitare sezonieră (6 luni)',
                        price: '200-300 RON',
                      },
                    ].map((item, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="hover:bg-gray-50"
                      >
                        <td className="px-6 py-4 font-medium text-primary-black">
                          {item.service}
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          {item.description}
                        </td>
                        <td className="px-6 py-4 text-right font-semibold text-primary-red">
                          {item.price}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Our Prices */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-black mb-6">
              De Ce Să Ne Alegi?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Prețuri competitive, calitate garantată și servicii profesionale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Prețuri Competitive',
                description: 'Oferim cele mai bune prețuri din piață pentru servicii de calitate.',
              },
              {
                icon: Shield,
                title: 'Calitate Garantată',
                description: 'Toate serviciile vin cu garanție completă și asigurăm calitatea.',
              },
              {
                icon: Clock,
                title: 'Servicii Rapide',
                description: 'Executăm serviciile rapid și eficient, fără compromisuri.',
              },
              {
                icon: Star,
                title: 'Experiență',
                description: 'Peste 10 ani de experiență în domeniul auto.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-primary-red/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-red/20 transition-colors duration-300">
                  <item.icon className="w-8 h-8 text-primary-red" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary-black mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Request */}
      <section className="section-padding bg-primary-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-black mb-6">
              Ai Nevoie de Ofertă Personalizată?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Pentru servicii complexe sau oferte personalizate, contactează-ne și îți vom oferi 
              o estimare precisă a costurilor.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Phone className="w-8 h-8 text-primary-red mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-primary-black mb-2">
                  Sună-ne Direct
                </h3>
                <p className="text-gray-600 mb-4">
                  Pentru oferte rapide și consultanță tehnică
                </p>
                <a 
                  href={`tel:${ContactInfo.phone}`}
                  className="text-primary-red hover:text-primary-red/80 font-semibold"
                >
                  {ContactInfo.phone}
                </a>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Mail className="w-8 h-8 text-primary-red mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-primary-black mb-2">
                  Trimite Email
                </h3>
                <p className="text-gray-600 mb-4">
                  Pentru oferte detaliate și documentație
                </p>
                <a 
                  href={`mailto:${ContactInfo.email}`}
                  className="text-primary-red hover:text-primary-red/80 font-semibold"
                >
                  {ContactInfo.email}
                </a>
              </div>
            </div>

            <Link 
              href="/programari"
              className="btn-primary text-lg px-8 py-4"
            >
              Programează-te Acum
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
