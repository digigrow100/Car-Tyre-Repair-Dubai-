import type { Metadata } from "next";
import ContactFaq from "@/components/ContactFaq";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Car Tyre Repair Dubai",
};

const PHONE_RAW = "+971558664226";
const PHONE = "+971 55 866 4226";
const WA = "https://wa.me/971558664226";

export default function ContactPage() {
  return (
    <div className="contact-page bg-background text-on-surface">
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-xl pb-lg px-margin-mobile md:px-gutter max-w-container-max mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-lg">
            <span className="inline-block px-sm py-xs bg-primary-fixed text-on-primary-fixed-variant rounded-full font-label-md text-label-md mb-base">
              All Dubai Areas Covered
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-sm">
              We&apos;re Here to Help, 24/7
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Fast mobile tyre repair, tyre change, and battery replacement anywhere in Dubai.
              Contact us for immediate assistance.
            </p>
          </div>
        </section>

        {/* Main Content: Form & Info Grid */}
        <section className="px-margin-mobile md:px-gutter max-w-container-max mx-auto mb-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-md">
            <ContactForm />

            {/* Right Column: Quick Contact & Emergency */}
            <div className="lg:col-span-5 space-y-md">
              <div className="bg-surface-container-low p-md md:p-lg rounded-xl border border-outline-variant">
                <h3 className="font-title-lg text-title-lg text-on-surface mb-md">Quick Contact</h3>
                <div className="space-y-md">
                  <a className="flex items-center gap-md group" href={`tel:${PHONE_RAW}`}>
                    <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined">call</span>
                    </div>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface-variant">
                        Emergency Phone
                      </p>
                      <p className="font-title-lg text-title-lg text-on-surface font-bold">
                        {PHONE}
                      </p>
                    </div>
                  </a>
                  <a className="flex items-center gap-md group" href={WA}>
                    <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined">chat</span>
                    </div>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface-variant">
                        WhatsApp Message
                      </p>
                      <p className="font-title-lg text-title-lg text-on-surface font-bold">
                        {PHONE}
                      </p>
                    </div>
                  </a>
                  <div className="flex items-center gap-md">
                    <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant">
                      <span className="material-symbols-outlined">location_on</span>
                    </div>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface-variant">
                        Service Area
                      </p>
                      <p className="font-title-lg text-title-lg text-on-surface font-bold">
                        All Dubai Areas
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Support */}
              <div className="bg-tertiary text-on-tertiary p-md md:p-lg rounded-xl shadow-xl relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="font-headline-md-mobile text-headline-md-mobile text-on-tertiary-container mb-sm">
                    Need Help Now?
                  </h3>
                  <p className="font-body-md text-body-md mb-md opacity-90">
                    Stranded in Dubai? Our emergency team is ready to dispatch a mobile
                    technician to your location within 30-60 minutes.
                  </p>
                  <a
                    className="inline-flex items-center justify-center w-full py-md bg-on-tertiary text-tertiary font-bold rounded-xl text-title-lg transition-transform hover:scale-[1.02] active:scale-95 shadow-md"
                    href={`tel:${PHONE_RAW}`}
                  >
                    Call Emergency Line
                  </a>
                </div>
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-tertiary-container rounded-full blur-3xl opacity-30 group-hover:scale-110 transition-transform duration-700"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Area Section */}
        <section className="px-margin-mobile md:px-gutter max-w-container-max mx-auto mb-xl">
          <div className="bg-surface-container rounded-xl overflow-hidden shadow-sm border border-outline-variant">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-md md:p-xl flex flex-col justify-center">
                <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md text-on-surface mb-sm">
                  We Cover All of Dubai
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-md">
                  Our mobile technicians are strategically positioned across Dubai to reach you fast.
                </p>
                <ul className="space-y-sm">
                  {[
                    "Downtown Dubai & DIFC",
                    "Jumeirah & Palm Jumeirah",
                    "Deira & Bur Dubai",
                    "Dubai Silicon Oasis & Academic City",
                    "Al Quoz & Dubai Investment Park",
                    "JBR, JLT & Marina",
                  ].map((area) => (
                    <li key={area} className="flex items-center gap-sm text-on-surface font-title-lg">
                      <span
                        className="material-symbols-outlined text-primary"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="h-64 md:h-[450px] relative">
                <div
                  className="w-full h-full bg-cover bg-center grayscale contrast-125"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAhvBx2lJKf0fnLUkyS8cL5PO4okMT-MQAgl_JBbQY6ry91GCBhODj3K2uzIKcV355wSb5iKhpqZ8UARPUI0g8jZnteZpXq3MG6XqcMjIHl-wuzNfWMSmwIccchH7f5yDsQgWyHspGmWIRb2oiPy_KlLvdegx8P5iiC3-xJqMtsP7-TlH9nN1s3rgiNiPTph5DLuwmbUL_aL67zLcu9HjmYLK50Z2xVQJ2vcbj0mS-OQOkKctpcL4hl-n2dDFXY7Sjmr-oFoGk4cFDt')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-surface-container-low py-xl px-margin-mobile md:px-gutter">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-lg">
              <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md text-on-surface mb-xs">
                Common Questions
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Everything you need to know about our Dubai tyre service.
              </p>
            </div>
            <ContactFaq />
          </div>
        </section>
      </main>
    </div>
  );
}
