import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-secondary/50 py-12 px-6">
      <div className="container mx-auto">
        {/* BAV Logo */}
        <div className="mb-8">
          <img src="/img/bav-logo-long.png" alt="Beyond Alpha Ventures" className="h-10 opacity-80" />
        </div>

        <div className="grid md:grid-cols-5 gap-8 mb-8">
          {/* Investments */}
          <div>
            <h4 className="font-semibold text-gold mb-3">Investments</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/invest" className="hover:text-gold transition-colors">
                  Invest
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-gold transition-colors">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* News */}
          <div>
            <h4 className="font-semibold text-gold mb-3">News</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/news" className="hover:text-gold transition-colors">
                  All News
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-gold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-gold transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/press" className="hover:text-gold transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-gold transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/data-room" className="hover:text-gold transition-colors">
                  Data Room
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-gold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/privacy" className="hover:text-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-gold transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gold mb-3">Contact</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div>
                <p className="font-medium text-gray-300">New York</p>
                <p className="leading-relaxed">
                  The Trump Building<br />
                  40 Wall Street, Suite 2702<br />
                  New York, NY 10005
                </p>
              </div>
              <div>
                <p className="font-medium text-gray-300 mb-1">Phone</p>
                <p>
                  <a href="tel:+16463801801" className="hover:text-gold transition-colors">
                    (646) 380-1801
                  </a>
                </p>
                <p>
                  <a href="tel:+16464410400" className="hover:text-gold transition-colors">
                    (646) 441-0400
                  </a>
                </p>
                <p>
                  <a href="tel:+19732247098" className="hover:text-gold transition-colors">
                    (973) 224-7098
                  </a>
                </p>
              </div>
              <div>
                <p className="font-medium text-gray-300 mb-1">Email</p>
                <a 
                  href="mailto:investors@beyondalphaventures.com" 
                  className="hover:text-gold transition-colors"
                >
                  investors@beyondalphaventures.com
                </a>
              </div>
              <div>
                <a 
                  href="https://www.beyondalphaventures.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  www.beyondalphaventures.com →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center text-sm text-gray-600 pt-8 border-t border-white/10">
          <p>© 2025 Beyond Alpha Ventures. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
