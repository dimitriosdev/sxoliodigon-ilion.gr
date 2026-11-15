// src/app/sitemap.ts
import type { MetadataRoute } from 'next';
import { LICENSES } from '@/data/schoolData';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://sxoliodigon-ilion.gr';
  const licenseUrls = LICENSES.map((item) => ({
    url: `${base}/${item.category === 'professional' ? 'epaggelmatikes-adeies' : 'diplomata'}/${item.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/diplomata`, lastModified: new Date() },
    { url: `${base}/epaggelmatikes-adeies`, lastModified: new Date() },
    { url: `${base}/epikoinonia`, lastModified: new Date() },
    ...licenseUrls,
  ];
}
