import { motion } from "framer-motion";

export default function ShootingStars() {
  return (
    <>
      {[1, 2, 3].map((item) => (
        <motion.div
          key={item}
          className="absolute h-[2px] w-40 rotate-45 bg-gradient-to-r from-white to-transparent"
          style={{
            top: `${10 + item * 15}%`,
            left: `${item * 20}%`,
          }}
          animate={{
            x: [0, 400],
            y: [0, 250],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 1.2,
            delay: item * 4,
            repeat: Infinity,
            repeatDelay: 10,
          }}
        />
      ))}
    </>
  );
}