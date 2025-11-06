'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Press() {
  const pressReleases = [
    {
      title: 'Beyond Alpha Ventures Named "Multi-Strategy Hedge Fund to Watch" for 2025',
      date: 'January 15, 2025',
      excerpt: 'Industry recognition highlights our innovative approach to frontier technology investments and consistent returns.',
      link: '/news/beyond-alpha-ventures-multi-strategy-hedge-fund-2025'
    },
    {
      title: 'xAI Achieves $50 Billion Valuation in Latest Funding Round',
      date: 'December 2024',
      excerpt: 'Portfolio company xAI continues rapid growth in AI infrastructure and foundation models.',
      link: '/news/xai-50-billion-valuation'
    },
    {
      title: 'SandboxAQ and Sanofi Partner on AI-Powered Drug Discovery',
      date: 'November 2024',
      excerpt: 'Our portfolio company SandboxAQ leverages quantum and AI for breakthrough biomarker identification.',
      link: '/news/sandboxaq-sanofi-ai-biomarker'
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
              <span className="gradient-text">Press & Media</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Latest news, press releases, and media coverage about Beyond Alpha Ventures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-6 gradient-text">Press Releases</h2>
          </motion.div>

          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-8 rounded-2xl hover-lift"
              >
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-sm text-gold mb-2">{release.date}</p>
                    <h3 className="text-2xl font-bold mb-3">{release.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{release.excerpt}</p>
                  </div>
                  <div>
                    <Link href={release.link}>
                      <motion.button
                        className="text-gold hover:text-gold-light font-semibold inline-flex items-center gap-2"
                        whileHover={{ x: 5 }}
                      >
                        Read More
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Inquiries */}
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
              <span className="gradient-text">Media Inquiries</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              For press inquiries, interviews, or media requests, please contact our communications team.
            </p>
            <Link href="mailto:jfrankel@beyondalphaventures.com?subject=Media Inquiry">
              <motion.button
                className="bg-gold hover:bg-gold-light text-primary px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Media Relations
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Brand Assets */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-12 rounded-3xl"
          >
            <h2 className="text-3xl font-bold mb-6 gradient-text">Brand Assets</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              For authorized use of our brand assets, logos, and media kit, please contact us for access.
            </p>
            <Link href="mailto:jfrankel@beyondalphaventures.com?subject=Brand Assets Request">
              <motion.button
                className="text-gold hover:text-gold-light font-semibold inline-flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                Request Brand Assets
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
