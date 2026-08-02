import "./FinalMessage.css";
import { motion } from "framer-motion";

export default function FinalMessage() {
  return (
    <section className="final-section">

      <motion.div
        className="final-content"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >

        <p className="small-title">
          FOR MY FOREVER
        </p>

        <h2>
          Thank You ❤️
        </h2>

        <p className="message">

          Thank you for reading every little piece of my heart.

          <br /><br />

          Every photo...

          <br />

          Every memory...

          <br />

          Every word...

          <br /><br />

          was created because you made my life more beautiful.

          <br /><br />

          This website isn't my gift.

          <br />

          <span>You are.</span>

          <br /><br />

         

          I hope this is only the first of countless birthdays we'll celebrate together.

        </p>

        <motion.h3
          className="signature"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        >
          Forever Yours,
          <br />
          Balaji ❤️
        </motion.h3>

        <motion.p
          className="ending"

          initial={{ opacity: 0 }}

          whileInView={{ opacity: 1 }}

          transition={{
            delay: 2.5,
            duration: 1.5,
          }}
        >
          "The End... is only the beginning."
        </motion.p>

      </motion.div>

    </section>
  );
}