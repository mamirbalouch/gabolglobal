'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Gabol Baloch Global</h1>
            <p className="text-lg text-primary-foreground/90">
              An International Import & Export Organization connecting global trade opportunities
            </p>
          </div>
        </section>

        {/* Company Profile */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Company Profile</h2>
              <p className="text-lg text-foreground/80 mb-4">
                Gabol Baloch Global Pvt. Ltd. is a government-registered organization specializing in international trade of agricultural products, live animals, and general merchandise.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <Card className="border border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">Head Office</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>House No. 60A, 60B, Block C-6</p>
                    <p>New Subzi Mandi, Super Highway</p>
                    <p>Malir, Karachi, Pakistan</p>
                  </CardContent>
                </Card>
                
                <Card className="border border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">Contact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>📞 03004490371</p>
                    <p>📞 03307059776</p>
                    <p>📞 03178748915 (WhatsApp)</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Our Certifications</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg border border-border">
                  <Badge className="bg-accent text-accent-foreground">✓</Badge>
                  <div>
                    <p className="font-semibold">SECP Registered</p>
                    <p className="text-sm text-foreground/70">Securities & Exchange Commission</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg border border-border">
                  <Badge className="bg-accent text-accent-foreground">✓</Badge>
                  <div>
                    <p className="font-semibold">PSW Certified</p>
                    <p className="text-sm text-foreground/70">Pakistan Single Window</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg border border-border">
                  <Badge className="bg-accent text-accent-foreground">✓</Badge>
                  <div>
                    <p className="font-semibold">NTN Verified</p>
                    <p className="text-sm text-foreground/70">NTN: 8986959-1</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg border border-border">
                  <Badge className="bg-accent text-accent-foreground">✓</Badge>
                  <div>
                    <p className="font-semibold">Government Approved</p>
                    <p className="text-sm text-foreground/70">International compliance standards</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Vision & Mission</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border border-border">
                  <CardHeader>
                    <CardTitle className="text-xl">Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">
                      To become a globally recognized, trusted and transparent trade organization promoting Pakistan's products worldwide.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border border-border">
                  <CardHeader>
                    <CardTitle className="text-xl">Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-foreground/80 text-sm">
                      <li>✓ Provide secure and transparent import/export services</li>
                      <li>✓ Connect farmers, traders and global buyers</li>
                      <li>✓ Support Pakistan's agricultural exports</li>
                      <li>✓ Adopt modern digital trade systems</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Our Departments</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Management Department',
                  'International Trade Department',
                  'Agriculture Import/Export Wing',
                  'Logistics & Transport Department',
                  'Legal & Compliance Department',
                  'IT & Website Department',
                ].map((dept, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg border border-border">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <p className="font-medium">{dept}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Leadership</h2>
            <Card className="border border-border">
              <CardHeader>
                <CardTitle>Chairman, Founder & Director</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">Imran Ataullah Gabol</p>
                <p className="text-foreground/80">
                  Visionary leader with extensive experience in international trade, agricultural exports, and global business development.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
