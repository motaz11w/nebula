'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Monitor } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'How to use', href: '#how-to-use' },
  { label: 'Community', href: '#community' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/60 bg-background/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <Image
            src="/nebula-logo.png"
            alt="Nebula Launcher logo"
            width={36}
            height={36}
            className="h-9 w-9 drop-shadow-[0_0_12px_rgba(30,136,255,0.55)]"
            priority
          />
          <span className="font-display text-lg font-bold tracking-tight">
            Nebula<span className="text-brand"> Launcher</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#download"
          className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground transition-transform hover:scale-[1.03]"
        >
          <Monitor className="h-4 w-4" />
          <span className="hidden sm:inline">Download</span>
        </a>
      </div>
    </header>
  )
}
