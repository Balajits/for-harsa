import { motion } from "framer-motion";
import "./Hero.css";
import FloatingParticles from "./FloatingParticles";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {

    return (
        <section className="hero">

            <FloatingParticles />

            <motion.div
                className="hero-card"
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1,
                    ease: "easeOut",
                }}
            >

                <motion.p
                    className="hero-tag"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: .2 }}
                >
                    FOR SOMEONE WHO CHANGED MY LIFE
                </motion.p>

                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .5 }}
                >
                    Today is
                    <br />

                    <span>My Birthday.</span>
                </motion.h1>

                <motion.p
                    className="hero-message"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    Everyone thinks today
                    is about receiving gifts.
                    <br /><br />

                    But I already have
                    the greatest gift
                    in my life.
                    <br />

                    <span>You, Harsa.</span>
                </motion.p>

                <ScrollIndicator setNextScroll={() => setNextSection("letter")} />

            </motion.div>

        </section>
    );
}