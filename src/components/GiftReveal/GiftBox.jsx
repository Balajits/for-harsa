import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import { FaGift } from "react-icons/fa";

export default function GiftBox() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="gift-container">

      {opened && (
        <Confetti
          recycle={false}
          numberOfPieces={250}
        />
      )}

      {!opened && <motion.div
        className={`gift-box ${opened ? "opened" : ""}`}
        animate={
          !opened
            ? {
                y: [0, -10, 0],
              }
            : {
                rotate: [0, -6, 6, -4, 4, 0],
              }
        }
        transition={{
          duration: opened ? 0.8 : 3,
          repeat: opened ? 0 : Infinity,
        }}
      >
        <FaGift className="gift-icon" />
      </motion.div>}

      {!opened && (
        <motion.button
          className="gift-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => setOpened(true)}
        >
          🎁 Open My Gift
        </motion.button>
      )}

      <AnimatePresence>

        {opened && (

          <motion.div
            className="gift-message"

            initial={{
              opacity: 0,
              y: 40,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 1,
              duration: .8,
            }}
          >

            <h3>For My Dearest Harsa ❤️</h3>

            <p>
            Everyone thinks the birthday person should receive gifts… but today, I already have the best gift in my life—you.
            </p>

            <p>
            Still, I wanted to give you something that reminds you how special you are to me. pls check the car 🚘
            </p>

          </motion.div>

        )}

      </AnimatePresence>

    </div>
  );
}