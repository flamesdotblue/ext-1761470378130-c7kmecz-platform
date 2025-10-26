export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-neutral-600 sm:flex-row">
        <p>© {new Date().getFullYear()} Hello World. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#privacy" className="hover:text-neutral-900 transition-colors">Privacy</a>
          <a href="#terms" className="hover:text-neutral-900 transition-colors">Terms</a>
          <a href="#contact" className="hover:text-neutral-900 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
