'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'

export default function Membership() {
  const plans = [
    {
      name: 'Basic',
      price: 'Contact',
      description: 'Perfect for small traders',
      features: [
        'Product listing access',
        'Buyer directory',
        'Email support',
        'Monthly newsletter'
      ]
    },
    {
      name: 'Professional',
      price: 'Contact',
      description: 'For established businesses',
      featured: true,
      features: [
        'Featured product listings',
        'Direct buyer access',
        'Priority support',
        'Trade documentation',
        'Export guidance',
        'Networking events'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Contact',
      description: 'For large exporters',
      features: [
        'Custom solutions',
        'Dedicated account manager',
        'International logistics support',
        '24/7 premium support',
        'Custom documentation',
        'Exclusive partnerships'
      ]
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Platform</h1>
            <p className="text-lg text-primary-foreground/90">
              Get verified and start trading globally with our membership programs
            </p>
          </div>
        </section>

        {/* Membership Plans */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {plans.map((plan, i) => (
                <Card 
                  key={i} 
                  className={`border ${plan.featured ? 'border-accent shadow-lg' : 'border-border'} hover:shadow-lg transition-shadow`}
                >
                  {plan.featured && <div className="bg-accent text-accent-foreground text-center py-2 text-sm font-semibold">Most Popular</div>}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <p className="text-foreground/70 text-sm mt-2">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <p className="text-3xl font-bold text-accent">{plan.price}</p>
                    </div>
                    <ul className="space-y-3">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-center gap-3">
                          <Check size={18} className="text-accent flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${plan.featured ? 'bg-accent text-accent-foreground hover:bg-accent/90' : 'border border-border'}`}
                      variant={plan.featured ? 'default' : 'outline'}
                    >
                      Join Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border border-border bg-primary/5">
              <CardHeader>
                <CardTitle>Registration Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { step: 1, title: 'Apply', desc: 'Submit your application' },
                    { step: 2, title: 'Verify', desc: 'Document verification' },
                    { step: 3, title: 'Approve', desc: 'Profile review' },
                    { step: 4, title: 'Activate', desc: 'Start trading' }
                  ].map((item) => (
                    <div key={item.step} className="text-center">
                      <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold mx-auto mb-2">
                        {item.step}
                      </div>
                      <p className="font-semibold text-sm">{item.title}</p>
                      <p className="text-xs text-foreground/70 mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Choose your membership plan and begin your international trade journey today.
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Apply for Membership
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
