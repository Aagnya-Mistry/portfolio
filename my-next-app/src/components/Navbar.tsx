'use client';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact Me', href: '#contact' },
];

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-end items-center h-16 px-4">
        <ul className="flex gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-white hover:text-pink-400 transition-colors pb-1 border-b-2 border-transparent hover:border-pink-400"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}