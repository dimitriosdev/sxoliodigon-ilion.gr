import Link from 'next/link';
import Image from 'next/image';
import { LICENSES, SCHOOL_INFO } from '@/data/schoolData';
import { Reveal } from '@/components/Reveal';

export default function HomePage() {
  const proServices = LICENSES.filter((l) => l.category === 'professional');
  const car = LICENSES.find((item) => item.slug === 'b-autokinito');
  const moto = LICENSES.find((item) => item.slug === 'a-aperioristo');
  const heavy = LICENSES.find((item) => item.slug === 'c1-c-fortiga');
  if (!car || !moto || !heavy) throw new Error('Missing featured license data');

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-20 sm:px-6 md:pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-1.5 text-xs text-zinc-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Ίλιον & Δυτικά Προάστια • Εγγραφές Καθημερινά
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-6xl sm:leading-[1.08]">
              Βγάλε δίπλωμα οδήγησης με <span className="text-amber-400">σιγουριά</span> και μηδέν
              γραφειοκρατία.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              Σύγχρονα εκπαιδευτικά οχήματα, υπομονετικοί εκπαιδευτές και πλήρης διεκπεραίωση
              παραβόλων & δικαιολογητικών για αυτοκίνητο, μοτοσικλέτα, ΤΑΞΙ και ταχογράφο.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={SCHOOL_INFO.phoneHref}
                className="rounded-full bg-amber-500 px-7 py-3.5 text-sm font-bold text-black transition hover:bg-amber-400"
              >
                Κάλεσέ μας: {SCHOOL_INFO.phoneDisplay}
              </a>
              <Link
                href="/diplomata"
                className="rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/35"
              >
                Δες όλα τα διπλώματα →
              </Link>
            </div>
          </Reveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#131316] lg:col-span-5">
            <Image
              src="/images/hero-driving-school.jpg"
              alt="Εκπαιδευτικό αυτοκίνητο σε δρόμο της Αθήνας"
              fill
              priority
              sizes="(min-width: 1152px) 444px, (min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. NEIGHBORHOOD & SERVICE MARQUEE */}
      <div className="overflow-hidden border-y border-white/10 bg-[#111114] py-4">
        <div className="animate-marquee gap-10 text-xs font-semibold tracking-widest text-zinc-400 uppercase">
          {[...Array(2)].map((_, loopIdx) => (
            <div key={loopIdx} className="flex items-center gap-10 pr-10">
              <span>Ίλιον</span>
              <span>•</span>
              <span>Πετρούπολη</span>
              <span>•</span>
              <span>Άγιοι Ανάργυροι</span>
              <span>•</span>
              <span>Καματερό</span>
              <span>•</span>
              <span>Περιστέρι</span>
              <span>•</span>
              <span>Αυτοκίνητο & Μοτοσικλέτα</span>
              <span>•</span>
              <span>Ειδική Άδεια ΤΑΞΙ</span>
              <span>•</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. LUKAS-STYLE ASYMMETRIC STICKY SERVICES GRID */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Sticky Header */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-semibold tracking-widest text-amber-400 uppercase">
                Κατηγορίες Εκπαίδευσης
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Όλες οι άδειες οδήγησης σε ένα σημείο.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                Επίλεξε την κατηγορία που σε ενδιαφέρει για να δεις αναλυτικά τα δικαιολογητικά, τα
                όρια ηλικίας και τα βήματα απόκτησης.
              </p>
              <Link
                href="/epikoinonia"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-amber-500 underline-offset-4 hover:text-amber-400"
              >
                Έλα από τη σχολή στο Ίλιον →
              </Link>
            </div>
          </div>

          {/* Right Scrolling Numbered Cards */}
          <div className="space-y-6 lg:col-span-7">
            <Reveal>
              <Link
                href="/diplomata/b-autokinito"
                className="group block rounded-2xl border border-white/10 bg-[#131316] p-7 transition hover:border-amber-500/50"
              >
                <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src={car.image}
                    alt={car.imageAlt}
                    fill
                    sizes="(min-width: 1152px) 570px, (min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-amber-400">01</span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
                    Χειροκίνητο & Αυτόματο
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-bold text-white group-hover:text-amber-400">
                  Δίπλωμα Αυτοκινήτου (Κατηγορία Β)
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  21 ώρες θεωρίας & 25 ώρες πρακτικής οδήγησης. Ετοιμάζουμε τα e-Παράβολα και τα
                  ιατρικά σου.
                </p>
              </Link>
            </Reveal>

            <Reveal>
              <Link
                href="/diplomata"
                className="group block rounded-2xl border border-white/10 bg-[#131316] p-7 transition hover:border-amber-500/50"
              >
                <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src={moto.image}
                    alt={moto.imageAlt}
                    fill
                    sizes="(min-width: 1152px) 570px, (min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-amber-400">02</span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
                    AM • A1 • A2 • A
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-bold text-white group-hover:text-amber-400">
                  Διπλώματα Μοτοσικλέτας (50cc έως Απεριόριστο)
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  Από 16 ετών (AM) έως απεριόριστα κυβικά (A). Ειδικές διαδικασίες επέκτασης χωρίς
                  θεωρία για κατόχους Β ή Α1/Α2.
                </p>
              </Link>
            </Reveal>

            <Reveal>
              <Link
                href="/diplomata"
                className="group block rounded-2xl border border-white/10 bg-[#131316] p-7 transition hover:border-amber-500/50"
              >
                <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src={heavy.image}
                    alt={heavy.imageAlt}
                    fill
                    sizes="(min-width: 1152px) 570px, (min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-amber-400">03</span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
                    C1 • C • C+E • D1 • D • D+E
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-bold text-white group-hover:text-amber-400">
                  Φορτηγά, Νταλίκες & Λεωφορεία (+ ΠΕΙ)
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  Πλήρης επαγγελματική κατάρτιση για οδήγηση βαρέων οχημάτων και έκδοση ΠΕΙ
                  Εμπορευμάτων & Επιβατών.
                </p>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. PROFESSIONAL SERVICES */}
      <section className="border-t border-white/10 bg-[#0e0e11] py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold tracking-widest text-amber-400 uppercase">
                Επαγγελματικές Άδειες & Πιστοποιητικά
              </p>
              <h2 className="mt-2 text-3xl font-bold text-white">ΤΑΞΙ & Ψηφιακός Ταχογράφος</h2>
            </div>
            <Link
              href="/epaggelmatikes-adeies"
              className="text-sm font-semibold text-amber-400 hover:underline"
            >
              Όλες οι υπηρεσίες →
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {proServices.map((srv) => (
              <Link
                key={srv.slug}
                href={`/epaggelmatikes-adeies/${srv.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-[#131316] p-6 transition hover:border-amber-500/40"
              >
                <div>
                  <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-xl border border-white/10">
                    <Image
                      src={srv.image}
                      alt={srv.imageAlt}
                      fill
                      sizes="(min-width: 1152px) 306px, (min-width: 1024px) 28vw, (min-width: 640px) 45vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <span className="inline-block rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
                    {srv.badge}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-white">{srv.shortTitle}</h3>
                  <p className="mt-2 text-sm text-zinc-400">{srv.subtitle}</p>
                </div>
                <span className="mt-6 text-xs font-semibold text-amber-400">
                  Δικαιολογητικά & Βήματα →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-24 sm:px-6 lg:grid-cols-2">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#131316]">
          <Image
            src="/images/school-interior-team.jpg"
            alt="Χώρος υποδοχής και αίθουσα θεωρητικών μαθημάτων"
            fill
            sizes="(min-width: 1152px) 532px, (min-width: 1024px) 46vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-xs font-semibold tracking-widest text-amber-400 uppercase">
            Σχολή Οδηγών Ίλιον
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Η Σχολή μας</h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400">
            Είμαστε δίπλα σου σε κάθε βήμα, από την εγγραφή μέχρι την απόκτηση του διπλώματος.
          </p>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-zinc-300">
            <li>Σύγχρονα εκπαιδευτικά οχήματα για την πρακτική σου εξάσκηση.</li>
            <li>Μαθήματα οδήγησης στο Ίλιον με υπομονετικούς εκπαιδευτές.</li>
            <li>Καθοδήγηση για δικαιολογητικά και διαδικασίες σε κάθε στάδιο.</li>
          </ul>
        </div>
      </section>

      {/* 5. LOCAL Q&A ACCORDION (SEO & LLM GOLDMINE) */}
      <section className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-white">Συχνές Ερωτήσεις</h2>
        <div className="mt-10 space-y-4">
          {[
            {
              q: 'Τι χρειάζεται να φέρω την πρώτη μέρα για εγγραφή στη σχολή;',
              a: 'Τα δικαιολογητικά εξαρτώνται από την κατηγορία και την άδεια που ήδη κατέχεις. Επικοινώνησε μαζί μας για να σε καθοδηγήσουμε σχετικά με την ηλεκτρονική αίτηση, το myPhoto και τις ιατρικές εξετάσεις.',
            },
            {
              q: 'Αναλαμβάνετε ανανέωση ειδικής άδειας ΤΑΞΙ ή κάρτας ταχογράφου χωρίς να χάσω μεροκάματο;',
              a: 'Επικοινώνησε μαζί μας για να ελέγξουμε τα δικαιολογητικά και τη διαδικασία για την περίπτωσή σου.',
            },
            {
              q: 'Πού βρίσκεται η σχολή οδηγών και ποιες περιοχές εξυπηρετεί;',
              a: 'Η έδρα μας βρίσκεται στο Ίλιον και εξυπηρετούμε καθημερινά μαθητές από Ίλιον, Πετρούπολη, Αγίους Αναργύρους, Καματερό και Περιστέρι.',
            },
          ].map((item, idx) => (
            <details
              key={idx}
              className="group rounded-2xl border border-white/10 bg-[#131316] p-6"
            >
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-white">
                <span>{item.q}</span>
                <span className="ml-4 text-amber-400 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
