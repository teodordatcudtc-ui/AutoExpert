import { Metadata } from 'next'
import TermeniClient from './TermeniClient'

export const metadata: Metadata = {
  title: 'Termeni și Condiții - Vulcanizare Auto Ianys București',
  description: 'Termeni și condiții Vulcanizare Auto Ianys București. Condițiile generale de prestare a serviciilor de vulcanizare și întreținere auto.',
  keywords: 'termeni condiții vulcanizare București, condiții servicii auto, Auto Ianys termeni',
  openGraph: {
    title: 'Termeni și Condiții - Auto Ianys',
    description: 'Condițiile generale de prestare a serviciilor de vulcanizare',
    url: 'https://vulcanizare-auto-ianys.ro/termeni-conditii',
  },
}

export default function TermeniPage() {
  return <TermeniClient />
}