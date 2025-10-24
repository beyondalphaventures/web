'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    investorType: '',
    investmentAmount: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create email body with form data
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Company: ${formData.company || 'Not provided'}
Role: ${formData.role || 'Not provided'}
Investor Type: ${formData.investorType || 'Not specified'}
Investment Amount: ${formData.investmentAmount || 'Not specified'}

Message:
${formData.message || 'No message provided'}
    `.trim()

    // Create mailto link
    const subject = encodeURIComponent('Investment Inquiry from ' + formData.name)
    const body = encodeURIComponent(emailBody)
    const mailtoLink = `mailto:inquiries@beyondalphaventures.com?subject=${subject}&body=${body}`

    // Open email client
    window.location.href = mailtoLink
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value
    setFormData({
      ...formData,
      [e.target.name]: value
    })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero */}
      <section className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get in <span className="text-gold">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            At Beyond Alpha Ventures, we are dedicated to helping you achieve your investment goals. Our team of experts is committed to providing personalized investment solutions tailored to your needs. Let us guide you towards generational wealth. Invest with confidence.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="border border-gray-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Request a Consultation</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-950 border border-gray-800 rounded px-4 py-3 focus:outline-none focus:border-gold transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-950 border border-gray-800 rounded px-4 py-3 focus:outline-none focus:border-gold transition"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm text-gray-400 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-gray-950 border border-gray-800 rounded px-4 py-3 focus:outline-none focus:border-gold transition"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm text-gray-400 mb-2">
                  Company / Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-gray-950 border border-gray-800 rounded px-4 py-3 focus:outline-none focus:border-gold transition"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm text-gray-400 mb-2">
                  Role
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full bg-gray-950 border border-gray-800 rounded px-4 py-3 focus:outline-none focus:border-gold transition"
                  placeholder="e.g. CFO, Investment Manager"
                />
              </div>

              <div>
                <label htmlFor="investorType" className="block text-sm text-gray-400 mb-2">
                  Investor Type
                </label>
                <select
                  id="investorType"
                  name="investorType"
                  value={formData.investorType}
                  onChange={handleChange}
                  className="w-full bg-gray-950 border border-gray-800 rounded px-4 py-3 focus:outline-none focus:border-gold transition"
                >
                  <option value="">Select investor type</option>
                  <option value="Individual">Individual</option>
                  <option value="Qualified Purchaser">Qualified Purchaser</option>
                  <option value="Accredited Individual Investor">Accredited Individual Investor</option>
                  <option value="Institutional Investor">Institutional Investor</option>
                </select>
                <p className="text-xs text-gray-500 mt-1">
                  Institutional Investor: Company or organization that invests money on behalf of clients or members. 
                  Accredited Individual Investor: Anyone who either earned income that exceeded $200,000 (or $300,000 together with a spouse) in each of the prior two years, 
                  and reasonably expects the same for the current year, OR, has a net worth over $1 million, either alone or together with a spouse (excluding the value of the person's primary residence).
                </p>
              </div>

              <div>
                <label htmlFor="investmentAmount" className="block text-sm text-gray-400 mb-2">
                  Intended Investment Amount
                </label>
                <select
                  id="investmentAmount"
                  name="investmentAmount"
                  value={formData.investmentAmount}
                  onChange={handleChange}
                  className="w-full bg-gray-950 border border-gray-800 rounded px-4 py-3 focus:outline-none focus:border-gold transition"
                >
                  <option value="">Select range</option>
                  <option value="1-5m">$1M - $5M</option>
                  <option value="5-10m">$5M - $10M</option>
                  <option value="10-25m">$10M - $25M</option>
                  <option value="25m+">$25M+</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-950 border border-gray-800 rounded px-4 py-3 focus:outline-none focus:border-gold transition resize-none"
                  placeholder="Tell us about your investment goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold-light text-black font-semibold py-3 rounded transition"
              >
                Contact Us
              </button>

              <p className="text-xs text-gray-600 text-center mt-4">
                By submitting this form, you agree to our terms of service and privacy policy.
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <div className="mb-8">
                <img 
                  src="/img/bav-logo-long.png" 
                  alt="Beyond Alpha Ventures" 
                  className="h-12 mb-4"
                />
              </div>

              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-gold font-semibold mb-2">New York</h3>
                  <p className="text-gray-400">
                    The Trump Building<br />
                    40 Wall Street, Suite 2702<br />
                    New York, NY 10005
                  </p>
                </div>

                <div>
                  <h3 className="text-gold font-semibold mb-2">Phone</h3>
                  <p className="text-gray-400">
                    Main Office: <a href="tel:+16463801801" className="hover:text-gold transition">(646) 380-1801</a><br />
                    Business Line: <a href="tel:+16464410400" className="hover:text-gold transition">(646) 441-0400</a><br />
                    Direct: <a href="tel:+19732247098" className="hover:text-gold transition">(973) 224-7098</a>
                  </p>
                </div>

                <div>
                  <h3 className="text-gold font-semibold mb-2">Email</h3>
                  <p className="text-gray-400">
                    <a href="mailto:inquiries@beyondalphaventures.com" className="hover:text-gold transition">inquiries@beyondalphaventures.com</a><br />
                    <a href="mailto:investors@beyondalphaventures.com" className="hover:text-gold transition">investors@beyondalphaventures.com</a>
                  </p>
                </div>

                <div>
                  <h3 className="text-gold font-semibold mb-2">Website</h3>
                  <p className="text-gray-400">
                    <a href="https://www.beyondalphaventures.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition">www.beyondalphaventures.com</a>
                  </p>
                </div>

                <div>
                  <h3 className="text-gold font-semibold mb-2">Office Hours</h3>
                  <p className="text-gray-400">
                    Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                    Saturday - Sunday: By Appointment
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-800 rounded-lg p-6 bg-gray-950">
              <h3 className="font-semibold mb-3">Investor Qualifications</h3>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>✓ Minimum investment: $1,000,000</li>
                <li>✓ Accredited investor status required</li>
                <li>✓ Institutional and family office clients welcome</li>
                <li>✓ Co-investment opportunities available for select clients</li>
              </ul>
            </div>

            <div className="border border-gray-800 rounded-lg p-6 bg-gradient-to-br from-gold/5 to-transparent">
              <h3 className="font-semibold mb-2">Schedule a Meeting</h3>
              <p className="text-sm text-gray-400 mb-4">
                Prefer to speak directly with our team? Schedule a confidential consultation.
              </p>
              <a href="mailto:inquiries@beyondalphaventures.com?subject=Meeting%20Request&body=I%20would%20like%20to%20schedule%20a%20meeting%20with%20the%20Beyond%20Alpha%20Ventures%20team.%0A%0AName:%20%0AEmail:%20%0APhone:%20%0APreferred%20Date/Time:%20%0APurpose:%20">
                <button className="bg-transparent border border-gold text-gold px-6 py-2 rounded hover:bg-gold hover:text-black transition font-semibold text-sm">
                  Request Meeting
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-900 rounded-lg h-96 flex items-center justify-center border border-gray-800">
            <div className="text-center">
              <div className="text-4xl mb-4">📍</div>
              <p className="text-gray-400">40 Wall Street, New York, NY 10005</p>
              <p className="text-sm text-gray-600 mt-2">Interactive map coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
