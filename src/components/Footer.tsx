import Link from "next/link";

const PHONE = "+971 55 297 8485";
const PHONE_RAW = "+971552978485";
const WA = "https://wa.me/971552978485";

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest border-t border-outline-variant py-xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-md px-margin-mobile md:px-gutter max-w-container-max mx-auto">
        <div className="col-span-1 md:col-span-1">
          <span className="font-display-lg text-xl font-extrabold text-primary block mb-6">
            Car Tyre Repair <span className="text-on-surface">Dubai</span>
          </span>
          <p className="text-on-surface-variant mb-6 pr-4">
            Professional mobile tyre repair and battery replacement service in Dubai. We come to you.
          </p>
          <div className="flex gap-4">
            <a
              className="text-on-surface-variant hover:text-primary transition-all opacity-80 hover:opacity-100"
              href="#"
            >
              <span className="material-symbols-outlined">face_nod</span>
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-all opacity-80 hover:opacity-100"
              href="#"
            >
              <span className="material-symbols-outlined">public</span>
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-on-surface">
            Our Services
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                className="text-on-surface-variant hover:text-primary underline transition-all font-body-md text-body-md"
                href="/services"
              >
                Tyre Repair
              </Link>
            </li>
            <li>
              <Link
                className="text-on-surface-variant hover:text-primary underline transition-all font-body-md text-body-md"
                href="/services"
              >
                Tyre Change
              </Link>
            </li>
            <li>
              <Link
                className="text-on-surface-variant hover:text-primary underline transition-all font-body-md text-body-md"
                href="/services"
              >
                New Tyre Replacement
              </Link>
            </li>
            <li>
              <Link
                className="text-on-surface-variant hover:text-primary underline transition-all font-body-md text-body-md"
                href="/services"
              >
                Battery Replacement
              </Link>
            </li>
            <li>
              <Link
                className="text-on-surface-variant hover:text-primary underline transition-all font-body-md text-body-md"
                href="/services"
              >
                Emergency Assistance
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-on-surface">
            Company
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                className="text-on-surface-variant hover:text-primary underline transition-all font-body-md text-body-md"
                href="/about"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="text-on-surface-variant hover:text-primary underline transition-all font-body-md text-body-md"
                href="/contact"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-on-surface">
            Contact Info
          </h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-on-surface-variant">
              <span className="material-symbols-outlined text-primary">call</span>
              <a href={`tel:${PHONE_RAW}`} className="hover:text-primary transition-colors">{PHONE}</a>
            </li>
            <li className="flex items-center gap-3 text-on-surface-variant">
              <span className="material-symbols-outlined text-primary">chat</span>
              <a href={WA} className="hover:text-primary transition-colors">WhatsApp Us</a>
            </li>
            <li className="flex items-center gap-3 text-on-surface-variant">
              <span className="material-symbols-outlined text-primary">location_on</span>
              Dubai, UAE
            </li>
            <li className="flex items-center gap-3 text-on-surface-variant">
              <span className="material-symbols-outlined text-primary">schedule</span>
              Available 24/7
            </li>
          </ul>
        </div>
      </div>
      <div className="px-margin-mobile md:px-gutter max-w-container-max mx-auto mt-12 pt-8 border-t border-outline-variant/30 text-center text-on-surface-variant text-sm">
        © 2026 Car Tyre Repair Dubai. Professional Mobile Tyre Service. All rights reserved.
      </div>
    </footer>
  );
}
