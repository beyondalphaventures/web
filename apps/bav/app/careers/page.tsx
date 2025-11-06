'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

export default function Careers() {
  const positions = [
    {
      title: 'Quantitative Analyst',
      department: 'Investments',
      location: 'New York, NY / Remote',
      type: 'Full-time',
      description: 'Join our investment team to develop and implement quantitative strategies across traditional and digital asset markets. Build models, analyze data, and contribute to our multi-strategy approach.',
      requirements: [
        'MS or PhD in Mathematics, Statistics, Computer Science, or related field',
        '2+ years experience in quantitative finance or trading',
        'Strong programming skills (Python, R, or similar)',
        'Experience with machine learning and statistical modeling'
      ]
    },
    {
      title: 'Blockchain Research Analyst',
      department: 'Investments',
      location: 'New York, NY / Remote',
      type: 'Full-time',
      description: 'Research and analyze blockchain protocols, DeFi platforms, and crypto assets. Provide investment recommendations and monitor portfolio positions across digital asset markets.',
      requirements: [
        'Deep understanding of blockchain technology and crypto markets',
        '2+ years experience in crypto research or trading',
        'Strong analytical and research skills',
        'Experience with on-chain analytics tools'
      ]
    },
    {
      title: 'AI/ML Engineer',
      department: 'Technology',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build and deploy machine learning models for market prediction, portfolio optimization, and risk management. Work with large datasets and cutting-edge AI technologies.',
      requirements: [
        'BS/MS in Computer Science or related field',
        '3+ years experience in machine learning engineering',
        'Expertise in deep learning frameworks (PyTorch, TensorFlow)',
        'Experience with production ML systems'
      ]
    },
    {
      title: 'Investment Analyst',
      department: 'Investments',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Support investment decisions across AI, blockchain, quantum computing, and other frontier technology sectors. Conduct due diligence, build financial models, and monitor portfolio companies.',
      requirements: [
        'BA/BS in Finance, Economics, or related field',
        '1-3 years experience in venture capital, private equity, or investment banking',
        'Strong financial modeling and valuation skills',
        'Passion for emerging technologies'
      ]
    },
    {
      title: 'Operations Manager',
      department: 'Operations',
      location: 'New York, NY / Remote',
      type: 'Full-time',
      description: 'Oversee fund operations, client services, and administrative functions. Ensure smooth daily operations and excellent client experience.',
      requirements: [
        'BA/BS in Business, Finance, or related field',
        '3+ years experience in fund operations or client services',
        'Strong organizational and communication skills',
        'Attention to detail and problem-solving ability'
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
              <span className="gradient-text">Careers</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Join our team of exceptional investors, researchers, and technologists building the future of finance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-secondary/30 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-12 rounded-3xl mb-20"
          >
            <h2 className="text-3xl font-bold mb-8 gradient-text text-center">Why Beyond Alpha?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-3">Innovation First</h3>
                <p className="text-gray-400">Work at the cutting edge of AI, blockchain, and frontier technologies</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-xl font-bold mb-3">Top Talent</h3>
                <p className="text-gray-400">Collaborate with world-class investors and technologists</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-3">Competitive Compensation</h3>
                <p className="text-gray-400">Industry-leading salary, bonus, and equity packages</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text text-center">Open Positions</h2>
            <p className="text-center text-gray-400">
              All positions are open to remote candidates unless otherwise specified.
            </p>
          </motion.div>

          <div className="space-y-6">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-8 rounded-2xl hover-lift"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="text-gold">{position.department}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-400">{position.location}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-400">{position.type}</span>
                    </div>
                  </div>
                  <Link href={`mailto:jfrankel@beyondalphaventures.com?subject=Application: ${position.title}`}>
                    <motion.button
                      className="bg-gold hover:bg-gold-light text-primary px-6 py-3 rounded-lg font-semibold whitespace-nowrap"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Apply Now
                    </motion.button>
                  </Link>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">{position.description}</p>

                <div>
                  <h4 className="font-semibold mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-400">
                    {position.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-secondary/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-12 rounded-3xl text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="gradient-text">Don't See the Right Role?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always interested in meeting exceptional talent. Send us your resume and tell us about yourself.
            </p>
            <Link href="mailto:jfrankel@beyondalphaventures.com?subject=General Application">
              <motion.button
                className="bg-gold hover:bg-gold-light text-primary px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
