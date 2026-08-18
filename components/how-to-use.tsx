'use client'

import Image from 'next/image'
import { MousePointerClick, PackageOpen, Rocket } from 'lucide-react'
import { Reveal } from '@/components/reveal'

type Step = {
  number: string
  image: string
  alt: string
  titleEn: string
  titleAr: string
  descEn: string
  descAr: string
  /* highlight box over the target, in % of the image */
  box: { left: string; top: string; width: string; height: string }
  /* callout badge position + which way its arrow points toward the box */
  callout: {
    left: string
    top: string
    label: string
    arrow: 'left' | 'right' | 'down'
  }
}

const steps: Step[] = [
  {
    number: '01',
    image: '/tutorial/step1-extract.png',
    alt: 'Right-click the downloaded ZIP and choose Extract All',
    titleEn: 'Extract the ZIP file',
    titleAr: 'استخرج الملف المضغوط',
    descEn:
      'After the download finishes, right-click the "nebula-0.66.2-win32-x64.zip" file and click "Extract All" to unpack the launcher into a folder.',
    descAr:
      'بعد انتهاء التحميل، اضغط بزر الفأرة الأيمن على الملف المضغوط ثم اختر "استخراج الكل" لفك ضغط اللانشر داخل مجلد.',
    box: { left: '3%', top: '28.5%', width: '18.5%', height: '5.2%' },
    callout: { left: '23%', top: '24%', label: 'Click "Extract All"', arrow: 'left' },
  },
  {
    number: '02',
    image: '/tutorial/step2-run.png',
    alt: 'Double-click Nebula.exe to launch the app',
    titleEn: 'Run Nebula.exe',
    titleAr: 'شغّل ملف Nebula.exe',
    descEn:
      'Open the extracted folder and simply double-click "Nebula.exe". That is it — the launcher will start right away, no installation needed.',
    descAr:
      'افتح المجلد بعد الاستخراج ثم اضغط ضغطتين على "Nebula.exe" وبس — سيفتح اللانشر مباشرة بدون أي تثبيت.',
    box: { left: '72.5%', top: '63.2%', width: '14%', height: '5.6%' },
    callout: { left: '48%', top: '60%', label: 'Double-click Nebula.exe', arrow: 'right' },
  },
]

function ArrowGlyph({ dir }: { dir: 'left' | 'right' | 'down' }) {
  const rotation =
    dir === 'left' ? 'rotate-180' : dir === 'down' ? 'rotate-90' : ''
  return (
    <svg
      viewBox="0 0 64 24"
      className={`h-5 w-14 shrink-0 ${rotation}`}
      fill="none"
      aria-hidden
    >
      <path
        d="M2 12h54m0 0-9-8m9 8-9 8"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function HowToUse() {
  return (
    <section
      id="how-to-use"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6"
    >
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur">
            <MousePointerClick className="h-4 w-4 text-[var(--accent-cyan)]" />
            Setup guide
          </span>
          <h2 className="mt-6 font-display text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            How do you use it?
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Two simple steps to get Nebula running.
            <span dir="rtl" className="mt-1 block text-base">
              خطوتان بسيطتان لتشغيل نيبلا لانشر.
            </span>
          </p>
        </div>
      </Reveal>

      <div className="mt-16 flex flex-col gap-16">
        {steps.map((step, i) => (
          <Reveal key={step.number} delay={i * 80}>
            <div className="grid items-center gap-8 lg:grid-cols-2">
              {/* Screenshot with annotations */}
              <div
                className={`relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl ${
                  i % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <div className="relative aspect-video w-full">
                  <Image
                    src={step.image || '/placeholder.svg'}
                    alt={step.alt}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />

                  {/* pulsing highlight box */}
                  <span
                    className="pointer-events-none absolute rounded-md ring-2 ring-[var(--accent-cyan)] animate-pulse-slow"
                    style={{
                      left: step.box.left,
                      top: step.box.top,
                      width: step.box.width,
                      height: step.box.height,
                      boxShadow:
                        '0 0 0 9999px rgba(9,14,28,0.35), 0 0 26px 4px color-mix(in oklch, var(--accent-cyan) 65%, transparent)',
                    }}
                  />

                  {/* callout badge with arrow */}
                  <div
                    className="pointer-events-none absolute z-10 flex items-center gap-2 rounded-lg bg-brand px-3 py-2 text-xs font-semibold text-brand-foreground shadow-lg sm:text-sm"
                    style={{ left: step.callout.left, top: step.callout.top }}
                  >
                    {step.callout.arrow === 'left' && (
                      <span className="text-brand-foreground">
                        <ArrowGlyph dir="left" />
                      </span>
                    )}
                    <span className="whitespace-nowrap">{step.callout.label}</span>
                    {step.callout.arrow !== 'left' && (
                      <span className="text-brand-foreground">
                        <ArrowGlyph dir={step.callout.arrow} />
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 font-display text-lg font-bold text-brand">
                    {step.number}
                  </span>
                  {i === 0 ? (
                    <PackageOpen className="h-6 w-6 text-[var(--accent-cyan)]" />
                  ) : (
                    <Rocket className="h-6 w-6 text-[var(--accent-cyan)]" />
                  )}
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  {step.titleEn}
                </h3>
                <p dir="rtl" className="mt-1 text-lg font-semibold text-brand">
                  {step.titleAr}
                </p>
                <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                  {step.descEn}
                </p>
                <p
                  dir="rtl"
                  className="mt-3 text-pretty leading-relaxed text-muted-foreground"
                >
                  {step.descAr}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
