import Image from 'next/image'
import { Coffee, MessageCircle, Link2 } from 'lucide-react'

const socials = [
  { icon: Coffee, href: 'https://ko-fi.com/error1', label: 'Ko-fi' },
  { icon: Link2, href: 'https://guns.lol/error_1', label: 'guns.lol' },
  {
    icon: MessageCircle,
    href: 'https://discord.gg/rWf2NJyvR5',
    label: 'Discord',
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6">
        <div className="flex items-center gap-2.5">
          <Image
            src="/nebula-logo.png"
            alt="Nebula Launcher logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="font-display font-bold tracking-tight">
            Nebula<span className="text-brand"> Launcher</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:border-brand/50 hover:text-brand"
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nebula Launcher. Not affiliated with
          Mojang or Microsoft.
        </p>
      </div>
    </footer>
  )
}
