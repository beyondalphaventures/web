'use client'

import Navigation from '@/components/Navigation'
import Link from 'next/link'
import newsData from '@/data/news.json'

export default function News() {
  // Sort news by date (newest first)
  const sortedNews = [...newsData].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero */}
      <section className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Latest <span className="text-gold">News</span>
          </h1>
          <p className="text-xl text-gray-400">
            Stay updated on Beyond Alpha Ventures' portfolio companies, investment insights, and industry news.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto grid gap-8">
          {sortedNews.map((article, index) => (
            <article
              key={article.id}
              className="border border-gray-800 rounded-lg overflow-hidden hover:border-gold transition-colors bg-gray-950"
            >
              <div className="grid md:grid-cols-3 gap-6">
                {/* Image */}
                {article.featuredImage && (
                  <div className="md:col-span-1">
                    <Link href={`/news/${article.slug}`}>
                      <div className="aspect-video md:aspect-square bg-gray-900 overflow-hidden">
                        <img
                          src={article.featuredImage}
                          alt={article.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </Link>
                  </div>
                )}

                {/* Content */}
                <div className={`${article.featuredImage ? 'md:col-span-2' : 'md:col-span-3'} p-6`}>
                  <div className="flex items-center gap-4 mb-3 text-sm">
                    <span className="text-gold font-semibold">{article.source}</span>
                    <span className="text-gray-500">•</span>
                    <time className="text-gray-500">{formatDate(article.date)}</time>
                  </div>

                  <Link href={`/news/${article.slug}`}>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 hover:text-gold transition-colors">
                      {article.title}
                    </h2>
                  </Link>

                  <p className="text-gray-400 mb-6 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center gap-4">
                    <Link href={`/news/${article.slug}`}>
                      <button className="text-gold hover:text-gold-light font-semibold flex items-center gap-2">
                        Read More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </Link>

                    {article.externalLink && (
                      <>
                        <span className="text-gray-700">|</span>
                        <a
                          href={article.externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-gold text-sm flex items-center gap-1"
                        >
                          View Original
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </>
                    )}
                  </div>

                  {/* Tags */}
                  {article.tags && article.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {article.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto border border-gray-800 rounded-lg p-12 text-center bg-gradient-to-br from-gold/5 to-transparent">
          <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
          <p className="text-gray-400 mb-8">
            Subscribe to receive updates on our portfolio companies and investment insights.
          </p>
          <a href="mailto:inquiries@beyondalphaventures.com?subject=Newsletter%20Subscription&body=I%20would%20like%20to%20subscribe%20to%20the%20Beyond%20Alpha%20Ventures%20newsletter.%0A%0AName:%20%0AEmail:%20">
            <button className="bg-gold text-black px-8 py-3 rounded font-semibold hover:bg-gold-light transition">
              Subscribe to Updates
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
