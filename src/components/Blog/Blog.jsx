import React from 'react'
import { Link } from 'react-router-dom'
import './Blog.css'
import Blog_Data from '../../assets/blog_data'

const Blog = () => {
  const getPreviewImage = (post) => {
    if (post.b_gallery_image) return post.b_gallery_image
    if (post.b_image) return post.b_image
    if (Array.isArray(post.b_images)) return post.b_images[0] || null
    if (post.b_images && typeof post.b_images === 'object') {
      return Object.values(post.b_images)[0] || null
    }
    return null
  }

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
          {Blog_Data.map((post) => {
            const previewImage = getPreviewImage(post)

            return (
              <Link key={post.b_slug} to={`/blog/${post.b_slug}`} className="blog-card">
                <div className="blog-card-image-wrapper">
                  {previewImage ? (
                    <img src={previewImage} alt={post.b_title} className="blog-card-image" />
                  ) : (
                    <div className="blog-card-image-placeholder" />
                  )}
                </div>
                <div className="blog-card-body">
                  <time className="blog-card-date">{post.b_date}</time>
                  <h3 className="blog-card-title">{post.b_title}</h3>
                  <p className="blog-card-excerpt">{post.b_excerpt}</p>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Mobile: list view */}
        <div className="blog-list">
          {Blog_Data.map((post) => {
            const previewImage = getPreviewImage(post)

            return (
              <Link key={post.b_slug} to={`/blog/${post.b_slug}`} className="blog-list-item">
                {previewImage ? (
                  <img src={previewImage} alt={post.b_title} className="blog-list-thumbnail-img" />
                ) : (
                  <div className="blog-list-thumbnail" />
                )}
                <div className="blog-list-text">
                  <time className="blog-list-date">{post.b_date}</time>
                  <h3 className="blog-list-title">{post.b_title}</h3>
                </div>
              </Link>
            )
          })}
          <Link to="/blog" className="blog-view-all-btn">
            View All Posts →
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Blog
