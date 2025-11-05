import { Metadata } from 'next'
import PoliticaClient from './PoliticaClient'

export const metadata: Metadata = {
  title: 'Politica de Confidențialitate - Vulcanizare Auto Ianys București',
  description: 'Politica de confidențialitate Vulcanizare Auto Ianys București. Protejăm datele personale și respectăm confidențialitatea clienților.',
  keywords: 'politica confidențialitate vulcanizare București, protecție date personale, Auto Ianys confidențialitate',
  openGraph: {
    title: 'Politica de Confidențialitate - Auto Ianys',
    description: 'Protejăm datele personale și respectăm confidențialitatea clienților',
    url: 'https://vulcanizare-auto-ianys.ro/politica-confidentialitate',
  },
}

export default function PoliticaPage() {
  return <PoliticaClient />
}