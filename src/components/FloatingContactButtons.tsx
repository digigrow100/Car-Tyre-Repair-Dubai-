import FloatingReveal from "@/components/FloatingReveal";

const PHONE_RAW = "+971558664226";
const WA = "https://wa.me/971558664226";

export default function FloatingContactButtons() {
  return (
    <FloatingReveal className="fixed bottom-6 right-6 flex flex-col gap-3 z-[100] md:hidden">
      <a
        className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center animate-bounce"
        href={WA}
        aria-label="Chat on WhatsApp"
      >
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
          chat
        </span>
      </a>
      <a
        className="w-14 h-14 bg-[#1565C0] text-white rounded-full shadow-2xl flex items-center justify-center"
        href={`tel:${PHONE_RAW}`}
        aria-label="Call us"
      >
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
          call
        </span>
      </a>
    </FloatingReveal>
  );
}
