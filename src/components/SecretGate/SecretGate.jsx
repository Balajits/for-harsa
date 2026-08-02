import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./secret.css";
import { CalendarHeart } from "lucide-react";

const correctDate = "2026-06-24";

const messages = [
  "Hmm... I think your heart remembers our special day ❤️",
  "Almost... try the date that changed our lives 🌙",
  "That day is unforgettable to me. Give it another try 💕",
  "Close... but our story deserves the right beginning ✨",
  "The moon remembers it... maybe you do too 🌙",
];

export default function SecretGate({ onUnlock }) {
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [unlocking, setUnlocking] = useState(false);

  function handleContinue() {
    if (date === correctDate) {
      setUnlocking(true);

      setTimeout(() => {
        onUnlock();
      }, 2200);

      return;
    }

    const random =
      messages[Math.floor(Math.random() * messages.length)];

    setMessage(random);
  }

  return (
    <section className="secret-screen">

      <AnimatePresence>

        {!unlocking && (

          <motion.div
            className="secret-card"
            initial={{ opacity: 0, scale: .9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: .95 }}
            transition={{ duration: .6 }}
          >

            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
            >
              <CalendarHeart
                size={55}
                color="#FF5DAF"
              />
            </motion.div>

            <h2>One Little Question</h2>

            <p>
              When did our official story begin?
            </p>

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="secret-input"
            />

            <button
              className="secret-btn"
              onClick={handleContinue}
            >
              Continue
            </button>

            {message && (

              <motion.p
                className="error-message"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {message}
              </motion.p>

            )}

          </motion.div>

        )}

      </AnimatePresence>

      {unlocking && (

        <motion.div
          className="unlock-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >

          <motion.h1
            initial={{ scale: .8 }}
            animate={{ scale: 1 }}
          >
            🌙
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .4 }}
          >
            Unlocking our story...
          </motion.h2>

        </motion.div>

      )}

    </section>
  );
}