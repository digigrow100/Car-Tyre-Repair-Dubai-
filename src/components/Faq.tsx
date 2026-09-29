const faqs = [
  {
    q: "How fast can you arrive in Dubai?",
    a: "Our average response time across Dubai is 30 to 60 minutes, depending on your location and traffic conditions.",
    open: true,
  },
  {
    q: "Can you come to my home or apartment in Dubai?",
    a: "Yes! Our mobile units operate at villas, apartments, parking lots, and roadside anywhere in Dubai. We just need safe access to your vehicle.",
  },
  {
    q: "Do you offer 24-hour service in Dubai?",
    a: "Absolutely. We operate a true 24/7 service including weekends and public holidays so you're never left stranded.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept cash and all major credit/debit cards. Payment is taken on-site after the job is completed.",
  },
  {
    q: "Do you supply the tyres or do I need to bring my own?",
    a: "We carry a wide stock of all major tyre brands and sizes on our mobile vans. When you call, we confirm your tyre size and bring the right one for your car.",
  },
  {
    q: "Can all punctures be repaired, or do I need a new tyre?",
    a: "Most punctures in the central tread area can be repaired. If the damage is on the sidewall or too large, we recommend a full tyre replacement. We will always advise you honestly.",
  },
  {
    q: "Do you replace car batteries?",
    a: "Yes! We offer on-the-spot car battery testing and replacement across Dubai. We bring the battery to you, no need to drive to a garage.",
  },
];

export default function Faq() {
  return (
    <div className="space-y-4">
      {faqs.map((item) => (
        <details
          key={item.q}
          className="group bg-white rounded-lg border border-outline-variant/20 overflow-hidden"
          open={item.open}
        >
          <summary className="flex justify-between items-center p-6 cursor-pointer list-none font-bold hover:bg-surface-container-low transition-colors">
            {item.q}
            <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
              expand_more
            </span>
          </summary>
          <div className="p-6 pt-0 text-on-surface-variant border-t border-outline-variant/10">
            {item.a}
          </div>
        </details>
      ))}
    </div>
  );
}
