import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Link from 'next/link'
import newsData from '@/data/news.json'

export function generateStaticParams() {
  return newsData.map((article) => ({
    slug: article.slug,
  }))
}

export default async function NewsArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = newsData.find(a => a.slug === slug)

  if (!article) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <div className="container mx-auto px-6 pt-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link href="/news" className="text-gold hover:text-gold-light">
            ← Back to News
          </Link>
        </div>
      </div>
    )
  }

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

      {/* Article Header */}
      <article className="container mx-auto px-6 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <Link href="/news" className="text-gold hover:text-gold-light flex items-center gap-2 mb-8">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to News
          </Link>

          {/* Meta */}
          <div className="flex items-center gap-4 mb-6 text-sm">
            <span className="text-gold font-semibold">{article.source}</span>
            <span className="text-gray-500">•</span>
            <time className="text-gray-500">{formatDate(article.date)}</time>
            {article.externalLink && (
              <>
                <span className="text-gray-500">•</span>
                <a
                  href={article.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gold flex items-center gap-1"
                >
                  View Original
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            {article.title}
          </h1>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
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

          {/* Featured Image */}
          {article.featuredImage && (
            <div className="mb-12 rounded-lg overflow-hidden border border-gray-800">
              <img
                src={article.featuredImage}
                alt={article.title}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Content */}
          <div
            className="prose prose-invert prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: article.content }}
            style={{
              color: '#E5E5E5'
            }}
          />

          {/* Share & Actions */}
          <div className="border-t border-gray-800 pt-8 mt-12">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-gray-500 text-sm mb-2">Share this article</p>
                <div className="flex gap-3">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`https://www.beyondalphaventures.com/news/${article.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gold flex items-center justify-center transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://www.beyondalphaventures.com/news/${article.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gold flex items-center justify-center transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(`Check out this article: https://www.beyondalphaventures.com/news/${article.slug}`)}`}
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gold flex items-center justify-center transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>

              <Link href="/contact">
                <button className="bg-gold text-black px-6 py-3 rounded font-semibold hover:bg-gold-light transition">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-gray-950 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">More News</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {newsData
                .filter(a => a.id !== article.id)
                .slice(0, 2)
                .map(relatedArticle => (
                  <Link
                    key={relatedArticle.id}
                    href={`/news/${relatedArticle.slug}`}
                    className="border border-gray-800 rounded-lg overflow-hidden hover:border-gold transition-colors"
                  >
                    {relatedArticle.featuredImage && (
                      <div className="aspect-video bg-gray-900 overflow-hidden">
                        <img
                          src={relatedArticle.featuredImage}
                          alt={relatedArticle.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <div className="text-xs text-gold mb-2">{relatedArticle.source}</div>
                      <h3 className="font-semibold line-clamp-2 hover:text-gold transition-colors">
                        {relatedArticle.title}
                      </h3>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
