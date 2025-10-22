'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import portfolioData from '@/data/portfolio.json'

const verticals = [
  'All',
  'Artificial Intelligence',
  'Robotics & Automation',
  'Longevity & Biotech',
  'Clean Energy',
  'Space Technology',
  'Cybersecurity',
  'Advanced Materials',
  'Blockchain & Web3',
  'Quantum Computing'
]

export default function Portfolio() {
  const [selectedVertical, setSelectedVertical] = useState('All')

  const filteredCompanies = selectedVertical === 'All'
    ? portfolioData
    : portfolioData.filter(company => company.vertical === selectedVertical)

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero */}
      <section className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-gold">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-400 mb-4">
            Investing in transformative companies across nine strategic verticals
          </p>
          <p className="text-gray-500">
            Beyond Alpha Ventures partners with exceptional founders building the future across AI, robotics, biotech, clean energy, and beyond.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-gold mb-2">{portfolioData.length}</div>
            <div className="text-sm text-gray-500 uppercase">Portfolio Companies</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gold mb-2">9</div>
            <div className="text-sm text-gray-500 uppercase">Verticals</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gold mb-2">$50B+</div>
            <div className="text-sm text-gray-500 uppercase">Aggregate Valuation</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gold mb-2">5</div>
            <div className="text-sm text-gray-500 uppercase">Unicorns</div>
          </div>
        </div>
      </section>

      {/* Vertical Filter */}
      <section className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {verticals.map((vertical) => (
              <button
                key={vertical}
                onClick={() => setSelectedVertical(vertical)}
                className={`px-6 py-2 rounded-full border transition-all ${
                  selectedVertical === vertical
                    ? 'bg-gold text-black border-gold'
                    : 'border-gray-700 text-gray-400 hover:border-gold hover:text-gold'
                }`}
              >
                {vertical}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {filteredCompanies.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No companies in this vertical yet.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCompanies.map((company) => (
                <div
                  key={company.id}
                  className="border border-gray-800 rounded-lg p-6 hover:border-gold transition-all hover-lift bg-gray-950"
                >
                  {/* Logo */}
                  <div className="h-16 mb-4 flex items-center justify-start">
                    {company.logo ? (
                      <img
                        src={company.logo}
                        alt={`${company.name} logo`}
                        className="max-h-full max-w-full object-contain"
                        onError={(e) => {
                          // Fallback if image fails to load
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    ) : (
                      <div className="text-2xl font-bold text-gold">{company.name}</div>
                    )}
                  </div>

                  {/* Company Name */}
                  <h3 className="text-2xl font-bold mb-2">{company.name}</h3>

                  {/* Vertical Tag */}
                  <div className="mb-4">
                    <span className="text-xs px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold/20">
                      {company.vertical}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {company.description}
                  </p>

                  {/* Highlights */}
                  {company.highlights && company.highlights.length > 0 && (
                    <ul className="space-y-2 mb-4">
                      {company.highlights.slice(0, 2).map((highlight, idx) => (
                        <li key={idx} className="text-xs text-gray-500 flex items-start gap-2">
                          <span className="text-gold mt-0.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Metadata */}
                  <div className="flex items-center gap-4 text-xs text-gray-600 mb-4">
                    {company.founded && <span>Founded {company.founded}</span>}
                    {company.stage && (
                      <>
                        <span>•</span>
                        <span>{company.stage}</span>
                      </>
                    )}
                  </div>

                  {/* Website Link */}
                  {company.website && (
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold hover:text-gold-light text-sm font-semibold flex items-center gap-2"
                    >
                      Visit Website
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto border border-gray-800 rounded-lg p-12 text-center bg-gradient-to-br from-gold/5 to-transparent">
          <h2 className="text-3xl font-bold mb-4">Investment Opportunities</h2>
          <p className="text-gray-400 mb-8">
            Interested in learning more about our portfolio companies or investment strategy?
          </p>
          <a href="/contact">
            <button className="bg-gold text-black px-8 py-3 rounded font-semibold hover:bg-gold-light transition">
              Get in Touch
            </button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center text-sm text-gray-600">
            <p>© 2025 Beyond Alpha Ventures. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
