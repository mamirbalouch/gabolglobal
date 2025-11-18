import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-accent transition-colors">Company Profile</Link></li>
              <li><Link href="/" className="hover:text-accent transition-colors">Vision & Mission</Link></li>
              <li><Link href="/" className="hover:text-accent transition-colors">Leadership</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-accent transition-colors">Import Services</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Export Services</Link></li>
              <li><Link href="/services" className="hover:text-accent transition-colors">Trading</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/legal" className="hover:text-accent transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/legal" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href="/legal" className="hover:text-accent transition-colors">Certificates</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <p className="text-sm mb-2">Karachi, Pakistan</p>
            <p className="text-sm mb-4">📞 +92-300-4490371</p>
            <div className="flex gap-4">
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">WhatsApp</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Facebook</a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; 2025 Gabol Baloch Global Pvt. Ltd. All rights reserved.</p>
          <p className="mt-2">SECP Registration • PSW Certified • Government Verified</p>
        </div>
      </div>
    </footer>
  )
}
