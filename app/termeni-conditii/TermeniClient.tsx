'use client'

import { motion } from 'framer-motion'
import { FileText, AlertCircle, CheckCircle, Clock, Shield, Phone, Mail } from 'lucide-react'
import { ContactInfo } from '@/lib/constants'

export default function TermeniClient() {
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
              Termeni și Condiții
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Condițiile generale de prestare a serviciilor de vulcanizare și întreținere auto.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-8">
              <div className="bg-primary-light rounded-lg p-6">
                <h2 className="text-2xl font-heading font-bold text-primary-black mb-4 flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-primary-red" />
                  Informații Generale
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Prezentul document stabilește termenii și condițiile pentru prestarea serviciilor 
                  de vulcanizare și întreținere auto de către Vulcanizare Auto Ianys.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-primary-black mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3 text-primary-red" />
                  Servicii Oferite
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Oferim următoarele servicii:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Schimb anvelope și echilibrare roți</li>
                  <li>Vulcanizare și reparații anvelope</li>
                  <li>Reparații jante</li>
                  <li>Verificare presiune TPMS</li>
                  <li>Depanare la fața locului</li>
                  <li>Consultanță tehnică</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-primary-black mb-4 flex items-center">
                  <Clock className="w-6 h-6 mr-3 text-primary-red" />
                  Programări și Anulări
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Programări:</strong> Programările se fac prin telefon, email sau formularul online. 
                    Confirmăm fiecare programare în maximum 24 de ore.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Anulări:</strong> Anulările se pot face cu minimum 2 ore înainte de programarea stabilită. 
                    Anulările de ultim moment pot fi supuse unei taxe de anulare.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Întârzieri:</strong> În cazul întârzierilor din partea clientului de peste 30 de minute, 
                    programarea poate fi anulată și reprogramată.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-primary-black mb-4 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-primary-red" />
                  Prețuri și Plată
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Prețuri:</strong> Prețurile sunt afișate în tabelul de prețuri și pot fi modificate 
                    fără notificare prealabilă. Prețurile includ TVA.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Plata:</strong> Acceptăm plata în numerar, cu cardul sau prin transfer bancar. 
                    Pentru serviciile de urgență, plata se face înainte de prestarea serviciului.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Facturare:</strong> Emitem facturi pentru toate serviciile prestate. 
                    Facturile se pot solicita la cerere.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-primary-black mb-4 flex items-center">
                  <AlertCircle className="w-6 h-6 mr-3 text-primary-red" />
                  Garanții și Responsabilități
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Garanție servicii:</strong> Oferim garanție de 6 luni pentru serviciile de vulcanizare 
                    și 3 luni pentru serviciile de echilibrare, în condițiile normale de utilizare.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Limitarea responsabilității:</strong> Responsabilitatea noastră se limitează la 
                    valoarea serviciului prestat. Nu răspundem pentru daune indirecte sau consecințiale.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Obiecte de valoare:</strong> Clienții sunt responsabili pentru obiectele de valoare 
                    lăsate în vehicul. Nu răspundem pentru pierderea sau deteriorarea acestora.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-primary-black mb-4">
                  Obligațiile Clientului
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Să furnizeze informații corecte despre vehicul și serviciile dorite</li>
                  <li>Să respecte programarea stabilită</li>
                  <li>Să plătească serviciile în termenul stabilit</li>
                  <li>Să preia vehiculul în termen de maximum 7 zile de la finalizarea serviciului</li>
                  <li>Să respecte instrucțiunile echipei noastre</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-primary-black mb-4">
                  Forță Majoră
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Nu răspundem pentru întârzieri sau imposibilitatea de a presta serviciile din cauza 
                  unor evenimente de forță majoră (cutremure, inundații, greve, etc.).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-primary-black mb-4">
                  Modificări
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Ne rezervăm dreptul de a modifica acești termeni și condiții oricând. 
                  Modificările vor fi comunicate clienților prin afișare în atelier sau prin email.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-primary-black mb-4">
                  Contact
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Pentru orice întrebări privind acești termeni și condiții, vă rugăm să ne contactați:
                </p>
                <div className="bg-primary-light rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-primary-red" />
                      <span className="text-gray-700">{ContactInfo.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-primary-red" />
                      <span className="text-gray-700">{ContactInfo.email}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-sm text-gray-600">
                  <strong>Ultima actualizare:</strong> {new Date().toLocaleDateString('ro-RO')}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Acești termeni și condiții sunt valabili de la data afișării și se aplică tuturor 
                  serviciilor prestate de Vulcanizare Auto Ianys.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
