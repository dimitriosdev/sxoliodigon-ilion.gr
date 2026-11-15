import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { LICENSES, SCHOOL_INFO } from '@/data/schoolData';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Ειδική Άδεια ΤΑΞΙ, ADR & Κάρτα Ψηφιακού Ταχογράφου στο Ίλιον',
  description:
    'Έκδοση και ανανέωση Ειδικής Άδειας Ε.Δ.Χ. (ΤΑΞΙ), επέκταση σε άλλο νομό, πιστοποιητικό ADR και κάρτα ψηφιακού ταχογράφου οδηγού στο Ίλιον.',
};

export default function EpaggelmatikesOverviewPage() {
  const services = LICENSES.filter((l) => l.category === 'professional');

  return (
    <div className="mx-auto max-w-6xl px-4 pt-12 pb-24 sm:px-6">
      {/* Header */}
      <Reveal>
        <div className="border-b border-white/10 pb-12">
          <span className="inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-medium text-amber-400">
            Επαγγελματικές Άδειες & Πιστοποιητικά
          </span>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Ειδική Άδεια ΤΑΞΙ, ADR & Ψηφιακός Ταχογράφος.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">
            Αναλαμβάνουμε αυθημερόν τα e-Παράβολα και τη διεκπεραίωση των φακέλων στην Περιφέρεια
            ώστε να μην χάνεις εργατοώρες.
          </p>
        </div>
      </Reveal>

      {/* Lukas-style Asymmetric 2-Column Layout */}
      <div className="mt-16 grid gap-12 lg:grid-cols-12">
        {/* Left Sticky Column */}
        <div className="lg:col-span-4">
          <div className="space-y-6 lg:sticky lg:top-28">
            <div>
              <p className="text-xs font-semibold tracking-widest text-amber-400 uppercase">
                5 Εξειδικευμένες Υπηρεσίες
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white">
                Χωρίς ουρές και χαμένα μεροκάματα.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Επίλεξε την υπηρεσία που χρειάζεσαι για να δεις ακριβώς ποια δικαιολογητικά
                χρειάζονται και ποια αναλαμβάνει εξ ολοκλήρου η σχολή μας.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#131316] p-5">
              <p className="text-xs text-zinc-400">Θέλεις να ετοιμάσουμε τα παράβολά σου;</p>
              <a
                href={SCHOOL_INFO.phoneHref}
                className="mt-3 block w-full rounded-xl bg-amber-500 py-3 text-center text-sm font-bold text-black transition hover:bg-amber-400"
              >
                Κάλεσε: {SCHOOL_INFO.phoneDisplay}
              </a>
              <a
                href={SCHOOL_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2.5 block w-full rounded-xl border border-white/15 py-2.5 text-center text-xs font-semibold text-white transition hover:border-white/35"
              >
                Στείλε μήνυμα στο WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Right Scrolling Column: The 5 Specific Services */}
        <div className="space-y-5 lg:col-span-8">
          {services.map((srv, idx) => (
            <Reveal key={srv.slug}>
              <Link
                href={`/epaggelmatikes-adeies/${srv.slug}`}
                className="group block rounded-2xl border border-white/10 bg-[#131316] p-7 transition hover:border-amber-500/50"
              >
                <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src={srv.image}
                    alt={srv.imageAlt}
                    fill
                    sizes="(min-width: 1152px) 664px, (min-width: 1024px) 60vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-sm font-bold text-amber-400">0{idx + 1}</span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
                    {srv.badge}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold text-white group-hover:text-amber-400 sm:text-2xl">
                  {srv.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{srv.subtitle}</p>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4 text-xs">
                  <div className="flex gap-4 text-zinc-500">
                    <span>Προϋπόθεση: {srv.specs.minAge}</span>
                    <span>•</span>
                    <span>Ισχύς: {srv.specs.validity}</span>
                  </div>
                  <span className="font-semibold text-amber-400">Δικαιολογητικά & Βήματα →</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
