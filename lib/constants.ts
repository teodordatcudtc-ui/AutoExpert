export const ContactInfo = {
  address: 'SPrelungirea Ghencea, București 077025',
  phone: '0735538668',
  email: 'contact@auto-expert-group.ro',
  coordinates: {
    lat: 44.40610847898244,
    lng: 25.978275431678014,
  },
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2850.3185568400017!2d25.978275431678014!3d44.40610847898244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b200871858086f%3A0xf2e76844e1fc4c09!2sAuto%20Expert%20Group!5e0!3m2!1sen!2sro!4v1762329415633!5m2!1sen!2sro',
}

export const BusinessHours = {
  weekdays: '08:00 - 18:00',
  saturday: '08:00 - 14:00',
  sunday: 'Închis',
}

export const Services = [
  {
    id: 'schimb-anvelope',
    title: 'Schimb Anvelope',
    description: 'Schimb anvelope de vară și iarnă cu echilibrare profesională',
    features: [
      'Schimb anvelope de vară și iarnă',
      'Echilibrare inclusă în preț',
      'Verificare presiune TPMS',
      'Depozitare anvelope',
    ],
    price: 'de la 50 RON',
    icon: 'tire',
  },
  {
    id: 'echilibrare',
    title: 'Echilibrare Roți',
    description: 'Echilibrare profesională pentru o conducere sigură și confortabilă',
    features: [
      'Echilibrare statică și dinamică',
      'Verificare jante și anvelope',
      'Testare pe drum',
      'Garanție serviciu',
    ],
    price: 'de la 30 RON',
    icon: 'balance',
  },
  {
    id: 'vulcanizare',
    title: 'Vulcanizare',
    description: 'Reparații anvelope și vulcanizare de calitate',
    features: [
      'Reparații anvelope',
      'Vulcanizare profesională',
      'Verificare integritate',
      'Testare presiune',
    ],
    price: 'de la 25 RON',
    icon: 'wrench',
  },
  {
    id: 'reparatii-jante',
    title: 'Reparații Jante',
    description: 'Reparații și restaurare jante auto',
    features: [
      'Reparații jante deteriorate',
      'Restaurare aspect original',
      'Vopsire și finisare',
      'Garanție calitate',
    ],
    price: 'de la 80 RON',
    icon: 'wheel',
  },
  {
    id: 'depanare',
    title: 'Depanare la Fața Locului',
    description: 'Servicii de depanare și asistență rutieră',
    features: [
      'Schimb anvelope pană',
      'Umflare anvelope',
      'Verificare sistem TPMS',
      'Asistență 24/7',
    ],
    price: 'de la 100 RON',
    icon: 'truck',
  },
  {
    id: 'tpms',
    title: 'Verificare TPMS',
    description: 'Verificare și reparații sistem monitorizare presiune',
    features: [
      'Verificare senzori TPMS',
      'Reparații și înlocuiri',
      'Programare senzori',
      'Testare funcționalitate',
    ],
    price: 'de la 40 RON',
    icon: 'gauge',
  },
]

export const Pricing = [
  {
    name: 'Pachet Basic',
    price: '120 RON',
    description: 'Pentru mașini mici și medii',
    features: [
      'Schimb 4 anvelope',
      'Echilibrare inclusă',
      'Verificare presiune',
      'Depozitare 6 luni',
    ],
    popular: false,
  },
  {
    name: 'Pachet Premium',
    price: '180 RON',
    description: 'Pentru mașini premium și SUV',
    features: [
      'Schimb 4 anvelope',
      'Echilibrare precisă',
      'Verificare TPMS',
      'Depozitare 12 luni',
      'Verificare jante',
    ],
    popular: true,
  },
  {
    name: 'Pachet Complete',
    price: '250 RON',
    description: 'Servicii complete cu garanție',
    features: [
      'Schimb 4 anvelope',
      'Echilibrare profesională',
      'Verificare TPMS',
      'Depozitare 12 luni',
      'Reparații jante minore',
      'Garanție 6 luni',
    ],
    popular: false,
  },
]

export const FAQ = [
  {
    question: 'Cât durează schimbul de anvelope?',
    answer: 'Schimbul de anvelope durează aproximativ 30-45 de minute pentru 4 anvelope, incluzând echilibrarea și verificarea presiunii.',
  },
  {
    question: 'Oferiți depozitare pentru anvelopele de sezon?',
    answer: 'Da, oferim servicii de depozitare pentru anvelopele de sezon cu prețuri avantajoase pentru 6 sau 12 luni.',
  },
  {
    question: 'Când este recomandat să schimb anvelopele?',
    answer: 'Anvelopele de vară se schimbă când temperatura scade sub 7°C, iar cele de iarnă când temperatura crește peste 7°C.',
  },
  {
    question: 'Ce înseamnă echilibrarea roților?',
    answer: 'Echilibrarea roților elimină vibrațiile la viteză mare prin adăugarea de greutăți pe jantă pentru o distribuție uniformă a masei.',
  },
  {
    question: 'Oferiți servicii de depanare?',
    answer: 'Da, oferim servicii de depanare la fața locului pentru schimb anvelope pană și alte probleme urgente.',
  },
  {
    question: 'Ce este sistemul TPMS?',
    answer: 'TPMS (Tire Pressure Monitoring System) monitorizează presiunea din anvelope și vă alertează când aceasta scade sub nivelul recomandat.',
  },
]

export const Navigation = [
  { name: 'Acasă', href: '/' },
  { name: 'Servicii', href: '/servicii' },
  { name: 'Prețuri', href: '/preturi' },
  { name: 'Galerie', href: '/galerie' },
  { name: 'Despre', href: '/despre' },
  { name: 'Programări', href: '/programari' },
]
