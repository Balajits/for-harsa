import { motion } from "framer-motion";

export default function Clouds() {
  return (
    <>
      <motion.div
        className="absolute top-24 -left-80 h-40 w-[650px] rounded-full bg-white/5 blur-[70px]"
        animate={{ x: [0, 250, 0] }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute top-[45%] right-[-300px] h-36 w-[600px] rounded-full bg-white/4 blur-[80px]"
        animate={{ x: [0, -250, 0] }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </>
  );
}