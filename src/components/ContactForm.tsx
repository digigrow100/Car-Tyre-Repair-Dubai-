"use client";

import { useState } from "react";

const PHONE_RAW = "+971558664226";
const PHONE = "+971 55 866 4226";
const WA = "https://wa.me/971558664226";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="lg:col-span-7 bg-surface-container-lowest p-md md:p-lg rounded-xl shadow-sm border border-outline-variant">
      <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md text-on-surface mb-md">
        Send a Service Request
      </h2>
      {submitted ? (
        <div className="space-y-sm" role="status">
          <p className="font-title-lg text-title-lg text-on-surface">Opening WhatsApp…</p>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Send the pre-filled message to complete your request. If it doesn&apos;t open
            automatically, call{" "}
            <a className="text-primary underline" href={`tel:${PHONE_RAW}`}>
              {PHONE}
            </a>{" "}
            or{" "}
            <a className="text-primary underline" href={WA}>
              WhatsApp us
            </a>{" "}
            directly.
          </p>
        </div>
      ) : (
        <form
          className="space-y-sm"
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const message = [
              "New Service Request from website:",
              `Name: ${data.get("name")}`,
              `Phone: ${data.get("phone")}`,
              `Car Model: ${data.get("carModel") || "N/A"}`,
              `Service Needed: ${data.get("service")}`,
              `Location in Dubai: ${data.get("location")}`,
            ].join("\n");
            window.open(
              `${WA}?text=${encodeURIComponent(message)}`,
              "_blank"
            );
            setSubmitted(true);
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
            <div className="space-y-xs group">
              <label className="font-label-md text-label-md text-on-surface-variant ml-xs group-focus-within:text-primary">
                Full Name
              </label>
              <input
                className="w-full px-md py-sm rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary-container outline-none transition-all"
                placeholder="Your Name"
                type="text"
                name="name"
                required
              />
            </div>
            <div className="space-y-xs group">
              <label className="font-label-md text-label-md text-on-surface-variant ml-xs group-focus-within:text-primary">
                Phone Number
              </label>
              <input
                className="w-full px-md py-sm rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary-container outline-none transition-all"
                placeholder="+971 XX XXX XXXX"
                type="tel"
                name="phone"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
            <div className="space-y-xs group">
              <label className="font-label-md text-label-md text-on-surface-variant ml-xs group-focus-within:text-primary">
                Car Model
              </label>
              <input
                className="w-full px-md py-sm rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary-container outline-none transition-all"
                placeholder="e.g. Toyota Camry 2022"
                type="text"
                name="carModel"
              />
            </div>
            <div className="space-y-xs group">
              <label className="font-label-md text-label-md text-on-surface-variant ml-xs group-focus-within:text-primary">
                Service Needed
              </label>
              <select
                className="w-full px-md py-sm rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary-container outline-none transition-all bg-white"
                name="service"
              >
                <option>Tyre Repair</option>
                <option>Tyre Change</option>
                <option>New Tyre Replacement</option>
                <option>Battery Replacement</option>
                <option>Emergency Assistance</option>
                <option>Wheel Balancing</option>
              </select>
            </div>
          </div>
          <div className="space-y-xs group">
            <label className="font-label-md text-label-md text-on-surface-variant ml-xs group-focus-within:text-primary">
              Location in Dubai
            </label>
            <input
              className="w-full px-md py-sm rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary-container outline-none transition-all"
              placeholder="e.g. Downtown Dubai, JBR, Deira..."
              type="text"
              name="location"
              required
            />
          </div>
          <button
            className="w-full bg-primary text-on-primary py-md rounded-xl font-title-lg text-title-lg hover:shadow-lg transition-all active:scale-[0.98] mt-base"
            type="submit"
          >
            Request Callback via WhatsApp
          </button>
        </form>
      )}
    </div>
  );
}
