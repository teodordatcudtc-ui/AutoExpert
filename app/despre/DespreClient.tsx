'use client'

import { motion } from 'framer-motion'
import { Award, Users, Clock, Shield, CheckCircle, Star, Phone, Mail, MapPin } from 'lucide-react'
import { ContactInfo } from '@/lib/constants'
import Link from 'next/link'

export default function DespreClient() {
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
              Despre Noi
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Peste 10 ani de experiență în domeniul auto, oferim servicii de calitate 
              cu echipamente moderne și personal calificat.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
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
                Povestea Noastră
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Vulcanizare Auto Ianys a fost înființată cu o viziune simplă: să oferim 
                servicii auto de calitate la prețuri accesibile pentru toți clienții noștri.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                De-a lungul anilor, am investit constant în echipamente moderne și în 
                formarea echipei noastre pentru a rămâne la curent cu cele mai noi 
                tehnologii din domeniul auto.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Astăzi, suntem mândri să oferim servicii complete de vulcanizare, 
                de la schimbul de anvelope la reparații complexe, toate executate 
                cu profesionalism și atenție la detalii.
              </p>
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
                    { icon: Award, title: '10+ Ani', subtitle: 'Experiență' },
                    { icon: Users, title: '5000+', subtitle: 'Clienți' },
                    { icon: Shield, title: '100%', subtitle: 'Garanție' },
                    { icon: Star, title: '5.0', subtitle: 'Rating' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center p-4 bg-white rounded-lg shadow-sm"
                    >
                      <item.icon className="w-8 h-8 text-primary-red mx-auto mb-2" />
                      <div className="text-2xl font-bold text-primary-black">{item.title}</div>
                      <div className="text-sm text-gray-600">{item.subtitle}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Valorile Noastre
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Acestea sunt principiile care ne ghidează în fiecare zi și în fiecare serviciu pe care îl oferim.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Calitate',
                description: 'Ne angajăm să oferim servicii de cea mai înaltă calitate, folosind doar piese și materiale de calitate superioară.',
              },
              {
                icon: Users,
                title: 'Clienți',
                description: 'Satisfacția clienților noștri este prioritatea noastră principală. Ascultăm nevoile lor și oferim soluții personalizate.',
              },
              {
                icon: Award,
                title: 'Profesionalism',
                description: 'Echipa noastră este formată din specialiști calificați cu experiență vastă în domeniul auto.',
              },
              {
                icon: Clock,
                title: 'Punctualitate',
                description: 'Respectăm programările și livrăm serviciile în timpul stabilit, fără compromisuri.',
              },
              {
                icon: CheckCircle,
                title: 'Transparență',
                description: 'Oferim prețuri clare și transparente, fără costuri ascunse sau surprize neplăcute.',
              },
              {
                icon: Star,
                title: 'Inovație',
                description: 'Investim constant în echipamente moderne și tehnologii de vârf pentru a oferi servicii de ultimă generație.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary-red/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-red/20 transition-colors duration-300">
                  <value.icon className="w-8 h-8 text-primary-red" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary-black mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Echipa Noastră
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              O echipă de specialiști calificați și pasionați de domeniul auto.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Ion Popescu',
                role: 'Manager General',
                experience: '15 ani experiență',
                description: 'Specialist în managementul serviciilor auto și relațiile cu clienții.',
              },
              {
                name: 'Mihai Ionescu',
                role: 'Specialist Vulcanizare',
                experience: '12 ani experiență',
                description: 'Expert în reparații anvelope și vulcanizare cu echipamente moderne.',
              },
              {
                name: 'Alexandru Radu',
                role: 'Specialist Echilibrare',
                experience: '10 ani experiență',
                description: 'Specialist în echilibrare roți și verificare presiune TPMS.',
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8 text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="w-24 h-24 bg-primary-red/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-red/20 transition-colors duration-300">
                  <span className="text-2xl font-bold text-primary-red">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary-black mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-red font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-500 mb-4">{member.experience}</p>
                <p className="text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Hours */}
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
              Program de Lucru
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Suntem disponibili pentru tine în următoarele intervale orare.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="space-y-4">
                {[
                  { day: 'Luni - Vineri', hours: '08:00 - 18:00' },
                  { day: 'Sâmbătă', hours: '08:00 - 14:00' },
                  { day: 'Duminică', hours: 'Închis' },
                ].map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                    <span className="font-medium text-primary-black">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-primary-red/10 rounded-lg">
                <div className="flex items-center space-x-2 text-primary-red">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">Pentru urgențe</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Pentru situații de urgență, contactează-ne la numărul de telefon pentru a discuta posibilitatea unei programări speciale.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
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
              Contactează-ne Astăzi
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Suntem aici să răspundem la toate întrebările tale și să te ajutăm cu serviciile de care ai nevoie.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="flex items-center justify-center space-x-3 bg-white/20 rounded-lg p-4">
                <Phone className="w-6 h-6 text-white" />
                <div className="text-left">
                  <p className="font-semibold">Telefon</p>
                  <p className="text-sm text-white/80">{ContactInfo.phone}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3 bg-white/20 rounded-lg p-4">
                <Mail className="w-6 h-6 text-white" />
                <div className="text-left">
                  <p className="font-semibold">Email</p>
                  <p className="text-sm text-white/80">{ContactInfo.email}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3 bg-white/20 rounded-lg p-4">
                <MapPin className="w-6 h-6 text-white" />
                <div className="text-left">
                  <p className="font-semibold">Adresă</p>
                  <p className="text-sm text-white/80">{ContactInfo.address}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link href="/programari" className="bg-white text-primary-red hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:translate-y-[-3px] hover:shadow-xl text-lg">
                Programează-te Acum
              </Link>
              <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary-red px-8 py-4 rounded-lg font-semibold transition-all duration-200 text-lg">
                Vezi Contact
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
