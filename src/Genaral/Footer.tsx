import { motion } from "framer-motion";
import { ChevronRight, MessageCircle, Phone, Sparkles } from "lucide-react";
import useInViewOnce from "./InView";
import { business_name, person_name, phone_number } from "./Secret";

const SERVICES = [
  "Love Expert",
  "Astrology Specialist",
  "Love Problem Expert",
  "Love Marriage Approval",
  "Quick Rishta Marriage",
];

const WHY_CHOOSE = [
  "Relationship Problem",
  "Husband-Wife Dispute Specialist",
  "Happy Clients",
  "Online Astrologer",
  "Visa Problems",
];

export default function Footer() {
  const [ref, inView] = useInViewOnce(0.2);

  const brandName = business_name || "Astrology Center";
  const astrologer = person_name || "Astrologer";
  const cleanPhone = (phone_number || "916302133653").replace(/^91/, "");
  const telHref = `tel:+91${cleanPhone}`;
  const waHref = `https://wa.me/91${cleanPhone}`;

  return (
    <footer className="relative text-white bg-stone-950 border-t border-amber-500/30 overflow-hidden">
      {/* Background Image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-35"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/60/53/c4/6053c4eeaafe3d00deca910b44aca06b.jpg')",
        }}
      />

      {/* Rich Dark & Amber Scrim Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-stone-950/90 via-stone-950/85 to-stone-950"
      />

      {/* Main Footer Content */}
      <motion.div
        ref={ref}
        initial={{ y: 20, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
        transition={{ duration: 0.65 }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About */}
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-[11px] font-bold uppercase tracking-wider montserrat mb-3">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Trusted Guidance</span>
            </div>

            <h2 className="font-bold text-xl text-white mb-3 montserrat">
              About {brandName}
            </h2>

            <p className="text-sm text-stone-300 open-sans leading-relaxed">
              <strong className="text-amber-300 font-semibold">
                {brandName}
              </strong>{" "}
              is recognized among South India&apos;s trusted astrological
              practices. Using classical astrological insight,{" "}
              <strong className="text-white font-semibold">{astrologer}</strong>{" "}
              helps clients understand their goals, aspirations, challenges, and
              true potential.
            </p>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h2 className="font-bold text-xl text-white mb-3 montserrat">
              Contact Us
            </h2>

            <div className="space-y-2.5 text-sm text-stone-300 open-sans">
              <a
                href={telHref}
                className="flex items-center gap-2.5 hover:text-amber-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+91 {cleanPhone}</span>
              </a>

              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-amber-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>WhatsApp: +91 {cleanPhone}</span>
              </a>
            </div>

            <div className="mt-5 pt-4 border-t border-stone-800">
              <p className="font-bold text-sm text-amber-400 montserrat">
                Best Astro Guidance
              </p>
              <p className="text-xs text-stone-400 montserrat tracking-wider mt-1">
                AUTHENTIC • RELIABLE • GENUINE • SUPPORTIVE
              </p>
            </div>
          </div>

          {/* Column 3: Services */}
          <div>
            <h2 className="font-bold text-xl text-white mb-3 montserrat">
              Our Services
            </h2>

            <ul className="text-sm text-stone-300 space-y-2.5 open-sans">
              {SERVICES.map((service) => (
                <li key={service} className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="hover:text-amber-200 transition-colors">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Why Choose Us */}
          <div>
            <h2 className="font-bold text-xl text-white mb-3 montserrat">
              Why Choose Us?
            </h2>

            <ul className="text-sm text-stone-300 space-y-2.5 open-sans">
              {WHY_CHOOSE.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="hover:text-amber-200 transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Bottom Copyright & Agency Bar */}
      <CopyRightAndContact />
    </footer>
  );
}

const CopyRightAndContact = () => {
  return (
    <div className="relative z-10 bg-stone-900/95 border-t border-amber-500/25 py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        {/* Left Column: Agency Credit */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
          <p className="text-xs sm:text-sm text-stone-300 font-semibold montserrat">
            Designed and Developed By Eswar
          </p>
          <a
            href="https://wa.me/918886921826?text=Hello%20Pro%20Daddy%20Agency"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white text-xs font-bold montserrat shadow-sm transition-all duration-200 hover:scale-105"
          >
            Pro Daddy Agency
          </a>
        </div>

        {/* Right Column: Copyright */}
        <p className="text-xs sm:text-sm text-stone-400 open-sans">
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://keralakollegalaastrologer.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-300 font-semibold hover:text-amber-200 hover:underline transition-colors"
          >
            keralakollegalaastrologer.in
          </a>{" "}
          &ndash; All Rights Reserved.
        </p>
      </div>
    </div>
  );
};