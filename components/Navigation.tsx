'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)

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
            <Link href="#portfolio" className="text-gray-400 hover:text-gold transition-colors text-sm font-medium">
              Portfolio
            </Link>
            <Link href="#team" className="text-gray-400 hover:text-gold transition-colors text-sm font-medium">
              Team
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="text-gray-400 hover:text-gold transition-colors text-sm font-medium flex items-center gap-1">
                Products
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: isProductsOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </motion.svg>
              </button>

              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 glass rounded-lg border border-white/10 overflow-hidden"
                  >
                    <Link
                      href="/trading"
                      className="block px-4 py-3 hover:bg-white/5 transition text-gray-300 hover:text-gold"
                    >
                      Trading Platform
                    </Link>
                    <Link
                      href="/institutional"
                      className="block px-4 py-3 hover:bg-white/5 transition text-gray-300 hover:text-gold"
                    >
                      Institutional Hub
                    </Link>
                    <Link
                      href="/pricing"
                      className="block px-4 py-3 hover:bg-white/5 transition text-gray-300 hover:text-gold"
                    >
                      Pricing
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="#news" className="text-gray-400 hover:text-gold transition-colors text-sm font-medium">
              News
            </Link>
          </div>

          {/* Contact Button (Desktop) */}
          <motion.button
            className="hidden md:block bg-gold hover:bg-gold-light text-primary px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-white block"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-white block"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-full h-5 bg-white block"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden glass border-t border-white/10"
          >
            <div className="px-6 py-4 space-y-4">
              <Link
                href="#portfolio"
                className="block text-gray-300 hover:text-gold transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="#team"
                className="block text-gray-300 hover:text-gold transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Team
              </Link>

              {/* Mobile Products Submenu */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-gray-300 hover:text-gold transition-colors py-2"
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                >
                  Products
                  <motion.svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: isProductsOpen ? 180 : 0 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {isProductsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-2 mt-2"
                    >
                      <Link
                        href="/trading"
                        className="block text-gray-400 hover:text-gold transition-colors py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Trading Platform
                      </Link>
                      <Link
                        href="/institutional"
                        className="block text-gray-400 hover:text-gold transition-colors py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Institutional Hub
                      </Link>
                      <Link
                        href="/pricing"
                        className="block text-gray-400 hover:text-gold transition-colors py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Pricing
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="#news"
                className="block text-gray-300 hover:text-gold transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                News
              </Link>

              <motion.button
                className="w-full bg-gold hover:bg-gold-light text-primary px-6 py-3 rounded-lg font-semibold mt-4"
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
