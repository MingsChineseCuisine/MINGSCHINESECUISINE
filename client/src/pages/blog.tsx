import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { BlogPost } from '@shared/schema';
import BlogPostCard from '@/components/blog-post-card';
import { motion } from 'framer-motion';

export default function BlogPage() {
  const { data: blogPosts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog'],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-orange-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
            <p className="text-white mt-4">Loading blog posts...</p>
          </div>
        </div>
      </div>
    );
  }

  const categories = Array.from(new Set(blogPosts?.map(post => post.category) || []));

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-orange-950 to-black">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-black via-orange-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Ming's <span className="text-orange-500">Food Blog</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover the rich flavors, traditions, and stories behind authentic Chinese cuisine. 
              Explore our culinary journey from Kalyan's premier Chinese restaurant.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          {categories.length > 1 && (
            <div className="mb-12 text-center">
              <h2 className="text-2xl font-bold text-white mb-6">Explore by Category</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <span 
                    key={category}
                    className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-full transition-colors cursor-pointer"
                  >
                    {category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts?.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <BlogPostCard post={post} />
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div 
            className="mt-16 text-center bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Taste the Stories We Share
            </h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              Experience the authentic Chinese flavors we write about. Visit Ming's Chinese Cuisine 
              in Kalyan and let your taste buds explore our culinary traditions.
            </p>
            <a 
              href="/#contact"
              className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              data-testid="blog-cta-contact"
            >
              Make a Reservation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}