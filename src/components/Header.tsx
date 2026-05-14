const nav = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Connect" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#" className="font-display text-lg font-semibold tracking-tight text-white">
          Taylor Aukward
        </a>
        <nav className="flex items-center gap-1 text-sm text-zinc-400">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-full px-3 py-1.5 transition hover:bg-white/5 hover:text-white focus-visible:focus-ring"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
