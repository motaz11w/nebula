'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { BookOpen, Download, ShieldCheck, X } from 'lucide-react'

const DOWNLOAD_URL =
  'https://github.com/motaz11w/nebula-launcher/releases/download/v0.66.2/nebula-0.66.2-win32-x64.zip'
const STORAGE_KEY = 'nebula-read-guide'

type DownloadContextValue = {
  /** Call from any download button's onClick. */
  requestDownload: () => void
}

const DownloadContext = createContext<DownloadContextValue | null>(null)

export function useDownload() {
  const ctx = useContext(DownloadContext)
  if (!ctx) {
    throw new Error('useDownload must be used within <DownloadGate>')
  }
  return ctx
}

function startDownload() {
  const link = document.createElement('a')
  link.href = DOWNLOAD_URL
  link.rel = 'noopener'
  link.click()
}

export function DownloadGate({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [hasRead, setHasRead] = useState(false)

  useEffect(() => {
    setHasRead(window.localStorage.getItem(STORAGE_KEY) === 'true')
  }, [])

  // Lock scroll while the dialog is open.
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  // Close on Escape.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const markRead = useCallback(() => {
    window.localStorage.setItem(STORAGE_KEY, 'true')
    setHasRead(true)
  }, [])

  const requestDownload = useCallback(() => {
    if (hasRead) {
      startDownload()
    } else {
      setOpen(true)
    }
  }, [hasRead])

  const handleReadGuide = useCallback(() => {
    markRead()
    setOpen(false)
    const section = document.getElementById('how-to-use')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [markRead])

  const handleDownloadAnyway = useCallback(() => {
    markRead()
    setOpen(false)
    startDownload()
  }, [markRead])

  return (
    <DownloadContext.Provider value={{ requestDownload }}>
      {children}

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="download-gate-title"
        >
          {/* Backdrop */}
          <button
            aria-label="Close dialog"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-background/70 backdrop-blur-md animate-[fadeIn_.2s_ease]"
          />

          {/* Card */}
          <div className="relative z-10 w-full max-w-md overflow-hidden rounded-3xl border border-border bg-card p-7 text-center shadow-2xl glow-brand animate-[popIn_.25s_cubic-bezier(0.16,1,0.3,1)]">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-16 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-brand/30 blur-[80px]"
            />

            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative z-10 flex flex-col items-center">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand/15 text-brand ring-1 ring-brand/30">
                <ShieldCheck className="h-8 w-8" />
              </div>

              <h2
                id="download-gate-title"
                className="font-display text-2xl font-bold tracking-tight text-balance"
              >
                Have you read how to use it?
              </h2>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                Before you download, we recommend reading the quick setup guide.
                It shows you how to extract the file and launch Nebula in just
                two simple steps.
              </p>

              <div className="mt-7 flex w-full flex-col gap-3">
                <button
                  onClick={handleReadGuide}
                  className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-brand px-6 py-3.5 text-base font-semibold text-brand-foreground transition-transform hover:scale-[1.02]"
                >
                  <BookOpen className="h-5 w-5" />
                  Read the guide first
                </button>
                <button
                  onClick={handleDownloadAnyway}
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-border bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/70"
                >
                  <Download className="h-4 w-4" />
                  Download anyway
                </button>
              </div>

              <p className="mt-4 text-xs text-muted-foreground">
                You&apos;ll only see this once.
              </p>
            </div>
          </div>
        </div>
      )}
    </DownloadContext.Provider>
  )
}
