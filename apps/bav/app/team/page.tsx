'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

export default function Team() {
  const team = [
    {
      name: 'Jacob D. Frankel (Kobi)',
      role: 'Venture Partner',
      image: '/img/Jacob-Frankel.png',
      bio: 'As Venture Partner, I can promise you this: You\'re not just another client here. We take a deeply personalized approach to crafting investment strategies that are designed specifically for your goals. Jacob founded and built Ar.ca, one of the earliest crypto hedge funds, and served as Venture Partner at Ikigai.Fund and Managing Partner of Second Chance Fund. Our team works tirelessly to ensure your wealth grows alongside us, with a focus on long-term success and a commitment to your unique needs. When you work with us, you\'re more than a client—you\'re a partner. Your financial journey is our top priority.'
    },
    {
      name: 'Robert Altchiller',
      role: 'Managing Partner & Chief Investment Officer',
      image: '/img/Robert-Altchiller.png',
      bio: 'With over 25 years in global markets, Robert leads our investment strategy and portfolio management. Previously served as Portfolio Manager at top-tier hedge funds managing $2B+ in assets.'
    },
    {
      name: 'Frederick W. Newcomb',
      role: 'Board Member',
      image: '/img/Frederick-Newcomb.jpg',
      bio: 'Frederick provides strategic oversight and governance as a Board Member. His decades of experience in finance and corporate governance ensure Beyond Alpha maintains the highest standards of fiduciary responsibility.'
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
        <div className="max-w-5xl mx-auto space-y-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gold/30 hover-lift">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2 gradient-text">{member.name}</h2>
                <p className="text-base text-gold mb-3">{member.role}</p>
                <p className="text-sm text-gray-300 leading-relaxed">{member.bio}</p>
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
            <Link href="/careers"><motion.button
              className="bg-gold hover:bg-gold-light text-primary px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Open Positions
            </motion.button></Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
