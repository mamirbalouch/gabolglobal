'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, Package, Truck, Briefcase } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Package,
      title: 'Import Services',
      description: 'Comprehensive import solutions with international procurement, customs documentation, clearance and logistics management.',
      features: ['Supplier identification', 'Quality verification', 'Customs handling', 'Documentation support']
    },
    {
      icon: Truck,
      title: 'Export Services',
      description: 'Agricultural and industrial exports with professional packaging, shipment management, and international documentation.',
      features: ['Product verification', 'Packaging expertise', 'Shipment coordination', 'Export documentation']
    },
    {
      icon: Briefcase,
      title: 'Wholesale Trading',
      description: 'Trading in agricultural raw materials, live animals, and general merchandise with competitive pricing.',
      features: ['Agricultural materials', 'Live animal trading', 'General merchandise', 'Bulk orders']
    },
    {
      icon: FileText,
      title: 'Consultancy Services',
      description: 'Expert guidance on import/export procedures, legal documentation, and trade compliance requirements.',
      features: ['Trade guidance', 'Legal support', 'Documentation assistance', 'Compliance consulting']
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg text-primary-foreground/90">
              Complete import/export solutions for your international business needs
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {services.map((service, i) => {
                const Icon = service.icon
                return (
                  <Card key={i} className="border border-border hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <Icon className="w-12 h-12 text-accent mb-4" />
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-foreground/80">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm">
                            <span className="w-2 h-2 bg-accent rounded-full"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <Card className="border border-border bg-primary/5">
              <CardHeader>
                <CardTitle>Why Our Services Stand Out</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Government Verified</h3>
                    <p className="text-sm text-foreground/80">SECP registered and PSW certified for complete compliance.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Experience</h3>
                    <p className="text-sm text-foreground/80">Years of expertise in international trade and customs procedures.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">24/7 Support</h3>
                    <p className="text-sm text-foreground/80">Dedicated customer support for all your import/export needs.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
