'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isInvestmentsOpen, setIsInvestmentsOpen] = useState(false)
  const [isCompanyOpen, setIsCompanyOpen] = useState(false)
  const [mobileInvestmentsOpen, setMobileInvestmentsOpen] = useState(false)
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center relative z-50">
            <motion.img
              src="/img/bav-logo.png"
              alt="BAV logo"
              className="h-10"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {/* Investments Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsInvestmentsOpen(true)}
              onMouseLeave={() => setIsInvestmentsOpen(false)}
            >
              <button className="text-gray-400 hover:text-gold transition-colors text-sm font-medium flex items-center gap-1">
                Investments
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: isInvestmentsOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </motion.svg>
              </button>

              <AnimatePresence>
                {isInvestmentsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 glass rounded-lg border border-white/10 overflow-hidden"
                  >
                    <Link
                      href="/invest"
                      className="block px-4 py-3 hover:bg-white/5 transition text-gray-300 hover:text-gold"
                    >
                      Invest
                    </Link>
                    <Link
                      href="/portfolio"
                      className="block px-4 py-3 hover:bg-white/5 transition text-gray-300 hover:text-gold border-t border-white/5"
                    >
                      Portfolio
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* News Link */}
            <Link
              href="/news"
              className="text-gray-400 hover:text-gold transition-colors text-sm font-medium"
            >
              News
            </Link>

            {/* Company Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsCompanyOpen(true)}
              onMouseLeave={() => setIsCompanyOpen(false)}
            >
              <button className="text-gray-400 hover:text-gold transition-colors text-sm font-medium flex items-center gap-1">
                Company
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: isCompanyOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </motion.svg>
              </button>

              <AnimatePresence>
                {isCompanyOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 glass rounded-lg border border-white/10 overflow-hidden"
                  >
                    <Link
                      href="/about"
                      className="block px-4 py-3 hover:bg-white/5 transition text-gray-300 hover:text-gold"
                    >
                      About
                    </Link>
                    <Link
                      href="/team"
                      className="block px-4 py-3 hover:bg-white/5 transition text-gray-300 hover:text-gold border-t border-white/5"
                    >
                      Team
                    </Link>
                    <Link
                      href="/press"
                      className="block px-4 py-3 hover:bg-white/5 transition text-gray-300 hover:text-gold border-t border-white/5"
                    >
                      Press
                    </Link>
                    <Link
                      href="/careers"
                      className="block px-4 py-3 hover:bg-white/5 transition text-gray-300 hover:text-gold border-t border-white/5"
                    >
                      Careers
                    </Link>
                    <Link
                      href="/data-room"
                      className="block px-4 py-3 hover:bg-white/5 transition text-gray-300 hover:text-gold border-t border-white/5"
                    >
                      Data Room
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact Button */}
            <Link href="/contact">
              <motion.button
                className="bg-gold text-black px-6 py-2 rounded font-semibold text-sm hover:bg-gold-light transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-400 hover:text-gold relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden border-t border-white/5"
            >
              <div className="py-4 space-y-2">
                {/* Investments Section */}
                <div>
                  <button
                    onClick={() => setMobileInvestmentsOpen(!mobileInvestmentsOpen)}
                    className="w-full text-left px-4 py-2 text-gray-300 hover:text-gold hover:bg-white/5 transition flex items-center justify-between"
                  >
                    Investments
                    <svg
                      className={`w-4 h-4 transition-transform ${mobileInvestmentsOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  {mobileInvestmentsOpen && (
                    <div className="pl-4 space-y-1">
                      <Link href="/invest" className="block px-4 py-2 text-sm text-gray-400 hover:text-gold hover:bg-white/5 transition">
                        Invest
                      </Link>
                      <Link href="/portfolio" className="block px-4 py-2 text-sm text-gray-400 hover:text-gold hover:bg-white/5 transition">
                        Portfolio
                      </Link>
                    </div>
                  )}
                </div>

                {/* News Link */}
                <Link href="/news" className="block px-4 py-2 text-gray-300 hover:text-gold hover:bg-white/5 transition">
                  News
                </Link>

                {/* Company Section */}
                <div>
                  <button
                    onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                    className="w-full text-left px-4 py-2 text-gray-300 hover:text-gold hover:bg-white/5 transition flex items-center justify-between"
                  >
                    Company
                    <svg
                      className={`w-4 h-4 transition-transform ${mobileCompanyOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  {mobileCompanyOpen && (
                    <div className="pl-4 space-y-1">
                      <Link href="/about" className="block px-4 py-2 text-sm text-gray-400 hover:text-gold hover:bg-white/5 transition">
                        About
                      </Link>
                      <Link href="/team" className="block px-4 py-2 text-sm text-gray-400 hover:text-gold hover:bg-white/5 transition">
                        Team
                      </Link>
                      <Link href="/press" className="block px-4 py-2 text-sm text-gray-400 hover:text-gold hover:bg-white/5 transition">
                        Press
                      </Link>
                      <Link href="/careers" className="block px-4 py-2 text-sm text-gray-400 hover:text-gold hover:bg-white/5 transition">
                        Careers
                      </Link>
                      <Link href="/data-room" className="block px-4 py-2 text-sm text-gray-400 hover:text-gold hover:bg-white/5 transition">
                        Data Room
                      </Link>
                    </div>
                  )}
                </div>

                {/* Contact Button */}
                <Link href="/contact">
                  <button className="w-full mt-4 bg-gold text-black px-6 py-3 rounded font-semibold hover:bg-gold-light transition">
                    Contact
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
