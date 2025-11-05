'use client'

import { motion } from 'framer-motion'
import { Circle, Gauge, Wrench, Car, Truck, Settings, CheckCircle, Clock, Shield, Award } from 'lucide-react'
import { Services, ContactInfo } from '@/lib/constants'
import Link from 'next/link'

const iconMap = {
  tire: Circle,
  balance: Gauge,
  wrench: Wrench,
  wheel: Car,
  truck: Truck,
  gauge: Settings,
}

export default function ServiciiClient() {
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
              Serviciile Noastre
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Oferim servicii complete de vulcanizare și întreținere auto cu echipamente moderne 
              și personal calificat pentru a-ți asigura siguranța pe drum.
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

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Services.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap]
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-8 group hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-primary-red/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-red/20 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-primary-red" />
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold text-primary-black mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary-red mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary-red">
                      {service.price}
                    </span>
                    <Link 
                      href={`/servicii/${service.id}`} 
                      className="text-primary-blue hover:text-primary-blue/80 font-semibold text-sm transition-colors"
                    >
                      Detalii →
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Cum Funcționează
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Procesul nostru simplu și eficient pentru serviciile de calitate.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Programare',
                description: 'Contactează-ne pentru a programa serviciul dorit sau folosește formularul online.',
                icon: Clock,
              },
              {
                step: '02',
                title: 'Serviciu',
                description: 'Echipa noastră calificată execută serviciul cu echipamente moderne.',
                icon: Settings,
              },
              {
                step: '03',
                title: 'Garanție',
                description: 'Oferim garanție completă pentru toate serviciile executate.',
                icon: Shield,
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-primary-red rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-black text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
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

      {/* Equipment Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-black mb-6">
                Echipamente Moderne
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Folosim doar echipamente de ultimă generație pentru a asigura servicii de cea mai înaltă calitate.
              </p>
              
              <div className="space-y-6">
                {[
                  'Echipamente de echilibrare computerizate',
                  'Mașini de vulcanizare profesionale',
                  'Sisteme de verificare presiune TPMS',
                  'Echipamente pentru depanare la fața locului',
                  'Instrumente de măsurare precise',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-primary-red flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-red/10 to-primary-red/5 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Settings, title: 'Echilibrare' },
                    { icon: Gauge, title: 'Vulcanizare' },
                    { icon: Car, title: 'Schimb Anvelope' },
                    { icon: Wrench, title: 'Reparații' },
                  ].map((item, index) => (
                    <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <item.icon className="w-8 h-8 text-primary-red mx-auto mb-2" />
                      <span className="text-sm font-medium text-gray-700">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-red to-primary-red/90 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Gata să Începi?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Contactează-ne acum pentru a programa serviciul de care ai nevoie. 
              Suntem aici să te ajutăm cu toate nevoile tale auto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link href="/programari" className="bg-white text-primary-red hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:translate-y-[-3px] hover:shadow-xl text-lg">
                Programează-te Acum
              </Link>
              <a 
                href={`tel:${ContactInfo.phone}`}
                className="border-2 border-white text-white hover:bg-white hover:text-primary-red px-8 py-4 rounded-lg font-semibold transition-all duration-200 text-lg"
              >
                Sună Acum: {ContactInfo.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
