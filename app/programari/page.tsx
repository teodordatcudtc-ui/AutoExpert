import { Metadata } from 'next'
import ProgramariClient from './ProgramariClient'

export const metadata: Metadata = {
  title: 'Programări Vulcanizare Auto Ianys București - Rezervă Online',
  description: 'Programează-te online la Vulcanizare Auto Ianys București. Servicii: schimb anvelope, echilibrare, vulcanizare. Contact: 0767062912. Program: L-V 8:00-18:00.',
  keywords: 'programări vulcanizare București, rezervă online auto, programare schimb anvelope, Auto Ianys programări',
  openGraph: {
    title: 'Programări Vulcanizare Auto Ianys București',
    description: 'Programează-te online pentru servicii vulcanizare în București',
    url: 'https://vulcanizare-auto-ianys.ro/programari',
  },
}

export default function ProgramariPage() {
  return <ProgramariClient />
}