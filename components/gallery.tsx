import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const gallery = [
  { src: '/screens/home.png', alt: 'Home screen', span: 'sm:col-span-2 sm:row-span-2' },
  { src: '/screens/versions.png', alt: 'Mod loaders', span: '' },
  { src: '/screens/login.png', alt: 'Account login', span: '' },
  { src: '/screens/general.png', alt: 'Instance settings', span: '' },
  { src: '/screens/server.png', alt: 'Server hosting', span: '' },
]

export function Gallery() {
  return (
    <section id="gallery" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal className="mx-auto mb-14 max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
          Gallery
        </p>
        <h2 className="font-display text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          See Nebula in action
        </h2>
      </Reveal>

      <div className="grid auto-rows-[180px] grid-cols-1 gap-4 sm:grid-cols-4 sm:auto-rows-[150px]">
        {gallery.map((item, i) => (
          <Reveal
            key={item.src}
            delay={(i % 3) * 80}
            direction="scale"
            className={cn(item.span)}
          >
            <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card">
              <Image
                src={item.src || '/placeholder.svg'}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <span className="absolute bottom-3 left-4 translate-y-2 text-sm font-medium text-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {item.alt}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
