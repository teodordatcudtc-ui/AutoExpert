'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  features: string[]
  price: string
  icon: LucideIcon
  index: number
}

export default function ServiceCard({ 
  title, 
  description, 
  features, 
  price, 
  icon: Icon, 
  index 
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="card tilt-card shine-effect h-full p-8 hover:shadow-2xl hover:shadow-primary-red/10 transition-all duration-300">
        {/* Icon */}
        <div className="w-16 h-16 bg-primary-red/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-red/20 transition-colors duration-300">
          <Icon className="w-8 h-8 text-primary-red" />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-xl font-heading font-semibold text-primary-black group-hover:text-primary-red transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>

          {/* Features */}
          <ul className="space-y-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 bg-primary-red rounded-full mt-2 flex-shrink-0"></div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Price */}
          <div className="pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-heading font-bold text-primary-red">
                {price}
              </span>
              <Link href="/servicii">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-primary-red hover:text-white hover:bg-primary-red px-4 py-2 rounded-lg border border-primary-red transition-all duration-200 text-sm font-medium"
                >
                  Detalii
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
