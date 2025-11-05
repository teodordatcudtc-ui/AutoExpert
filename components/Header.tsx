'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { Navigation, ContactInfo } from '@/lib/constants'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show/hide header based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      // Add scrolled class for styling
      setIsScrolled(currentScrollY > 50)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-custom shadow-lg' 
          : pathname === '/' 
          ? 'bg-transparent' 
          : 'bg-white/95 backdrop-blur-custom shadow-lg'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-red to-primary-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-xl lg:text-2xl font-heading font-bold ${
                isScrolled || pathname !== '/'
                  ? 'text-primary-black'
                  : 'text-white'
              }`}>
                Auto Expert Group
              </h1>
              <p className={`text-sm ${
                isScrolled || pathname !== '/'
                  ? 'text-gray-600'
                  : 'text-gray-300'
              }`}>
                Servicii Auto București
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {Navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? 'text-primary-red'
                    : isScrolled || pathname !== '/'
                    ? 'text-primary-black hover:text-primary-red'
                    : 'text-white hover:text-primary-red'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <a
              href={`tel:${ContactInfo.phone}`}
              className="hidden sm:flex items-center space-x-2 bg-primary-red text-white px-4 py-2 rounded-lg font-semibold transition-all duration-220 hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary-red/25"
            >
              <Phone className="w-4 h-4" />
              <span>{ContactInfo.phone}</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className={`w-6 h-6 ${
                  isScrolled || pathname !== '/'
                    ? 'text-primary-black'
                    : 'text-white'
                }`} />
              ) : (
                <Menu className={`w-6 h-6 ${
                  isScrolled || pathname !== '/'
                    ? 'text-primary-black'
                    : 'text-white'
                }`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-out ${
            isMenuOpen
              ? 'max-h-96 opacity-100'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <nav className="py-4 space-y-2 bg-white/95 backdrop-blur-custom rounded-lg mt-2 shadow-lg">
            {Navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? 'text-primary-red bg-primary-red/10'
                    : 'text-primary-black hover:text-primary-red hover:bg-primary-red/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 py-3 border-t border-gray-200">
              <a
                href={`tel:${ContactInfo.phone}`}
                className="flex items-center space-x-2 text-primary-red font-semibold"
              >
                <Phone className="w-4 h-4" />
                <span>{ContactInfo.phone}</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
