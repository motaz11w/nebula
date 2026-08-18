import Image from 'next/image'
import { Coffee, MessageCircle, Link2, ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const links = [
  {
    title: 'Support on Ko-fi',
    handle: 'ko-fi.com/error1',
    description: 'Buy me a coffee and help keep Nebula free and evolving.',
    href: 'https://ko-fi.com/error1',
    image: '/links/kofi.png',
    icon: Coffee,
    accent: 'text-[#ff5e5b]',
  },
  {
    title: 'My links',
    handle: 'guns.lol/error_',
    description: 'Find all my profiles, socials and projects in one place.',
    href: 'https://guns.lol/error_1',
    image: '/links/gunslol.png',
    icon: Link2,
    accent: 'text-[#a78bfa]',
  },
  {
    title: 'Join the Discord',
    handle: 'https://discord.gg/ZEHP4hfjJ',
    description: 'Chat with the community, get help and share your setups.',
    href: 'https://discord.gg/ZEHP4hfjJ',
    image: '/links/discord.png',
    icon: MessageCircle,
    accent: 'text-[#7289da]',
  },
]

export function Community() {
  return (
    <section id="community" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal className="mx-auto mb-14 max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
          Community
        </p>
        <h2 className="font-display text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Come hang out with us
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Support the project, follow along and join the conversation.
        </p>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
        {links.map((link, i) => (
          <Reveal key={link.href} delay={i * 100}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/50"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={link.image || '/placeholder.svg'}
                  alt={link.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <div className="absolute bottom-3 left-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background/80 backdrop-blur">
                  <link.icon className={`h-5 w-5 ${link.accent}`} />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold">
                    {link.title}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                </div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {link.description}
                </p>
                <span className="mt-4 font-mono text-sm text-brand">
                  {link.handle}
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
