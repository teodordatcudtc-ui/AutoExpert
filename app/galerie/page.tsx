import { Metadata } from 'next'
import GalerieClient from './GalerieClient'

export const metadata: Metadata = {
  title: 'Galerie Vulcanizare Auto Ianys București - Imagini Atelier și Servicii',
  description: 'Vezi galeria de imagini Vulcanizare Auto Ianys București: atelier modern, echipamente, servicii de vulcanizare, schimb anvelope, echilibrare. Calitate garantată.',
  keywords: 'galerie vulcanizare București, imagini atelier auto, servicii vulcanizare, echipamente moderne, Auto Ianys galerie',
  openGraph: {
    title: 'Galerie Vulcanizare Auto Ianys București',
    description: 'Vezi galeria de imagini cu atelierul nostru modern și serviciile de calitate',
    url: 'https://vulcanizare-auto-ianys.ro/galerie',
  },
}

export default function GaleriePage() {
  return <GalerieClient />
}