'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section id="main" className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center space-y-8 mb-20"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-gold/20"
            >
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span className="text-gold text-sm font-semibold">2025 'Hedge Fund to Watch of the Year'</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-6xl lg:text-8xl font-bold tracking-tight"
            >
              <span className="block text-white">BEYOND ALPHA</span>
              <span className="block text-white">VENTURES</span>
            </motion.h1>

            <motion.h2
              variants={fadeInUp}
              className="text-2xl lg:text-3xl font-light text-gray-400 max-w-3xl mx-auto tracking-wide"
            >
              PRESERVING WEALTH • CULTIVATING LEGACIES
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed"
            >
              A distinguished multi-strategy family office and hedge fund. We develop exclusive, high-performance
              strategies across nine key verticals, delivering exceptional returns and superior risk management for
              our elite clients.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-secondary/50 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2025 Beyond Alpha Ventures. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
