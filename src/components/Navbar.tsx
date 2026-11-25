// src/components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';
import { SCHOOL_INFO } from '@/data/schoolData';

export function Navbar() {
  return (
    <header className="border-b border-white/10 bg-[#0b0b0c]/95 lg:sticky lg:top-0 lg:z-40 lg:backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-2.5">
          <Image
            src="/images/traffic-road-logo.svg"
            alt=""
            width={48}
            height={48}
            className="shrink-0"
          />
          <span className="text-sm font-semibold tracking-tight text-white sm:text-base">
            {SCHOOL_INFO.name}
          </span>
        </Link>

        <nav
          aria-label="Κύρια πλοήγηση"
          className="hidden items-center gap-7 text-sm text-zinc-300 lg:flex"
        >
          <Link href="/diplomata" className="transition hover:text-white">
            Άδειες οδήγησης
          </Link>
          <Link href="/epaggelmatikes-adeies" className="transition hover:text-white">
            Επαγγελματικές άδειες
          </Link>
          <Link href="/scholi" className="transition hover:text-white">
            Η σχολή μας
          </Link>
          <Link href="/epikoinonia" className="transition hover:text-white">
            Επικοινωνία
          </Link>
        </nav>

        <a
          href={SCHOOL_INFO.phoneHref}
          className="flex min-h-11 shrink-0 items-center rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-amber-400 sm:text-sm"
        >
          {SCHOOL_INFO.phoneDisplay}
        </a>
      </div>
      <nav
        aria-label="Πλοήγηση κινητού"
        className="grid grid-cols-2 border-t border-white/10 px-4 py-1 text-center text-sm text-zinc-300 sm:grid-cols-4 lg:hidden"
      >
        <Link
          href="/diplomata"
          className="flex min-h-11 items-center justify-center hover:text-white"
        >
          Άδειες οδήγησης
        </Link>
        <Link
          href="/epaggelmatikes-adeies"
          className="flex min-h-11 items-center justify-center hover:text-white"
        >
          Επαγγελματικές άδειες
        </Link>
        <Link href="/scholi" className="flex min-h-11 items-center justify-center hover:text-white">
          Η σχολή μας
        </Link>
        <Link
          href="/epikoinonia"
          className="flex min-h-11 items-center justify-center hover:text-white"
        >
          Επικοινωνία
        </Link>
      </nav>
    </header>
  );
}
