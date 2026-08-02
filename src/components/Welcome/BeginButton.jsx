import { motion } from "framer-motion";

export default function BeginButton({ onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 0 30px rgba(255,93,175,.25)",
      }}
      whileTap={{ scale: 0.97 }}
      className="
        group
        relative
        overflow-hidden
        rounded-full
        border
        border-white/10
        bg-white/5
        px-8
        py-3
        text-sm
        font-medium
        tracking-[0.25em]
        text-white
        backdrop-blur-xl
        transition-colors
        duration-300
      "
    >
      <span className="relative z-10 flex items-center gap-2">
        BEGIN
        <motion.span
          animate={{ x: [0, 4, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          →
        </motion.span>
      </span>

      <span
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-pink-500/20
          via-purple-500/20
          to-pink-500/20
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />
    </motion.button>
  );
}