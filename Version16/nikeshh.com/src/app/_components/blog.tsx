"use client"

import React, { useEffect, useState } from 'react';
import { ArrowLeft } from "lucide-react";
import parse from 'html-react-parser';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { BlogPostWithCategoriesAndComments } from '@/lib/queries';

type Props = {
  activeNavbar: string;
  blogs: BlogPostWithCategoriesAndComments[];
};

const Blog: React.FC<Props> = ({ activeNavbar, blogs }) => {
  const [selectedBlog, setSelectedBlog] = useState<BlogPostWithCategoriesAndComments | null>(null);

  const handleBlogClick = (blog: BlogPostWithCategoriesAndComments) => {
    setSelectedBlog(blog);
  };

  const handleBackClick = () => {
    setSelectedBlog(null);
  };

  let shareUrl = "";

  useEffect(() => {
    shareUrl = window.location.href;
  })

  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(facebookUrl, '_blank');
  };

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(selectedBlog?.title || '')}`;
    window.open(twitterUrl, '_blank');
  };

  const shareOnLinkedIn = () => {
    const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(selectedBlog?.title || '')}&summary=${encodeURIComponent(parse(selectedBlog?.content?.substring(0, 100) + "..." || '').toString())}`;
    window.open(linkedinUrl, '_blank');
  };

  return (
    <article className={`blog ${activeNavbar === "Blog" ? "active" : ''}`} data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        {selectedBlog ? (
          <div className="blog-detail">
            <button className="back-button" onClick={handleBackClick}>
              <ArrowLeft />
              Back to Blogs
            </button>
            <h3 className="h3 blog-item-title">{selectedBlog.title}</h3>
            <figure className="blog-banner-box">
              <img src="/blogs/blog1.png" alt={selectedBlog.title} loading="lazy" />
            </figure>
            <div className="blog-content">
              <div className="blog-meta flex">
                {selectedBlog.categories.map((category, index) => (
                  <p key={index} className="blog-category">
                    {category.name}
                  </p>
                ))}
                <span className="dot"></span>
                <time dateTime="2022-02-23">Fab 23, 2022</time>
              </div>
              <div className="mt-4 rich-text flex justify-center">
                <div dangerouslySetInnerHTML={{ __html: selectedBlog.content ?? "" }}></div>
              </div>
              <div className="share-buttons mt-4 flex justify-center space-x-4">
                <span>Share via:</span>
                <button onClick={shareOnFacebook} aria-label="Share on Facebook">
                  <FaFacebook size={24} />
                </button>
                <button onClick={shareOnTwitter} aria-label="Share on Twitter">
                  <FaTwitter size={24} />
                </button>
                <button onClick={shareOnLinkedIn} aria-label="Share on LinkedIn">
                  <FaLinkedin size={24} />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <ul className="blog-posts-list">
            {blogs.map(blog => (
              <li key={blog.id} className="blog-post-item" onClick={() => handleBlogClick(blog)}>
                <figure className="blog-banner-box">
                  <img
                    src="/blogs/blog1.png"
                    alt={blog.title}
                    loading="lazy"
                  />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    {blog.categories.map((category, index) => (
                      <p key={index} className="blog-category">
                        {category.name}
                      </p>
                    ))}
                    <span className="dot"></span>
                    <time dateTime="2023-02-23">Feb 23, 2023</time>
                  </div>

                  <h3 className="h3 blog-item-title">
                    {blog.title}
                  </h3>

                  <p className="blog-text">
                    {parse(blog.content?.substring(0, 100) + "..." || '')}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </article>
  );
};

export default Blog;
