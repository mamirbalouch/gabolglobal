'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, Globe, Leaf, Truck } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary to-secondary py-20 md:py-32 text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Global Trade Solutions for Pakistan
                </h1>
                <p className="text-lg mb-8 text-primary-foreground/90">
                  Connecting farmers, traders, and global buyers on one secure platform. Government-verified import & export services with international credibility.
                </p>
                <div className="flex gap-4">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    Explore Services
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                    Learn More
                  </Button>
                </div>
              </div>
              
              <div className="hidden md:block">
                <div className="bg-primary-foreground/10 rounded-lg p-8 backdrop-blur">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={24} className="text-accent" />
                      <span>SECP Registered</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={24} className="text-accent" />
                      <span>PSW Certified</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={24} className="text-accent" />
                      <span>NTN Verified</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={24} className="text-accent" />
                      <span>Government Approved</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Gabol Baloch Global</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Globe className="w-10 h-10 text-accent mb-2" />
                  <CardTitle>International Reach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    Connect with global buyers and suppliers. Our established network spans multiple continents, ensuring seamless international trade operations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Leaf className="w-10 h-10 text-accent mb-2" />
                  <CardTitle>Agricultural Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    Specialized in agricultural exports. Direct relationships with farmers and quality control standards ensure premium products for international markets.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Truck className="w-10 h-10 text-accent mb-2" />
                  <CardTitle>Logistics & Shipping</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    Complete logistics management from packaging to international shipment. We handle customs, documentation, and end-to-end delivery.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CheckCircle2 className="w-10 h-10 text-accent mb-2" />
                  <CardTitle>Government Verified</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    SECP registered, PSW certified, and NTN verified. All certifications ensure compliance with international standards and Pakistani regulations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Import Services', desc: 'International procurement with customs clearance' },
                { title: 'Export Services', desc: 'Agricultural & industrial exports worldwide' },
                { title: 'Wholesale Trading', desc: 'Agricultural materials and live animals' },
              ].map((service, i) => (
                <Card key={i} className="border border-border hover:border-accent transition-colors">
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-foreground/70">{service.desc}</p>
                    <Link href="/services" className="text-accent font-semibold hover:underline">
                      Learn More →
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                View All Services
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Join Pakistan's trusted import-export platform. Get verified, connected, and trading globally.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
