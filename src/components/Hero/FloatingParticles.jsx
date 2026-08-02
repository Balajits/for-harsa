import { motion } from "framer-motion";

const particles = Array.from({ length: 20 });

export default function FloatingParticles() {
  return (
    <>
      {particles.map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 rounded-full bg-white/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [.2, 1, .2],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
          }}
        />
      ))}
    </>
  );
}