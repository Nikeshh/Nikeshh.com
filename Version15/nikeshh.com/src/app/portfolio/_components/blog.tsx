"use client"

import React, { useEffect, useState } from 'react';
import { ArrowLeft } from "lucide-react";
import parse from 'html-react-parser';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

type BlogType = {
  uid: string;
  tag: string;
  imageUrl: string;
  title: string;
  description: string;
  content: string;
};

type Props = {
  activeNavbar: string;
  blogs: BlogType[];
};

const Blog: React.FC<Props> = ({ activeNavbar, blogs }) => {
  const [selectedBlog, setSelectedBlog] = useState<BlogType | null>(null);

  const handleBlogClick = (blog: BlogType) => {
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
    const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(selectedBlog?.title || '')}&summary=${encodeURIComponent(selectedBlog?.description || '')}`;
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
              <img src={selectedBlog.imageUrl} alt={selectedBlog.title} loading="lazy" />
            </figure>
            <div className="blog-content">
              <div className="blog-meta">
                <p className="blog-category">{selectedBlog.tag}</p>
                <span className="dot"></span>
                <time dateTime="2022-02-23">Fab 23, 2022</time>
              </div>
              <div className="mt-4 rich-text flex justify-center">
                {parse(selectedBlog.content)}
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
              <li key={blog.uid} className="blog-post-item" onClick={() => handleBlogClick(blog)}>
                <a href="#">
                  <figure className="blog-banner-box">
                    <img
                      src={blog.imageUrl}
                      alt={blog.title}
                      loading="lazy"
                    />
                  </figure>

                  <div className="blog-content">
                    <div className="blog-meta">
                      <p className="blog-category">{blog.tag}</p>
                      <span className="dot"></span>
                      <time dateTime="2023-02-23">Feb 23, 2023</time>
                    </div>

                    <h3 className="h3 blog-item-title">
                      {blog.title}
                    </h3>

                    <p className="blog-text">
                      {blog.description}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        )}
      </section>
    </article>
  );
};

export default Blog;
