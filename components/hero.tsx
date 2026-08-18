'use client'

import Image from 'next/image'
import { Sparkles, Download } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24 pb-16"
    >
      {/* Ambient nebula glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[18%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand/25 blur-[120px] animate-pulse-slow" />
        <div className="absolute left-[15%] top-[45%] h-72 w-72 rounded-full bg-[var(--accent-cyan)]/20 blur-[110px] animate-pulse-slow" />
        <div className="absolute right-[12%] top-[30%] h-72 w-72 rounded-full bg-[var(--chart-3)]/20 blur-[110px] animate-pulse-slow" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)',
            backgroundSize: '38px 38px',
            maskImage:
              'radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 75%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <Reveal direction="scale">
          <Image
            src="/nebula-logo.png"
            alt="Nebula Launcher"
            width={112}
            height={112}
            priority
            className="mb-8 h-24 w-24 animate-float drop-shadow-[0_0_40px_rgba(30,136,255,0.6)] sm:h-28 sm:w-28"
          />
        </Reveal>

        <Reveal delay={80}>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="h-4 w-4 text-[var(--accent-cyan)]" />
            The next-generation Minecraft launcher
          </span>
        </Reveal>

        <Reveal delay={140}>
          <h1 className="font-display text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Launch Minecraft
            <br />
            <span className="text-gradient">the way it should be</span>
          </h1>
        </Reveal>

        <Reveal delay={220}>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Nebula Launcher gives you full control over your game. Pick any mod
            loader in one click, sign in with Microsoft or offline, host your own
            server, and manage every instance from one beautifully crafted,
            lightning-fast interface.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-col items-center gap-4">
            <a
              href="/#how-to-use"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-brand px-9 py-5 text-lg font-semibold text-brand-foreground glow-brand transition-transform hover:scale-[1.03]"
            >
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
              <Download className="h-6 w-6" />
              Download for Windows
            </a>
            <p className="text-sm text-muted-foreground">
              Free • Windows 10 &amp; 11 • ~40 MB installer
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
