'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Camera, Filter, Search } from 'lucide-react'
import Lightbox from '@/components/Lightbox'

// Placeholder images - replace with actual images
const galleryImages = [
  {
    id: 1,
    src: '/gallery/atelier-1.jpg',
    alt: 'Atelier vulcanizare modern cu echipamente profesionale',
    category: 'atelier',
    title: 'Atelier Modern'
  },
  {
    id: 2,
    src: '/gallery/echipamente-1.jpg',
    alt: 'Echipamente moderne pentru echilibrare roți',
    category: 'echipamente',
    title: 'Echipamente Moderne'
  },
  {
    id: 3,
    src: '/gallery/servicii-1.jpg',
    alt: 'Schimb anvelope cu echilibrare profesională',
    category: 'servicii',
    title: 'Schimb Anvelope'
  },
  {
    id: 4,
    src: '/gallery/echipamente-2.jpg',
    alt: 'Mașină de vulcanizare profesională',
    category: 'echipamente',
    title: 'Vulcanizare'
  },
  {
    id: 5,
    src: '/gallery/servicii-2.jpg',
    alt: 'Echilibrare roți cu tehnologie modernă',
    category: 'servicii',
    title: 'Echilibrare Roți'
  },
  {
    id: 6,
    src: '/gallery/atelier-2.jpg',
    alt: 'Zona de lucru pentru reparații jante',
    category: 'atelier',
    title: 'Reparații Jante'
  },
  {
    id: 7,
    src: '/gallery/servicii-3.jpg',
    alt: 'Verificare presiune TPMS',
    category: 'servicii',
    title: 'Verificare TPMS'
  },
  {
    id: 8,
    src: '/gallery/echipamente-3.jpg',
    alt: 'Echipamente pentru depanare la fața locului',
    category: 'echipamente',
    title: 'Depanare'
  },
  {
    id: 9,
    src: '/gallery/atelier-3.jpg',
    alt: 'Atelier curat și organizat',
    category: 'atelier',
    title: 'Atelier Curat'
  },
  {
    id: 10,
    src: '/gallery/servicii-4.jpg',
    alt: 'Proces de schimb anvelope',
    category: 'servicii',
    title: 'Proces Schimb'
  },
  {
    id: 11,
    src: '/gallery/echipamente-4.jpg',
    alt: 'Echipamente pentru verificare anvelope',
    category: 'echipamente',
    title: 'Verificare Anvelope'
  },
  {
    id: 12,
    src: '/gallery/atelier-4.jpg',
    alt: 'Zona de așteptare pentru clienți',
    category: 'atelier',
    title: 'Zona Clienți'
  }
]

const categories = [
  { id: 'all', name: 'Toate', count: galleryImages.length },
  { id: 'atelier', name: 'Atelier', count: galleryImages.filter(img => img.category === 'atelier').length },
  { id: 'echipamente', name: 'Echipamente', count: galleryImages.filter(img => img.category === 'echipamente').length },
  { id: 'servicii', name: 'Servicii', count: galleryImages.filter(img => img.category === 'servicii').length },
]

export default function GalerieClient() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)

  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = selectedCategory === 'all' || image.category === selectedCategory
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.alt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const handleImageLoad = (imageId: number) => {
    setLoadedImages(prev => {
      const newSet = new Set(prev)
      newSet.add(imageId)
      return newSet
    })
  }

  useEffect(() => {
    // Intersection Observer for lazy loading
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            const imageId = parseInt(img.dataset.imageId || '0')
            if (!loadedImages.has(imageId)) {
              img.src = img.dataset.src || ''
              img.onload = () => handleImageLoad(imageId)
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [loadedImages])

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
              Galeria Noastră
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Descoperă atelierul nostru modern, echipamentele profesionale și serviciile de calitate 
              pe care le oferim clienților noștri.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="section-padding bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-primary-red text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Caută în galerie..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-red focus:border-transparent w-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {filteredImages.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-heading font-semibold text-gray-600 mb-2">
                Nu s-au găsit imagini
              </h3>
              <p className="text-gray-500">
                Încearcă să schimbi filtrul sau termenul de căutare.
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    {/* Placeholder */}
                    {!loadedImages.has(image.id) && (
                      <div className="aspect-square bg-gray-200 animate-pulse flex items-center justify-center">
                        <Camera className="w-12 h-12 text-gray-400" />
                      </div>
                    )}
                    
                    {/* Image */}
                    <img
                      data-image-id={image.id}
                      data-src={image.src}
                      alt={image.alt}
                      className={`aspect-square object-cover w-full transition-opacity duration-300 ${
                        loadedImages.has(image.id) ? 'opacity-100' : 'opacity-0'
                      }`}
                      loading="lazy"
                      ref={(el) => {
                        if (el && observerRef.current) {
                          observerRef.current.observe(el)
                        }
                      }}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                          <Camera className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-primary-red text-white text-xs px-2 py-1 rounded-full font-medium">
                        {categories.find(cat => cat.id === image.category)?.name}
                      </span>
                    </div>
                  </div>
                  
                  {/* Image Title */}
                  <div className="mt-3">
                    <h3 className="font-heading font-semibold text-primary-black group-hover:text-primary-red transition-colors duration-200">
                      {image.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Gallery Info */}
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
              Despre Galeria Noastră
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Fiecare imagine din galeria noastră reflectă angajamentul nostru față de calitate, 
              profesionalism și satisfacția clienților. Descoperă atelierul nostru modern și 
              echipamentele profesionale cu care lucrăm.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-primary-red" />
                </div>
                <h3 className="font-heading font-semibold text-primary-black mb-2">
                  Atelier Modern
                </h3>
                <p className="text-gray-600 text-sm">
                  Spații curate și organizate pentru servicii de calitate
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Filter className="w-8 h-8 text-primary-red" />
                </div>
                <h3 className="font-heading font-semibold text-primary-black mb-2">
                  Echipamente Profesionale
                </h3>
                <p className="text-gray-600 text-sm">
                  Tehnologii moderne pentru servicii precise și rapide
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-primary-red" />
                </div>
                <h3 className="font-heading font-semibold text-primary-black mb-2">
                  Servicii Complete
                </h3>
                <p className="text-gray-600 text-sm">
                  De la schimb anvelope la reparații complexe
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        images={filteredImages.map(img => img.src)}
        currentIndex={currentImageIndex}
        onIndexChange={setCurrentImageIndex}
      />
    </div>
  )
}
