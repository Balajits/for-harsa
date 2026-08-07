import { motion } from "framer-motion";
import "./loveLetter.css";

export default function LoveLetter() {
  return (
    <section className="love-letter">

      {/* Intro */}

      <motion.div
        className="letter-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8 }}
      >
        <p>A LETTER WRITTEN ONLY FOR YOU</p>

        <h2>Before you continue...</h2>

        <span>
          There's something I wanted to give you.
        </span>
      </motion.div>

      {/* Letter */}

      <motion.article
        className="letter-paper"
        initial={{
          opacity: 0,
          y: 80
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true,
          amount: 0.35
        }}
        transition={{
          duration: 0.9
        }}
      >

        <h3>Dear Harsa ❤️</h3>

        <p>

        On my birthday, I realized something... the best gift in my life isn't something I can unwrap—it's you.

          <br /><br />

          Thank you for loving me, caring for me, and making every day brighter. I promise to stay loyal, protect your smile, and stand beside you through every chapter of life.

          <br /><br />

          If I get a little possessive sometimes, it's only because you're the most precious person in my world.


          <br /><br />

          I love you today, tomorrow, and always.


        </p>

        <div className="signature white">

          With Love,

          <br />

          Balaji ❤️

        </div>

      </motion.article>

    </section>
  );
}