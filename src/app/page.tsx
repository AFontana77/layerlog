import Link from 'next/link';
import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Database, BookOpen, BarChart3, ArrowRight, Download, CheckCircle, Layers, Settings } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "LayerLog — Filament Reference + 3D Print Log App",
  description: "LayerLog has 200+ filaments with print temp, bed temp, retraction, and profile notes. Log every print with settings, material, and outcome. Build your print history. Free on iPhone and Android.",
};

const FEATURES = [
  {
    icon: Database,
    title: "200+ filaments catalogued",
    body: "PLA, PETG, ABS, ASA, TPU, Nylon, PC, and specialty composites — 200+ filaments from major manufacturers with recommended print temp, bed temp, enclosure requirements, cooling settings, retraction distance, and known quirks. Know what you're loading before you slice.",
  },
  {
    icon: Settings,
    title: "Print settings per material",
    body: "Every filament entry includes the critical settings that make or break a print: nozzle temp range, bed temp, whether an enclosure is required, cooling fan speed, and retraction values. Stop guessing and stop wasting filament on failed first layers.",
  },
  {
    icon: BookOpen,
    title: "Print log built for makers",
    body: "Log every print with filament used, layer height, infill %, supports, print time, and result. Rate the outcome 1–5. Note what failed and what to adjust. Build a real record of your successful settings — not just the failures.",
  },
  {
    icon: BarChart3,
    title: "Filament inventory tracker",
    body: "Track spools by filament type, color, weight remaining, and purchase date. Know exactly what's on the shelf, what's running low, and what to reorder. No more accidentally starting a print with 40g left on a spool.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Look up the filament",
    body: "Search by material type or brand. Get print temp, bed temp, cooling, enclosure requirements, and retraction settings before you load the slicer. A calibrated starting point, not a forum post from 2019.",
  },
  {
    step: "2",
    title: "Log the print",
    body: "After printing, record the settings you used, filament, layer height, infill, and how it came out. Rate it. Note what you'd change. 30 seconds of logging saves the next print on the same material.",
  },
  {
    step: "3",
    title: "Build your profile library",
    body: "Over time, your successful settings become a personal profile library. Know exactly what worked for PETG on your printer — not some generic recommendation — and replicate it every time.",
  },
];

const DB_CATEGORIES = [
  { label: "Hatchbox PLA", type: "PLA", nozzle: "190–220°C", bed: "60°C", enclosure: "Not required", notes: "Easy to print, minimal warping" },
  { label: "eSUN PETG", type: "PETG", nozzle: "230–250°C", bed: "70–85°C", enclosure: "Beneficial", notes: "String-prone, dry before printing" },
  { label: "Polymaker PolyLite ABS", type: "ABS", nozzle: "230–240°C", bed: "100–110°C", enclosure: "Required", notes: "High warp risk, needs enclosure" },
  { label: "Prusament PC Blend", type: "PC", nozzle: "260–275°C", bed: "100–110°C", enclosure: "Required", notes: "Very strong, moisture-sensitive" },
  { label: "NinjaFlex Armadillo TPU 90A", type: "TPU", nozzle: "220–235°C", bed: "30–40°C", enclosure: "Not required", notes: "Slow print speeds required, rigid TPU" },
  { label: "Polymaker PolyMax ASA", type: "ASA", nozzle: "240–260°C", bed: "90–100°C", enclosure: "Required", notes: "UV-resistant, ABS alternative for outdoors" },
];

