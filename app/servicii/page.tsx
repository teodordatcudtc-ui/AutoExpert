import { Metadata } from 'next'
import ServiciiClient from './ServiciiClient'

export const metadata: Metadata = {
  title: 'Servicii Auto București - Schimb Anvelope, Echilibrare | Auto Expert Group',
  description: 'Servicii complete în București: schimb anvelope, echilibrare roți, vulcanizare, reparații jante, depanare, verificare TPMS. Contact: 0735538668',
  keywords: 'servicii vulcanizare București, schimb anvelope, echilibrare roți, vulcanizare auto, reparații jante, depanare, TPMS, presiune anvelope',
  openGraph: {
    title: 'Servicii Auto București - Auto Expert Group',
    description: 'Servicii complete în București: schimb anvelope, echilibrare roți, vulcanizare, reparații jante',
    url: 'https://auto-expert-group.ro/servicii',
  },
}

export default function ServiciiPage() {
  return <ServiciiClient />
}