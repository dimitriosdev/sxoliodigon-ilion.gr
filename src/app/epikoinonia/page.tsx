import type { Metadata } from 'next';
import Image from 'next/image';
import { SCHOOL_INFO } from '@/data/schoolData';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Επικοινωνία & Τοποθεσία στο Ίλιον',
  description:
    'Επικοινωνήστε με τη Σχολή Οδηγών στο Ίλιον. Διεύθυνση, ωράριο λειτουργίας, τηλέφωνο και χάρτης πρόσβασης.',
};

export default function EpikoinoniaPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-12 pb-24 sm:px-6">
      <Reveal>
        <div className="border-b border-white/10 pb-12">
          <span className="inline-block rounded-full border border-white/15 bg-white/[0.03] px-3.5 py-1 text-xs text-zinc-300">
            Ίλιον, Αττική
          </span>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Έλα να γνωριστούμε από κοντά.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">
            Πέρασε από τη σχολή μας στο Ίλιον χωρίς ραντεβού ή κάλεσέ μας για να λύσουμε κάθε απορία
            σχετικά με το δίπλωμα και το κόστος.
          </p>
        </div>
      </Reveal>

      <div className="relative mt-14 aspect-[21/9] overflow-hidden rounded-2xl border border-white/10 bg-[#131316]">
        <Image
          src="/images/school-interior-team.jpg"
          alt="Χώρος υποδοχής και αίθουσα θεωρητικών μαθημάτων"
          fill
          sizes="(min-width: 1152px) 1104px, 100vw"
          className="object-cover"
        />
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-12">
        {/* Left Column: Direct Contact Cards */}
        <div className="space-y-5 lg:col-span-5">
          <div className="rounded-2xl border border-white/10 bg-[#131316] p-6">
            <p className="text-xs font-semibold tracking-widest text-amber-400 uppercase">
              Τηλέφωνα Επικοινωνίας
            </p>
            <div className="mt-4 space-y-3">
              <a
                href={SCHOOL_INFO.phoneHref}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-amber-500/50"
              >
                <div>
                  <p className="text-xs text-zinc-500">Σταθερό Σχολής</p>
                  <p className="text-lg font-bold text-white">{SCHOOL_INFO.phoneDisplay}</p>
                </div>
                <span className="rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-black">
                  Κλήση
                </span>
              </a>

              <a
                href={SCHOOL_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-emerald-500/50"
              >
                <div>
                  <p className="text-xs text-zinc-500">Κινητό / WhatsApp</p>
                  <p className="text-lg font-bold text-white">{SCHOOL_INFO.mobileDisplay}</p>
                </div>
                <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                  Μήνυμα
                </span>
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#131316] p-6">
            <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
              Διεύθυνση & Ωράριο
            </p>
            <p className="mt-3 text-lg font-bold text-white">{SCHOOL_INFO.address}</p>
            <p className="mt-2 text-sm text-zinc-400">{SCHOOL_INFO.hours}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {SCHOOL_INFO.neighborhoods.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400"
                >
                  {area}
                </span>
              ))}
            </div>

            <div className="mt-6 border-t border-white/10 pt-5">
              <a
                href={SCHOOL_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:underline"
              >
                Ακολούθησέ μας στο Facebook (sxoli.odigon.ilion) →
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Lightweight Lazy-Loaded Google Map */}
        <div className="lg:col-span-7">
          <div className="h-[420px] overflow-hidden rounded-2xl border border-white/10 bg-[#131316] lg:h-full lg:min-h-[460px]">
            <iframe
              title="Χάρτης Σχολής Οδηγών Ίλιον"
              src="https://www.google.com/maps?q=38.0255425,23.7028755&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 contrast-90 grayscale invert"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
