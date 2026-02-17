'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: '/shop', label: 'Shop' },
    { href: '/guides', label: 'Style Guides' },
    { href: '/blog', label: 'Blog' },
    { href: '/compare/nordstrom-vs-asos', label: 'Compare' },
    { href: '/style-quiz', label: 'Style Quiz' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-display font-bold text-xl text-gray-900 tracking-tight">
              Style<span className="text-blush-500">Me</span>Daily
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <Link key={l.href} href={l.href} className="px-3.5 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-all">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/style-quiz" className="hidden sm:block btn-primary text-sm !px-4 !py-2">Take Style Quiz</Link>
            <button onClick={() => setOpen(!open)} className="md:hidden text-gray-400 hover:text-gray-900 p-2 text-xl">{open ? '✕' : '☰'}</button>
          </div>
        </div>

        {open && (
          <nav className="md:hidden pb-4 pt-2 animate-fade-in">
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-4 py-3 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg">
                {l.label}
              </Link>
            ))}
            <Link href="/style-quiz" className="block mx-4 mt-3 btn-primary text-sm text-center">Take Style Quiz</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
