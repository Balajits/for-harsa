import { motion } from "framer-motion";
import moon from "../../assets/images/moon.png";

export default function Moon() {
  return (
    <motion.img
      src={moon}
      alt="Moon"
      className="
        absolute
        top-8
        right-6
        w-36
        md:w-52
        lg:w-64
        drop-shadow-[0_0_60px_rgba(255,255,255,.35)]
        select-none
      "
      animate={{
        y: [-10, 10, -10],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      draggable={false}
    />
  );
}