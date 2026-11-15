import type { Metadata } from 'next';
import Link from 'next/link';
import { Manrope } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { MobileActionBar } from '@/components/MobileActionBar';
import { SCHOOL_INFO } from '@/data/schoolData';

const manrope = Manrope({
  subsets: ['greek', 'latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Σχολή Οδηγών Ίλιον | Διπλώματα Αυτοκινήτου, Μηχανής, Ταξί & ADR',
    template: '%s | Σχολή Οδηγών Ίλιον',
  },
  description:
    'Σχολή οδηγών στο Ίλιον. Διπλώματα αυτοκινήτου (Β), μοτοσικλέτας (AM, A1, A2, A), φορτηγού/λεωφορείου (C, D), ειδική άδεια ΤΑΞΙ, ADR και κάρτα ψηφιακού ταχογράφου.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DrivingSchool',
    name: SCHOOL_INFO.name,
    description: SCHOOL_INFO.tagline,
    telephone: SCHOOL_INFO.phoneDisplay,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SCHOOL_INFO.address,
      addressLocality: 'Ίλιον',
      addressRegion: 'Αττική',
      addressCountry: 'GR',
    },
    areaServed: SCHOOL_INFO.neighborhoods,
    sameAs: [SCHOOL_INFO.facebookUrl],
  };

  return (
    <html lang="el" className={manrope.className}>
      <body className="min-h-screen pb-20 antialiased selection:bg-amber-500 selection:text-black md:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>

        {/* Lukas-style Editorial Footer with Oversized Wordmark */}
        <footer className="mt-24 border-t border-white/10 bg-[#080809] pt-16 pb-10">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-10 md:grid-cols-3">
              <div>
                <p className="text-xs tracking-widest text-amber-400 uppercase">Επικοινωνία</p>
                <p className="mt-3 text-lg font-semibold text-white">{SCHOOL_INFO.address}</p>
                <p className="mt-1 text-sm text-zinc-400">{SCHOOL_INFO.hours}</p>
                <a
                  href={SCHOOL_INFO.phoneHref}
                  className="mt-4 inline-block text-xl font-bold text-white hover:text-amber-400"
                >
                  {SCHOOL_INFO.phoneDisplay}
                </a>
              </div>

              <div>
                <p className="text-xs tracking-widest text-zinc-500 uppercase">Κατηγορίες</p>
                <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                  <li>
                    <Link href="/diplomata/b-autokinito" className="hover:text-white">
                      Δίπλωμα Αυτοκινήτου (Β)
                    </Link>
                  </li>
                  <li>
                    <Link href="/diplomata" className="hover:text-white">
                      Μοτοσικλέτες (AM, A1, A2, A)
                    </Link>
                  </li>
                  <li>
                    <Link href="/diplomata/c1-c-fortiga" className="hover:text-white">
                      Φορτηγά & Λεωφορεία (C, D)
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-xs tracking-widest text-zinc-500 uppercase">Επαγγελματικά</p>
                <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                  <li>
                    <Link
                      href="/epaggelmatikes-adeies/taxi-arxiki-xorigisi"
                      className="hover:text-white"
                    >
                      Ειδική Άδεια ΤΑΞΙ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/epaggelmatikes-adeies/adr-pistopoiitiko"
                      className="hover:text-white"
                    >
                      Πιστοποιητικό ADR
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/epaggelmatikes-adeies/karta-psifiakou-taxografou"
                      className="hover:text-white"
                    >
                      Κάρτα Ψηφιακού Ταχογράφου
                    </Link>
                  </li>
                  <li>
                    <a
                      href={SCHOOL_INFO.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:underline"
                    >
                      Facebook Σελίδα →
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16 overflow-hidden border-t border-white/10 pt-8 text-center">
              <p className="text-[8vw] leading-none font-extrabold tracking-[0.18em] text-white/[0.06] select-none">
                ΣΧΟΛΗ ΟΔΗΓΩΝ ΙΛΙΟΝ
              </p>
              <p className="mt-4 text-xs text-zinc-500">
                © {SCHOOL_INFO.name}. Με επιφύλαξη παντός δικαιώματος.
              </p>
            </div>
          </div>
        </footer>

        <MobileActionBar />
      </body>
    </html>
  );
}
