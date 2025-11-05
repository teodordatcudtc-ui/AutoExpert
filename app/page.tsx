import { Metadata } from 'next'
import Hero from '@/components/Hero'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: 'Auto Expert Group - Servicii Auto București | Schimb Anvelope, Echilibrare',
  description: 'Auto Expert Group București - servicii profesionale: schimb anvelope, echilibrare roți, vulcanizare, reparații jante. Programări: 0735538668. SPrelungirea Ghencea, București 077025.',
  keywords: 'vulcanizare București, schimb anvelope București, echilibrare roți, vulcanizare auto, reparații jante, TPMS, presiune anvelope',
  openGraph: {
    title: 'Auto Expert Group - Servicii Auto București',
    description: 'Servicii profesionale de vulcanizare, schimb anvelope, echilibrare roți în București. Contact: 0735538668',
    url: 'https://auto-expert-group.ro',
    images: ['/og-image.jpg'],
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeClient />
    </>
  )
}
