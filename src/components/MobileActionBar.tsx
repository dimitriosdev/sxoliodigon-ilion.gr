// src/components/MobileActionBar.tsx
import { SCHOOL_INFO } from '@/data/schoolData';

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/15 bg-[#0b0b0c]/95 p-3 backdrop-blur-lg md:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a
          href={SCHOOL_INFO.phoneHref}
          className="flex items-center justify-center gap-2 rounded-xl bg-amber-500 py-3 text-sm font-bold text-black active:scale-95"
        >
          <span>📞 Κλήση Τώρα</span>
        </a>
        <a
          href={SCHOOL_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 py-3 text-sm font-semibold text-white active:scale-95"
        >
          <span>📍 Χάρτης (Ίλιον)</span>
        </a>
      </div>
    </div>
  );
}
