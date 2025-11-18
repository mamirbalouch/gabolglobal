'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message. We will contact you soon!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg text-primary-foreground/90">
              Contact us for trade inquiries, partnerships, and more
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              {/* Contact Info */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                
                <Card className="border border-border">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-2">Head Office</h3>
                        <p className="text-foreground/80 text-sm">
                          House No. 60A, 60B, Block C-6<br />
                          New Subzi Mandi, Super Highway<br />
                          Malir, Karachi, Pakistan
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-border">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-2">Phone</h3>
                        <p className="text-foreground/80 text-sm">📞 03004490371</p>
                        <p className="text-foreground/80 text-sm">📞 03307059776</p>
                        <p className="text-foreground/80 text-sm">📱 03178748915 (WhatsApp)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-border">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-2">Business Hours</h3>
                        <p className="text-foreground/80 text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-foreground/80 text-sm">Saturday: 10:00 AM - 2:00 PM</p>
                        <p className="text-foreground/80 text-sm">Sunday: Closed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition h-32 resize-none"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>
                  <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Map Section */}
            <div className="rounded-lg overflow-hidden border border-border h-96">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                title="Gabol Baloch Global Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.850733234854!2d67.03888!3d24.8305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f5e7e7e7e7d%3A0x0!2sNew%20Subzi%20Mandi%2C%20Super%20Highway%2C%20Malir%2C%20Karachi!5e0!3m2!1sen!2s!4v1234567890"
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
