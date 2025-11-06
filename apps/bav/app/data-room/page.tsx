'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function DataRoom() {
  const documentCategories = [
    {
      title: 'Fund Documentation',
      icon: '📄',
      documents: [
        'Offering Memorandum',
        'Limited Partnership Agreement',
        'Subscription Documents',
        'Fund Terms & Conditions'
      ]
    },
    {
      title: 'Performance Reports',
      icon: '📊',
      documents: [
        'Monthly Performance Reports',
        'Quarterly Investor Letters',
        'Annual Audited Statements',
        'Historical Performance Data'
      ]
    },
    {
      title: 'Due Diligence',
      icon: '🔍',
      documents: [
        'Investment Strategy Overview',
        'Risk Management Framework',
        'Compliance & Regulatory',
        'Team Backgrounds & Experience'
      ]
    },
    {
      title: 'Portfolio Information',
      icon: '💼',
      documents: [
        'Portfolio Holdings Reports',
        'Sector Allocation Analysis',
        'Investment Thesis Documents',
        'Exit Strategy Reports'
      ]
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
              <span className="gradient-text">Data Room</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Secure access to fund documentation, performance reports, and due diligence materials for qualified investors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Access Notice */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-12 rounded-3xl text-center mb-20"
          >
            <div className="text-5xl mb-6">🔐</div>
            <h2 className="text-3xl font-bold mb-6">Secure Investor Access</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              The Data Room contains confidential information and is available only to qualified investors, 
              prospective investors who have executed an NDA, and current Limited Partners.
            </p>
            <Link href="mailto:jfrankel@beyondalphaventures.com?subject=Data Room Access Request">
              <motion.button
                className="bg-gold hover:bg-gold-light text-primary px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Access
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Document Categories */}
      <section className="py-20 px-6 bg-gradient-to-b from-secondary/30 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-bold mb-6 gradient-text">Available Documents</h2>
            <p className="text-gray-400">
              Once access is granted, you'll be able to review the following categories of materials.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {documentCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-8 rounded-2xl"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.documents.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300">
                      <span className="text-gold mt-1">•</span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Access Requirements */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-12 rounded-3xl"
          >
            <h2 className="text-3xl font-bold mb-8 gradient-text">Access Requirements</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Qualified Investor Status</h3>
                  <p className="text-gray-300">
                    Must meet accredited investor or qualified purchaser criteria as defined by applicable securities regulations.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Non-Disclosure Agreement</h3>
                  <p className="text-gray-300">
                    Execution of our standard NDA to protect confidential fund information and strategies.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Verification Process</h3>
                  <p className="text-gray-300">
                    Brief verification call with our investor relations team to confirm identity and investment objectives.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-12 rounded-3xl text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="gradient-text">Questions About Access?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our investor relations team is here to help with your data room access request.
            </p>
            <Link href="mailto:jfrankel@beyondalphaventures.com?subject=Data Room Inquiry">
              <motion.button
                className="bg-gold hover:bg-gold-light text-primary px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Investor Relations
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
