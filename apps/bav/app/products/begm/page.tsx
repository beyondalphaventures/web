'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Shield, Zap, Award, Clock, BarChart3 } from 'lucide-react'

export default function BEGMProduct() {
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
              <span className="gradient-text">Beyond Equity Global Marketplace</span>
            </h1>
            <p className="text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-8">
              Commission-free trading platform offering stocks, crypto, options, and commodities with 24/5 market access
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a 
                href="http://localhost:3001" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
              >
                Visit BEGM
                <ArrowRight size={20} />
              </a>
              <a 
                href="http://localhost:3001/signup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 glass hover:border-gold/50 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 border border-white/10"
              >
                Open Account
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-secondary/30 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '$0', label: 'Commission Trading' },
              { value: '24/5', label: 'Market Access' },
              { value: '2x', label: 'Best Brokerage Award' },
              { value: 'SEC', label: 'Licensed & Regulated' }
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

      {/* Features Section */}
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
              <span className="gradient-text">Advanced Trading Platform</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Stay on top of the market with news and streaming quotes available across multiple devices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart3 className="text-gold" size={32} />,
                title: 'Real-Time Analytics',
                desc: 'Advanced charts, screeners, and candlestick patterns for experienced traders'
              },
              {
                icon: <Clock className="text-gold" size={32} />,
                title: '24/5 Trading Access',
                desc: 'Trade Sunday 8PM ET to Friday 8PM ET with extended hours access'
              },
              {
                icon: <Award className="text-gold" size={32} />,
                title: 'Award-Winning Platform',
                desc: 'Two-time winner of Best Brokerage for Day Trading'
              },
              {
                icon: <Zap className="text-gold" size={32} />,
                title: '$0 Commission Trading',
                desc: 'Trade US stocks and ETFs with zero commission fees'
              },
              {
                icon: <TrendingUp className="text-gold" size={32} />,
                title: 'IPO Access',
                desc: 'Discover and invest in public offerings with one-click subscription'
              },
              {
                icon: <Shield className="text-gold" size={32} />,
                title: 'Trusted & Regulated',
                desc: 'SEC licensed, FINRA/SIPC member for your protection'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="glass p-8 rounded-xl border border-white/5 hover:border-gold/30 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Asset Classes */}
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
              <span className="gradient-text">Trade Multiple Asset Classes</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Access stocks, crypto, forex, and commodities from a single platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Stocks', icon: '📈', desc: 'Trade US equities with real-time data and advanced analytics' },
              { name: 'Crypto', icon: '₿', desc: 'Buy and sell Bitcoin, Ethereum, and 100+ cryptocurrencies' },
              { name: 'Options', icon: '📊', desc: 'Advanced strategies with calls, puts, and spreads' },
              { name: 'Forex', icon: '💱', desc: 'Trade major currency pairs with competitive spreads' },
            ].map((market, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="glass p-6 rounded-xl border border-white/5 hover:border-gold/30 transition-all duration-300 text-center"
              >
                <div className="text-5xl mb-4">{market.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{market.name}</h3>
                <p className="text-gray-400 text-sm">{market.desc}</p>
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
                <span className="gradient-text">Ready to Start Trading?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of traders who trust BEGM for their investment needs. Open your account today.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <motion.a
                  href="http://localhost:3001/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold hover:bg-gold-light text-primary px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Open Your Account
                </motion.a>
                <motion.a
                  href="http://localhost:3001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass hover:border-gold/50 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 border border-white/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Platform
                </motion.a>
              </div>
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
                <li><a href="/products/begm" className="hover:text-gold transition">BEGM Trading Platform</a></li>
                <li><a href="/portfolio" className="hover:text-gold transition">Portfolio</a></li>
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
                <li><a href="/contact" className="hover:text-gold transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm border-t border-white/5 pt-8">
            <p>© 2025 Beyond Alpha Ventures. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
