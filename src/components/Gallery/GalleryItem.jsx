import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export default function GalleryItem({ memory, index }) {
  return (
    <motion.div
      className={`gallery-item item-${index}`}
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
        // y: -10,
        scale: 1.02

      }}
    >
      <img
        src={memory.image}
        alt={memory.title}
      />

      {/* <div className="gallery-overlay">
        <h3>{memory.title}</h3>
        <p>{memory.description}</p>
      </div> */}
      <div className="moon-glow" />

      {/* Overlay */}
      <div className="gallery-overlay">

        <div className="gallery-info">

          {/* <div className="gallery-heart">
            <FaHeart />
          </div> */}

          <h3>{memory.title}</h3>

          <p>{memory.description}</p>

        </div>

      </div>

    </motion.div>
  );
}