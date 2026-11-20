import {
  Clock,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Form from "../Genaral/Form";
import { phone_number } from "../Genaral/Secret";

const HIGHLIGHTED_SPECIALTIES = [
  "Palm Reading",
  "Horoscope Matching",
  "Photo Readings",
  "Vastu Consultation",
];

export default function Contact() {
  const cleanPhone = (phone_number || "916302133653").replace(/^91/, "");
  const displayPhone = `+91 ${cleanPhone}`;
  const telHref = `tel:+91${cleanPhone}`;
  const waHref = `https://wa.me/91${cleanPhone}`;

  return (
    <section
      aria-labelledby="contact-page-heading"
      className="w-full bg-gradient-to-b from-amber-50/90 via-orange-50/50 to-amber-100/80 min-h-screen py-14 sm:py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Page Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-stone-900 text-amber-300 border border-amber-500/30 montserrat text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          Personal Consultation
        </span>

        <h1
          id="contact-page-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight montserrat"
        >
          Contact Us
        </h1>

        <p className="text-stone-600 mt-4 text-sm sm:text-lg leading-relaxed open-sans">
          We&apos;re here to guide you on your spiritual journey. Reach out
          through{" "}
          <strong className="font-semibold text-amber-800">WhatsApp</strong>,{" "}
          <strong className="font-semibold text-amber-800">phone</strong>, or
          fill out the booking form below for a personal consultation.
        </p>
      </div>

      {/* Contact Info & Booking Form Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        {/* Left Column: Contact Info Card */}
        <div className="lg:col-span-5 rounded-3xl bg-gradient-to-b from-amber-50/90 via-white to-amber-50/70 border border-amber-200/90 shadow-xl p-7 sm:p-10 flex flex-col justify-between">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-amber-100 border border-amber-300/80 text-amber-900 montserrat text-xs font-bold uppercase tracking-wider mb-3">
              Direct Assistance
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 montserrat mb-4">
              Get in Touch
            </h2>

            <p className="text-stone-600 mb-7 text-sm sm:text-base leading-relaxed open-sans">
              Whether you seek answers about your{" "}
              <strong className="font-semibold text-amber-800">career</strong>,{" "}
              <strong className="font-semibold text-amber-800">
                love life
              </strong>
              , or{" "}
              <strong className="font-semibold text-amber-800">
                spiritual path
              </strong>
              , we&apos;re here to help you find clear, practical direction.
            </p>

            {/* Interactive Contact Tiles */}
            <div className="space-y-4">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-amber-200/90 hover:border-amber-400 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-600 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-800 montserrat">
                    WhatsApp Consultation
                  </p>
                  <p className="text-base sm:text-lg font-bold text-stone-900 montserrat">
                    {displayPhone}
                  </p>
                </div>
              </a>

              <a
                href={telHref}
                className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-amber-200/90 hover:border-amber-400 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-stone-900 text-amber-400 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-800 montserrat">
                    Direct Phone Call
                  </p>
                  <p className="text-base sm:text-lg font-bold text-stone-900 montserrat">
                    {displayPhone}
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Bottom Trust Indicators */}
          <div className="mt-8 pt-6 border-t border-amber-200/80 space-y-2.5 text-xs sm:text-sm text-stone-600 open-sans">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
              <span>100% Private &amp; Confidential Guidance</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Available Daily for Phone &amp; In-Person Appointments</span>
            </div>
          </div>
        </div>

        {/* Right Column: Booking Form Card */}
        <div className="lg:col-span-7 rounded-3xl bg-white/95 border border-amber-200/90 shadow-xl p-7 sm:p-10 flex flex-col justify-center">
          <div className="text-center mb-6">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-100 border border-amber-300/80 text-amber-900 montserrat text-xs font-bold uppercase tracking-wider mb-2">
              Quick Appointment
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 montserrat">
              Book Your Session Now
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 open-sans mt-1">
              Share your details below and we will get back to you shortly.
            </p>
          </div>

          <Form />
        </div>
      </div>

      {/* Bottom Services Overview Banner */}
      <div className="mt-16 sm:mt-20 max-w-5xl mx-auto rounded-3xl bg-stone-900 border border-amber-500/30 p-8 sm:p-10 text-center shadow-2xl">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 montserrat text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          Areas of Expertise
        </span>

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white montserrat">
          Our Astrology Services
        </h3>

        <p className="text-stone-300 mt-4 text-sm sm:text-base md:text-lg leading-relaxed open-sans max-w-3xl mx-auto">
          We provide expert guidance in{" "}
          <strong className="text-amber-300 font-semibold">palm reading</strong>
          ,{" "}
          <strong className="text-amber-300 font-semibold">
            horoscope matching
          </strong>
          ,{" "}
          <strong className="text-amber-300 font-semibold">
            photo readings
          </strong>
          , and{" "}
          <strong className="text-amber-300 font-semibold">
            vastu consultation
          </strong>
          . Discover thoughtful remedies for{" "}
          <span className="italic text-amber-200">
            love, career, finance, and spiritual growth
          </span>
          .
        </p>

        {/* Specialty Pills */}
        <div className="mt-6 flex flex-wrap justify-center gap-2.5">
          {HIGHLIGHTED_SPECIALTIES.map((item) => (
            <span
              key={item}
              className="px-4 py-1.5 rounded-full bg-stone-800/90 border border-amber-400/30 text-amber-200 montserrat text-xs sm:text-sm font-semibold"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}