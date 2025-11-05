'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Numele este obligatoriu'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Numele trebuie să aibă cel puțin 2 caractere'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email-ul este obligatoriu'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email-ul nu este valid'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefonul este obligatoriu'
    } else if (!/^(\+40|0)[0-9]{9}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Telefonul nu este valid (ex: 0767062912)'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subiectul este obligatoriu'
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subiectul trebuie să aibă cel puțin 5 caractere'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mesajul este obligatoriu'
    } else if (formData.message.trim().length < 10) {
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
      const mailtoLink = `mailto:contact@auto-expert-group.ro?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Nume: ${formData.name}\nEmail: ${formData.email}\nTelefon: ${formData.phone}\n\nMesaj:\n${formData.message}`
      )}`
      
      window.location.href = mailtoLink
      setSubmitStatus('success')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
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
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg p-8"
    >
      <div className="mb-8">
        <h3 className="text-2xl font-heading font-bold text-primary-black mb-2">
          Trimite-ne un Mesaj
        </h3>
        <p className="text-gray-600">
          Completează formularul de mai jos și îți vom răspunde în cel mai scurt timp.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Nume complet *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
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
              value={formData.email}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Telefon *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent transition-colors ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="0735538668"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
              Subiect *
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent transition-colors ${
                errors.subject ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Selectează subiectul</option>
              <option value="Schimb anvelope">Schimb anvelope</option>
              <option value="Echilibrare roți">Echilibrare roți</option>
              <option value="Vulcanizare">Vulcanizare</option>
              <option value="Reparații jante">Reparații jante</option>
              <option value="Depanare">Depanare</option>
              <option value="Verificare TPMS">Verificare TPMS</option>
              <option value="Altele">Altele</option>
            </select>
            {errors.subject && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.subject}
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Mesaj *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent transition-colors resize-none ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Descrie în detaliu ce servicii ai nevoie..."
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
              Mesajul a fost trimis cu succes! Vă vom contacta în cel mai scurt timp.
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
              A apărut o eroare la trimiterea mesajului. Te rugăm să încerci din nou.
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
              <Send className="w-5 h-5" />
              <span>Trimite Mesajul</span>
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  )
}
