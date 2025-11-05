import Link from 'next/link'
import { Phone, MapPin, Clock, Mail } from 'lucide-react'
import { ContactInfo, BusinessHours, Navigation } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-primary-black text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-red to-primary-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold">Auto Expert Group</h3>
                <p className="text-sm text-gray-300">Servicii Auto București</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Servicii profesionale de vulcanizare, schimb anvelope și echilibrare roți 
              în București. Experiență și calitate garantată.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold">Link-uri Rapide</h4>
            <nav className="space-y-2">
              {Navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-300 hover:text-primary-red transition-colors duration-200 text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-red mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {ContactInfo.address}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-red flex-shrink-0" />
                <a
                  href={`tel:${ContactInfo.phone}`}
                  className="text-gray-300 hover:text-primary-red transition-colors duration-200 text-sm"
                >
                  {ContactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-red flex-shrink-0" />
                <a
                  href={`mailto:${ContactInfo.email}`}
                  className="text-gray-300 hover:text-primary-red transition-colors duration-200 text-sm"
                >
                  {ContactInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold">Program</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary-red flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-gray-300">Luni - Vineri</p>
                  <p className="text-white font-medium">{BusinessHours.weekdays}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary-red flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-gray-300">Sâmbătă</p>
                  <p className="text-white font-medium">{BusinessHours.saturday}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary-red flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-gray-300">Duminică</p>
                  <p className="text-white font-medium">{BusinessHours.sunday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <p>&copy; 2025 Auto Expert Group. Toate drepturile rezervate.</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/politica-confidentialitate"
                className="text-gray-400 hover:text-primary-red transition-colors duration-200"
              >
                Politica de Confidențialitate
              </Link>
              <Link
                href="/termeni-conditii"
                className="text-gray-400 hover:text-primary-red transition-colors duration-200"
              >
                Termeni și Condiții
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
