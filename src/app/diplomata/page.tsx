import Link from 'next/link';
import type { Metadata } from 'next';
import { DRIVING_GROUPS } from '@/data/drivingCategories';
import { SCHOOL_INFO } from '@/data/schoolData';

export const metadata: Metadata = {
  title: 'Άδειες Οδήγησης & Π.Ε.Ι.',
  description:
    'Κατηγορίες αδειών οδήγησης για μοτοσικλέτες, αυτοκίνητα, φορτηγά και λεωφορεία, καθώς και Π.Ε.Ι. στο Ίλιον.',
};

const peiPages = [
  {
    slug: 'pei',
    title: 'Π.Ε.Ι. — Γενικές πληροφορίες',
    description: 'Αρχική χορήγηση και είδη πιστοποιητικού.',
  },
  {
    slug: 'pei-emporevmaton',
    title: 'Π.Ε.Ι. εμπορευμάτων',
    description: 'Για κατόχους άδειας C1, C1E, C ή CE.',
  },
  {
    slug: 'pei-epivaton',
    title: 'Π.Ε.Ι. επιβατών',
    description: 'Για κατόχους άδειας D1, D1E, D ή DE.',
  },
];

export default function DiplomataOverviewPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-12 pb-24 sm:px-6">
      <header className="border-b border-white/10 pb-12">
        <span className="inline-block rounded-full border border-white/15 bg-white/[0.03] px-3.5 py-1 text-xs text-zinc-300">
          Κατηγορίες αδειών & Π.Ε.Ι.
        </span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Άδειες οδήγησης
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">
          Βρες την κατηγορία για το όχημά σου και ενημερώσου για το Πιστοποιητικό Επαγγελματικής
          Ικανότητας. Οι κατηγορίες διαμορφώθηκαν με το Π.Δ. 51/2012.
        </p>
      </header>

      <div className="mt-16 space-y-16">
        {DRIVING_GROUPS.map((group, index) => (
          <section key={group.title} className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <span className="font-mono text-sm font-bold text-amber-400">0{index + 1}</span>
                <h2 className="mt-2 text-2xl font-bold text-white">{group.title}</h2>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
              {group.items.map((item) => (
                <Link
                  key={item.code}
                  href={`/diplomata/${item.slug}`}
                  className="group rounded-2xl border border-white/10 bg-[#131316] p-6 transition hover:border-amber-500/50"
                >
                  <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
                    {item.code}
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-white group-hover:text-amber-400">
                    Κατηγορία {item.code}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.description}</p>
                  <span className="mt-5 inline-block text-xs font-semibold text-amber-400">
                    Περισσότερα →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}
        <section className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="font-mono text-sm font-bold text-amber-400">05</span>
            <h2 className="mt-2 text-2xl font-bold text-white">
              Πιστοποιητικό Επαγγελματικής Ικανότητας
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              Π.Ε.Ι. για μεταφορά εμπορευμάτων ή επιβατών.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {peiPages.map((item) => (
              <Link
                key={item.slug}
                href={`/diplomata/${item.slug}`}
                className="group rounded-2xl border border-white/10 bg-[#131316] p-6 transition hover:border-amber-500/50"
              >
                <h3 className="text-lg font-bold text-white group-hover:text-amber-400">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.description}</p>
                <span className="mt-5 inline-block text-xs font-semibold text-amber-400">
                  Περισσότερα →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <div className="mt-20 rounded-2xl border border-amber-500/25 bg-amber-500/[0.06] p-8">
        <h2 className="text-xl font-bold text-white">Δεν είσαι σίγουρος ποια άδεια χρειάζεσαι;</h2>
        <p className="mt-2 text-sm text-zinc-300">
          Μίλησε μαζί μας για τις προϋποθέσεις και τα δικαιολογητικά.
        </p>
        <a
          href={SCHOOL_INFO.phoneHref}
          className="mt-5 inline-block rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-black hover:bg-amber-400"
        >
          Κλήση: {SCHOOL_INFO.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
