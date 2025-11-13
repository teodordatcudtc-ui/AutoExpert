'use client'

import { motion } from 'framer-motion'
import { Circle, Gauge, Wrench, Car, Truck, Settings, CheckCircle, Star, Users, Clock, Shield, Award } from 'lucide-react'
import { Services, ContactInfo } from '@/lib/constants'
import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'

const iconMap = {
  tire: Circle,
  balance: Gauge,
  wrench: Wrench,
  wheel: Car,
  truck: Truck,
  gauge: Settings,
}

export default function HomeClient() {
  return (
    <>
      {/* Services Section */}
      <section className="section-padding bg-primary-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-black mb-6">
              Serviciile Noastre
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Oferim servicii complete de vulcanizare și întreținere auto cu echipamente moderne 
              și personal calificat pentru a-ți asigura siguranța pe drum.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Services.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap]
              return (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  price={service.price}
                  icon={IconComponent}
                  index={index}
                />
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/servicii" className="btn-primary text-lg px-8 py-4">
              Vezi Toate Serviciile
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-black mb-6">
              De Ce Să Ne Alegi?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experiență, calitate și prețuri competitive - acestea sunt valorile noastre.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Experiență',
                description: 'Peste 10 ani de experiență în domeniul auto',
              },
              {
                icon: Shield,
                title: 'Calitate Garantată',
                description: 'Servicii de calitate cu garanție completă',
              },
              {
                icon: Clock,
                title: 'Program Extins',
                description: 'Luni-Vineri 8:00-18:00, Sâmbătă 8:00-14:00',
              },
              {
                icon: Users,
                title: 'Personal Calificat',
                description: 'Echipă de specialiști cu certificări',
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
                <div className="w-20 h-20 bg-primary-red/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-red/20 transition-colors duration-300">
                  <item.icon className="w-10 h-10 text-primary-red" />
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
              Ai Nevoie de Servicii Auto?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Contactează-ne acum pentru o programare sau pentru mai multe informații. 
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

      {/* Image Section 1 - Atelier */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg shadow-xl aspect-[4/3] bg-gradient-to-br from-primary-red/20 to-primary-blue/20 flex items-center justify-center"
            >
              <div className="text-center p-8">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-12 h-12 text-white" />
                </div>
                <p className="text-white/80 font-semibold text-lg">Atelier Modern</p>
                <p className="text-white/60 text-sm mt-2">Imagine placeholder</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-black mb-6">
                Atelier Modern și Echipamente Profesionale
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Lucrăm cu echipamente de ultimă generație pentru a asigura servicii de cea mai înaltă calitate. 
                Atelierul nostru este dotat cu tehnologie modernă și personal calificat.
              </p>
              <Link href="/galerie" className="btn-primary inline-block">
                Vezi Galeria
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Section 2 - Servicii */}
      <section className="section-padding bg-primary-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-black mb-6">
                Servicii Complete de Calitate
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                De la schimb anvelope la reparații complexe, oferim o gamă completă de servicii auto. 
                Fiecare serviciu este executat cu atenție la detalii și respectând standardele de calitate.
              </p>
              <Link href="/servicii" className="btn-primary inline-block">
                Vezi Serviciile
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg shadow-xl aspect-[4/3] order-1 lg:order-2 bg-gradient-to-br from-primary-blue/20 to-primary-red/20 flex items-center justify-center"
            >
              <div className="text-center p-8">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-12 h-12 text-white" />
                </div>
                <p className="text-white/80 font-semibold text-lg">Servicii Profesionale</p>
                <p className="text-white/60 text-sm mt-2">Imagine placeholder</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-black mb-6">
              Ce Spun Clienții Noștri
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Satisfacția clienților este prioritatea noastră principală.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Mihai Popescu',
                rating: 5,
                text: 'Servicii excelente! Am schimbat anvelopele și am fost foarte mulțumit de calitatea serviciului și de prețul competitiv.',
              },
              {
                name: 'Ana Ionescu',
                rating: 5,
                text: 'Personal foarte profesionist și echipamente moderne. Recomand cu încredere pentru orice serviciu auto.',
              },
              {
                name: 'Alexandru Radu',
                rating: 5,
                text: 'Am venit pentru echilibrare și am plecat foarte mulțumit. Serviciul rapid și de calitate.',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-red/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary-red font-semibold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-primary-black">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">Client mulțumit</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
