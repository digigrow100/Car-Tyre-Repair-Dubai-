import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Car Tyre Repair Dubai - Mobile Tyre Service",
};

const PHONE_RAW = "+971552978485";
const PHONE = "+971 55 297 8485";
const WA = "https://wa.me/971552978485";

export default function AboutPage() {
  return (
    <div className="about-page bg-background text-on-surface font-body-md overflow-x-hidden">
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center pt-xl pb-lg overflow-hidden">
          <div className="px-margin-mobile md:px-gutter max-w-container-max mx-auto relative z-10 w-full">
            <div className="max-w-3xl">
              <span className="inline-block px-sm py-xs bg-primary-container/20 text-primary font-bold rounded-lg mb-md tracking-wider uppercase text-xs">
                Serving Dubai
              </span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-md">
                Dubai&apos;s Trusted <br />
                <span className="text-primary">Mobile Tyre Experts</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg max-w-2xl">
                Providing fast, professional tyre repair, tyre change, new tyre replacement,
                and battery replacement services across Dubai — wherever you are, whenever you need us.
              </p>
              <div className="flex flex-wrap gap-md">
                <div className="flex items-center gap-sm bg-surface-container-lowest p-md rounded-xl shadow-sm border border-outline-variant/30">
                  <span
                    className="material-symbols-outlined text-primary scale-125"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                  <div>
                    <div className="font-bold text-on-surface">10,000+</div>
                    <div className="text-sm text-on-surface-variant">Tyres Fitted</div>
                  </div>
                </div>
                <div className="flex items-center gap-sm bg-surface-container-lowest p-md rounded-xl shadow-sm border border-outline-variant/30">
                  <span
                    className="material-symbols-outlined text-primary scale-125"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <div>
                    <div className="font-bold text-on-surface">4.9/5</div>
                    <div className="text-sm text-on-surface-variant">Customer Rating</div>
                  </div>
                </div>
                <div className="flex items-center gap-sm bg-surface-container-lowest p-md rounded-xl shadow-sm border border-outline-variant/30">
                  <span
                    className="material-symbols-outlined text-primary scale-125"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    bolt
                  </span>
                  <div>
                    <div className="font-bold text-on-surface">30-60 Min</div>
                    <div className="text-sm text-on-surface-variant">Response Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story & Mission */}
        <section className="py-xl bg-surface-container-low">
          <div className="px-margin-mobile md:px-gutter max-w-container-max mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
              <div className="md:col-span-7 bg-surface-container-lowest p-lg rounded-3xl shadow-sm border border-outline-variant/20 flex flex-col justify-center">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-md">
                  <span className="material-symbols-outlined">history_edu</span>
                </div>
                <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md mb-md">
                  Our Story
                </h2>
                <p className="font-body-md text-on-surface-variant leading-relaxed">
                  We started with a simple mission: make tyre and battery service in Dubai
                  as easy as calling a friend. Dubai drivers shouldn&apos;t have to wait hours
                  at a garage or risk driving on a damaged tyre.
                </p>
                <p className="font-body-md text-on-surface-variant leading-relaxed mt-md">
                  Today our mobile vans are stocked with top tyre brands and quality
                  car batteries, ready to reach you anywhere in Dubai — from the busy
                  highways to quiet residential streets — in 30 to 60 minutes.
                </p>
              </div>
              <div className="md:col-span-5 bg-primary p-lg rounded-3xl shadow-lg text-on-primary flex flex-col justify-end relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-lg opacity-20 transition-transform group-hover:scale-110 duration-500">
                  <span className="material-symbols-outlined text-[120px]">flag</span>
                </div>
                <div className="relative z-10">
                  <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md mb-md">
                    Our Mission
                  </h2>
                  <div className="space-y-sm">
                    <div className="flex items-start gap-sm">
                      <span className="material-symbols-outlined mt-1">shield_lock</span>
                      <div>
                        <div className="font-bold">Safety First</div>
                        <div className="opacity-80 text-sm">
                          Professional service that meets the highest safety standards.
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-sm">
                      <span className="material-symbols-outlined mt-1">speed</span>
                      <div>
                        <div className="font-bold">Speed of Service</div>
                        <div className="opacity-80 text-sm">
                          30-60 minute response anywhere in Dubai.
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-sm">
                      <span className="material-symbols-outlined mt-1">visibility</span>
                      <div>
                        <div className="font-bold">Total Transparency</div>
                        <div className="opacity-80 text-sm">
                          No hidden fees, no surprises — honest pricing always.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-xl">
          <div className="px-margin-mobile md:px-gutter max-w-container-max mx-auto">
            <div className="text-center mb-xl">
              <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md mb-sm">
                Experts in Action
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {[
                { src: "/about-team.webp",            alt: "Mobile tyre service at villa Dubai",           caption: "Mobile Service at Your Home",        sub: "We come to you anywhere in Dubai" },
                { src: "/about-van.webp",             alt: "Luxury roadside tyre service Dubai",           caption: "24/7 Emergency Response",             sub: "Roadside assistance across Dubai" },
                { src: "/gallery-tyre-cityscape.webp",alt: "Roadside tyre repair Dubai cityscape",         caption: "Tyre Repair on Dubai Roads",          sub: "Fast puncture fix at your location" },
                { src: "/gallery-wheel-pro.webp",     alt: "Precision wheel service modern garage Dubai",  caption: "Precision Wheel Balancing",           sub: "Professional digital balancing equipment" },
                { src: "/gallery-battery-skyline.webp",alt: "Roadside battery service Dubai skyline",      caption: "Battery Service with Dubai View",     sub: "Car battery replaced on-site" },
                { src: "/gallery-recovery.webp",      alt: "Emergency tyre change recovery Dubai",         caption: "Emergency Recovery Service",          sub: "Back on the road in 30-60 minutes" },
              ].map((item) => (
                <div key={item.src} className="relative rounded-3xl overflow-hidden aspect-video group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={item.src}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-md">
                    <div className="text-white">
                      <div className="font-bold">{item.caption}</div>
                      <div className="text-sm opacity-80">{item.sub}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-xl bg-surface-container-lowest">
          <div className="px-margin-mobile md:px-gutter max-w-container-max mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-xl">
              <div className="w-full md:w-1/2">
                <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md mb-lg">
                  Why Choose Car Tyre Repair Dubai?
                </h2>
                <div className="space-y-lg">
                  <div className="flex gap-md">
                    <div className="flex-shrink-0 w-14 h-14 bg-secondary-container text-primary rounded-2xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-2xl">engineering</span>
                    </div>
                    <div>
                      <h3 className="font-title-lg text-title-lg mb-xs">Expert Technicians</h3>
                      <p className="text-on-surface-variant">
                        Our team is trained and experienced in all types of tyre and battery
                        work, covering all vehicle makes and models in Dubai.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-md">
                    <div className="flex-shrink-0 w-14 h-14 bg-secondary-container text-primary rounded-2xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-2xl">schedule</span>
                    </div>
                    <div>
                      <h3 className="font-title-lg text-title-lg mb-xs">24/7 Availability</h3>
                      <p className="text-on-surface-variant">
                        Tyre problems don&apos;t follow business hours. We&apos;re available
                        around the clock, every day of the year across Dubai.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-md">
                    <div className="flex-shrink-0 w-14 h-14 bg-secondary-container text-primary rounded-2xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-2xl">location_on</span>
                    </div>
                    <div>
                      <h3 className="font-title-lg text-title-lg mb-xs">
                        All Dubai Areas Covered
                      </h3>
                      <p className="text-on-surface-variant">
                        Downtown Dubai, JBR, Deira, Bur Dubai, Jumeirah, Dubai Silicon Oasis,
                        Al Quoz and everywhere in between — we cover all Dubai.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 relative">
                <div className="aspect-square bg-primary-container/10 rounded-[40px] flex items-center justify-center p-lg relative">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-tertiary-container/20 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-container/20 rounded-full blur-3xl"></div>
                  <div className="glass-card p-xl rounded-[32px] text-center z-10 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="font-display-lg text-primary mb-xs">4.9/5</div>
                    <div className="flex justify-center gap-xs mb-md">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          className="material-symbols-outlined text-tertiary"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                      ))}
                    </div>
                    <p className="font-title-lg italic text-on-surface">
                      &quot;Best tyre service in Dubai! They came to my villa in 40 minutes.&quot;
                    </p>
                    <p className="mt-md font-bold">— Ahmed K.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-xl bg-inverse-surface text-inverse-on-surface relative overflow-hidden">
          <div className="px-margin-mobile md:px-gutter max-w-container-max mx-auto text-center relative z-10">
            <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md mb-lg">
              Stuck in Dubai with a flat tyre or dead battery?
            </h2>
            <p className="text-body-lg mb-xl opacity-80 max-w-2xl mx-auto">
              Don&apos;t wait. Our expert team will reach you in 30-60 minutes anywhere in Dubai.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-md">
              <a
                className="px-xl py-lg bg-tertiary-container text-white font-bold rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-md"
                href={`tel:${PHONE_RAW}`}
              >
                <span className="material-symbols-outlined">call</span>
                Call {PHONE}
              </a>
              <a
                className="px-xl py-lg bg-primary-container text-white font-bold rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-md"
                href={`${WA}?text=${encodeURIComponent("Hi, I'd like to book a mobile tyre service in Dubai.")}`}
              >
                <span className="material-symbols-outlined">chat_bubble</span>
                WhatsApp Us Now
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
