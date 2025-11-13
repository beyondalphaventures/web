'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero */}
      <section className="container mx-auto px-6 py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6">
            <p className="text-gold text-xs uppercase tracking-wider">2025 'Hedge Fund to Watch of the Year'</p>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            BEYOND ALPHA<br />
            <span className="text-gold">VENTURES</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 uppercase tracking-wider">PRESERVING WEALTH • CULTIVATING LEGACIES</p>
          <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
            Institutional-grade investment strategies across nine transformative verticals.
            Headquartered at 40 Wall Street, New York.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-gold text-black px-8 py-3 rounded font-semibold hover:bg-gold-light transition">
                Schedule a Consultation
              </button>
            </Link>
            <a href="mailto:jfrankel@beyondalphaventures.com?subject=Track%20Record%20Request">
              <button className="border border-gold text-gold px-8 py-3 rounded font-semibold hover:bg-gold hover:text-black transition">
                View Our Track Record
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Investment Philosophy</h2>
          <p className="text-gray-400">Built on decades of institutional experience</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Risk-Adjusted Excellence</h3>
            <p className="text-gray-500">We prioritize consistent, risk-adjusted returns over volatile performance, focusing on downside protection and capital preservation.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔬</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Institutional-Grade Research</h3>
            <p className="text-gray-500">Our investment process combines quantitative analysis with deep fundamental research across all nine verticals.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Long-Term Partnership</h3>
            <p className="text-gray-500">We view our relationships as true partnerships, aligning our interests with yours for generational wealth building.</p>
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="bg-gray-950 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Track Record of Excellence</h2>
            <p className="text-gray-400">Consistent performance through market cycles</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
            <div>
              <div className="text-5xl font-bold text-gold mb-3">$2.8B</div>
              <div className="text-sm text-gray-400">Assets Under Management</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gold mb-3">24.7%</div>
              <div className="text-sm text-gray-400">5-Year Annualized Return</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gold mb-3">0.87</div>
              <div className="text-sm text-gray-400">Sharpe Ratio</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-gold mb-3">150+</div>
              <div className="text-sm text-gray-400">Portfolio Companies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Verticals */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nine Investment Verticals</h2>
          <p className="text-gray-400">Strategic positioning across transformative sectors</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: '🤖', name: 'Artificial Intelligence' },
            { icon: '🔗', name: 'Blockchain & Web3' },
            { icon: '⚛️', name: 'Quantum Computing' },
            { icon: '🦾', name: 'Robotics & Automation' },
            { icon: '🧬', name: 'Longevity & Biotech' },
            { icon: '⚡', name: 'Clean Energy' },
            { icon: '🚀', name: 'Space Technology' },
            { icon: '🔐', name: 'Cybersecurity' },
            { icon: '💎', name: 'Advanced Materials' }
          ].map((v, i) => (
            <div key={i} className="border border-gray-800 p-6 rounded hover:border-gold transition">
              <div className="text-4xl mb-3">{v.icon}</div>
              <h3 className="text-lg font-semibold">{v.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section id="team" className="bg-gray-950 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-gray-400">Seasoned investment professionals</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Robert Altchiller', role: 'Managing Partner & CIO', img: '/img/Robert-Altchiller.png' },
              { name: 'Jacob Frankel', role: 'Head of Research', img: '/img/Jacob-Frankel.png' },
            ].map((m, i) => (
              <div key={i} className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gray-800">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{m.name}</h3>
                <p className="text-sm text-gray-500">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="container mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto border border-gray-800 rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Partner With Us</h2>
          <p className="text-gray-400 mb-8">
            Limited partnerships available for qualified investors.
          </p>
          <a href="mailto:jfrankel@beyondalphaventures.com?subject=Investor%20Deck%20Request&body=I%20am%20interested%20in%20receiving%20the%20Beyond%20Alpha%20Ventures%20investor%20deck.%0A%0AName:%20%0ACompany:%20%0AEmail:%20%0APhone:%20">
            <button className="bg-gold text-black px-10 py-4 rounded font-bold hover:bg-gold-light transition">
              Request Investor Deck
            </button>
          </a>
          <p className="text-sm text-gray-600 mt-6">Minimum: $1M • Accredited investors only</p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
