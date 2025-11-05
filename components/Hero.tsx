'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, MapPin, Clock } from 'lucide-react'
import { ContactInfo, BusinessHours } from '@/lib/constants'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return

      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      
      const xPos = (clientX / innerWidth - 0.5) * 2
      const yPos = (clientY / innerHeight - 0.5) * 2

      const layers = heroRef.current.querySelectorAll('.parallax-layer')
      layers.forEach((layer, index) => {
        const factor = 0.02 + (index * 0.02)
        const x = xPos * factor * 100
        const y = yPos * factor * 100
        
        ;(layer as HTMLElement).style.transform = `translate(${x}px, ${y}px)`
      })
    }

    const handleScroll = () => {
      if (!heroRef.current) return

      const scrolled = window.pageYOffset
      const parallax = heroRef.current.querySelector('.parallax-bg')
      
      if (parallax) {
        const speed = scrolled * 0.5
        ;(parallax as HTMLElement).style.transform = `translateY(${speed}px)`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-black via-primary-dark to-primary-black pt-20 md:pt-0"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 parallax-bg">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat opacity-20 parallax-layer"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-black/80 via-primary-dark/60 to-primary-black/80 parallax-layer"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Auto{' '}
            <span className="text-gradient">Expert Group</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Servicii profesionale de vulcanizare, schimb anvelope și echilibrare roți în București. 
            Experiență, calitate și prețuri competitive.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/programari" className="btn-primary text-lg px-8 py-4 animate-pulse-subtle">
              Programează-te Acum
            </Link>
            <a 
              href={`tel:${ContactInfo.phone}`}
              className="btn-secondary text-lg px-8 py-4 flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>{ContactInfo.phone}</span>
            </a>
          </motion.div>

          {/* Quick Info Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="bg-white/10 backdrop-blur-custom rounded-lg p-6 border border-white/20">
              <MapPin className="w-8 h-8 text-primary-red mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-lg mb-2">Locație Centrală</h3>
              <p className="text-gray-300 text-sm">{ContactInfo.address}</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-custom rounded-lg p-6 border border-white/20">
              <Clock className="w-8 h-8 text-primary-red mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-lg mb-2">Program Extins</h3>
              <p className="text-gray-300 text-sm">
                L-V: {BusinessHours.weekdays}<br />
                S: {BusinessHours.saturday}
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-custom rounded-lg p-6 border border-white/20">
              <Phone className="w-8 h-8 text-primary-red mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-lg mb-2">Contact Rapid</h3>
              <p className="text-gray-300 text-sm">
                <a href={`tel:${ContactInfo.phone}`} className="hover:text-primary-red transition-colors">
                  {ContactInfo.phone}
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary-red rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  )
}
