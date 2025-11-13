'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, CheckCircle, AlertCircle, Phone, Mail, MapPin, Navigation, Car, Wrench, Shield } from 'lucide-react'
import { Services, ContactInfo } from '@/lib/constants'

interface BookingData {
  name: string
  email: string
  phone: string
  service: string
  vehicleType: string
  vehicleModel: string
  preferredDate: string
  preferredTime: string
  message: string
}

interface BookingErrors {
  name?: string
  email?: string
  phone?: string
  service?: string
  vehicleType?: string
  vehicleModel?: string
  preferredDate?: string
  preferredTime?: string
  message?: string
}

export default function ProgramariClient() {
  const [bookingData, setBookingData] = useState<BookingData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    vehicleType: '',
    vehicleModel: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  })
  
  const [errors, setErrors] = useState<BookingErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
    '17:00', '17:30'
  ]

  const vehicleTypes = [
    'Autoturism',
    'SUV',
    'Pickup',
    'Van',
    'Microbuz',
    'Altul'
  ]

  const validateForm = (): boolean => {
    const newErrors: BookingErrors = {}

    if (!bookingData.name.trim()) {
      newErrors.name = 'Numele este obligatoriu'
    } else if (bookingData.name.trim().length < 2) {
      newErrors.name = 'Numele trebuie să aibă cel puțin 2 caractere'
    }

    if (!bookingData.email.trim()) {
      newErrors.email = 'Email-ul este obligatoriu'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(bookingData.email)) {
      newErrors.email = 'Email-ul nu este valid'
    }

    if (!bookingData.phone.trim()) {
      newErrors.phone = 'Telefonul este obligatoriu'
    } else if (!/^(\+40|0)[0-9]{9}$/.test(bookingData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Telefonul nu este valid (ex: 0767062912)'
    }

    if (!bookingData.service) {
      newErrors.service = 'Selectează un serviciu'
    }

    if (!bookingData.vehicleType) {
      newErrors.vehicleType = 'Selectează tipul vehiculului'
    }

    if (!bookingData.vehicleModel.trim()) {
      newErrors.vehicleModel = 'Modelul vehiculului este obligatoriu'
    }

    if (!bookingData.preferredDate) {
      newErrors.preferredDate = 'Selectează data preferată'
    }

    if (!bookingData.preferredTime) {
      newErrors.preferredTime = 'Selectează ora preferată'
    }

    if (bookingData.message.trim().length > 0 && bookingData.message.trim().length < 10) {
      newErrors.message = 'Mesajul trebuie să aibă cel puțin 10 caractere'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // For now, we'll use mailto as fallback
      const mailtoLink = `mailto:${ContactInfo.email}?subject=Programare - ${bookingData.service}&body=${encodeURIComponent(
        `Programare nouă:\n\n` +
        `Nume: ${bookingData.name}\n` +
        `Email: ${bookingData.email}\n` +
        `Telefon: ${bookingData.phone}\n` +
        `Serviciu: ${bookingData.service}\n` +
        `Vehicul: ${bookingData.vehicleType} - ${bookingData.vehicleModel}\n` +
        `Data preferată: ${bookingData.preferredDate}\n` +
        `Ora preferată: ${bookingData.preferredTime}\n` +
        `Mesaj: ${bookingData.message || 'Fără mesaj suplimentar'}`
      )}`
      
      window.location.href = mailtoLink
      setSubmitStatus('success')
      
      // Reset form
      setBookingData({
        name: '',
        email: '',
        phone: '',
        service: '',
        vehicleType: '',
        vehicleModel: '',
        preferredDate: '',
        preferredTime: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setBookingData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof BookingErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const getMinDate = () => {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split('T')[0]
  }

  const getMaxDate = () => {
    const today = new Date()
    const maxDate = new Date(today)
    maxDate.setDate(maxDate.getDate() + 30)
    return maxDate.toISOString().split('T')[0]
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
              Programează-te Acum
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Completează formularul de mai jos pentru a programa serviciul de care ai nevoie. 
              Îți vom confirma programarea în cel mai scurt timp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${ContactInfo.phone}`}
                className="btn-primary text-lg px-8 py-4"
              >
                Sună Acum: {ContactInfo.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Form with Contact Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Form - Takes 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="mb-6">
                  <h2 className="text-2xl font-heading font-bold text-primary-black mb-2">
                    Formular de Programare
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Completează toate câmpurile obligatorii pentru a programa serviciul dorit.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">
                        Nume complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={bookingData.name}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent transition-colors ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Introdu numele tău"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-600 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={bookingData.email}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent transition-colors ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="exemplu@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={bookingData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent transition-colors ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="0735538668"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-600 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label htmlFor="service" className="block text-xs font-medium text-gray-700 mb-1">
                      Serviciu dorit *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={bookingData.service}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent transition-colors ${
                        errors.service ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Selectează serviciul</option>
                      {Services.map((service) => (
                        <option key={service.id} value={service.title}>
                          {service.title} - {service.price}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-xs text-red-600 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {errors.service}
                      </p>
                    )}
                  </div>

                  {/* Vehicle Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="vehicleType" className="block text-xs font-medium text-gray-700 mb-1">
                        Tip vehicul *
                      </label>
                      <select
                        id="vehicleType"
                        name="vehicleType"
                        value={bookingData.vehicleType}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent transition-colors ${
                          errors.vehicleType ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Selectează tipul</option>
                        {vehicleTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      {errors.vehicleType && (
                        <p className="mt-1 text-xs text-red-600 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {errors.vehicleType}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="vehicleModel" className="block text-xs font-medium text-gray-700 mb-1">
                        Model vehicul *
                      </label>
                      <input
                        type="text"
                        id="vehicleModel"
                        name="vehicleModel"
                        value={bookingData.vehicleModel}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent transition-colors ${
                          errors.vehicleModel ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="ex: BMW X5, Audi A4"
                      />
                      {errors.vehicleModel && (
                        <p className="mt-1 text-xs text-red-600 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {errors.vehicleModel}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Date and Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="preferredDate" className="block text-xs font-medium text-gray-700 mb-1">
                        Data preferată *
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={bookingData.preferredDate}
                        onChange={handleInputChange}
                        min={getMinDate()}
                        max={getMaxDate()}
                        className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent transition-colors ${
                          errors.preferredDate ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.preferredDate && (
                        <p className="mt-1 text-xs text-red-600 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {errors.preferredDate}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="preferredTime" className="block text-xs font-medium text-gray-700 mb-1">
                        Ora preferată *
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={bookingData.preferredTime}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent transition-colors ${
                          errors.preferredTime ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Selectează ora</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                      {errors.preferredTime && (
                        <p className="mt-1 text-xs text-red-600 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {errors.preferredTime}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1">
                      Mesaj suplimentar (opțional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={bookingData.message}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 text-sm border rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent transition-colors resize-none ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Descrie ce servicii ai nevoie..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-600 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Status */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center space-x-2"
                    >
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <p className="text-green-800 text-xs">
                        Programarea a fost trimisă cu succes! Vă vom contacta pentru confirmare.
                      </p>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center space-x-2"
                    >
                      <AlertCircle className="w-4 h-4 text-red-600" />
                      <p className="text-red-800 text-xs">
                        A apărut o eroare la trimiterea programării. Te rugăm să încerci din nou.
                      </p>
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm py-2.5"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Se trimite...</span>
                      </>
                    ) : (
                      <>
                        <Calendar className="w-4 h-4" />
                        <span>Trimite Programarea</span>
                      </>
                    )}
                  </motion.button>
                </form>
                </div>
              </motion.div>

              {/* Contact Info - Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="lg:col-span-1"
              >
                <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                  <h2 className="text-xl font-heading font-bold text-primary-black mb-6">
                    Informații de Contact
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary-red" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-sm text-primary-black mb-1">
                          Adresa
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {ContactInfo.address}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-primary-red" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-sm text-primary-black mb-1">
                          Telefon
                        </h3>
                        <a 
                          href={`tel:${ContactInfo.phone}`}
                          className="text-primary-red hover:text-primary-red/80 font-semibold text-sm"
                        >
                          {ContactInfo.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary-red" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-sm text-primary-black mb-1">
                          Email
                        </h3>
                        <a 
                          href={`mailto:${ContactInfo.email}`}
                          className="text-primary-red hover:text-primary-red/80 font-semibold text-sm break-all"
                        >
                          {ContactInfo.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-primary-red" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-sm text-primary-black mb-1">
                          Program
                        </h3>
                        <div className="text-gray-600 text-sm space-y-0.5">
                          <p>L-V: 08:00 - 18:00</p>
                          <p>S: 08:00 - 14:00</p>
                          <p>D: Închis</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Services */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h3 className="text-sm font-heading font-semibold text-primary-black mb-4">
                      Servicii Rapide
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { icon: Car, title: 'Schimb Anvelope' },
                        { icon: Wrench, title: 'Echilibrare' },
                        { icon: Shield, title: 'Vulcanizare' },
                        { icon: Navigation, title: 'Depanare' },
                      ].map((service, index) => (
                        <div
                          key={service.title}
                          className="bg-primary-light rounded-lg p-2 text-center group hover:bg-primary-red/10 transition-colors"
                        >
                          <service.icon className="w-5 h-5 text-primary-red mx-auto mb-1" />
                          <span className="text-xs font-medium text-primary-black">
                            {service.title}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
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
