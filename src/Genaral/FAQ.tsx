import { useState } from "react";
import { MessageCircle, Minus, Phone, Plus, Sparkles } from "lucide-react";
import { business_name, phone_number } from "./Secret";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const getFaqs = (astrologer: string): FAQItem[] => [
  {
    id: 1,
    question: `Can We Meet ${astrologer}?`,
    answer: `Yes, personal in-person meetings are available with a prior appointment. Reach out on WhatsApp at ${phone_number} to schedule your visit.`,
  },
  {
    id: 2,
    question: "Is Telephonic Consultation Available?",
    answer: `Yes, you can connect via phone or WhatsApp from anywhere in the world for a private consultation. Phone Number: ${phone_number }.`,
  },
  {
    id: 3,
    question: "What Kind Of Astrology Services Are Available Here?",
    answer:
      "We provide Vastu analysis, horoscope readings, kundli matching, career mapping, marriage guidance, health support, and business remedies.",
  },
  {
    id: 4,
    question: "What Kind Of Products Are Available?",
    answer:
      "Authentic astrological remedies, energized gemstones, sacred yantras, and personalized spiritual products are available based on your horoscope.",
  },
  {
    id: 5,
    question: "Do We Avail Courses On Astrology?",
    answer:
      "Yes, structured astrology learning courses are offered for beginners as well as intermediate practitioners.",
  },
  {
    id: 6,
    question: "What Do We Teach In The Astrology Course?",
    answer:
      "We cover natal horoscope reading, planetary placements, palmistry basics, and traditional predictive astrology methods.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

 

  const faqs = getFaqs(business_name);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      aria-labelledby="faq-heading"
      className="w-full bg-gradient-to-b from-amber-50/90 via-orange-50/50 to-amber-100/80 py-14 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-amber-200/80"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-stone-900 text-amber-300 border border-amber-500/30 montserrat text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Common Questions
          </span>
          <h2
            id="faq-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 montserrat tracking-tight"
          >
            Frequently Asked Questions
          </h2>
          <p className="open-sans text-sm sm:text-base text-stone-600 mt-2">
            Everything you need to know about consultations, remedies, and
            astrology courses.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`w-full rounded-2xl bg-white/95 border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-amber-400 shadow-lg ring-1 ring-amber-400/40"
                    : "border-amber-200/90 shadow-sm hover:border-amber-300 hover:shadow-md"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left transition-colors hover:bg-amber-50/60 cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`w-7 h-7 rounded-lg text-xs font-bold montserrat flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? "bg-stone-900 text-amber-300"
                          : "bg-amber-100 text-amber-900 border border-amber-200"
                      }`}
                    >
                      {String(faq.id).padStart(2, "0")}
                    </span>

                    <span className="text-base sm:text-lg font-bold text-stone-900 montserrat leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isOpen
                        ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-xs"
                        : "bg-amber-100/80 text-amber-900"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" strokeWidth={2.5} />
                    ) : (
                      <Plus className="w-4 h-4" strokeWidth={2.5} />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 pl-15 sm:pl-16 text-sm sm:text-base text-stone-600 leading-relaxed open-sans border-t border-amber-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Banner */}
        <div className="mt-10 rounded-3xl bg-stone-900 border border-amber-500/30 p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left shadow-xl">
          <div>
            <h3 className="montserrat font-bold text-lg sm:text-xl text-amber-300">
              Still Have a Specific Question?
            </h3>
            <p className="open-sans text-xs sm:text-sm text-stone-300 mt-1">
              Speak directly with {business_name} for confidential, one-on-one
              guidance.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 shrink-0">
            <a
              href={`tel:${phone_number}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-amber-200 border border-amber-400/30 font-semibold montserrat text-xs sm:text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>

            <a
              href={`https://wa.me/${phone_number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-semibold montserrat text-xs sm:text-sm shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}