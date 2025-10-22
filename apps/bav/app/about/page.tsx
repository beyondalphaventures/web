'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

export default function About() {
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
              <span className="gradient-text">About Beyond Alpha Ventures</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A distinguished multi-strategy family office and hedge fund dedicated to preserving wealth and cultivating legacies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 bg-gradient-to-b from-secondary/30 to-transparent">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-8 gradient-text">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Founded with a vision to redefine investment excellence, Beyond Alpha Ventures has emerged as a premier
                multi-strategy family office and hedge fund. We combine institutional-grade research with cutting-edge
                technology to identify and capitalize on transformative opportunities across global markets.
              </p>
              <p>
                Our approach is built on three pillars: rigorous risk management, deep sector expertise, and a commitment
                to long-term value creation. We don't just seek returns—we architect portfolios designed to weather market
                cycles and deliver consistent alpha.
              </p>
              <p>
                With a focus on nine key investment verticals spanning artificial intelligence, blockchain, quantum computing,
                and beyond, we position our clients at the forefront of technological and economic transformation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investment Philosophy */}
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
              <span className="gradient-text">Investment Philosophy</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Risk-Adjusted Excellence',
                description: 'We employ sophisticated hedging strategies and rigorous risk management protocols to ensure consistent alpha generation while protecting capital across market environments.',
              },
              {
                title: 'Research-Driven Insights',
                description: 'Our proprietary research framework leverages AI-driven analytics and global intelligence networks to uncover asymmetric opportunities before they become consensus trades.',
              },
              {
                title: 'Long-Term Partnership',
                description: 'We align our interests with yours through transparent fee structures, concentrated conviction, and a genuine commitment to generational wealth preservation.',
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-8 rounded-2xl hover-lift"
              >
                <h3 className="text-2xl font-bold mb-4 text-gold">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-secondary/30 to-transparent">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-8 gradient-text">Our Values</h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                title: 'Excellence',
                description: 'We pursue excellence in every aspect of our work, from research and analysis to client service and portfolio construction.'
              },
              {
                title: 'Integrity',
                description: 'Trust is the foundation of lasting relationships. We operate with complete transparency and unwavering ethical standards.'
              },
              {
                title: 'Innovation',
                description: 'We continuously evolve our strategies and methodologies to stay ahead of market dynamics and technological change.'
              },
              {
                title: 'Discretion',
                description: 'We maintain the highest levels of confidentiality and discretion in all client relationships and investment activities.'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-6 rounded-xl"
              >
                <h3 className="text-2xl font-bold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
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
