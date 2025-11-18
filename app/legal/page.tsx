'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Legal() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Legal Documents</h1>
            <p className="text-lg text-primary-foreground/90">
              Official certifications and company documentation
            </p>
          </div>
        </section>

        {/* Legal Documents */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 space-y-6">
            <div className="grid gap-6">
              <Card className="border border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="w-fit bg-accent text-accent-foreground mb-2">✓ Verified</Badge>
                  <CardTitle>SECP Registration Certificate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4">
                    Official registration with the Securities & Exchange Commission of Pakistan.
                  </p>
                  <p className="text-sm text-foreground/70">
                    Registration Status: Active | Authority: SECP
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="w-fit bg-accent text-accent-foreground mb-2">✓ Verified</Badge>
                  <CardTitle>Pakistan Single Window (PSW) Certification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4">
                    Government of Pakistan's digital platform for faster customs clearance and trade operations.
                  </p>
                  <p className="text-sm text-foreground/70">
                    Benefits: Faster clearance | Government verified documentation | Improved credibility
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="w-fit bg-accent text-accent-foreground mb-2">✓ Verified</Badge>
                  <CardTitle>NTN Certificate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4">
                    National Tax Number (NTN): 8986959-1
                  </p>
                  <p className="text-sm text-foreground/70">
                    Verified Tax Status: Active | Authority: Federal Board of Revenue (FBR)
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Company Profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-2">
                    <strong>Company Name:</strong> Gabol Baloch Global Pvt. Ltd. Company
                  </p>
                  <p className="text-foreground/80 mb-2">
                    <strong>Business Activity Code:</strong> 462000
                  </p>
                  <p className="text-foreground/80">
                    <strong>Principal Activities:</strong> Wholesale & Retail Trade, Import/Export Services, Agricultural Product Trading
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Terms & Conditions */}
            <Card className="border border-border bg-primary/5">
              <CardHeader>
                <CardTitle>Terms & Conditions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-foreground/80">
                <p>
                  All business operations are conducted in accordance with Pakistan's import-export regulations, customs procedures, and international trade standards.
                </p>
                <p>
                  Clients must verify all products before shipment and comply with destination country regulations. Our company maintains SECP, PSW, and NTN certifications.
                </p>
                <p>
                  For complete terms and conditions, contact our Legal & Compliance Department.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border bg-primary/5">
              <CardHeader>
                <CardTitle>Membership Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-foreground/80">
                <p>
                  Membership provides access to our global trade network, verified buyer and supplier database, and professional trading services.
                </p>
                <p>
                  All members must complete verification procedures and comply with our Code of Conduct. Membership benefits include priority support, trade documentation, and networking opportunities.
                </p>
                <p>
                  For detailed membership policy information, contact our Membership Department.
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
