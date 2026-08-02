import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import "./Hero.css";

export default function ScrollIndicator() {

    const scrollNext = () => {
        const nextSection = document.getElementById("love-letter");

        if (nextSection) {
            nextSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <motion.div
            className="scroll-indicator"
            animate={{ y: [0, 8, 0] }}
            transition={{
                repeat: Infinity,
                duration: 2,
            }}
            onClick={scrollNext}
            style={{ cursor: "pointer" }}
        >
            <span>Scroll to Continue &nbsp; <ChevronDown size={28} /></span>


        </motion.div>
    );
}