'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'

export default function Invest() {
  const verticals = [
    { name: 'Artificial Intelligence', icon: '🤖', desc: 'Next-gen AI infrastructure and enterprise solutions' },
    { name: 'Blockchain & Web3', icon: '🔗', desc: 'Decentralized finance and digital asset protocols' },
    { name: 'Quantum Computing', icon: '⚛️', desc: 'Quantum hardware and algorithm development' },
    { name: 'Robotics & Automation', icon: '🦾', desc: 'Advanced robotics and autonomous systems' },
    { name: 'Longevity & Biotech', icon: '🧬', desc: 'Life extension and regenerative medicine' },
    { name: 'Clean Energy', icon: '⚡', desc: 'Renewable energy and sustainable infrastructure' },
    { name: 'Space Technology', icon: '🚀', desc: 'Satellite systems and space exploration' },
    { name: 'Cybersecurity', icon: '🔐', desc: 'Enterprise security and threat intelligence' },
    { name: 'Advanced Materials', icon: '💎', desc: 'Nanotechnology and smart materials' }
  ]

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
              <span className="gradient-text">Investment Strategy</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Multi-strategy approach across nine transformative verticals, delivering consistent alpha through rigorous research and active management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Investment Verticals */}
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
              <span className="gradient-text">Nine Investment Verticals</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Strategically positioned across the world's most transformative sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {verticals.map((vertical, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="glass p-6 rounded-xl border border-white/5 hover:border-gold/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="text-4xl mb-3">{vertical.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-gold transition-colors">
                  {vertical.name}
                </h3>
                <p className="text-gray-500 text-sm">{vertical.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
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
              <span className="gradient-text">Track Record of Excellence</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '$2.8B', label: 'Assets Under Management' },
              { value: '24.7%', label: 'Avg. Annual Return (5yr)' },
              { value: '0.87', label: 'Sharpe Ratio' },
              { value: '150+', label: 'Portfolio Companies' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center glass p-8 rounded-2xl"
              >
                <div className="text-5xl lg:text-6xl font-bold gradient-text mb-3">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-secondary/30 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Our Investment Process</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Research', desc: 'Deep fundamental and technical analysis across all verticals' },
              { step: '02', title: 'Due Diligence', desc: 'Rigorous vetting of teams, technology, and market opportunity' },
              { step: '03', title: 'Portfolio Construction', desc: 'Optimized allocation with focus on risk-adjusted returns' },
              { step: '04', title: 'Active Management', desc: 'Continuous monitoring and portfolio rebalancing' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-6 rounded-xl"
              >
                <div className="text-4xl font-bold gradient-text mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-12 rounded-3xl text-center border border-gold/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-50"></div>
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="gradient-text">Partner With Us</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Limited partnerships available for qualified investors seeking exceptional returns
                and strategic diversification.
              </p>
              <motion.button
                className="bg-gold hover:bg-gold-light text-primary px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Investor Deck
              </motion.button>
              <p className="text-gray-500 text-sm mt-6">
                Minimum investment: $1M • Accredited investors only
              </p>
            </div>
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
