import { motion } from "framer-motion";

export default function Aurora() {
  return (
    <>
      <motion.div
        className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-pink-500/10 blur-[160px]"
        animate={{
          x: [0, 80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-purple-500/10 blur-[180px]"
        animate={{
          x: [0, -60, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-40 right-1/3 w-[500px] h-[500px] rounded-full bg-blue-400/10 blur-[170px]"
        animate={{
          y: [-30, 40, -30],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
}