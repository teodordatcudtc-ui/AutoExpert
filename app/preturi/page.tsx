import { Metadata } from 'next'
import PreturiClient from './PreturiClient'

export const metadata: Metadata = {
  title: 'Prețuri Vulcanizare București - Servicii Auto | Auto Ianys',
  description: 'Prețuri transparente pentru servicii vulcanizare București: schimb anvelope, echilibrare, vulcanizare, reparații jante. Contact: 0767062912.',
  keywords: 'prețuri vulcanizare București, cost schimb anvelope, preț echilibrare roți, Auto Ianys prețuri',
  openGraph: {
    title: 'Prețuri Vulcanizare București - Auto Ianys',
    description: 'Prețuri transparente pentru servicii vulcanizare și întreținere auto',
    url: 'https://vulcanizare-auto-ianys.ro/preturi',
  },
}

export default function PreturiPage() {
  return <PreturiClient />
}