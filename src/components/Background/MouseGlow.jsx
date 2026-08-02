import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [mouse, setMouse] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const move = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="pointer-events-none absolute h-80 w-80 rounded-full bg-pink-500/5 blur-[120px]"
      animate={{
        x: mouse.x - 160,
        y: mouse.y - 160,
      }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 120,
      }}
    />
  );
}