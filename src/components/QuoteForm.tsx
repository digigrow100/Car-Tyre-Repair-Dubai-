"use client";

import { useState } from "react";

const PHONE_RAW = "+971552978485";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row gap-sm">
      {submitted ? (
        <p className="font-label-md text-label-md text-on-surface">
          Opening WhatsApp to send your service request…
        </p>
      ) : (
        <form
          className="flex flex-col sm:flex-row gap-sm w-full"
          onSubmit={(e) => {
            e.preventDefault();
            const carModel = new FormData(e.currentTarget).get("carModel");
            const message = `Hi, I'd like a tyre service quote in Dubai.\nCar: ${carModel || "N/A"}`;
            window.open(
              `https://wa.me/${PHONE_RAW.replace("+", "")}?text=${encodeURIComponent(message)}`,
              "_blank"
            );
            setSubmitted(true);
          }}
        >
          <input
            className="flex-1 bg-surface-container-low border-outline-variant focus:ring-2 focus:ring-primary rounded-xl px-md py-4 font-label-md text-label-md"
            placeholder="Enter your car model (e.g. Toyota Camry)"
            type="text"
            name="carModel"
            required
          />
          <button
            type="submit"
            className="bg-primary text-on-primary px-xl py-4 rounded-xl font-label-md text-label-md hover:bg-primary/90 transition-all font-bold"
          >
            Get Quote
          </button>
        </form>
      )}
    </div>
  );
}
