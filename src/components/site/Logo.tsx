import { motion } from "framer-motion";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-0 ${className}`}>
      <motion.div
        initial={{ rotate: -10, scale: 0.8, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="relative h-12 w-12"
      >
        <motion.img
          src="/images/logo.png"
          alt="Logo"
          className="h-12 w-12 rounded-lg object-contain"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          draggable={false}
        />
      </motion.div>
      <span className="font-display text-xl font-bold tracking-tight">
        veli<span className="text-accent">o</span>um
      </span>
    </div>
  );
}
