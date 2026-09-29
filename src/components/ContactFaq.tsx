"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How fast can you get to my location in Dubai?",
    a: "On average, our mobile tyre technicians arrive within 30-60 minutes of your booking confirmation across Dubai. Response times may vary depending on traffic and your specific area.",
  },
  {
    q: "Do you supply the tyres and batteries?",
    a: "Yes, we carry a full stock of tyres and car batteries on our mobile vans. When you call or WhatsApp us, we confirm your requirements and bring everything needed.",
  },
  {
    q: "Can you repair a tyre roadside in Dubai?",
    a: "Yes, we specialise in roadside tyre repair and replacement across all Dubai roads, including major highways and residential areas.",
  },
];

export default function ContactFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto space-y-sm">
      {faqs.map((item, index) => (
        <div
          key={item.q}
          className="bg-surface-container-lowest p-md rounded-xl border border-outline-variant hover:border-primary transition-colors cursor-pointer group"
        >
          <details
            className="group"
            open={openIndex === index}
            onClick={(e) => {
              e.preventDefault();
              setOpenIndex(openIndex === index ? null : index);
            }}
          >
            <summary className="flex justify-between items-center list-none font-title-lg text-title-lg text-on-surface">
              {item.q}
              <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                expand_more
              </span>
            </summary>
            <div className="mt-sm text-on-surface-variant font-body-md leading-relaxed border-t border-outline-variant pt-sm">
              {item.a}
            </div>
          </details>
        </div>
      ))}
    </div>
  );
}