const FAQS = [
  {
    q: "Is LayerLog free?",
    a: "Yes. The app and filament library are free. The $6.99 one-time unlock adds unlimited print logging, filament inventory tracking, and full search. No subscription, no renewal.",
  },
  {
    q: "What's in the filament database?",
    a: "200+ filaments from major manufacturers covering PLA, PETG, ABS, ASA, TPU, Nylon, PC, and specialty composites. Each entry includes nozzle temp, bed temp, cooling settings, enclosure requirements, and retraction guidance.",
  },
  {
    q: "Can I add filaments not in the database?",
    a: "Yes. Custom entries let you add any filament — no-name Amazon PLA, local reseller rolls, or experimental blends — with your own settings and notes.",
  },
  {
    q: "Does LayerLog work with any printer or slicer?",
    a: "Yes. LayerLog is printer and slicer agnostic. You log the parameters that matter regardless of your setup. The filament library gives you starting points; your print log captures what actually worked on your specific machine.",
  },
  {
    q: "Does the app work offline?",
    a: "Yes. The filament library is built into the app and works without an internet connection. Print logs are stored on your device.",
  },
  {
    q: "Can I track multiple printers?",
    a: "Yes. Each print log entry includes a printer field. You can track settings and results separately by printer, which is essential if you run both a Bambu and a Prusa and the settings aren't always the same.",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">

        {/* Hero */}
        <section className="py-20 px-4" style={{ backgroundColor: '#F5F3FF' }}>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-violet-700 bg-violet-50 px-3 py-1 rounded-full mb-6">
              200+ filaments. Right settings. Every print logged.
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Stop guessing settings.
              <br />
              <span className="text-violet-700">Log every print. Build your profiles.</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              LayerLog gives you 200+ filaments with print temp, bed temp, cooling, enclosure requirements, and retraction settings built in. Log every print, track your filament inventory, and build a personal profile library that makes every subsequent print on the same material faster and cleaner.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/library" className="inline-flex items-center justify-center gap-2 bg-violet-700 text-white font-semibold px-8 py-3 rounded-xl hover:bg-violet-800 transition-colors press-feedback min-h-[48px]">
                Browse the Filament Library <ArrowRight size={18} />
              </Link>
              <Link href="/free-download" className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 font-medium px-8 py-3 rounded-xl hover:bg-gray-50 transition-colors min-h-[48px]">
                <Download size={18} /> Free Settings Cheat Sheet
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-400">Free app. No credit card. 200+ filaments included.</p>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">The settings library is your starting point.</h2>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Bad prints cost time, filament, and frustration. Most failed first layers come from wrong temperature, wrong bed adhesion, or wrong retraction — all of which are solved by having the right starting parameters. LayerLog gives you calibrated starting settings for 200+ filaments so your first print is informed, not experimental.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {FEATURES.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-4 p-6 rounded-xl bg-gray-50 card-hover">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-violet-50 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-violet-700" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">How LayerLog works</h2>
              <p className="text-gray-600 max-w-xl mx-auto">Look up the filament. Log the print. Build your profile.</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-8">
              {HOW_IT_WORKS.map(({ step, title, body }) => (
                <div key={step} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-violet-100 text-violet-700 font-bold text-lg mb-4">{step}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Database preview */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Sample filaments from the library</h2>
              <p className="text-gray-600 max-w-xl mx-auto">200+ filaments total — browse and search the full library in the app.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 pr-4 font-semibold text-gray-700">Filament</th>
                    <th className="text-left py-3 pr-4 font-semibold text-gray-700">Type</th>
                    <th className="text-left py-3 pr-4 font-semibold text-gray-700">Nozzle temp</th>
                    <th className="text-left py-3 pr-4 font-semibold text-gray-700">Bed temp</th>
                    <th className="text-left py-3 font-semibold text-gray-700">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {DB_CATEGORIES.map(({ label, type, nozzle, bed, notes }) => (
                    <tr key={label} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3 pr-4 font-medium text-gray-900">{label}</td>
                      <td className="py-3 pr-4 text-violet-700 font-medium text-xs">{type}</td>
                      <td className="py-3 pr-4 text-gray-700 font-medium">{nozzle}</td>
                      <td className="py-3 pr-4 text-gray-600">{bed}</td>
                      <td className="py-3 text-gray-500 text-xs">{notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center mt-6 text-sm text-gray-400">PLA, PETG, ABS, ASA, TPU, Nylon, PC, and specialty composites all covered.</p>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 px-4 bg-violet-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Free app. One-time unlock.</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">Download LayerLog free. The filament library is free. Unlock print logging, inventory tracking, and full search for a one-time $6.99.</p>
            <div className="bg-white rounded-2xl p-8 border border-violet-100 mb-8">
              <div className="text-4xl font-bold text-gray-900 mb-1">$6.99</div>
              <div className="text-sm text-gray-400 mb-6">One-time. Yours forever.</div>
              <ul className="text-left space-y-3 mb-6">
                {["Unlimited print log entries","Filament spool inventory tracker","Custom filament entries","Multi-printer support","Works fully offline","All future updates included"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-violet-600 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors min-h-[48px]">Download on App Store</a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors min-h-[48px]">Get it on Google Play</a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">Common questions</h2>
            <div className="space-y-6">
              {FAQS.map(({ q, a }) => (
                <div key={q} className="border-b border-gray-100 pb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Start with the free settings cheat sheet.</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">Download the printable filament settings reference — PLA, PETG, ABS, ASA, TPU, and Nylon with temp ranges, bed settings, and enclosure requirements on one page. Post it near the printer.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/free-download" className="inline-flex items-center justify-center gap-2 bg-violet-700 text-white font-semibold px-8 py-3 rounded-xl hover:bg-violet-800 transition-colors press-feedback min-h-[48px]">
                <Download size={18} /> Get the Free Sheet
              </Link>
              <Link href="/library" className="inline-flex items-center justify-center gap-2 border border-violet-200 text-violet-700 font-medium px-8 py-3 rounded-xl hover:bg-violet-50 transition-colors min-h-[48px]">
                Browse the Library
              </Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
