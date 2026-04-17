import { SiteNav } from '@/components/layout/SiteNav';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About LayerLog",
  description: "The story behind LayerLog. Search 2,000+ filaments. Log your prints. Build your maker database.",
};

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="pt-20">
        <section className="py-20 px-4" style={{ backgroundColor: '#F5F3FF' }}>
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About LayerLog</h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              LayerLog was built for 3D printing enthusiasts who have wasted spools learning the hard way. Every printer is different. Every brand of PLA prints differently. The settings that work for Hatchbox PLA on a Bambu P1S aren't the same as eSUN PLA on an Ender 3. LayerLog pairs a curated filament database with a personal print log so you search before you slice and record what worked before you forget. The app for iPhone and Android adds a slicer profile assistant and print time tracker. Stop printing from memory. Start printing from data.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              LayerLog is published by Anvil Road LLC, a small product studio building practical apps and reference tools for hobbyists, professionals, and makers. Every product in the portfolio follows the same principle: a curated, searchable database paired with a personal log. Search what the experts know. Record what you discover.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/library" className="inline-flex items-center justify-center gap-2 bg-violet-700 text-white font-semibold px-8 py-3 rounded-xl hover:bg-violet-800 transition-colors press-feedback min-h-[48px]">
                Browse the Library <ArrowRight size={18} />
              </Link>
              <Link href="/free-download" className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 font-medium px-8 py-3 rounded-xl hover:bg-gray-50 transition-colors min-h-[48px]">
                Free Download
              </Link>
            </div>
          </div>
        </section>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Built by Anvil Road LLC</h2>
            <p className="text-gray-600 leading-relaxed">
              Anvil Road is an independent publisher and app studio based in New Jersey. We build reference databases, log apps, KDP books, and companion print products across a range of hobby and professional categories. LayerLog is one of 20+ apps in the Anvil Road portfolio. All apps are free to start, with one-time unlocks for unlimited features. No subscriptions.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
