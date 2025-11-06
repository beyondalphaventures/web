'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <div className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-gray-400 mb-8">Last Updated: January 2025</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gold">1. Acceptance of Terms</h2>
              <p className="text-gray-400 leading-relaxed">
                By accessing or using Beyond Alpha Ventures' ("BAV") website and services, you agree to be bound by these Terms of Service. If you do not agree to these Terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gold">2. Investment Services</h2>
              <h3 className="text-xl font-semibold mb-3 text-white">Venture Capital Fund</h3>
              <p className="text-gray-400 mb-3">
                BAV operates as a venture capital fund investing in early-stage to growth-stage companies across multiple sectors including AI, blockchain, biotech, clean energy, and more.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Accredited Investors Only</h3>
              <p className="text-gray-400 mb-3">
                Our investment opportunities are available only to accredited investors as defined by SEC regulations. You must meet one of the following criteria:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                <li>Individual income exceeding $200,000 (or $300,000 with spouse) in each of the prior two years</li>
                <li>Net worth exceeding $1,000,000 (excluding primary residence)</li>
                <li>Professional credentials (Series 7, 65, or 82 licenses)</li>
                <li>Entity with assets exceeding $5,000,000</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gold">3. Investment Risks</h2>
              <div className="border border-yellow-600/20 rounded-lg p-6 bg-yellow-600/5">
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Important Risk Disclosure</h3>
                <p className="text-gray-400 mb-3">
                  Venture capital investing involves substantial risks, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                  <li>High risk of total loss of investment</li>
                  <li>Long investment horizons (7-10+ years)</li>
                  <li>Illiquidity and lack of secondary markets</li>
                  <li>No guarantee of returns</li>
                  <li>Concentration risk in early-stage companies</li>
                  <li>Market, technology, and regulatory risks</li>
                  <li>Dilution risk in subsequent funding rounds</li>
                </ul>
                <p className="text-gray-400 mt-4 font-semibold">
                  Past performance is not indicative of future results. Only invest capital you can afford to lose.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gold">4. Minimum Investment</h2>
              <p className="text-gray-400 leading-relaxed">
                Our funds typically require a minimum investment of $1,000,000 USD. Lower minimums may be available for certain investors at the General Partner's discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gold">5. Due Diligence</h2>
              <p className="text-gray-400 mb-3">
                Prospective investors must:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                <li>Complete our investor qualification process</li>
                <li>Provide documentation of accredited investor status</li>
                <li>Review all offering documents, including Private Placement Memorandum</li>
                <li>Consult with legal, tax, and financial advisors</li>
                <li>Understand the fund's investment strategy and risks</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gold">6. Lock-Up Periods</h2>
              <p className="text-gray-400 leading-relaxed">
                Investments in our funds are subject to lock-up periods as specified in the fund's offering documents. Early withdrawals may not be permitted or may be subject to significant penalties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gold">7. Fees and Expenses</h2>
              <p className="text-gray-400 mb-3">Our fee structure typically includes:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                <li><strong className="text-white">Management Fee:</strong> Annual fee based on committed capital or net asset value</li>
                <li><strong className="text-white">Carried Interest:</strong> Performance-based fee on profits (typically 20%)</li>
                <li><strong className="text-white">Fund Expenses:</strong> Legal, audit, and administrative costs</li>
              </ul>
              <p className="text-gray-400 mt-4">
                Detailed fee information is provided in the fund's offering documents.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gold">8. Confidentiality</h2>
              <p className="text-gray-400 leading-relaxed">
                All information regarding our funds, portfolio companies, and investment strategies is confidential and proprietary. You agree not to disclose such information without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gold">9. No Investment Advice</h2>
              <p className="text-gray-400 leading-relaxed">
                Information on our website is for informational purposes only and does not constitute investment advice or a recommendation to invest. You should conduct your own due diligence and consult with professional advisors.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gold">10. Forward-Looking Statements</h2>
              <p className="text-gray-400 leading-relaxed">
                Our materials may contain forward-looking statements regarding portfolio companies and market opportunities. These statements are subject to risks and uncertainties and actual results may differ materially.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gold">11. Intellectual Property</h2>
              <p className="text-gray-400 leading-relaxed">
                All content, trademarks, and intellectual property on our website are owned by BAV or our licensors. You may not use, copy, or distribute any content without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gold">12. Disclaimers</h2>
              <div className="border border-gray-800 rounded-lg p-6 bg-gray-950">
                <p className="text-gray-400 leading-relaxed mb-3">
                  THE WEBSITE AND SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  We do not guarantee the accuracy, completeness, or timeliness of information on our website.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gold">13. Limitation of Liability</h2>
              <p className="text-gray-400 leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, BAV SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF OUR SERVICES.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gold">14. Governing Law</h2>
              <p className="text-gray-400 leading-relaxed">
                These Terms are governed by the laws of the State of Delaware, without regard to conflict of law principles. Any disputes shall be resolved through arbitration in accordance with JAMS rules.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gold">15. Changes to Terms</h2>
              <p className="text-gray-400 leading-relaxed">
                We may modify these Terms at any time. Material changes will be communicated to investors via email. Continued use of our services constitutes acceptance of modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gold">16. Contact Information</h2>
              <div className="border border-gray-800 rounded-lg p-6 bg-gray-950">
                <p className="text-white mb-2"><strong>Beyond Alpha Ventures L.L.C.</strong></p>
                <p className="text-gray-400">General Inquiries: contact@beyondalphaventures.com</p>
                <p className="text-gray-400">Investor Relations: jfrankel@beyondalphaventures.com</p>
                <p className="text-gray-400 mt-3">Phone: (646)-380-1801 (Main Office)</p>
                <p className="text-gray-400">Phone: (646)-441-0400 (Business)</p>
                <p className="text-gray-400">Phone: (973)-224-7098 (Personal)</p>
                <p className="text-gray-400 mt-3">
                  40 Wall Street ("The Trump Building")<br />
                  27th Floor<br />
                  New York, NY 10005
                </p>
                <p className="text-gray-400 mt-3">Website: www.beyondalphaventures.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
