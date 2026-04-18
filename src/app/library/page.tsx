import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Database, Search, CheckCircle, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "LayerLog Library — Filament Reference Database",
  description: "Browse 200+ filaments with print temp, bed temp, enclosure requirements, retraction, and cooling settings. Includes a print failure troubleshooting guide. Full search in the free LayerLog app.",
};

const MATERIAL_CATEGORIES = [
  {
    name: "PLA",
    count: 42,
    highlights: ["Hatchbox PLA", "Prusament PLA", "eSUN PLA+", "Polymaker PolyLite PLA", "Atomic Filament PLA"],
    notes: "The easiest material to print and the best starting point for any machine or new printer operator. PLA entries in LayerLog include both standard and PLA+ variants — PLA+ is stiffer and slightly more heat-resistant but prints nearly identically. No enclosure required. Excellent first-layer adhesion on PEI, glass, and textured build plates. The reference benchmark for all other materials.",
  },
  {
    name: "PETG",
    count: 38,
    highlights: ["eSUN PETG", "Prusament PETG", "Hatchbox PETG", "Polymaker PolyLite PETG", "MatterHackers Pro PETG"],
    notes: "Strong, food-safe when printed correctly, and more heat-resistant than PLA. PETG is famously prone to stringing — entries note the retraction settings and print speed reductions that control it. Dry your PETG before printing. Wet PETG produces bubbles and inconsistent extrusion that looks like under-extrusion but isn't fixable through slicer settings alone.",
  },
  {
    name: "ABS",
    count: 22,
    highlights: ["Polymaker PolyLite ABS", "eSUN ABS+", "MG Chemicals ABS", "Prusament ABS", "Hatchbox ABS"],
    notes: "High warp risk without an enclosure. ABS entries note minimum enclosure temperature requirements and bed surface recommendations (PEI or ABS slurry). ABS fumes are a real health concern — ventilate properly. The upside: ABS can be acetone-smoothed to a near-injection-molded surface finish, which no other common filament matches.",
  },
  {
    name: "ASA",
    count: 18,
    highlights: ["Polymaker PolyMax ASA", "eSUN ASA", "Fiberlogy ASA", "FormFutura ApolloX", "Prusament ASA"],
    notes: "ASA is ABS without the UV degradation — the go-to material for outdoor parts. Enclosure required, warp risk similar to ABS. Entries include notes on how ASA behaves differently from ABS: it warps slightly less, fumes slightly differently, and tolerates a wider temperature range before delaminating. The standard choice for outdoor fixtures, automotive parts, and signage.",
  },
  {
    name: "TPU & Flexible",
    count: 28,
    highlights: ["NinjaFlex 85A", "Polymaker PolyFlex TPU95", "eSUN eTPU-95A", "FilaFlex 60A", "Sainsmart TPU"],
    notes: "Flexible filaments require slow print speeds — 20–30mm/s for most direct-drive setups, slower for Bowden. Shore hardness determines flex: 85A is very soft (NinjaFlex), 95A is semi-rigid (most TPU). Entries note the specific speed and retraction settings that prevent extruder tangles. Never run flexible filament at standard PLA speeds.",
  },
  {
    name: "Engineering (Nylon, PC, PA-CF)",
    count: 32,
    highlights: ["Prusament PC Blend", "Polymaker PA12-CF", "Taulman Nylon 910", "PolyMide PA6-CF", "Bambu PA-CF"],
    notes: "High-performance materials that require full enclosures, high-temperature beds (100–120°C), and dry filament storage — often drying mid-print for long jobs. Entries include moisture sensitivity ratings (Nylon absorbs atmospheric humidity in hours) and minimum bed surface requirements. Hardened steel nozzles are required for all CF-filled variants.",
  },
  {
    name: "Specialty (Silk, Wood, Metal, Glow)",
    count: 20,
    highlights: ["eSUN PLA Silk", "Hatchbox Wood PLA", "Proto-pasta Stainless Steel PLA", "Glow-in-the-Dark PLA", "ColorFabb CopperFill"],
    notes: "Specialty filaments are PLA-based composites with added particles. Wood, metal, and glow filaments all print near PLA temperatures but abrade standard brass nozzles quickly — hardened or stainless nozzles extend nozzle life significantly. Metal-fill and wood-fill entries note post-processing options: sanding and polishing for metal fills, staining for wood fills.",
  },
];

