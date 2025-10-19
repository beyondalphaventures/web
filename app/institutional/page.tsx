'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'

export default function Institutional() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">Institutional Solutions</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Tailored investment strategies and comprehensive services for institutional clients, family offices, and high-net-worth individuals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-gradient-to-b from-secondary/30 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Our Services</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Managed Accounts',
                description: 'Separately managed accounts tailored to your specific investment objectives, risk tolerance, and constraints. Full transparency with customized reporting.',
                features: ['Custom mandate design', 'Direct ownership', 'Tax optimization', 'Real-time reporting']
              },
              {
                title: 'Co-Investment Opportunities',
                description: 'Access to exclusive co-investment opportunities alongside our flagship funds in high-conviction positions across our nine verticals.',
                features: ['Deal-by-deal basis', 'Enhanced terms', 'Direct partnerships', 'Strategic alignment']
              },
              {
                title: 'Advisory Services',
                description: 'Strategic advisory for portfolio construction, asset allocation, and risk management. Leverage our expertise without a full mandate.',
                features: ['Portfolio review', 'Strategy consulting', 'Market insights', 'Due diligence support']
              },
              {
                title: 'Family Office Solutions',
                description: 'Comprehensive wealth management services including multi-generational planning, philanthropic strategies, and succession planning.',
                features: ['Holistic planning', 'Legacy preservation', 'Philanthropic advisory', 'Governance structures']
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-8 rounded-2xl hover-lift"
              >
                <h3 className="text-3xl font-bold mb-4 gradient-text">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <svg className="w-5 h-5 text-gold mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Why Institutional Clients Choose Us</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Proven Track Record',
                description: 'Consistent outperformance across market cycles with a disciplined, research-driven approach.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              },
              {
                title: 'Institutional Infrastructure',
                description: 'Enterprise-grade technology, robust risk management, and institutional-quality operations.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                )
              },
              {
                title: 'Aligned Interests',
                description: 'Significant personal capital invested alongside clients with transparent fee structures.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-8 rounded-2xl text-center"
              >
                <div className="text-gold mb-6 flex justify-center">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-secondary/30 to-transparent">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-12 rounded-3xl text-center border border-gold/20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Schedule a Consultation</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Discuss how we can tailor our institutional solutions to meet your specific needs.
            </p>
            <a href="mailto:institutional@beyondalphaventures.com?subject=Institutional%20Services%20Inquiry&body=I%20am%20interested%20in%20learning%20more%20about%20your%20institutional%20solutions.%0A%0AName:%20%0AOrganization:%20%0AEmail:%20%0APhone:%20%0A%0AArea%20of%20Interest:%20">
              <motion.button
                className="bg-gold hover:bg-gold-light text-primary px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Our Institutional Team
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-secondary/50 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-gold font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about" className="hover:text-gold transition">About</a></li>
                <li><a href="/team" className="hover:text-gold transition">Team</a></li>
                <li><a href="/invest" className="hover:text-gold transition">Invest</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gold font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/app" className="hover:text-gold transition">Trading App</a></li>
                <li><a href="/institutional" className="hover:text-gold transition">Institutional</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gold font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-gold transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gold transition">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gold font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-gold transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-gold transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm border-t border-white/5 pt-8">
            <p>© 2025 Beyond Alpha Ventures. All rights reserved.</p>
            <p className="mt-2 text-xs">
              Past performance is not indicative of future results. Investment involves risk including possible loss of principal.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
