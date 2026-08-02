import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export default function LoveCard({ reason, index }) {
  return (
    <motion.div
      className={`love-card card-${index + 1}`}
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
      }}
      whileHover={{
        y: -10,
      }}
    >
      {/* Image */}

      <div className="love-image">

        <img
          src={reason.image}
          alt={reason.title}
          loading="lazy"
        />

      </div>

      {/* Glow */}

      <div className="love-glow"></div>

      {/* Content */}

      <div className="love-content">

        <div className="heart-circle">

          <FaHeart />

        </div>

        <h3>{reason.title}</h3>

        <p>{reason.description}</p>

      </div>

    </motion.div>
  );
}