import React from 'react';
import { BlogPost } from '@shared/schema';
import { format } from 'date-fns';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <motion.article 
      className="bg-gradient-to-br from-gray-900 to-black border border-orange-600/20 rounded-xl overflow-hidden hover:border-orange-500/40 transition-all duration-300 group"
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Featured Image Placeholder */}
      {post.featuredImage && (
        <div className="aspect-video bg-gradient-to-r from-orange-600 to-red-600 relative overflow-hidden">
          <img 
            src={post.featuredImage} 
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              // Fallback gradient if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
      )}

      <div className="p-6">
        {/* Category and Date */}
        <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
          <div className="flex items-center gap-1">
            <Tag className="w-3 h-3" />
            <span className="capitalize">
              {post.category.replace('-', ' ')}
            </span>
          </div>
          {post.publishedAt && (
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {format(new Date(post.publishedAt), 'MMM d, yyyy')}
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-orange-400 transition-colors">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Keywords */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {post.keywords.split(', ').slice(0, 3).map((keyword, index) => (
              <span 
                key={index}
                className="text-xs bg-orange-600/20 text-orange-300 px-2 py-1 rounded-full"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* Read More Link */}
        <a 
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium transition-colors group-hover:gap-3"
          data-testid={`blog-card-${post.slug}`}
        >
          Read More
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </motion.article>
  );
}