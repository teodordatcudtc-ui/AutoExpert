'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, CheckCircle, AlertCircle, Phone, Mail } from 'lucide-react'
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

      {/* Booking Form */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-heading font-bold text-primary-black mb-4">
                Formular de Programare
              </h2>
              <p className="text-gray-600">
                Completează toate câmpurile obligatorii pentru a programa serviciul dorit.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nume complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={bookingData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent transition-colors ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Introdu numele tău"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={bookingData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="exemplu@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefon *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={bookingData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent transition-colors ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="0767062912"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Service Selection */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Serviciu dorit *
                </label>
                <select
                  id="service"
                  name="service"
                  value={bookingData.service}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent transition-colors ${
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
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.service}
                  </p>
                )}
              </div>

              {/* Vehicle Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700 mb-2">
                    Tip vehicul *
                  </label>
                  <select
                    id="vehicleType"
                    name="vehicleType"
                    value={bookingData.vehicleType}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent transition-colors ${
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
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.vehicleType}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="vehicleModel" className="block text-sm font-medium text-gray-700 mb-2">
                    Model vehicul *
                  </label>
                  <input
                    type="text"
                    id="vehicleModel"
                    name="vehicleModel"
                    value={bookingData.vehicleModel}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent transition-colors ${
                      errors.vehicleModel ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="ex: BMW X5, Audi A4, etc."
                  />
                  {errors.vehicleModel && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.vehicleModel}
                    </p>
                  )}
                </div>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
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
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent transition-colors ${
                      errors.preferredDate ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.preferredDate && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.preferredDate}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                    Ora preferată *
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={bookingData.preferredTime}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent transition-colors ${
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
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.preferredTime}
                    </p>
                  )}
                </div>
              </div>

              {/* Additional Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mesaj suplimentar (opțional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={bookingData.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent transition-colors resize-none ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Descrie în detaliu ce servicii ai nevoie sau alte informații relevante..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Status */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-2"
                >
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="text-green-800 text-sm">
                    Programarea a fost trimisă cu succes! Vă vom contacta pentru confirmare.
                  </p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-2"
                >
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  <p className="text-red-800 text-sm">
                    A apărut o eroare la trimiterea programării. Te rugăm să încerci din nou.
                  </p>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Se trimite...</span>
                  </>
                ) : (
                  <>
                    <Calendar className="w-5 h-5" />
                    <span>Trimite Programarea</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-primary-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-heading font-bold text-primary-black mb-6">
              Ai Întrebări despre Programare?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Echipa noastră este aici să te ajute cu orice întrebare despre serviciile noastre 
              sau procesul de programare.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <Phone className="w-12 h-12 text-primary-red mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold text-primary-black mb-2">
                  Sună-ne Direct
                </h3>
                <p className="text-gray-600 mb-4">
                  Pentru programări rapide sau întrebări urgente
                </p>
                <a 
                  href={`tel:${ContactInfo.phone}`}
                  className="text-primary-red hover:text-primary-red/80 font-semibold text-lg"
                >
                  {ContactInfo.phone}
                </a>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <Mail className="w-12 h-12 text-primary-red mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold text-primary-black mb-2">
                  Trimite Email
                </h3>
                <p className="text-gray-600 mb-4">
                  Pentru întrebări detaliate sau oferte personalizate
                </p>
                <a 
                  href={`mailto:${ContactInfo.email}`}
                  className="text-primary-red hover:text-primary-red/80 font-semibold text-lg"
                >
                  {ContactInfo.email}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
