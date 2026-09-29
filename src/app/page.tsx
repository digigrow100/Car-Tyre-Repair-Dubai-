import Link from "next/link";
import Faq from "@/components/Faq";

const PHONE = "+97155 866 4226";
const PHONE_RAW = "+971558664226";
const WA = `https://wa.me/971558664226`;

const services = [
  {
    icon: "tire_repair",
    title: "Tyre Repair Service",
    desc: "Professional puncture repair and tyre fixing at your location across Dubai — fast and reliable.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBeW0yP_njAETuoNUYxrjtT927-NPryUnBgJ58ldJgs5wnMpQvpfCVHgeDBE54hI9cpB0YjiFa4dd5u2pQ9iawADtWe07I6c4NasAt3mkF8e_6mLBL9Cvo_0Ad7GaLabSbJyOfSXp5Om7ZrxFmcFsLrkJ3JAdEiqtXcUk2InMSjhFEk7t-BzyovghapY2QkwE1xVcVQvY1RCzccksEamD2FY_b-NUUX8B3zHjsmHbEm2dXTiPa2i3lSEG34wf41IaCHLpLzBD1dinnu",
    alt: "Tyre repair service in Dubai",
  },
  {
    icon: "build",
    title: "Tyre Change Service",
    desc: "Quick and expert tyre change at your doorstep — home, office, or roadside anywhere in Dubai.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTEmNkab1e_QTiRs6XuUc18SztoGOfOf9Tt9h8iWIeQr_76zclh6i8m25tjB6EybWYc2cEZMfBa_jIWE4rkZeQK9D8PVeURVcA0QIY3W_KMvPxVmSiaiyyRKYpvIqNZW4dHEifLEGaL4APq9gLhA8-hMlBeu-aSmCAxNi75-0QgvJOpaNxYm-ZPo4NQfTA0wVGndRzq55jEXC2jlLf8PhbF0Vj0t4p-fDZQZVHDUftP6i0912p5vKu1Noipnl_YKsyfdroVQURofqd",
    alt: "Tyre change service Dubai",
  },
  {
    icon: "inventory",
    title: "New Tyre Replacement",
    desc: "Wide selection of premium, mid-range, and budget tyres for all vehicles. We bring them to you.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJzkpKHmQ77BdU04bQ0K0VtZeVFLQGOveBtTKI4rkMvGN_nciMy_vaROZQ_l5gjReLl9i9-HiJ0XNkc2cFPGVEP-M3COfP2HITtA7xAwA1jhk4RaPI94E6ryMUtNg-dQ-F7GXXLqgbNPE0lnc5415oFvaXxlgGrmxTI76mzqDizDC4ncLSfPwWiqUi5hvDJYSrswSOxdYlvo_p4X49O0yOUgvCldaSF9Fa5z4qRtZPJvqhlQo6rWOplgXj1mMWuI67zXW_yPTb24la",
    alt: "New tyre replacement Dubai",
  },
  {
    icon: "battery_charging_full",
    title: "Battery Replacement",
    desc: "Fast car battery replacement service across Dubai. We test, supply, and install at your location.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQ4gHqfyHyCX80RKOjsnCMgBt2h0mwx0bghLvzQt8SKfCWASCHIUR7vIbg-Bk82azxFSmNd-xjQPA1XeKu11WtuzE-tWicOGNDWahqNpAoB9kiHg14CHqYovD1IaVC6uBswy1UH6M3yrEXjQXvN7BIrtyqCUXKFRPwTneUtEs45-drBlI3jfs4bkxXbcXpBsuIFYUIhPJFp3Kv6NKTfKNxoCOE9GQ5uSqCUyHS2QTqXYT1QQQsv4mV2QGzWxzpeOz5pQ-2hMvwxu_d",
    alt: "Battery replacement Dubai",
  },
  {
    icon: "emergency_home",
    title: "Emergency Assistance",
    desc: "Stranded in Dubai? Our rapid response team is available 24/7 to get you back on the road fast.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2BEhMYADrw1hGR38ZSTm25_W6Aw8egTY2b0fmheZZaddJfkE0-WZW2U7X6QcBz46G9V70GA2nIyvfL1dYTjYXfDyRV6uaXUqkU6cSXbeAws4oITNReZ6Dbu-M8IVa0-xLJHiFlk2GVZJp_a9DPGmA_L_8hZL50fVZsDFuBGX4h_6GoInmyQFxGOhIuFy4MKFmBUKlf60BdRXmq-k6ub2zhTP_TzQzTsSFo9EXP_QXGyPNP4KnMX50dcJM7jOMShnZ4ZN0nPcHRwBR",
    alt: "Emergency roadside assistance Dubai",
  },
  {
    icon: "balance",
    title: "Wheel Balancing",
    desc: "Precision digital wheel balancing for a smoother ride and extended tyre life across all Dubai roads.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWp2Ql7LwyAVOghHPSvfquqeezTu8fp0mf_ajNYe4dO3MCRQCP71PtfjGs5y2igj0WbOkk3WjX8oWLbhh-6PBODDnb9X4jiPY2x7u-BAhlWMVgp0NtxeYdAQ_exI52vYxYBairzT3ePRfT6U4B05OOhzhpZNNRbjPPzpvorRym-q6hsZdMfNxnJ9fCdZqd9FqjvwwMDCWPYney23kBLNgFiDjZ3-sdYUT3JsQteyUy06_LHJGq6RkKYE-Ii967Jp_3r1FQ1RDs4oIC",
    alt: "Wheel balancing Dubai",
  },
];

