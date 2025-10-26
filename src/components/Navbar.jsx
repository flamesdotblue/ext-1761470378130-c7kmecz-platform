import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <Rocket className="h-5 w-5 text-red-500" />
          <span>Hello World</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-neutral-600 md:flex">
          <a className="hover:text-neutral-900 transition-colors" href="#features">Features</a>
          <a className="hover:text-neutral-900 transition-colors" href="#about">About</a>
          <a className="hover:text-neutral-900 transition-colors" href="#contact">Contact</a>
        </nav>
        <a href="#get-started" className="rounded-md bg-neutral-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-neutral-800 transition-colors">Get Started</a>
      </div>
    </header>
  );
}
