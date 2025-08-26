import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { BlogPost } from '@shared/schema';

export default function BlogSimple() {
  const { data: blogPosts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog'],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-orange-500">Ming's Chinese Cuisine Blog</h1>
      
      <div className="max-w-4xl mx-auto">
        {blogPosts?.map((post) => (
          <article key={post.id} className="mb-12 p-6 bg-gray-900 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-orange-400">{post.title}</h2>
            <p className="text-gray-300 mb-4">{post.excerpt}</p>
            <div className="text-sm text-gray-500 mb-4">
              Category: {post.category} | Published: {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Draft'}
            </div>
            <a 
              href={`/blog/${post.slug}`} 
              className="text-orange-400 hover:text-orange-300"
            >
              Read More →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}