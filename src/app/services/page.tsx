import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "Services | Car Tyre Repair Dubai - Tyre Change & Battery Replacement",
};

const PHONE_RAW = "+971558664226";
const WA = "https://wa.me/971558664226";

export default function ServicesPage() {
  return (
    <div className="services-page bg-background text-on-surface font-body-md antialiased overflow-x-hidden">
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[614px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: "url('/services-hero.webp')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-surface/90 to-surface/20"></div>
          </div>
          <div className="relative z-10 w-full px-margin-mobile md:px-gutter max-w-container-max mx-auto py-xl">
            <div className="max-w-2xl space-y-md">
              <div className="inline-flex items-center gap-xs bg-primary/10 text-primary px-sm py-1 rounded-full font-label-md text-label-md uppercase tracking-wider">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                Professional Mobile Service in Dubai
              </div>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
                Complete Tyre & Battery Services <span className="text-primary">Across Dubai</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Whether you&apos;re at home, work, or stranded roadside in Dubai, we bring the
                workshop to you. Expert tyre repair, tyre change, new tyre replacement,
                battery replacement, and 24/7 emergency support wherever you are.
              </p>
              <div className="flex flex-wrap gap-sm pt-sm">
                <a
                  className="px-lg py-4 bg-primary text-on-primary rounded-xl font-label-md text-label-md shadow-lg hover:translate-y-[-2px] transition-all flex items-center gap-sm"
                  href="#quote"
                >
                  Book a Service
                  <span className="material-symbols-outlined">arrow_forward</span>
                </a>
                <a
                  className="px-lg py-4 bg-[#1565C0] hover:bg-[#0D47A1] text-white rounded-xl font-label-md text-label-md shadow-lg hover:translate-y-[-2px] transition-all flex items-center gap-sm"
                  href={`tel:${PHONE_RAW}`}
                >
                  <span className="material-symbols-outlined">emergency_home</span>
                  Emergency 24/7
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-xl px-margin-mobile md:px-gutter max-w-container-max mx-auto space-y-xl">
          {/* 1. Tyre Repair */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-5 space-y-sm">
              <div className="w-12 h-12 bg-primary-container/20 text-primary rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  tire_repair
                </span>
              </div>
              <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md text-on-surface">
                Tyre Repair Service in Dubai
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Got a puncture or damaged tyre? Our mobile technicians come directly to your
                location anywhere in Dubai and fix the tyre on the spot. We use professional
                repair methods to get you safely back on the road without needing a new tyre.
              </p>
              <ul className="space-y-xs font-body-md text-body-md text-on-surface">
                <li className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  Puncture repair at your location
                </li>
                <li className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  All tyre types and sizes
                </li>
                <li className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  Home, office, or roadside service
                </li>
              </ul>
            </div>
            <div className="md:col-span-7">
              <div className="rounded-xl overflow-hidden shadow-sm border border-outline-variant/20 group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                  alt="Tyre repair service in Dubai"
                  src="/service-tyre-repair.webp"
                />
              </div>
            </div>
          </div>

          {/* 2. Tyre Change & New Tyre Replacement (Bento Row) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="bg-surface-container-low rounded-xl p-md flex flex-col justify-between border-b-2 border-transparent hover:border-primary transition-all duration-300">
              <div className="space-y-sm">
                <div className="w-12 h-12 bg-secondary-container text-primary rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined">build</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-surface">Tyre Change Service</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Need a quick tyre change in Dubai? Our mobile team arrives at your location
                  with all the tools needed and swaps your tyre fast. Available at your home,
                  workplace, or anywhere on Dubai roads — 24 hours a day.
                </p>
              </div>
              <div className="mt-md rounded-lg overflow-hidden h-48">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover"
                  alt="Tyre change service Dubai"
                  src="/service-tyre-change.webp"
                />
              </div>
            </div>
            <div className="bg-surface-container-low rounded-xl p-md flex flex-col justify-between border-b-2 border-transparent hover:border-primary transition-all duration-300">
              <div className="space-y-sm">
                <div className="w-12 h-12 bg-primary-container/20 text-primary rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined">inventory</span>
                </div>
                <h3 className="font-title-lg text-title-lg text-on-surface">New Tyre Replacement</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  We stock a wide range of premium, mid-range, and budget tyres for all
                  vehicle makes and models. Our mobile van brings new tyres directly to you
                  across all Dubai areas — no need to visit a garage.
                </p>
              </div>
              <div className="mt-md rounded-lg overflow-hidden h-48">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover"
                  alt="New tyre replacement Dubai"
                  src="/service-new-tyre.webp"
                />
              </div>
            </div>
          </div>

          {/* 3. Battery Replacement (Wide Feature) */}
          <div className="relative rounded-xl overflow-hidden bg-inverse-surface text-inverse-on-surface p-xl">
            <div className="absolute inset-0 opacity-20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover"
                alt="Car battery replacement Dubai"
                src="/service-battery.webp"
              />
            </div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-lg items-center">
              <div className="space-y-md">
                <div className="w-12 h-12 bg-primary/20 text-white rounded-xl flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-[28px]">battery_charging_full</span>
                </div>
                <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md">
                  Car Battery Replacement in Dubai
                </h2>
                <p className="font-body-lg text-body-lg text-surface-variant">
                  Car battery dead? Don&apos;t get stuck. We test your battery on-site and
                  replace it immediately with a high-quality battery suitable for Dubai&apos;s
                  extreme heat. Fast, reliable, and delivered to your location.
                </p>
                <a
                  className="inline-block px-lg py-3 bg-primary text-on-primary rounded-xl font-label-md text-label-md hover:bg-primary/90 transition-colors"
                  href={`${WA}?text=${encodeURIComponent("Hi, I need a car battery replacement in Dubai.")}`}
                >
                  Book Battery Replacement
                </a>
              </div>
              <div className="grid grid-cols-2 gap-sm">
                <div className="glass-card p-sm rounded-lg text-on-surface">
                  <span className="font-display-lg text-primary block">Fast</span>
                  <span className="font-label-md text-label-md">On-site Service</span>
                </div>
                <div className="glass-card p-sm rounded-lg text-on-surface">
                  <span className="font-display-lg text-primary block">24/7</span>
                  <span className="font-label-md text-label-md">Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Emergency Assistance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
            <div className="order-2 md:order-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="rounded-xl w-full h-[400px] object-cover shadow-sm"
                alt="Emergency tyre assistance Dubai"
                src="/service-emergency.webp"
              />
            </div>
            <div className="order-1 md:order-2 space-y-md">
              <div className="space-y-sm">
                <div className="flex items-center gap-sm">
                  <div className="w-10 h-10 bg-error-container text-error rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined">emergency</span>
                  </div>
                  <h3 className="font-title-lg text-title-lg">24/7 Emergency Assistance</h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Blowout on the Dubai-Abu Dhabi highway? Flat tyre in Downtown? Our emergency
                  response team is available around the clock, 365 days a year. We aim to
                  reach you within 30-60 minutes anywhere in Dubai.
                </p>
                <ul className="space-y-xs font-body-md text-body-md text-on-surface mt-sm">
                  <li className="flex items-center gap-sm"><span className="material-symbols-outlined text-primary">check_circle</span>Available 24/7, 365 days a year</li>
                  <li className="flex items-center gap-sm"><span className="material-symbols-outlined text-primary">check_circle</span>30-60 minute response anywhere in Dubai</li>
                  <li className="flex items-center gap-sm"><span className="material-symbols-outlined text-primary">check_circle</span>Highways, parking lots, residential areas</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 5. Wheel Balancing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
            <div className="space-y-md">
              <div className="space-y-sm">
                <div className="flex items-center gap-sm">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined">balance</span>
                  </div>
                  <h3 className="font-title-lg text-title-lg">Precision Wheel Balancing</h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Vibration while driving? Our mobile wheel balancing service uses professional
                  digital equipment to correct imbalanced wheels at your location, improving
                  ride comfort and extending tyre life on Dubai&apos;s high-speed roads.
                </p>
                <ul className="space-y-xs font-body-md text-body-md text-on-surface mt-sm">
                  <li className="flex items-center gap-sm"><span className="material-symbols-outlined text-primary">check_circle</span>Digital precision balancing equipment</li>
                  <li className="flex items-center gap-sm"><span className="material-symbols-outlined text-primary">check_circle</span>All vehicle types and wheel sizes</li>
                  <li className="flex items-center gap-sm"><span className="material-symbols-outlined text-primary">check_circle</span>Done at your home, office or roadside</li>
                </ul>
              </div>
            </div>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="rounded-xl w-full h-[400px] object-cover shadow-sm"
                alt="Precision wheel balancing service Dubai"
                src="/gallery-wheel-pro.webp"
              />
            </div>
          </div>

          {/* Photo Gallery Row */}
          <div>
            <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md text-center mb-lg">Our Work Across Dubai</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-sm">
              {[
                { src: "/gallery-tyre-cityscape.webp",   alt: "Tyre repair Dubai cityscape",           caption: "Tyre Repair · Dubai Cityscape" },
                { src: "/gallery-battery-roadside.webp", alt: "Roadside battery service Dubai",        caption: "Battery Service · Roadside Dubai" },
                { src: "/gallery-battery-skyline.webp",  alt: "Battery service with Dubai skyline",    caption: "Battery Replacement · Skyline View" },
                { src: "/gallery-battery-replace.webp",  alt: "Car battery replacement Dubai",         caption: "On-Site Battery Replacement" },
                { src: "/gallery-recovery.webp",         alt: "Emergency tyre recovery Dubai",         caption: "Emergency Recovery Service" },
                { src: "/about-technician.webp",         alt: "Mobile tyre technician Dubai",          caption: "Expert Mobile Technicians" },
              ].map((item) => (
                <div key={item.src} className="relative rounded-xl overflow-hidden aspect-video group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.src} alt={item.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-sm">
                    <span className="text-white text-sm font-bold">{item.caption}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-surface-container-highest py-xl" id="quote">
          <div className="px-margin-mobile md:px-gutter max-w-container-max mx-auto">
            <div className="bg-surface-container-lowest rounded-3xl p-md md:p-xl shadow-xl flex flex-col md:flex-row items-center gap-xl">
              <div className="flex-1 space-y-md">
                <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
                  Get Your Quote in <span className="text-primary">Seconds</span>
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Enter your car model and we&apos;ll WhatsApp you a quick quote for your
                  tyre or battery service anywhere in Dubai.
                </p>
                <QuoteForm />
              </div>
              <div className="w-full md:w-1/3 flex flex-col gap-sm">
                <div className="flex items-center gap-md p-md bg-surface rounded-xl border border-outline-variant/30">
                  <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-surface">Fully Professional</h4>
                    <p className="text-xs text-on-surface-variant">Trusted service across Dubai</p>
                  </div>
                </div>
                <div className="flex items-center gap-md p-md bg-surface rounded-xl border border-outline-variant/30">
                  <span className="material-symbols-outlined text-primary text-3xl">speed</span>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-surface">Fast Turnaround</h4>
                    <p className="text-xs text-on-surface-variant">30-60 min response across Dubai</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
