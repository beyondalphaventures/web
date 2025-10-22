'use client'

import Navigation from '@/components/Navigation'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
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

          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-gray-400 mb-8">Last Updated: January 2025</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gold">1. Introduction</h2>
              <p className="text-gray-400 leading-relaxed">
                Beyond Alpha Ventures ("BAV", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gold">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold mb-3 text-white">Personal Information</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                <li>Name, email address, phone number, and mailing address</li>
                <li>Professional information and company details</li>
                <li>Investment experience and accreditation status</li>
                <li>Financial information for qualified investor verification</li>
                <li>Communication preferences and interests</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Investor Information</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                <li>Investment history and portfolio preferences</li>
                <li>Net worth and income verification documents</li>
                <li>Accredited investor status and supporting documentation</li>
                <li>Investment objectives and risk tolerance</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6 text-white">Technical Information</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                <li>IP address and device information</li>
                <li>Browser type, operating system, and settings</li>
                <li>Website usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gold">3. How We Use Your Information</h2>
              <p className="text-gray-400 mb-3">We use your information to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                <li>Evaluate your eligibility for investment opportunities</li>
                <li>Provide information about our funds and portfolio companies</li>
                <li>Process investor applications and onboarding</li>
                <li>Communicate updates about investments and market opportunities</li>
                <li>Comply with securities regulations and legal requirements</li>
                <li>Improve our website and services</li>
                <li>Conduct due diligence and verify accredited investor status</li>
                <li>Send newsletters and investment updates (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gold">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-400 mb-3">We may share your information with:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                <li><strong className="text-white">Regulatory Authorities:</strong> SEC and other securities regulators as required by law</li>
                <li><strong className="text-white">Service Providers:</strong> Third-party vendors who assist in fund administration and operations</li>
                <li><strong className="text-white">Legal Counsel:</strong> Attorneys and advisors for legal compliance</li>
                <li><strong className="text-white">Fund Administrators:</strong> For investor onboarding and fund management</li>
                <li><strong className="text-white">Portfolio Companies:</strong> When necessary for co-investment opportunities</li>
              </ul>
              <p className="text-gray-400 mt-4">
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gold">5. Data Security</h2>
              <p className="text-gray-400 leading-relaxed">
                We implement industry-standard security measures to protect your information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4 mt-3">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure document storage and access controls</li>
                <li>Regular security audits and assessments</li>
                <li>Employee training on data protection</li>
                <li>Multi-factor authentication for sensitive systems</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gold">6. Your Privacy Rights</h2>
              <p className="text-gray-400 mb-3">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-400 ml-4">
                <li>Access and receive a copy of your personal information</li>
                <li>Correct or update inaccurate information</li>
                <li>Request deletion of your information (subject to legal obligations)</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to certain processing of your information</li>
                <li>Request restriction of processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gold">7. Cookies and Tracking</h2>
              <p className="text-gray-400 leading-relaxed">
                We use cookies and similar technologies to enhance your experience, analyze website usage, and provide personalized content. You can control cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gold">8. Third-Party Links</h2>
              <p className="text-gray-400 leading-relaxed">
                Our website may contain links to portfolio company websites and third-party services. We are not responsible for their privacy practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gold">9. Data Retention</h2>
              <p className="text-gray-400 leading-relaxed">
                We retain your information for as long as necessary to fulfill the purposes outlined in this policy and to comply with legal and regulatory requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gold">10. International Data Transfers</h2>
              <p className="text-gray-400 leading-relaxed">
                Your information may be transferred to and processed in countries outside your country of residence. We ensure appropriate safeguards are in place for such transfers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gold">11. Changes to This Policy</h2>
              <p className="text-gray-400 leading-relaxed">
                We may update this Privacy Policy from time to time. Material changes will be communicated via email or website notification.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-gold">12. Contact Us</h2>
              <div className="border border-gray-800 rounded-lg p-6 bg-gray-950">
                <p className="text-white mb-2"><strong>Beyond Alpha Ventures L.L.C.</strong></p>
                <p className="text-gray-400">Privacy Officer</p>
                <p className="text-gray-400 mt-3">Email: privacy@beyondalphaventures.com</p>
                <p className="text-gray-400">Phone: (646)-380-1801 (Main Office)</p>
                <p className="text-gray-400">Phone: (646)-441-0400 (Business)</p>
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
