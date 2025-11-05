import { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact Vulcanizare Auto Ianys București - Programări și Informații',
  description: 'Contact Vulcanizare Auto Ianys București: Strada Mircea Vulcănescu 94, telefon 0767062912. Programări, oferte și consultanță tehnică.',
  keywords: 'contact vulcanizare București, Auto Ianys contact, programări vulcanizare, telefon vulcanizare București',
  openGraph: {
    title: 'Contact Vulcanizare Auto Ianys București',
    description: 'Contactează-ne pentru programări și servicii vulcanizare în București',
    url: 'https://vulcanizare-auto-ianys.ro/contact',
  },
}

export default function ContactPage() {
  return <ContactClient />
}