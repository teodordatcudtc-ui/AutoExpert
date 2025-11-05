'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react'

interface LightboxProps {
  isOpen: boolean
  onClose: () => void
  images: string[]
  currentIndex: number
  onIndexChange: (index: number) => void
}

export default function Lightbox({ isOpen, onClose, images, currentIndex, onIndexChange }: LightboxProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowLeft':
          e.preventDefault()
          onIndexChange(currentIndex > 0 ? currentIndex - 1 : images.length - 1)
          break
        case 'ArrowRight':
          e.preventDefault()
          onIndexChange(currentIndex < images.length - 1 ? currentIndex + 1 : 0)
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, currentIndex, images.length, onClose, onIndexChange])

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = images[currentIndex]
    link.download = `vulcanizare-auto-ianys-${currentIndex + 1}.jpg`
    link.click()
  }

  const goToPrevious = () => {
    onIndexChange(currentIndex > 0 ? currentIndex - 1 : images.length - 1)
  }

  const goToNext = () => {
    onIndexChange(currentIndex < images.length - 1 ? currentIndex + 1 : 0)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
          aria-label="Închide lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="absolute top-4 right-16 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
          aria-label="Descarcă imaginea"
        >
          <Download className="w-6 h-6" />
        </button>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              aria-label="Imaginea anterioară"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
              aria-label="Imaginea următoare"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </>
        )}

        {/* Image Container */}
        <div className="flex items-center justify-center h-full p-8">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentIndex]}
              alt={`Galerie vulcanizare ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg"
              onLoad={() => setIsLoading(false)}
              onError={() => setIsLoading(false)}
            />
            
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 rounded-lg">
                <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
