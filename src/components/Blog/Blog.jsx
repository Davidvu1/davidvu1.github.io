import React from 'react'
import { Link } from 'react-router-dom'
import './Blog.css'
import Blog_Data from '../../assets/blog_data'

const Blog = () => {
  return (
    <section className="blog-section">
      <div className="blog-inner">
        <div className="blog-header">
          <div className="blog-header-text">
            <h2 className="blog-title">Latest from my YapSection</h2>
            <p className="blog-subtitle">This is where I will write the bajillion things I learn in tech or document things outside of tech.</p>
          </div>
          <Link to="/blog" className="blog-view-all">
            View All Posts
            <span className="blog-view-all-arrow">→</span>
          </Link>
        </div>

        {/* Desktop: 3-column grid */}
        <div className="blog-grid">
          {Blog_Data.map((post) => (
            <Link key={post.b_slug} to={`/blog/${post.b_slug}`} className="blog-card">
              <div className="blog-card-image-wrapper">
                <div className="blog-card-image-placeholder" />
              </div>
              <div className="blog-card-body">
                <time className="blog-card-date">{post.b_date}</time>
                <h3 className="blog-card-title">{post.b_title}</h3>
                <p className="blog-card-excerpt">{post.b_excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile: list view */}
        <div className="blog-list">
          {Blog_Data.map((post) => (
            <Link key={post.b_slug} to={`/blog/${post.b_slug}`} className="blog-list-item">
              <div className="blog-list-thumbnail" />
              <div className="blog-list-text">
                <time className="blog-list-date">{post.b_date}</time>
                <h3 className="blog-list-title">{post.b_title}</h3>
              </div>
            </Link>
          ))}
          <Link to="/blog" className="blog-view-all-btn">
            View All Posts →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Blog
