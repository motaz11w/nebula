import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Showcase } from '@/components/showcase'
import { Features } from '@/components/features'
import { Gallery } from '@/components/gallery'
import { HowToUse } from '@/components/how-to-use'
import { DownloadCta } from '@/components/download-cta'
import { Community } from '@/components/community'
import { SiteFooter } from '@/components/site-footer'
import { HowToUseFab } from '@/components/how-to-use-fab'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Showcase />
        <Features />
        <Gallery />
        <HowToUse />
        <DownloadCta />
        <Community />
      </main>
      <SiteFooter />
      <HowToUseFab />
    </div>
  )
}
