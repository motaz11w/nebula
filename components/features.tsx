import {
  Boxes,
  Zap,
  ShieldCheck,
  Server,
  Palette,
  RefreshCw,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'

const features = [
  {
    icon: Boxes,
    title: 'Every mod loader',
    description:
      'Forge, Fabric, Quilt, NeoForged, OptiFine and LabyMod — installed and managed automatically.',
  },
  {
    icon: Zap,
    title: 'Blazing fast',
    description:
      'A lightweight, native-feeling app that boots instantly and launches the game without the wait.',
  },
  {
    icon: ShieldCheck,
    title: 'Flexible accounts',
    description:
      'Log in with Microsoft for the full online experience, or hop in with an offline account.',
  },
  {
    icon: Server,
    title: 'Built-in server hosting',
    description:
      'Create and run your own Minecraft server with custom MOTD, port and player limits.',
  },
  {
    icon: Palette,
    title: 'Beautiful by default',
    description:
      'A modern dark interface with per-instance appearance settings you can make your own.',
  },
  {
    icon: RefreshCw,
    title: 'Always up to date',
    description:
      'New Minecraft versions and loader releases appear the moment they drop — no hunting.',
  },
]

export function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal className="mx-auto mb-14 max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
          Features
        </p>
        <h2 className="font-display text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          Powerful, without the clutter
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Everything you need to play, mod and host Minecraft — thoughtfully
          designed and ready out of the box.
        </p>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <Reveal key={feature.title} delay={(i % 3) * 90}>
            <div className="group h-full rounded-2xl border border-border bg-card/70 p-6 transition-colors duration-300 hover:border-brand/50">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/15 text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-semibold">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
