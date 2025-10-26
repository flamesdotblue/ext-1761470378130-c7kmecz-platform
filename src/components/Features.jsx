import { Rocket, Star, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  {
    icon: Rocket,
    title: 'Fast by default',
    desc: 'Vite + React + Tailwind for an instant, modern dev experience.',
  },
  {
    icon: Star,
    title: 'Clean & minimal',
    desc: 'A crisp, corporate aesthetic with focus on clarity and function.',
  },
  {
    icon: Settings,
    title: 'Interactive cover',
    desc: 'A responsive 3D tile grid that ripples with your input.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-6xl px-4 py-20">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">Features</h2>
        <p className="mt-3 text-neutral-700">Thoughtfully crafted components to get you from hello world to wow.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="group rounded-xl border border-neutral-200 bg-white/70 p-6 shadow-sm ring-1 ring-transparent backdrop-blur-sm transition hover:shadow-md"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600">
              <item.icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div id="get-started" className="mt-16 flex items-center justify-center">
        <a href="#" className="rounded-md bg-red-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-red-500">Say Hello</a>
      </div>
    </section>
  );
}
