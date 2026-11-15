import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { LICENSES, SCHOOL_INFO } from '@/data/schoolData';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Διπλώματα Αυτοκινήτου, Μοτοσικλέτας & Βαρέων Οχημάτων',
  description:
    'Όλες οι κατηγορίες διπλωμάτων οδήγησης στο Ίλιον: Μοτοσικλέτες (AM, A1, A2, A), Αυτοκίνητο (B, B+E), Φορτηγά (C1, C, C+E) και Λεωφορεία (D1, D, D+E).',
};

const SECTIONS = [
  {
    key: 'car',
    num: '01',
    title: 'Αυτοκίνητο & Ρυμουλκούμενα',
    desc: 'Εκπαίδευση σε χειροκίνητο ή αυτόματο αυτοκίνητο και επέκταση για τρέιλερ/τροχόσπιτα.',
  },
  {
    key: 'moto',
    num: '02',
    title: 'Μοτοσικλέτες & Μοτοποδήλατα',
    desc: 'Από 16 ετών (50cc) έως απεριόριστο κυβισμό, με ειδικά πακέτα επέκτασης για κατόχους Β.',
  },
  {
    key: 'heavy',
    num: '03',
    title: 'Φορτηγά, Νταλίκες & Λεωφορεία',
    desc: 'Επαγγελματικές κατηγορίες C & D με πλήρη προετοιμασία για ΠΕΙ Εμπορευμάτων & Επιβατών.',
  },
] as const;

export default function DiplomataOverviewPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-12 pb-24 sm:px-6">
      {/* Header */}
      <Reveal>
        <div className="border-b border-white/10 pb-12">
          <span className="inline-block rounded-full border border-white/15 bg-white/[0.03] px-3.5 py-1 text-xs text-zinc-300">
            Όλες οι Κατηγορίες Αδειών
          </span>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Διπλώματα Αυτοκινήτου, Μηχανής & Επαγγελματικά.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">
            Επίλεξε την κατηγορία που σε ενδιαφέρει για να δεις αναλυτικά τα δικαιολογητικά, τις
            ώρες μαθημάτων και τη διαδικασία βήμα-βήμα.
          </p>
        </div>
      </Reveal>

      {/* Grouped Sections */}
      <div className="mt-16 space-y-20">
        {SECTIONS.map((sec) => {
          const items = LICENSES.filter((l) => l.category === sec.key);
          return (
            <section key={sec.key} className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-28">
                  <span className="font-mono text-sm font-bold text-amber-400">{sec.num}</span>
                  <h2 className="mt-2 text-2xl font-bold text-white">{sec.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{sec.desc}</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
                {items.map((item) => (
                  <Reveal key={item.slug} className="h-full">
                    <Link
                      href={`/diplomata/${item.slug}`}
                      className="group flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#131316] p-6 transition hover:border-amber-500/50"
                    >
                      <div>
                        <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-xl border border-white/10">
                          <Image
                            src={item.image}
                            alt={item.imageAlt}
                            fill
                            sizes="(min-width: 1152px) 342px, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                          />
                        </div>
                        <span className="inline-block rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
                          {item.badge}
                        </span>
                        <h3 className="mt-4 text-xl font-bold text-white group-hover:text-amber-400">
                          {item.shortTitle}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                          {item.subtitle}
                        </p>
                      </div>

                      <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4 text-xs">
                        <span className="text-zinc-500">Ηλικία: {item.specs.minAge}</span>
                        <span className="font-semibold text-amber-400">Δικαιολογητικά →</span>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Bottom CTA Banner */}
      <div className="mt-20 rounded-2xl border border-amber-500/25 bg-amber-500/[0.06] p-8 sm:flex sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">
            Δεν είσαι σίγουρος ποιο δίπλωμα χρειάζεσαι;
          </h2>
          <p className="mt-1 text-sm text-zinc-300">
            Κάλεσέ μας να σου πούμε ακριβώς τι ισχύει ανάλογα με την ηλικία και το υπάρχον δίπλωμά
            σου.
          </p>
        </div>
        <a
          href={SCHOOL_INFO.phoneHref}
          className="mt-5 inline-block shrink-0 rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-black hover:bg-amber-400 sm:mt-0"
        >
          Κλήση: {SCHOOL_INFO.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
