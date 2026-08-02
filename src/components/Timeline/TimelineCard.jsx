import { motion } from "framer-motion";

export default function TimelineCard({ memory }) {
  return (
    <motion.div
      className={`timeline-card`}
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
        amount: 0.3,
      }}
      transition={{
        duration: 0.8,
      }}
    >
      <div className="timeline-image">

        <img
          src={memory.image}
          alt={memory.title}
        />

      </div>

      <div className="timeline-dot" />

      <div className="timeline-content">

        <span>{memory.date}</span>

        <h3>{memory.title}</h3>

        <p>{memory.description}</p>

      </div>

    </motion.div>
  );
}