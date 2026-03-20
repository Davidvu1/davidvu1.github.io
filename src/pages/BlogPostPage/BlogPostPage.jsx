import React from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import Blog_Data from '../../assets/blog_data'
import './BlogPostPage.css'

const BlogPostPage = () => {
  const { slug } = useParams()
  const post = Blog_Data.find((p) => p.b_slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  const paragraphs = post.b_content
    .trim()
    .split('\n')
    .map((line, i) => {
      const trimmed = line.trim()
      if (!trimmed) return null
      if (trimmed.startsWith('## ')) return <h2 key={i}>{trimmed.slice(3)}</h2>
      if (trimmed.startsWith('### ')) return <h3 key={i}>{trimmed.slice(4)}</h3>
      return <p key={i}>{trimmed}</p>
    })
    .filter(Boolean)

  return (
    <div className="post-page">
      <div className="post-page-inner">
        <Link to="/blog" className="post-page-back">← All posts</Link>

        <header className="post-page-header">
          <div className="post-page-meta">
            <span className="post-page-category">{post.b_category}</span>
            <time className="post-page-date">{post.b_date}</time>
          </div>
          <h1 className="post-page-title">{post.b_title}</h1>
          <p className="post-page-excerpt">{post.b_excerpt}</p>
        </header>

        <div className="post-page-divider" />

        <article className="post-page-content">
          {paragraphs}
        </article>
      </div>
    </div>
  )
}

export default BlogPostPage