const FAILURE_GUIDE = [
  {
    symptom: "First layer not sticking",
    cause: "Bed level, bed temp, or surface",
    fix: "Re-level the bed. Increase bed temp by 5°C. Clean the surface with IPA. Check if z-offset is too high.",
  },
  {
    symptom: "Stringing between features",
    cause: "Temperature too high, retraction too low",
    fix: "Reduce print temp by 5°C. Increase retraction distance. Enable combing or travel-avoidance in the slicer.",
  },
  {
    symptom: "Layer separation or delamination",
    cause: "Temp too low, speed too high, or wet filament",
    fix: "Increase nozzle temp by 5°C. Slow down print speed. Dry the filament — PETG and Nylon absorb moisture quickly.",
  },
  {
    symptom: "Warping corners off the bed",
    cause: "Thermal contraction, insufficient adhesion",
    fix: "Increase bed temp. Add a brim or raft. Enclose the printer. Apply adhesive to the bed surface.",
  },
  {
    symptom: "Under-extrusion (thin, gappy layers)",
    cause: "Partial clog, wrong flow rate, or wet filament",
    fix: "Cold pull to clear a partial clog. Verify e-steps are calibrated. Check flow rate. Dry the filament.",
  },
  {
    symptom: "Overhangs drooping or sagging",
    cause: "Insufficient cooling, temperature too high",
    fix: "Increase fan speed. Reduce print temp by 5°C. Add supports for overhangs beyond 45°. Slow overhang speed.",
  },
];

export default function LibraryPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero */}
        <section className="py-16 px-4" style={{ backgroundColor: '#F5F3FF' }}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex w-14 h-14 bg-violet-50 rounded-2xl items-center justify-center mb-6">
              <Database className="text-violet-700" size={28} />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">LayerLog Filament Library</h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed mb-4">
              200+ filaments across PLA, PETG, ABS, ASA, TPU, Nylon, PC, and specialty composites. Every entry includes nozzle temp, bed temp, cooling settings, enclosure requirements, and retraction guidance. Full search is in the app.
            </p>
            <div className="inline-flex items-center gap-2 text-sm text-violet-700 bg-violet-50 px-4 py-2 rounded-full">
              <Search size={14} /> Full filament search available in the free LayerLog app
            </div>
          </div>
        </section>

        {/* Material Categories */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Filaments by Material Type</h2>
            <p className="text-gray-600 text-center max-w-xl mx-auto mb-10">
              200+ filaments organized by material. Every category has different temperature, enclosure, and storage requirements — and choosing the wrong material for a part is as common a failure as a bad first layer.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {MATERIAL_CATEGORIES.map((cat) => (
                <div key={cat.name} className="rounded-xl border border-gray-100 bg-gray-50 p-6 card-hover">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-gray-900">{cat.name}</h3>
                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-violet-50 text-violet-700">{cat.count} filaments</span>
                  </div>
                  <p className="text-xs font-medium text-gray-500 mb-2">Includes: {cat.highlights.join(", ")}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{cat.notes}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-8 text-sm text-gray-400">
              Custom filament entries can be added in the app for no-name brands, local resellers, or experimental blends.
            </p>
          </div>
        </section>

        {/* Moisture Warning */}
        <section className="py-10 px-4 bg-amber-50">
          <div className="max-w-3xl mx-auto">
            <div className="flex gap-4 items-start">
              <AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-2">Most print failures start with wet filament</h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  PETG, Nylon, and TPU absorb moisture from the air in hours. Wet filament produces popping sounds during printing, bubbly extrusion, poor layer adhesion, and stringing that no slicer setting can fully solve. If a print starts failing after sitting open on the spool, dry the filament at 50–65°C for 4–6 hours before blaming the machine. LayerLog's inventory tracker lets you log when you opened each spool.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Failure Troubleshooting */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Print failure troubleshooting</h2>
            <p className="text-gray-600 text-center max-w-xl mx-auto mb-10">
              Six common failure modes, what causes them, and what to actually change. Fix one variable at a time.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 pr-4 font-semibold text-gray-700">What you see</th>
                    <th className="text-left py-3 pr-4 font-semibold text-gray-700">Likely cause</th>
                    <th className="text-left py-3 font-semibold text-gray-700">What to try</th>
                  </tr>
                </thead>
                <tbody>
                  {FAILURE_GUIDE.map(({ symptom, cause, fix }) => (
                    <tr key={symptom} className="border-b border-gray-100 hover:bg-white transition-colors">
                      <td className="py-3 pr-4 font-medium text-gray-900">{symptom}</td>
                      <td className="py-3 pr-4 text-violet-700 font-medium text-xs">{cause}</td>
                      <td className="py-3 text-gray-600 text-xs">{fix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* App CTA */}
        <section className="py-16 px-4" style={{ backgroundColor: '#F5F3FF' }}>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Search 200+ filaments. Log every print.</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The LayerLog app has all 200+ filaments with full-text search, plus a print log with settings, material, outcome rating, and notes. Track your filament inventory and build a profile library of what actually works on your printer. Free to download. $6.99 one-time for the full log.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors min-h-[48px]">
                App Store
              </a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors min-h-[48px]">
                Google Play
              </a>
            </div>
            <p className="text-sm text-gray-400">Free. No subscription. No credit card.</p>
            <div className="mt-6">
              <Link href="/free-download" className="text-sm text-violet-700 hover:underline">
                Or download the free filament settings cheat sheet first
              </Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
