import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

type Shot = {
  eyebrow: string
  title: string
  description: string
  image: string
  alt: string
}

const shots: Shot[] = [
  {
    eyebrow: 'Home',
    title: 'Everything in one clean dashboard',
    description:
      'Browse the latest Minecraft news, jump straight into your instances, and create a new game in seconds. A calm, organized home screen that keeps your whole setup one click away.',
    image: '/screens/home.png',
    alt: 'Nebula Launcher home screen with news feed and current instances',
  },
  {
    eyebrow: 'Versions & Mod Loaders',
    title: 'Any mod loader, one click away',
    description:
      'Forge, Fabric, Quilt, NeoForged, OptiFine or LabyMod — switch loaders and Minecraft versions instantly. Nebula downloads and configures everything for you, no manual setup required.',
    image: '/screens/versions.png',
    alt: 'Mod loader selection screen showing Forge, Fabric, Quilt, NeoForged, OptiFine and LabyMod',
  },
  {
    eyebrow: 'Accounts',
    title: 'Microsoft or offline — your choice',
    description:
      'Sign in with your Microsoft account for full online features and friends, or play instantly in offline mode. Switching between accounts takes a single tap.',
    image: '/screens/login.png',
    alt: 'Nebula Launcher account login screen with Microsoft and offline options',
  },
  {
    eyebrow: 'Instance Settings',
    title: 'Fine-tune every profile',
    description:
      'Rename profiles, hide the launcher after start, tweak quick-launch behavior and manage authentication per instance. Powerful controls that stay out of your way until you need them.',
    image: '/screens/general.png',
    alt: 'Instance general settings with profile name and quick launch options',
  },
  {
    eyebrow: 'Server Hosting',
    title: 'Spin up your own server',
    description:
      'Launch a dedicated Minecraft server right from Nebula. Set the MOTD, port and max players, create fresh worlds and watch the live server log — all without leaving the launcher.',
    image: '/screens/server.png',
    alt: 'Launch server screen with server settings and world creation',
  },
]

export function Showcase() {
  return (
    <section id="showcase" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal className="mx-auto mb-16 max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
          A closer look
        </p>
        <h2 className="font-display text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Built for players who want more
        </h2>
      </Reveal>

      <div className="flex flex-col gap-24 md:gap-32">
        {shots.map((shot, i) => {
          const reversed = i % 2 === 1
          return (
            <div
              key={shot.image}
              className="grid items-center gap-8 md:grid-cols-2 md:gap-14"
            >
              <Reveal
                direction={reversed ? 'left' : 'right'}
                className={cn(reversed && 'md:order-2')}
              >
                <div className="max-w-md">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--accent-cyan)]">
                    {shot.eyebrow}
                  </p>
                  <h3 className="font-display text-2xl font-bold leading-tight tracking-tight text-balance sm:text-3xl">
                    {shot.title}
                  </h3>
                  <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                    {shot.description}
                  </p>
                </div>
              </Reveal>

              <Reveal
                direction={reversed ? 'right' : 'left'}
                delay={120}
                className={cn(reversed && 'md:order-1')}
              >
                <div className="group relative">
                  <div
                    aria-hidden
                    className="absolute -inset-4 rounded-3xl bg-brand/20 opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-90"
                  />
                  <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/40 transition-transform duration-500 group-hover:-translate-y-1.5">
                    <Image
                      src={shot.image || '/placeholder.svg'}
                      alt={shot.alt}
                      width={1280}
                      height={720}
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          )
        })}
      </div>
    </section>
  )
}
