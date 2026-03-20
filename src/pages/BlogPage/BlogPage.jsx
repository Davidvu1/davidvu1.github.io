import React from 'react'
import { Link } from 'react-router-dom'
import Blog_Data from '../../assets/blog_data'
import './BlogPage.css'

const BlogPage = () => {
  return (
    <div className="blog-page">
      <div className="blog-page-inner">
        <div className="blog-page-header">
          <Link to="/" className="blog-page-back">← Back to home</Link>
          <h1 className="blog-page-title">YapSection</h1>
          <p className="blog-page-subtitle">
            This is where I write about the bajillion things I learn in tech or document things outside of it.
          </p>
        </div>

        <div className="blog-page-list">
          {Blog_Data.map((post) => (
            <Link
              key={post.b_slug}
              to={`/blog/${post.b_slug}`}
              className="blog-page-item"
            >
              <div className="blog-page-item-meta">
                <span className="blog-page-item-category">{post.b_category}</span>
                <time className="blog-page-item-date">{post.b_date}</time>
              </div>
              <h2 className="blog-page-item-title">{post.b_title}</h2>
              <p className="blog-page-item-excerpt">{post.b_excerpt}</p>
              <span className="blog-page-item-read">Read post →</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogPage
