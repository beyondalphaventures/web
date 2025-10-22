'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Image from 'next/image'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

export default function Team() {
  const team = [
    {
      name: 'Robert Altchiller',
      role: 'Managing Partner & Chief Investment Officer',
      image: '/img/Robert-Altchiller.png',
      bio: 'With over 25 years in global markets, Robert leads our investment strategy and portfolio management. Previously served as Portfolio Manager at top-tier hedge funds managing $2B+ in assets.'
    },
    {
      name: 'Jacob Frankel',
      role: 'Partner & Head of Research',
      image: '/img/Jacob-Frankel.png',
      bio: 'Jacob spearheads our proprietary research initiatives across technology and emerging markets. Former Head of Quantitative Research at a leading investment bank with expertise in AI-driven analytics.'
    },
    {
      name: 'Robin Rushing',
      role: 'Partner & Head of Operations',
      image: '/img/Robin-Rushing.png',
      bio: 'Robin oversees all operational aspects and client relations. Brings 20+ years of experience in institutional asset management and family office operations.'
    }
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
              <span className="gradient-text">Leadership Team</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Seasoned investors with decades of experience navigating global markets and building exceptional portfolios.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="glass rounded-2xl overflow-hidden aspect-square relative hover-lift">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <h2 className="text-4xl font-bold mb-4 gradient-text">{member.name}</h2>
                <p className="text-xl text-gold mb-6">{member.role}</p>
                <p className="text-lg text-gray-300 leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-secondary/30 to-transparent">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-12 rounded-3xl text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="gradient-text">Join Our Team</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for exceptional talent to join our growing team.
            </p>
            <motion.button
              className="bg-gold hover:bg-gold-light text-primary px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Open Positions
            </motion.button>
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
