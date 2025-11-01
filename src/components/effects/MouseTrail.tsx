'use client'
import { useEffect, useRef, useState } from 'react'

// Hentet fra Gløer sin undervisning

type Circle = { id: number; x: number; y: number }

const MAX_CIRCLES = 60

export default function MouseTrail() {
  const [circles, setCircles] = useState<Circle[]>([])
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    let last = 0

    function onMove(e: MouseEvent) {
      const now = performance.now()

      if (now - last < 16) return
      last = now

      const id = now + Math.random()
      setCircles((prev) => {
        const next = [...prev, { id, x: e.clientX, y: e.clientY }]
        if (next.length > MAX_CIRCLES) next.shift()
        return next
      })
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  function onAnimEnd(id: number) {
    setCircles((prev) => prev.filter((c) => c.id !== id))
  }

  return (
    <div className="mouse-trail-layer" aria-hidden="true" role="presentation">
      {circles.map((c) => (
        <div
          key={c.id}
          className="mouse-trail-circle"
          onAnimationEnd={() => onAnimEnd(c.id)}
          style={{ left: c.x, top: c.y }}
        />
      ))}
    </div>
  )
}
