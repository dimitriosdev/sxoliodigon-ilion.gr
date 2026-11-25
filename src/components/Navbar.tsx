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

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={SCHOOL_INFO.phoneHref}
            aria-label={`Κλήση στο ${SCHOOL_INFO.phoneDisplay}`}
            className="flex min-h-11 min-w-11 items-center justify-center rounded-full bg-white px-3 py-2 text-xs font-semibold text-black transition hover:bg-amber-400 sm:min-w-0 sm:px-4 sm:text-sm"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4 sm:hidden"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="hidden sm:inline">{SCHOOL_INFO.phoneDisplay}</span>
          </a>
          <details className="relative lg:hidden">
            <summary
              aria-label="Μενού πλοήγησης"
              className="flex min-h-11 min-w-11 cursor-pointer list-none items-center justify-center rounded-full border border-white/10 text-zinc-300 transition hover:border-white/20 hover:text-white [&::-webkit-details-marker]:hidden"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="size-5"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </summary>
            <nav
              aria-label="Πλοήγηση κινητού"
              className="absolute top-full right-0 z-50 mt-2 w-64 rounded-2xl border border-white/10 bg-[#131316] p-2 text-sm text-zinc-300 shadow-2xl"
            >
              <Link
                href="/diplomata"
                className="flex min-h-11 items-center rounded-xl px-3 transition hover:bg-white/5 hover:text-white"
              >
                Άδειες οδήγησης
              </Link>
              <Link
                href="/epaggelmatikes-adeies"
                className="flex min-h-11 items-center rounded-xl px-3 transition hover:bg-white/5 hover:text-white"
              >
                Επαγγελματικές άδειες
              </Link>
              <Link
                href="/scholi"
                className="flex min-h-11 items-center rounded-xl px-3 transition hover:bg-white/5 hover:text-white"
              >
                Η σχολή μας
              </Link>
              <Link
                href="/epikoinonia"
                className="flex min-h-11 items-center rounded-xl px-3 transition hover:bg-white/5 hover:text-white"
              >
                Επικοινωνία
              </Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
