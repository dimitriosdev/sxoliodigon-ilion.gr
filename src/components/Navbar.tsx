// src/components/Navbar.tsx
import Link from 'next/link';
import { SCHOOL_INFO } from '@/data/schoolData';

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b0b0c]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500 font-bold text-black">
            ΣΟ
          </span>
          <span className="font-semibold tracking-tight text-white">{SCHOOL_INFO.name}</span>
        </Link>

        <nav
          aria-label="Κύρια πλοήγηση"
          className="hidden items-center gap-7 text-sm text-zinc-300 md:flex"
        >
          <Link href="/diplomata" className="transition hover:text-white">
            Αυτοκίνητο & Μηχανή
          </Link>
          <Link href="/epaggelmatikes-adeies" className="transition hover:text-white">
            Ταξί, ADR & Ταχογράφος
          </Link>
          <Link href="/epikoinonia" className="transition hover:text-white">
            Επικοινωνία
          </Link>
        </nav>

        <a
          href={SCHOOL_INFO.phoneHref}
          className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-amber-400 sm:text-sm"
        >
          {SCHOOL_INFO.phoneDisplay}
        </a>
      </div>
    </header>
  );
}
