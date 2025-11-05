'use client'

import { motion } from 'framer-motion'
import { Shield, Eye, Lock, FileText, Mail, Phone } from 'lucide-react'
import { ContactInfo } from '@/lib/constants'

export default function PoliticaClient() {
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
              Politica de Confidențialitate
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Protejăm datele tale personale și respectăm confidențialitatea în toate serviciile noastre.
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
                  <Shield className="w-6 h-6 mr-3 text-primary-red" />
                  Informații Generale
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Vulcanizare Auto Ianys respectă drepturile clienților săi și se angajează să protejeze 
                  confidențialitatea datelor personale colectate în cadrul activității noastre comerciale.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-primary-black mb-4 flex items-center">
                  <Eye className="w-6 h-6 mr-3 text-primary-red" />
                  Datele pe Care Le Colectăm
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Colectăm următoarele tipuri de date personale:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Numele complet și datele de contact (telefon, email)</li>
                  <li>Informații despre vehiculul dumneavoastră (marca, modelul, anul)</li>
                  <li>Istoricul serviciilor efectuate</li>
                  <li>Date de facturare și plată</li>
                  <li>Comunicările cu echipa noastră</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-primary-black mb-4 flex items-center">
                  <Lock className="w-6 h-6 mr-3 text-primary-red" />
                  Cum Folosim Datele
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Datele dumneavoastră personale sunt folosite exclusiv pentru:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Prestarea serviciilor de vulcanizare și întreținere auto</li>
                  <li>Comunicarea cu dumneavoastră privind programările și serviciile</li>
                  <li>Emiterea facturilor și documentelor contabile</li>
                  <li>Îmbunătățirea calității serviciilor noastre</li>
                  <li>Respectarea obligațiilor legale</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-primary-black mb-4 flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-primary-red" />
                  Protecția Datelor
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Implementăm măsuri de securitate tehnice și organizatorice pentru a proteja datele dumneavoastră:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Accesul la date este restricționat doar personalului autorizat</li>
                  <li>Folosim sisteme de securitate pentru protejarea informațiilor</li>
                  <li>Datele sunt stocate în condiții sigure</li>
                  <li>Efectuăm backup-uri regulate ale datelor importante</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-primary-black mb-4">
                  Durata Păstrării Datelor
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Păstrăm datele dumneavoastră personale doar atât timp cât este necesar pentru 
                  îndeplinirea scopurilor pentru care au fost colectate sau conform cerințelor legale. 
                  În general, datele sunt păstrate pentru o perioadă de 5 ani de la ultima prestare de servicii.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-primary-black mb-4">
                  Drepturile Dumneavoastră
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Conform legislației în vigoare, aveți următoarele drepturi:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Dreptul de a accesa datele personale</li>
                  <li>Dreptul de a rectifica datele inexacte</li>
                  <li>Dreptul de a șterge datele în anumite condiții</li>
                  <li>Dreptul de a restricționa prelucrarea</li>
                  <li>Dreptul de a vă opune prelucrării</li>
                  <li>Dreptul la portabilitatea datelor</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-primary-black mb-4">
                  Contact
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Pentru orice întrebări privind prelucrarea datelor dumneavoastră personale 
                  sau pentru a exercita drepturile dumneavoastră, vă rugăm să ne contactați:
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
                  Această politică de confidențialitate poate fi actualizată periodic. 
                  Vă rugăm să verificați această pagină pentru a fi la curent cu orice modificări.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
