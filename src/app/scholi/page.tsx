import type { Metadata } from 'next';
import Link from 'next/link';
import { SCHOOL_INFO } from '@/data/schoolData';

export const metadata: Metadata = {
  title: 'Η Σχολή μας',
  description:
    'Γνώρισε την Πέγκυ Χριστοθανοπούλου και τον Κωνσταντίνο Ρουσελιωτάκη, τους ανθρώπους της Σχολής Οδηγών Ίλιον.',
};

const values = [
  {
    title: 'Μαθαίνουμε με τον δικό σου ρυθμό',
    description:
      'Κάθε μαθητής είναι διαφορετικός. Με υπομονή και προσωπική καθοδήγηση, δουλεύουμε μαζί όσα χρειάζεσαι.',
  },
  {
    title: 'Ασφάλεια σε κάθε διαδρομή',
    description:
      'Στόχος μας δεν είναι μόνο το δίπλωμα, αλλά να αποκτήσεις γνώσεις και υπεύθυνη συμπεριφορά στον δρόμο.',
  },
  {
    title: 'Ξεκάθαρη καθοδήγηση',
    description:
      'Από τα δικαιολογητικά μέχρι τις εξετάσεις, είμαστε δίπλα σου για να ξέρεις ποιο είναι το επόμενο βήμα.',
  },
  {
    title: 'Ένα φιλικό περιβάλλον',
    description:
      'Μπορείς να ρωτήσεις, να εκφράσεις τις απορίες σου και να μάθεις σε ένα υποστηρικτικό περιβάλλον.',
  },
  {
    title: 'Μαθήματα που χωρούν στο πρόγραμμά σου',
    description:
      'Συζητάμε μαζί τις ανάγκες και τη διαθεσιμότητά σου για να οργανώσουμε τα μαθήματά σου.',
  },
];

export default function SchoolPage() {
  return (
    <article>
      <header className="mx-auto max-w-6xl px-4 pt-14 pb-20 sm:px-6 md:pt-24">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="inline-flex rounded-full border border-white/15 bg-white/[0.03] px-4 py-1.5 text-xs text-zinc-300">
              Η σχολή μας · Ίλιον
            </p>
            <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-6xl sm:leading-[1.08]">
              Κάθε διαδρομή ξεκινά με <span className="text-amber-400">εμπιστοσύνη.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              Από τις αρχές της δεκαετίας του 2000, η Σχολή Οδηγών Ίλιον βρίσκεται δίπλα σε
              ανθρώπους που θέλουν να μάθουν να οδηγούν με ασφάλεια και σιγουριά.
            </p>
          </div>
          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.06] p-7 lg:col-span-4">
            <p className="text-xs font-semibold tracking-widest text-amber-400 uppercase">
              Η φιλοσοφία μας
            </p>
            <p className="mt-4 text-xl leading-relaxed font-semibold text-white">
              Προσωπική εκπαίδευση, ανθρώπινη προσέγγιση και σεβασμός στον δρόμο.
            </p>
          </div>
        </div>
      </header>

      <section className="border-y border-white/10 bg-[#0e0e11] py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-widest text-amber-400 uppercase">
              Οι άνθρωποί μας
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Μαζί σου, από το πρώτο βήμα.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-zinc-400">
              Η Πέγκυ και ο Κωνσταντίνος είναι οι ιδιοκτήτες και εκπαιδευτές της σχολής. Είναι εδώ
              για να σε γνωρίσουν, να ακούσουν τις ανάγκες σου και να σε καθοδηγήσουν σε κάθε
              στάδιο.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            <div className="flex min-h-44 flex-col justify-end rounded-2xl border border-white/10 bg-[#131316] p-7">
              <p className="text-xs font-semibold tracking-widest text-amber-400 uppercase">
                Ιδιοκτήτρια & εκπαιδεύτρια
              </p>
              <h3 className="mt-3 text-xl font-bold break-words text-white">
                Χριστοθανοπούλου Πέγκυ
              </h3>
            </div>
            <div className="flex min-h-44 flex-col justify-end rounded-2xl border border-white/10 bg-[#131316] p-7">
              <p className="text-xs font-semibold tracking-widest text-amber-400 uppercase">
                Ιδιοκτήτης & εκπαιδευτής
              </p>
              <h3 className="mt-3 text-xl font-bold break-words text-white">
                Ρουσελιωτάκης Κωνσταντίνος
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-semibold tracking-widest text-amber-400 uppercase">
                Οι αξίες μας
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ο τρόπος που μαθαίνουμε μαζί.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                Θέλουμε η εκπαίδευση να σε προετοιμάσει για την οδήγηση και να σου δώσει σιγουριά σε
                κάθε βήμα.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="rounded-2xl border border-white/10 bg-[#131316] p-6"
              >
                <span className="font-mono text-sm text-amber-400">0{index + 1}</span>
                <h3 className="mt-4 text-lg font-bold text-white">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="grid gap-8 rounded-2xl border border-white/10 bg-[#131316] p-7 sm:p-10 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold tracking-widest text-amber-400 uppercase">
              Οι μαθητές μας
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white">Η εμπειρία σου έχει σημασία.</h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300">
              Η ικανοποίηση των μαθητών μας είναι σημαντική για εμάς. Θέλουμε κάθε άνθρωπος που μας
              εμπιστεύεται να νιώθει ότι τον ακούμε και τον στηρίζουμε.
            </p>
            <a
              href={SCHOOL_INFO.facebookReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-sm font-semibold text-amber-400 hover:underline"
            >
              Δες τις αξιολογήσεις μας στο Facebook ↗
            </a>
          </div>
          <div className="border-t border-white/10 pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-8">
            <h2 className="text-2xl font-bold text-white">Έλα να γνωριστούμε.</h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300">
              Είτε ξεκινάς τώρα είτε αναζητάς μια επαγγελματική άδεια, είμαστε εδώ για να
              συζητήσουμε τι χρειάζεσαι.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={SCHOOL_INFO.phoneHref}
                className="rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-black hover:bg-amber-400"
              >
                Κάλεσέ μας
              </a>
              <Link
                href="/epikoinonia"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:border-white/35"
              >
                Επικοινωνία & τοποθεσία
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
