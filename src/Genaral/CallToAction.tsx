import { MessageCircle, PhoneCall } from "lucide-react";
import { motion } from "motion/react";
import { phone_number } from "./Secret";

const CallToAction = () => {
  const cleanPhone = (phone_number || "916302133653").replace(/^91/, "");
  const telHref = `tel:+91${cleanPhone}`;
  const waHref = `https://wa.me/91${cleanPhone}`;

  return (
    <div
      role="region"
      aria-label="Quick Contact Actions"
      className="fixed bottom-3 left-0 right-0 z-50 px-3 pb-[env(safe-area-inset-bottom)] lg:hidden pointer-events-none"
    >
      <div className="pointer-events-auto max-w-md mx-auto flex items-center gap-2.5 p-1.5 rounded-full bg-stone-950/90 backdrop-blur-md border border-amber-500/35 shadow-2xl">
        <CallBtn href={telHref} />
        <WhatsappBtn href={waHref} />
      </div>
    </div>
  );
};

export default CallToAction;

const CallBtn = ({ href }: { href: string }) => {
  return (
    <motion.a
      href={href}
      aria-label="Call Astrologer Now"
      whileTap={{ scale: 0.96 }}
      className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-stone-800 hover:bg-stone-700 text-amber-300 border border-amber-400/30 font-bold montserrat text-xs sm:text-sm shadow-sm transition-colors duration-200"
    >
      <motion.span
        animate={{ rotate: [0, -12, 12, -8, 8, 0] }}
        transition={{
          repeat: Infinity,
          repeatDelay: 2.5,
          duration: 0.6,
          ease: "easeInOut",
        }}
        className="inline-flex"
      >
        <PhoneCall className="w-4 h-4 text-amber-400 shrink-0" />
      </motion.span>
      <span>Call Now</span>
    </motion.a>
  );
};

const WhatsappBtn = ({ href }: { href: string }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      whileTap={{ scale: 0.96 }}
      animate={{
        scale: [1, 1.02, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 2.2,
        ease: "easeInOut",
      }}
      className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold montserrat text-xs sm:text-sm shadow-md transition-all duration-200"
    >
      <MessageCircle className="w-4 h-4 shrink-0" />
      <span>WhatsApp</span>
    </motion.a>
  );
};