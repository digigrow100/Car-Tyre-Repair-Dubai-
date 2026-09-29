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
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBpggqLtV8xQDVVnfBsUstbN1R7VU7v9_3ud-A10vhJBPEVQWDnntrW402E62Y8ZSkpRkQL7wIibXwZvbiOqjh1uoVyspLFkRzD4EL-AFon1ouG4s3SHcm4V66nOBwfihGWd__EFA3R4QQhTRL0k2R-uqX5-4ZfCNJdi9xZRpPYmo12P7AoZlc8JOLJ-Y2VEAU5SeUejsFipbfReCpChbKE_Z4oFg72ZFfRWhBccWKxOx33YDWVhOgVM97ED09Z24MdVgwnOEvFxHac')",
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
                  className="px-lg py-4 bg-[#F59E0B] text-white rounded-xl font-label-md text-label-md shadow-lg hover:translate-y-[-2px] transition-all flex items-center gap-sm"
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkfZcLScZoCawso88iw4V1_b8Aw04DRSZWmHqzkMFbgvC7aZymZv5847wIqVshObcGCTBph8TgbrYmnDBHED8kPoyEef2CgMnsKL4HtJ736joceckXPCNxicin9fTGnprzhyvna56tXlz7LOmioEoNw7BxZHv07gQ1U2t19huF9TShdI-wP65MQUu9-Mkervu7818z5wsUsPw5_uqy5vOEYwmhfsDu6CXm8M1QGUtI_yS_63t2CaoNFy9xpF9la6WXjnLqeMwaNwsA"
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTEmNkab1e_QTiRs6XuUc18SztoGOfOf9Tt9h8iWIeQr_76zclh6i8m25tjB6EybWYc2cEZMfBa_jIWE4rkZeQK9D8PVeURVcA0QIY3W_KMvPxVmSiaiyyRKYpvIqNZW4dHEifLEGaL4APq9gLhA8-hMlBeu-aSmCAxNi75-0QgvJOpaNxYm-ZPo4NQfTA0wVGndRzq55jEXC2jlLf8PhbF0Vj0t4p-fDZQZVHDUftP6i0912p5vKu1Noipnl_YKsyfdroVQURofqd"
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJzkpKHmQ77BdU04bQ0K0VtZeVFLQGOveBtTKI4rkMvGN_nciMy_vaROZQ_l5gjReLl9i9-HiJ0XNkc2cFPGVEP-M3COfP2HITtA7xAwA1jhk4RaPI94E6ryMUtNg-dQ-F7GXXLqgbNPE0lnc5415oFvaXxlgGrmxTI76mzqDizDC4ncLSfPwWiqUi5hvDJYSrswSOxdYlvo_p4X49O0yOUgvCldaSF9Fa5z4qRtZPJvqhlQo6rWOplgXj1mMWuI67zXW_yPTb24la"
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbQDgz7dqfUSWV_rS-9Q-abMEKPMNb0Agc4cwiHg6bp5rO8rXMfVk8vBguZYkEtDJhs-EFFX4by1vqS7VuavJGehGUtZS-OkBmBJhs4tGtyf9rbHGxVbMipDR-PaxyGMqZqaarBundUf2TBmvnUAkRzN01P1xW9NQ09VrTx63z9QU30ogzwtTYXqpq_9XTlmJqNnptztbluUCSbHRDw1FbfHEOwCqbxP89Aa6Ecawxwi_0ZKlrBDnAIpvezMDLIGZdPur3hL8T7h_2"
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

          {/* 4. Emergency & Wheel Balancing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
            <div className="order-2 md:order-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="rounded-xl w-full h-[400px] object-cover shadow-sm"
                alt="Emergency tyre assistance Dubai"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2BEhMYADrw1hGR38ZSTm25_W6Aw8egTY2b0fmheZZaddJfkE0-WZW2U7X6QcBz46G9V70GA2nIyvfL1dYTjYXfDyRV6uaXUqkU6cSXbeAws4oITNReZ6Dbu-M8IVa0-xLJHiFlk2GVZJp_a9DPGmA_L_8hZL50fVZsDFuBGX4h_6GoInmyQFxGOhIuFy4MKFmBUKlf60BdRXmq-k6ub2zhTP_TzQzTsSFo9EXP_QXGyPNP4KnMX50dcJM7jOMShnZ4ZN0nPcHRwBR"
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
              </div>
              <hr className="border-outline-variant" />
              <div className="space-y-sm">
                <div className="flex items-center gap-sm">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined">balance</span>
                  </div>
                  <h3 className="font-title-lg text-title-lg">Wheel Balancing</h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Vibration while driving? Our mobile wheel balancing service corrects imbalanced
                  wheels at your location, improving ride comfort and extending tyre life on
                  Dubai&apos;s high-speed roads.
                </p>
              </div>
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
