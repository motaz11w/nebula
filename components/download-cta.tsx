import Image from 'next/image'
import { Download } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function DownloadCta() {
  return (
    <section id="download" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal direction="scale">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand/30 blur-[110px]" />
            <div className="absolute bottom-0 right-10 h-56 w-56 rounded-full bg-[var(--accent-cyan)]/20 blur-[110px]" />
          </div>

          <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center">
            <Image
              src="/nebula-logo.png"
              alt="Nebula Launcher"
              width={80}
              height={80}
              className="mb-6 h-20 w-20 animate-float drop-shadow-[0_0_30px_rgba(30,136,255,0.6)]"
            />
            <h2 className="font-display text-balance text-4xl font-bold tracking-tight sm:text-5xl">
              Ready to launch?
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Download Nebula Launcher for Windows and start playing in minutes.
              Free, fast and always improving.
            </p>

            <a
              href="https://github.com/motaz11w/nebula/releases/download/v0.66.4/nebula-0.66.2-win32-x64.zip"
              className="group relative mt-9 inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-brand px-9 py-5 text-lg font-semibold text-brand-foreground glow-brand transition-transform hover:scale-[1.03]"
            >
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
              <Download className="h-6 w-6" />
              Download for Windows
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              Windows 10 &amp; 11 • 64-bit
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
