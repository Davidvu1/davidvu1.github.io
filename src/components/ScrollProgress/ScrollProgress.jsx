import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import './ScrollProgress.css'
import zenyatta_walk_strip from '../../assets/zenyatta_walk_strip.png'

const ScrollProgress = () => {
  const fillRef = useRef(null)
  const spriteRef = useRef(null)
  const rafRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    if (fillRef.current) {
      fillRef.current.style.transform = 'scaleY(0)'
    }
    if (spriteRef.current) {
      spriteRef.current.style.top = '0%'
    }

    const tick = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0

      if (fillRef.current) {
        fillRef.current.style.transform = `scaleY(${progress})`
      }
      if (spriteRef.current) {
        spriteRef.current.style.top = `${progress * 100}%`
      }

      rafRef.current = window.requestAnimationFrame(tick)
    }

    rafRef.current = window.requestAnimationFrame(tick)

    return () => window.cancelAnimationFrame(rafRef.current)
  }, [location.pathname])

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress-track">
        <div ref={fillRef} className="scroll-progress-fill" />
      </div>
      <div
        ref={spriteRef}
        className="scroll-progress-sprite"
        style={{ backgroundImage: `url(${zenyatta_walk_strip})` }}
      />
    </div>
  )
}

export default ScrollProgress
