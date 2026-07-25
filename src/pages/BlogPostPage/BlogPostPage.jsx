import React from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import Blog_Data from '../../assets/blog_data'
import './BlogPostPage.css'

const BlogPostPage = () => {
  const { slug } = useParams()
  const post = Blog_Data.find((p) => p.b_slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  const postImageEntries = post.b_images && typeof post.b_images === 'object'
    ? Object.entries(post.b_images)
    : []
  const postImageList = postImageEntries.map(([, value]) => value)

  const resolveContentImageSource = (srcToken) => {
    const token = srcToken.trim()
    if (token === 'b_image') return post.b_image || postImageList[0] || null

    const indexedTokenMatch = token.match(/^b_images\[(\d+)\]$/)
    if (indexedTokenMatch) {
      const imageIndex = Number(indexedTokenMatch[1])
      return postImageList[imageIndex] || null
    }

    const namedMatch = postImageEntries.find(([key]) => key === token)
    if (namedMatch) return namedMatch[1]

    return token
  }

  const renderInlineLinks = (text, keyPrefix) => {
    const linkPattern = /(\[[^\]]+\]\((https?:\/\/[^\s)]+)\))|(https?:\/\/[^\s]+)/g
    const nodes = []
    let currentIndex = 0
    let matchCount = 0
    let match

    while ((match = linkPattern.exec(text)) !== null) {
      const matchStart = match.index
      const matchText = match[0]

      if (matchStart > currentIndex) {
        nodes.push(text.slice(currentIndex, matchStart))
      }

      const markdownMatch = matchText.match(/^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/)
      if (markdownMatch) {
        const [, label, href] = markdownMatch
        nodes.push(
          <a
            key={`${keyPrefix}-link-${matchCount}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="post-page-content-link"
          >
            {label}
          </a>,
        )
      } else {
        nodes.push(
          <a
            key={`${keyPrefix}-link-${matchCount}`}
            href={matchText}
            target="_blank"
            rel="noopener noreferrer"
            className="post-page-content-link"
          >
            {matchText}
          </a>,
        )
      }

      currentIndex = matchStart + matchText.length
      matchCount += 1
    }

    if (currentIndex < text.length) {
      nodes.push(text.slice(currentIndex))
    }

    return nodes.length ? nodes : text
  }

  const paragraphs = post.b_content
    .trim()
    .split('\n')
    .map((line, i) => {
      const trimmed = line.trim()
      if (!trimmed) return null
      if (trimmed.startsWith('## ')) return <h2 key={i}>{trimmed.slice(3)}</h2>
      if (trimmed.startsWith('### ')) return <h3 key={i}>{trimmed.slice(4)}</h3>
      const imageMatch = trimmed.match(/^!\[(.*?)\]\((.*?)\)$/)
      if (imageMatch) {
        const [, alt, srcToken] = imageMatch
        const [altTextRaw, ...optionParts] = alt
          .split('|')
          .map((part) => part.trim())
          .filter(Boolean)
        const sizeToken = optionParts.find((part) => {
          const value = part.toLowerCase()
          return /^\d+(\.\d+)?%$/.test(value) || /^\d+(\.\d+)?px$/.test(value) || /^\d+(\.\d+)?$/.test(value)
        })
        const hasLeftAlignment = optionParts.some((part) => part.toLowerCase() === '!left')
        let imageStyle = hasLeftAlignment
          ? { marginLeft: 0, marginRight: 'auto' }
          : { marginLeft: 'auto', marginRight: 'auto' }

        if (sizeToken) {
          const normalizedSize = sizeToken.toLowerCase()
          if (/^\d+(\.\d+)?%$/.test(normalizedSize) || /^\d+(\.\d+)?px$/.test(normalizedSize)) {
            imageStyle = { ...imageStyle, width: normalizedSize, maxWidth: '100%' }
          } else if (/^\d+(\.\d+)?$/.test(normalizedSize)) {
            const clampedPercent = Math.min(100, Math.max(1, Number(sizeToken)))
            imageStyle = { ...imageStyle, width: `${clampedPercent}%`, maxWidth: '100%' }
          }
        }

        const resolvedSrc = resolveContentImageSource(srcToken)
        if (!resolvedSrc) return null
        return (
          <img
            key={i}
            src={resolvedSrc}
            alt={altTextRaw || post.b_title}
            className="post-page-content-image"
            style={imageStyle}
          />
        )
      }
      return <p key={i}>{renderInlineLinks(trimmed, `line-${i}`)}</p>
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
