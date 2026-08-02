import { motion } from "framer-motion";
import BeginButton from "./BeginButton";

export default function Welcome({ onBegin }) {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-3xl text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -6, 0],
          }}
          transition={{
            opacity: { duration: 1 },
            scale: { duration: 1 },
            y: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="mb-8 text-4xl md:text-5xl"
        >
          🌙
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-3 text-sm tracking-[0.35em] text-zinc-400 uppercase"
        >
          For Harsa
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-5xl font-semibold leading-tight text-white md:text-7xl"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          Welcome
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-300 md:text-xl"
        >
          To something I made just for you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-12"
        >
          <BeginButton onClick={onBegin} />
        </motion.div>
      </motion.div>
    </section>
  );
}