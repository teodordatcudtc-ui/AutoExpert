import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Phone, CheckCircle, Clock, Shield, Settings, Circle, Gauge, Wrench, Car, Truck } from 'lucide-react'
import { Services, ContactInfo } from '@/lib/constants'

type Params = { params: { id: string } }

export function generateStaticParams() {
  return Services.map((s) => ({ id: s.id }))
}

export function generateMetadata({ params }: Params): Metadata {
  const service = Services.find((s) => s.id === params.id)
  if (!service) {
    return {
      title: 'Serviciu - Auto Expert Group',
    }
  }
  return {
    title: `${service.title} | Auto Expert Group`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Auto Expert Group`,
      description: service.description,
      url: `https://auto-expert-group.ro/servicii/${service.id}`,
      images: ['/og-image.jpg'],
    },
  }
}

export default function ServiceDetailPage({ params }: Params) {
  const service = Services.find((s) => s.id === params.id)
  if (!service) return notFound()

  const iconMap = {
    tire: Circle,
    balance: Gauge,
    wrench: Wrench,
    wheel: Car,
    truck: Truck,
    gauge: Settings,
  } as const
  const IconComponent = iconMap[service.icon as keyof typeof iconMap] ?? Settings

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-black via-primary-dark to-primary-black text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center space-x-3 mb-4">
                <span className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/20">Serviciu Auto</span>
                <span className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/20">Auto Expert Group</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 text-shadow">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-6">{service.description}</p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="px-4 py-2 rounded-lg bg-white/10 border border-white/20">
                  <span className="text-white/90">Preț orientativ: </span>
                  <span className="font-semibold">{service.price}</span>
                </div>
                <Link href="/programari" className="btn-primary">
                  Programează-te
                </Link>
                <a href={`tel:${ContactInfo.phone}`} className="btn-secondary flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>Sună: {ContactInfo.phone}</span>
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-primary-red to-primary-blue flex items-center justify-center shadow-xl">
                  <IconComponent className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Includes */}
            <div className="card p-6">
              <h2 className="text-2xl font-heading font-bold text-primary-black mb-4">Ce include</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((f, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-red mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why us */}
            <div className="card p-6">
              <h2 className="text-2xl font-heading font-bold text-primary-black mb-4">De ce să ne alegi</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Echipamente moderne', desc: 'Tehnologie actuală pentru precizie maximă', icon: Settings },
                  { title: 'Garanție serviciu', desc: 'Calitate garantată pentru lucrările efectuate', icon: Shield },
                  { title: 'Timp optim', desc: 'Programare și execuție rapidă', icon: Clock },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-primary-light">
                    <item.icon className="w-6 h-6 text-primary-red mb-2" />
                    <h3 className="font-semibold text-primary-black">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Steps */}
            <div className="card p-6">
              <h2 className="text-2xl font-heading font-bold text-primary-black mb-4">Pași de lucru</h2>
              <ol className="space-y-4">
                {[
                  'Verificare inițială și evaluare',
                  'Executarea serviciului cu atenție la detalii',
                  'Control final și recomandări',
                ].map((step, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <span className="w-6 h-6 rounded-full bg-primary-red text-white text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="card p-6">
              <p className="text-sm text-gray-500 mb-1">Preț orientativ</p>
              <p className="text-3xl font-bold text-primary-red">{service.price}</p>
            </div>

            <div className="card p-6 space-y-4">
              <Link href="/programari" className="btn-primary w-full text-center">
                Programează-te
              </Link>
              <a href={`tel:${ContactInfo.phone}`} className="btn-secondary w-full text-center flex items-center justify-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>Sună: {ContactInfo.phone}</span>
              </a>
            </div>

            <div className="card p-6">
              <h3 className="font-heading font-semibold text-primary-black mb-3">Servicii similare</h3>
              <div className="space-y-2">
                {Services.filter((s) => s.id !== service.id).slice(0, 3).map((s) => (
                  <Link key={s.id} href={`/servicii/${s.id}`} className="block text-sm text-primary-blue hover:text-primary-blue/80">
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-red to-primary-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Pregătit să începem?</h2>
          <p className="text-white/90 max-w-3xl mx-auto mb-6">Contactează-ne pentru o ofertă personalizată sau programează-te online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/programari" className="bg-white text-primary-red hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
              Programează-te Acum
            </Link>
            <a href={`tel:${ContactInfo.phone}`} className="border-2 border-white text-white hover:bg-white hover:text-primary-red px-8 py-4 rounded-lg font-semibold transition-all duration-200">
              Sună Acum: {ContactInfo.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}


