import { Metadata } from 'next'
import DespreClient from './DespreClient'

export const metadata: Metadata = {
  title: 'Despre Vulcanizare Auto Ianys București - Experiență și Calitate',
  description: 'Află mai multe despre Vulcanizare Auto Ianys București: peste 10 ani experiență, echipă calificată, servicii de calitate. Contact: 0767062912.',
  keywords: 'despre vulcanizare București, Auto Ianys, experiență vulcanizare, echipă calificată, servicii auto calitate',
  openGraph: {
    title: 'Despre Vulcanizare Auto Ianys București',
    description: 'Peste 10 ani de experiență în domeniul auto cu servicii de calitate',
    url: 'https://vulcanizare-auto-ianys.ro/despre',
  },
}

export default function DesprePage() {
  return <DespreClient />
}