const features = [
  { title: "Fast Response", desc: "Rapid arrival across Dubai, usually within 30-60 minutes." },
  { title: "24/7 Emergency", desc: "Round-the-clock support anywhere in Dubai." },
  { title: "Pro Technicians", desc: "Fully trained and highly experienced team." },
  { title: "Latest Equipment", desc: "Mobile vans with professional digital tools." },
  { title: "Transparent Pricing", desc: "No hidden fees. Upfront quotes provided." },
  { title: "All Major Brands", desc: "From budget-friendly to premium tyre brands." },
];

const steps = [
  { icon: "add_call", title: "1. Call or WhatsApp", desc: "Tell us your tyre size and current location in Dubai." },
  { icon: "location_on", title: "2. Share Location", desc: "Send your live location via WhatsApp for rapid dispatch." },
  { icon: "departure_board", title: "3. Tech Dispatched", desc: "Closest technician arrives in a fully-equipped van." },
  { icon: "task_alt", title: "4. Back on the Road", desc: "Service completed and payment taken on-site." },
];

const testimonials = [
  {
    quote:
      "Incredible service! I had a flat tyre on Sheikh Zayed Road and they arrived in 30 minutes. Very professional and affordable.",
    name: "Ahmed Al Mansouri",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAA6h7WTujbQsdVx0lc1a6yaB3e06Ujmz6_ik8y_jqYTWO0KvFtphdpgMZ6-P_py9_Jw7NEpyvyfzTCdj3M-5puOeEKY9iQobxPa4l4-4kgxnZhV6bgkAXvVMv0cNrNOjOD5Pq60QGq6snfiAr-cuX1GYBldK7Cw0UdZYgo5BNChdgv326soJL3VNhZutTHct_5qocEm_ANzXi_Dc_QK5JWt_AHr8uofZhQ8bD5YOg_uF8gluEeIVIKNQPDdYWjGB1dXefZ_alJNYQN",
  },
  {
    quote:
      "My car battery died in the parking lot at Dubai Mall. They came within 45 minutes and replaced it on the spot. Saved my day!",
    name: "Sarah Johnson",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKPvwIm7ee9n63Ac10Xsa87535ycrcd7mzM5Mvnwvq0sPq6gIQ9tJuaRMjFSseA24CPS968-6wJi_VDEdRxsULcBCwzrncPVHf_yOxEuTixAf86EIKHHqYsUFlwenXKrUeGEc5rWcB-8yeQajf7FifnfAVyESzhjpbKsEv6t8EdsMvhzzJOJfQ8FteYYVx-stJyvpZomv2aCg63JviJM57F5CI1X5CUxEznjfHwkDdxGr9gdLl-IxhiIVtncCn8TZnyZRDAGaSLaok",
  },
  {
    quote:
      "Best tyre change service in Dubai! Changed all four tyres at my villa while I was working from home. Highly recommend!",
    name: "Mohammed Al Rashidi",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwVQQOhqL0VpgR3iwA_cyRyl8DpBL9ZnCuN8pjS4N8LAhNpkNoVbjd8AbWEUpm5Dsa-737JAQCqyLZjDTmNk07BHWBZy6TT6OW1l_YDyYzrKazAeZGZGHijIpI-rRmiUGrpHHCccIQjKE0YZULEWObuyYaAZ4KRJS4qPZwqG3efoC0COSqSUThMhqmjVQKr4nGM_r1TQ3ge-qTmd2GM9_pV6QIMEcVBCDNHsTx9ispKFL25RbdRQclhNxiTvF5XuXgRbxylPlMDXE",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden pt-12 md:pt-0">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-on-surface/95 via-on-surface/80 to-on-surface/40 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-transparent to-transparent z-10"></div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Car tyre repair service in Dubai"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDusjsGph-KqCDtZ1-DLIteY2MNOwo8Lz4tLROCTTMYrogkcY87XvWR7S_YkYBQykjCD4gqKQv0-V-ka2Xq5g4USR3GEO2kqAhMSC3JrLrmUqyAMfIyVjwpBTO946bm3Leiza8ZVPY_hn4_aPw63ku9GAECYu7fxPuP9PCG3teJpBroHLxk_kRaE3mYGtlDLCgZx9yHXwjcUF6ou1gK1q_vKgUqLQW7vF_kpLkd1ZBdLrLmqsagqUWcYY9BEsyJFQQSxR23_mCEDV5P"
          />
        </div>
        <div className="relative z-20 w-full px-margin-mobile md:px-gutter max-w-container-max mx-auto py-xl">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full font-label-md text-label-md uppercase tracking-wider mb-6">
              <span className="material-symbols-outlined text-[18px] text-primary-fixed" data-weight="fill">
                verified
              </span>
              Trusted Tyre Service Across Dubai
            </div>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-4 text-white leading-tight drop-shadow-sm">
              Car Tyre Repair Dubai <span className="text-primary-fixed">At Your Doorstep</span>
            </h1>
            <p className="font-body-lg text-body-lg mb-8 text-white/85 max-w-[38rem]">
              Fast, reliable tyre repair, tyre change, new tyre replacement, battery replacement,
              and emergency roadside assistance across Dubai. We come to you — home, office, or roadside.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                className="bg-[#1565C0] hover:bg-[#0D47A1] text-white font-bold px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#1565C0]/20"
                href={`tel:${PHONE_RAW}`}
              >
                <span className="material-symbols-outlined" data-weight="fill">
                  emergency
                </span>
                Get Emergency Help
              </a>
              <a
                className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-all"
                href={WA}
              >
                <span className="material-symbols-outlined">chat_bubble</span>
                WhatsApp Us
              </a>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                "24/7 Available",
                "Same Day Service",
                "Pro Technicians",
                "All Dubai Areas",
                "Cash & Card",
              ].map((label) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-sm text-white/90"
                >
                  <span className="material-symbols-outlined text-[18px] text-primary-fixed" data-weight="fill">
                    check_circle
                  </span>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats Strip */}
      <section className="relative z-20 -mt-10 md:-mt-12 px-margin-mobile md:px-gutter max-w-container-max mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-outline-variant/20 grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-outline-variant/15">
          {[
            { value: "10,000+", label: "Tyres Fitted" },
            { value: "4.9/5", label: "Customer Rating" },
            { value: "30-60 Min", label: "Response Time" },
            { value: "24/7", label: "Always Available" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center text-center py-6 px-4">
              <span className="font-display-lg text-2xl md:text-3xl font-extrabold text-primary">
                {stat.value}
              </span>
              <span className="text-sm text-on-surface-variant mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-xl px-margin-mobile md:px-gutter max-w-container-max mx-auto" id="services">
        <div className="text-center mb-12">
          <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md mb-4">
            Our Professional Services
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Comprehensive tyre and battery services delivered wherever you are in Dubai.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-xl transition-all duration-300 lift-hover border border-outline-variant/30"
            >
              <div className="h-48 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={service.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={service.img}
                />
              </div>
              <div className="p-6">
                <div className="mb-4 text-primary bg-primary-container/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined">{service.icon}</span>
                </div>
                <h3 className="font-title-lg text-title-lg mb-2">{service.title}</h3>
                <p className="text-on-surface-variant mb-6">{service.desc}</p>
                <Link
                  className="text-primary font-bold flex items-center gap-1 hover:gap-2 transition-all"
                  href="/services"
                >
                  Learn More <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-xl bg-surface-container-low">
        <div className="px-margin-mobile md:px-gutter max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
            <div>
              <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md mb-6">
                Why Dubai Drivers Trust Us
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                We combine technical excellence with unbeatable convenience. Our
                mobile tyre workshops are equipped with the latest tools to
                handle every job with precision across all Dubai locations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
                {features.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-3">
                    <div className="bg-primary-container text-on-primary p-1 rounded-full">
                      <span className="material-symbols-outlined text-[20px]">check</span>
                    </div>
                    <div>
                      <h4 className="font-bold">{feature.title}</h4>
                      <p className="text-sm text-on-surface-variant">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 rounded-xl blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Professional tyre technician working on a car in Dubai"
                className="relative w-full rounded-xl shadow-2xl h-[450px] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpmFO7TkX2E5Q9iB9VHEBWrDiXuNrdTcPBjpQmVFQUCWTQHYzd86OSRDg_uk60lzEJcXjJWZ1Rse9UF19WXc2lCiffpc2JYkitDJbbBXIB2Bed6PAH_625TsHof5QIApOiCOY3ah5Pbx7hjmuEfyI1_QIf1ioYhx_RSXpZA5ApCtN8b2UuqOKnIpekObcOI0KTthfLJGXe2uDELi5TS_wUHU8xfMCpa2p9NWoCMkl3GVd6Jd0gKGvWUZCx6foK6dntpr29SiQwcMcs"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-xl bg-white overflow-hidden">
        <div className="px-margin-mobile md:px-gutter max-w-container-max mx-auto">
          <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md text-center mb-16">
            Getting You Back On The Road
          </h2>
          <div className="relative">
            <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] timeline-line"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-xl">
              {steps.map((step) => (
                <div key={step.title} className="relative text-center group">
                  <div className="w-24 h-24 rounded-full bg-primary-container text-on-primary flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[32px]">{step.icon}</span>
                  </div>
                  <h3 className="font-title-lg text-title-lg mb-2">{step.title}</h3>
                  <p className="text-on-surface-variant">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-xl relative overflow-hidden bg-on-surface text-white" id="coverage">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB3dklbZKG8Jl4xZ3KR-nRKqtjtnrqSAgECq2flww-u3FaOOtljRfi5X8Akxsg5vd9FnYF0bSYNeWhXa4rcxhE4LIr0R99B4QXSKEvDke3DCDmvayOaTBD_KtHQyZ2tPz8umCl-xG30D4OdpSY82gO8lrIWCzOVsGqEkBqmpaYWM96WoodNblkmN_AiK854WE5teYDJQLNzxD3rLJOzz2NP_8ddZOKQFoWLIZvArXI07BfstMJqaj0V-Jja5ptJEEkGfsf0WSDfxB97')",
            }}
          ></div>
        </div>
        <div className="relative z-10 px-margin-mobile md:px-gutter max-w-container-max mx-auto text-center">
          <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md mb-6">
            Serving All Areas Across Dubai
          </h2>
          <p className="font-body-lg text-body-lg mb-8 max-w-2xl mx-auto opacity-90">
            From Downtown Dubai to Deira, Jumeirah to Dubai Silicon Oasis — our mobile
            technicians are ready to reach you wherever you are.
          </p>
          <a
            className="inline-block bg-primary hover:bg-primary-container text-white font-bold px-10 py-4 rounded-lg transition-all shadow-xl hover:shadow-primary/20"
            href={`${WA}?text=${encodeURIComponent("Hi, I'd like to check tyre service availability in my area in Dubai.")}`}
          >
            Check Availability In Your Area
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-xl bg-surface">
        <div className="px-margin-mobile md:px-gutter max-w-container-max mx-auto">
          <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white p-8 rounded-lg shadow-sm border border-outline-variant/20 lift-hover"
              >
                <div className="flex text-[#1565C0] mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="material-symbols-outlined" data-weight="fill">
                      star
                    </span>
                  ))}
                </div>
                <p className="text-on-surface-variant italic mb-6">&quot;{t.quote}&quot;</p>
                <div className="flex items-center gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    alt={t.name}
                    src={t.img}
                  />
                  <div>
                    <p className="font-bold">{t.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-xl bg-surface-container-low" id="faq">
        <div className="px-margin-mobile md:px-gutter max-w-3xl mx-auto">
          <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Faq />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-xl bg-primary-container text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:24px_24px]"></div>
        </div>
        <div className="px-margin-mobile md:px-gutter max-w-container-max mx-auto text-center relative z-10">
          <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md mb-6 text-white">
            Need Tyre Help in Dubai Right Now?
          </h2>
          <p className="font-body-lg text-body-lg mb-10 opacity-90 max-w-2xl mx-auto">
            Don&apos;t stay stranded. Our expert technicians are ready to assist you
            anywhere in Dubai, 24 hours a day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              className="bg-[#1565C0] hover:bg-[#0D47A1] text-white font-bold px-12 py-5 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-xl"
              href={`tel:${PHONE_RAW}`}
            >
              <span className="material-symbols-outlined text-[24px]">call</span>
              Call {PHONE}
            </a>
            <a
              className="bg-white text-primary font-bold px-12 py-5 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-xl"
              href={WA}
            >
              <span className="material-symbols-outlined text-[24px]">chat_bubble</span>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
