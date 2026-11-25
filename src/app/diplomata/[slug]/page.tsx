import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { INFORMATION_NOTICE, LICENSES, PRICING_CONSULTATION, SCHOOL_INFO } from '@/data/schoolData';
import { ADDITIONAL_DRIVING_PAGES, DRIVING_GROUPS } from '@/data/drivingCategories';
import { DocumentChecklist } from '@/components/DocumentChecklist';
import { IllustrativeImageLabel } from '@/components/IllustrativeImageLabel';

export function generateStaticParams() {
  return [
    ...LICENSES.filter((l) => l.category !== 'professional'),
    ...ADDITIONAL_DRIVING_PAGES,
  ].map((l) => ({
    slug: l.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const additional = ADDITIONAL_DRIVING_PAGES.find((page) => page.slug === slug);
  if (additional) return { title: additional.title, description: additional.description };
  const item = LICENSES.find((l) => l.category !== 'professional' && l.slug === slug);
  if (!item) return {};
  return {
    title: `${item.title} – Δικαιολογητικά & Κόστος`,
    description: item.subtitle,
  };
}

export default async function LicenseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const additional = ADDITIONAL_DRIVING_PAGES.find((page) => page.slug === slug);
  if (additional) {
    const imageSlug =
      slug === 'pei-emporevmaton' ? 'c-fortigo' : slug === 'pei-epivaton' ? 'd-leoforeio' : slug;
    const imageGroup = DRIVING_GROUPS.find((group) =>
      group.items.some((item) => item.slug === imageSlug),
    );
    return (
      <article className="mx-auto max-w-5xl px-4 pt-12 pb-20 sm:px-6">
        <nav aria-label="Διαδρομή" className="mb-6 text-xs text-zinc-500">
          <Link href="/diplomata" className="hover:text-amber-400">
            ← Άδειες οδήγησης
          </Link>
        </nav>
        <header className="border-b border-white/10 pb-10">
          <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs text-amber-400">
            Άδειες οδήγησης & Π.Ε.Ι.
          </span>
          <h1 className="mt-5 text-3xl font-bold text-white sm:text-5xl">{additional.title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-300">
            {additional.description}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300">
            {PRICING_CONSULTATION}
          </p>
        </header>
        {imageGroup && (
          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-[#131316]">
            <Image
              src={imageGroup.image}
              alt={imageGroup.imageAlt}
              fill
              sizes="(min-width: 1024px) 960px, 100vw"
              className="object-cover"
            />
            <IllustrativeImageLabel />
          </div>
        )}
        <section className="mt-10 rounded-2xl border border-white/10 bg-[#131316] p-7">
          <h2 className="text-xl font-bold text-white">Τι χρειάζεται να γνωρίζεις</h2>
          {additional.details.map((detail) => (
            <p key={detail} className="mt-4 leading-relaxed text-zinc-300">
              {detail}
            </p>
          ))}
          {additional.electronicApplication && (
            <>
              <h3 className="mt-6 text-lg font-semibold text-white">Η διαδικασία</h3>
              <p className="mt-3 leading-relaxed text-zinc-300">
                Η αίτηση για e-Δελτίο γίνεται ηλεκτρονικά με κωδικούς Taxisnet. Ανάλογα με την
                περίπτωση, χρειάζονται ψηφιακή φωτογραφία και υπογραφή, παράβολα και ιατρικές
                εξετάσεις. Μετά την έκδοση του e-Δελτίου εξουσιοδοτείται η σχολή για τη συνέχεια της
                διαδικασίας.
              </p>
            </>
          )}
          <p className="mt-4 text-sm leading-relaxed text-zinc-400">{INFORMATION_NOTICE}</p>
        </section>
        {slug.startsWith('pei') && (
          <nav
            aria-label="Σελίδες Π.Ε.Ι."
            className="mt-8 flex flex-wrap gap-4 text-sm text-amber-400"
          >
            <Link href="/diplomata/pei">Γενικές πληροφορίες</Link>
            <Link href="/diplomata/pei-emporevmaton">Π.Ε.Ι. εμπορευμάτων</Link>
            <Link href="/diplomata/pei-epivaton">Π.Ε.Ι. επιβατών</Link>
          </nav>
        )}
        <a
          href={SCHOOL_INFO.phoneHref}
          className="mt-8 inline-block rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-black hover:bg-amber-400"
        >
          Κάλεσέ μας: {SCHOOL_INFO.phoneDisplay}
        </a>
      </article>
    );
  }
  const item = LICENSES.find((l) => l.category !== 'professional' && l.slug === slug);
  if (!item) notFound();

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: item.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <article className="mx-auto max-w-5xl px-4 pt-12 pb-20 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <nav aria-label="Breadcrumb" className="mb-6 text-xs text-zinc-500">
        <Link href="/diplomata" className="hover:text-amber-400">
          ← Όλα τα Διπλώματα
        </Link>
      </nav>

      {/* BLOCK 1: Hero & Quick CTA */}
      <div className="grid items-center gap-8 border-b border-white/10 pb-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <span className="inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-medium text-amber-400">
            {item.badge}
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            {item.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">{item.subtitle}</p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300">
            {PRICING_CONSULTATION}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={SCHOOL_INFO.phoneHref}
              className="rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-black hover:bg-amber-400"
            >
              Κάλεσέ μας: {SCHOOL_INFO.phoneDisplay}
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#131316] lg:col-span-5">
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 390px, 100vw"
            className="object-cover"
          />
          <IllustrativeImageLabel />
        </div>
      </div>

      {/* BLOCK 2: At-a-Glance Bento Grid */}
      <section className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { label: 'Όριο Ηλικίας', value: item.specs.minAge },
          { label: 'Θεωρία', value: item.specs.theoryHours },
          { label: 'Πρακτική', value: item.specs.practicalHours },
          { label: 'Ισχύς Άδειας', value: item.specs.validity },
        ].map((stat, idx) => (
          <div key={idx} className="rounded-2xl border border-white/10 bg-[#131316] p-5">
            <p className="text-xs text-zinc-500">{stat.label}</p>
            <p className="mt-1.5 text-lg font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </section>

      {/* BLOCK 3: Interactive Document Checklist */}
      <section className="mt-14">
        <h2 className="mb-6 text-2xl font-bold text-white">Απαραίτητα Δικαιολογητικά</h2>
        <p className="mb-6 text-sm leading-relaxed text-zinc-400">
          Η αίτηση για e-Δελτίο υποβάλλεται ηλεκτρονικά. Τα δικαιολογητικά και τα μαθήματα
          εξαρτώνται από την περίπτωσή σου· επικοινώνησε μαζί μας για επιβεβαίωση.
        </p>
        <DocumentChecklist userDocs={item.userDocuments} schoolHandles={item.schoolHandles} />
      </section>

      {/* BLOCK 4: 4-Step Process Timeline */}
      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-bold text-white">Η διαδικασία βήμα-βήμα</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {item.steps.map((step) => (
            <div key={step.num} className="rounded-2xl border border-white/10 bg-[#131316] p-6">
              <span className="font-mono text-sm font-bold text-amber-400">{step.num}</span>
              <h3 className="mt-2 text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BLOCK 5: Category Q&A */}
      {item.faqs.length > 0 && (
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-white">Συχνές Ερωτήσεις</h2>
          <div className="space-y-4">
            {item.faqs.map((faq, idx) => (
              <details
                key={idx}
                open={idx === 0}
                className="group rounded-2xl border border-white/10 bg-[#131316] p-6"
              >
                <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-4 font-semibold text-white">
                  <span>{faq.q}</span>
                  <span
                    aria-hidden="true"
                    className="text-amber-400 transition group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}
      <p className="mt-10 text-sm leading-relaxed text-zinc-400">{INFORMATION_NOTICE}</p>
    </article>
  );
}
