'use client'

import { HelpCircle } from 'lucide-react'

export function HowToUseFab() {
  return (
    <a
      href="#how-to-use"
      className="group fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full border border-border bg-card/90 px-4 py-3 text-sm font-semibold text-foreground shadow-xl backdrop-blur transition-transform hover:scale-[1.05] hover:border-brand/50"
    >
      <HelpCircle className="h-5 w-5 text-[var(--accent-cyan)] transition-colors group-hover:text-brand" />
      <span>How do you use it?</span>
    </a>
  )
}
