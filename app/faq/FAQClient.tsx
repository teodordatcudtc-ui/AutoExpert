'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, HelpCircle, Phone, Mail } from 'lucide-react'
import { FAQ, ContactInfo } from '@/lib/constants'
import Link from 'next/link'

export default function FAQClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
              Întrebări Frecvente
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Găsește răspunsuri la cele mai frecvente întrebări despre serviciile noastre. 
              Dacă nu găsești răspunsul căutat, contactează-ne direct.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${ContactInfo.phone}`}
                className="btn-primary text-lg px-8 py-4"
              >
                Sună: {ContactInfo.phone}
              </a>
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
                Contactează-ne
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {FAQ.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-heading font-semibold text-primary-black pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-primary-red" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional FAQ Categories */}
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
              Categorii de Întrebări
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explorează întrebările organizate pe categorii pentru a găsi mai ușor informațiile de care ai nevoie.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Servicii și Prețuri',
                questions: [
                  'Cât costă schimbul de anvelope?',
                  'Oferiți reduceri pentru servicii multiple?',
                  'Ce include prețul pentru echilibrare?',
                  'Acceptați plata cu cardul?',
                ],
                icon: '💰',
              },
              {
                title: 'Programare și Timp',
                questions: [
                  'Cum pot programa o întâlnire?',
                  'Cât durează un serviciu?',
                  'Pot anula o programare?',
                  'Lucrați în weekend?',
                ],
                icon: '📅',
              },
              {
                title: 'Tehnic și Garanție',
                questions: [
                  'Ce garanție oferiți?',
                  'Ce echipamente folosiți?',
                  'Cum verific calitatea serviciului?',
                  'Oferiți consultanță tehnică?',
                ],
                icon: '🔧',
              },
              {
                title: 'Anvelope și Depozitare',
                questions: [
                  'Oferiți depozitare anvelope?',
                  'Când să schimb anvelopele?',
                  'Ce tipuri de anvelope aveți?',
                  'Cum aleg anvelopele potrivite?',
                ],
                icon: '🛞',
              },
              {
                title: 'Urgențe și Depanare',
                questions: [
                  'Oferiți servicii de depanare?',
                  'Ce fac dacă am o pană?',
                  'Sunt disponibili 24/7?',
                  'Cât costă depanarea?',
                ],
                icon: '🚨',
              },
              {
                title: 'Contact și Locație',
                questions: [
                  'Unde vă găsesc?',
                  'Aveți parcare disponibilă?',
                  'Cum ajung cu transportul public?',
                  'Acceptați programări online?',
                ],
                icon: '📍',
              },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-heading font-semibold text-primary-black">
                    {category.title}
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  {category.questions.map((question, qIndex) => (
                    <li key={qIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary-red rounded-full mt-2 flex-shrink-0"></div>
                      <span>{question}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Help */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-red to-primary-red/90 rounded-2xl p-8 text-white text-center"
          >
            <div className="max-w-4xl mx-auto">
              <HelpCircle className="w-16 h-16 text-white mx-auto mb-6" />
              <h2 className="text-3xl font-heading font-bold mb-4">
                Nu Găsești Răspunsul?
              </h2>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Echipa noastră de specialiști este aici să răspundă la toate întrebările tale. 
                Contactează-ne pentru consultanță personalizată și răspunsuri detaliate.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <a 
                  href={`tel:${ContactInfo.phone}`}
                  className="flex items-center justify-center space-x-3 bg-white/20 rounded-lg p-4 hover:bg-white/30 transition-colors"
                >
                  <Phone className="w-6 h-6 text-white" />
                  <div className="text-left">
                    <p className="font-semibold">Sună Acum</p>
                    <p className="text-sm text-white/80">{ContactInfo.phone}</p>
                  </div>
                </a>
                
                <Link 
                  href="/contact"
                  className="flex items-center justify-center space-x-3 bg-white/20 rounded-lg p-4 hover:bg-white/30 transition-colors"
                >
                  <Mail className="w-6 h-6 text-white" />
                  <div className="text-left">
                    <p className="font-semibold">Trimite Email</p>
                    <p className="text-sm text-white/80">Contactează-ne online</p>
                  </div>
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/programari" className="bg-white text-primary-red hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-220 hover:translate-y-[-3px] hover:shadow-xl text-lg">
                  Programează-te Acum
                </Link>
                <Link href="/servicii" className="border-2 border-white text-white hover:bg-white hover:text-primary-red px-8 py-4 rounded-lg font-semibold transition-all duration-220 text-lg">
                  Vezi Serviciile
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
