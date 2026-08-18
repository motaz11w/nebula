import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Showcase } from '@/components/showcase'
import { Features } from '@/components/features'
import { Gallery } from '@/components/gallery'
import { DownloadCta } from '@/components/download-cta'
import { Community } from '@/components/community'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Showcase />
        <Features />
        <Gallery />
        <DownloadCta />
        <Community />
      </main>
      <SiteFooter />
    </div>
  )
}
