'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MapPin, Clock } from 'lucide-react'
import { ContactInfo, BusinessHours } from '@/lib/constants'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [currentCard, setCurrentCard] = useState(0)

  const infoCards = [
    {
      icon: MapPin,
      title: 'Locație Centrală',
      content: ContactInfo.address,
    },
    {
      icon: Clock,
      title: 'Program Extins',
      content: `L-V: ${BusinessHours.weekdays}\nS: ${BusinessHours.saturday}`,
    },
    {
      icon: Phone,
      title: 'Contact Rapid',
      content: ContactInfo.phone,
      link: `tel:${ContactInfo.phone}`,
    },
  ]

  useEffect(() => {
    // Auto-rotate carousel on mobile
    const isMobile = window.innerWidth < 768
    let carouselInterval: NodeJS.Timeout | null = null
    
    if (isMobile) {
      carouselInterval = setInterval(() => {
        setCurrentCard((prev) => (prev + 1) % 3)
      }, 3000)
    }

    return () => {
      if (carouselInterval) clearInterval(carouselInterval)
    }
  }, [])

  return (
    <section 
      ref={heroRef}
      className="relative h-[70vh] md:h-[80vh] flex items-end md:items-center justify-center overflow-hidden bg-gradient-to-br from-primary-black via-primary-dark to-primary-black pt-20 md:pt-24 pb-8 md:pb-0"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1920&auto=format&fit=crop")`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-black/80 via-primary-dark/65 to-primary-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white pb-8 md:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="max-w-4xl mx-auto space-y-4 md:space-y-6"
        >
          <motion.h1 
            className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Auto{' '}
            <span className="text-gradient">Expert Group</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Servicii profesionale de vulcanizare, schimb anvelope și echilibrare roți în București. 
            Experiență, calitate și prețuri competitive.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/programari" className="btn-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 animate-pulse-subtle">
              Programează-te Acum
            </Link>
            <a 
              href={`tel:${ContactInfo.phone}`}
              className="btn-secondary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 flex items-center space-x-2"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              <span>{ContactInfo.phone}</span>
            </a>
          </motion.div>

          {/* Quick Info Cards - Desktop Grid, Mobile Carousel */}
          <motion.div 
            className="hidden md:grid md:grid-cols-3 gap-6 pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {infoCards.map((card, index) => {
              const IconComponent = card.icon
              const CardContent = (
                <div className="bg-white/10 backdrop-blur-custom rounded-lg p-6 border border-white/20 h-full flex flex-col">
                  <IconComponent className="w-8 h-8 text-primary-red mx-auto mb-4 flex-shrink-0" />
                  <h3 className="font-heading font-semibold text-lg mb-2 flex-shrink-0">{card.title}</h3>
                  <div className="flex-1 flex items-center justify-center">
                    {card.link ? (
                      <a href={card.link} className="text-gray-300 text-sm hover:text-primary-red transition-colors block text-center">
                        {card.content}
                      </a>
                    ) : (
                      <p className="text-gray-300 text-sm whitespace-pre-line text-center">{card.content}</p>
                    )}
                  </div>
                </div>
              )
              return <div key={index} className="h-full">{CardContent}</div>
            })}
          </motion.div>

          {/* Mobile Carousel */}
          <div className="md:hidden pt-12">
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCard}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/10 backdrop-blur-custom rounded-lg p-6 border border-white/20"
                >
                  {(() => {
                    const card = infoCards[currentCard]
                    const IconComponent = card.icon
                    return (
                      <>
                        <IconComponent className="w-8 h-8 text-primary-red mx-auto mb-4" />
                        <h3 className="font-heading font-semibold text-lg mb-2 text-center">{card.title}</h3>
                        {card.link ? (
                          <a href={card.link} className="text-gray-300 text-sm hover:text-primary-red transition-colors block text-center">
                            {card.content}
                          </a>
                        ) : (
                          <p className="text-gray-300 text-sm whitespace-pre-line text-center">{card.content}</p>
                        )}
                      </>
                    )
                  })()}
                </motion.div>
              </AnimatePresence>
              
              {/* Carousel Indicators */}
              <div className="flex justify-center gap-2 mt-4">
                {infoCards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCard(index)}
                    className={`h-2 rounded-full transition-all ${
                      currentCard === index ? 'w-8 bg-primary-red' : 'w-2 bg-white/30'
                    }`}
                    aria-label={`Go to card ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  )
}
