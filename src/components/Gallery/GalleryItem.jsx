import { motion } from "framer-motion";
import { useState } from "react";

export default function GalleryItem({ memory, index }) {

  const [active, setActive] = useState(false);

  const isMobile = window.innerWidth <= 600;

  const handleClick = () => {
    if (isMobile) {
      setActive(!active);
    }
  };

  return (
    <motion.div
      className={`gallery-item item-${index} ${active ? "active" : ""}`}
      onClick={handleClick}
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
      }}
      whileHover={{
        scale: 1.02
      }}
    >

      <img
        src={memory.image}
        alt={memory.title}
      />

      <div className="moon-glow" />

      <div className="gallery-overlay">

        <div className="gallery-info">

          <h3>{memory.title}</h3>

          <p>{memory.description}</p>

        </div>

      </div>

    </motion.div>
  );
}