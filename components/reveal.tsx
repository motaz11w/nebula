'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Direction = 'up' | 'down' | 'left' | 'right' | 'scale'

const hiddenByDirection: Record<Direction, string> = {
  up: 'translate-y-12',
  down: '-translate-y-12',
  left: 'translate-x-16',
  right: '-translate-x-16',
  scale: 'scale-95',
}

export function Reveal({
  children,
  className,
  direction = 'up',
  delay = 0,
  once = true,
}: {
  children: ReactNode
  className?: string
  direction?: Direction
  delay?: number
  once?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // If the element is already within (or above) the viewport on mount —
    // e.g. after a direct #hash navigation — reveal it right away so content
    // can never get stuck hidden when the observer doesn't fire.
    const rect = node.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true)
      if (once) return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            setVisible(false)
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(node)

    // Safety net: never leave content permanently invisible.
    const fallback = window.setTimeout(() => setVisible(true), 1200)

    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
    }
  }, [once])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        'transition-all duration-700 ease-out will-change-transform',
        visible
          ? 'translate-x-0 translate-y-0 scale-100 opacity-100 blur-0'
          : cn('opacity-0 blur-[2px]', hiddenByDirection[direction]),
        className,
      )}
    >
      {children}
    </div>
  )
}
