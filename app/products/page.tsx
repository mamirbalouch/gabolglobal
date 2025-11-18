'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Products() {
  const products = [
    { category: 'Agricultural Products', items: ['Rice', 'Wheat', 'Cotton', 'Fruits & Vegetables', 'Spices'] },
    { category: 'Live Animals', items: ['Cattle', 'Goats', 'Sheep', 'Poultry', 'Farm Animals'] },
    { category: 'General Merchandise', items: ['Textiles', 'Industrial Materials', 'Construction Materials', 'Consumer Goods'] },
    { category: 'Processed Products', items: ['Dried Fruits', 'Canned Foods', 'Leather Products', 'Artisan Crafts'] },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-lg text-primary-foreground/90">
              Quality products from Pakistan to the world
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {products.map((product, i) => (
                <Card key={i} className="border border-border hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{product.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {product.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-3 p-3 bg-primary/5 rounded border border-border/50">
                          <span className="w-2 h-2 bg-accent rounded-full"></span>
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-border">
              <h2 className="text-2xl font-bold mb-4">Quality Assurance</h2>
              <p className="text-foreground/80 mb-4">
                All our products undergo rigorous quality checks and international standards compliance testing before shipment.
              </p>
              <p className="text-foreground/80">
                Contact us for detailed product specifications, pricing, and international shipping information.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
