import { Metadata } from 'next'
import FAQClient from './FAQClient'

export const metadata: Metadata = {
  title: 'FAQ Vulcanizare Auto Ianys București - Întrebări Frecvente',
  description: 'Răspunsuri la întrebările frecvente despre serviciile de vulcanizare Auto Ianys București: schimb anvelope, echilibrare, prețuri, program. Contact: 0767062912',
  keywords: 'FAQ vulcanizare București, întrebări frecvente auto, schimb anvelope, echilibrare roți, prețuri vulcanizare',
  openGraph: {
    title: 'FAQ Vulcanizare Auto Ianys București',
    description: 'Răspunsuri la întrebările frecvente despre serviciile de vulcanizare',
    url: 'https://vulcanizare-auto-ianys.ro/faq',
  },
}

export default function FAQPage() {
  return <FAQClient />
}
