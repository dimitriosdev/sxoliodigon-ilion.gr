'use client';

import { useState } from 'react';

export function DocumentChecklist({
  userDocs,
  schoolHandles,
}: {
  userDocs: string[];
  schoolHandles: string[];
}) {
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  const toggle = (idx: number) => setChecked((prev) => ({ ...prev, [idx]: !prev[idx] }));

  const doneCount = Object.values(checked).filter(Boolean).length;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Left: Interactive User Checklist */}
      <div className="rounded-2xl border border-white/10 bg-[#131316] p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Τι φέρνεις εσύ</h3>
          <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400">
            {doneCount}/{userDocs.length} έτοιμα
          </span>
        </div>
        <ul className="space-y-3">
          {userDocs.map((doc, idx) => {
            const isDone = !!checked[idx];
            return (
              <li key={idx}>
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className={`flex w-full items-start gap-3 rounded-xl border p-3.5 text-left transition ${
                    isDone
                      ? 'border-emerald-500/30 bg-emerald-500/10 text-zinc-400 line-through'
                      : 'border-white/10 bg-white/[0.02] text-zinc-200 hover:border-white/25'
                  }`}
                >
                  <span
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-xs ${
                      isDone
                        ? 'border-emerald-500 bg-emerald-500 font-bold text-black'
                        : 'border-zinc-600'
                    }`}
                  >
                    {isDone ? '✓' : ''}
                  </span>
                  <span className="text-sm leading-relaxed">{doc}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Right: What the School Handles */}
      <div className="rounded-2xl border border-white/10 bg-[#131316] p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Τι αναλαμβάνουμε εμείς</h3>
          <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-zinc-400">
            Χωρίς αναμονή
          </span>
        </div>
        <ul className="space-y-3">
          {schoolHandles.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3.5 text-sm text-zinc-300"
            >
              <span className="mt-0.5 text-amber-400">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
