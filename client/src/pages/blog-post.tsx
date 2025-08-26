import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useRoute } from 'wouter';
import { BlogPost } from '@shared/schema';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { Calendar, ArrowLeft, Tag, Clock, Share2 } from 'lucide-react';

export default function BlogPostPage() {
  const [match, params] = useRoute('/blog/:slug');
  const slug = params?.slug;

  const { data: blogPost, isLoading, error } = useQuery<BlogPost>({
    queryKey: ['/api/blog', slug],
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-orange-950 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
            <p className="text-white mt-4">Loading article...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !blogPost) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-orange-950 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Article Not Found</h1>
            <p className="text-gray-300 mb-8">The blog post you're looking for doesn't exist.</p>
            <a 
              href="/blog"
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
              data-testid="back-to-blog"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-orange-950 to-black">
      {/* Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <motion.a 
          href="/blog"
          className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          data-testid="back-to-blog-nav"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </motion.a>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-400 text-sm mb-6">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {blogPost.publishedAt && format(new Date(blogPost.publishedAt), 'MMMM d, yyyy')}
            </div>
            <div className="flex items-center gap-1">
              <Tag className="w-4 h-4" />
              <span className="capitalize">
                {blogPost.category.replace('-', ' ')}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>5 min read</span>
            </div>
          </div>
          
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight px-4">
            {blogPost.title}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            {blogPost.excerpt}
          </p>

          <div className="mt-6 flex justify-center">
            <button className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors">
              <Share2 className="w-4 h-4" />
              Share this article
            </button>
          </div>
        </motion.div>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div 
          className="prose prose-invert prose-orange max-w-none prose-lg
            prose-headings:text-white prose-headings:font-bold prose-headings:scroll-mt-20
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-orange-400
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-orange-300
            prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base md:prose-p:text-lg
            prose-strong:text-orange-400 prose-strong:font-semibold
            prose-ul:text-gray-300 prose-li:mb-2 prose-li:pl-2 prose-li:text-base md:prose-li:text-lg
            prose-em:text-orange-200 prose-em:italic
            prose-a:text-orange-400 prose-a:no-underline hover:prose-a:text-orange-300
            prose-blockquote:border-l-orange-500 prose-blockquote:bg-orange-950/30 prose-blockquote:rounded-r-lg prose-blockquote:p-4
            [&>*]:max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
        />

        {/* Keywords Section */}
        <motion.div 
          className="mt-12 p-6 bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-xl border border-orange-600/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-xl font-bold text-orange-400 mb-4">Related Topics</h3>
          <div className="flex flex-wrap gap-3">
            {blogPost.keywords.split(', ').map((keyword, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-orange-600/30 text-orange-200 rounded-full text-sm border border-orange-500/30 hover:bg-orange-600/40 transition-colors"
              >
                {keyword}
              </span>
            ))}
          </div>
        </motion.div>
      </article>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div 
          className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-6 md:p-8 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
            Ready to Experience These Flavors?
          </h3>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto text-sm md:text-base">
            Visit Ming's Chinese Cuisine in Kalyan and taste the authentic dishes mentioned in this article. 
            Book your table for an unforgettable culinary journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/#contact"
              className="bg-white text-orange-600 px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base"
              data-testid="article-cta-contact"
            >
              Make a Reservation
            </a>
            <a 
              href="/#menu"
              className="border-2 border-white text-white px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-colors text-sm md:text-base"
              data-testid="article-cta-menu"
            >
              View Our Menu
            </a>
          </div>
        </motion.div>
      </section>

      {/* Back to Top */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-full py-3 text-orange-400 hover:text-orange-300 transition-colors border border-orange-600/30 rounded-lg hover:bg-orange-600/10"
        >
          Back to Top ↑
        </button>
      </div>
    </div>
  );
}