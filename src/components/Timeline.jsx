import { motion } from "framer-motion";


export default function Timeline() {

    return (

        <section
            className="
min-h-screen
flex
items-center
justify-center
px-6
py-32
"
        >


            <motion.div

                initial={{
                    opacity: 0,
                    y: 80
                }}

                whileInView={{
                    opacity: 1,
                    y: 0
                }}

                viewport={{
                    once: true
                }}

                className="
text-center
max-w-3xl
"

            >


                <p className="
text-pink-300
tracking-widest
text-sm
mb-8
">

                    OUR STORY

                </p>


                <h1 className="
luxury-font
text-5xl
md:text-7xl
"

                >

                    June 24, 2026 ❤️

                </h1>


                <p className="
mt-10
text-xl
md:text-2xl
text-gray-300
leading-relaxed
"

                >

                    The day our story officially began.

                    A simple date...

                    but the beginning of countless memories,
                    smiles, and beautiful moments.

                </p>



                <div className="
mt-16
text-5xl
"

                >
                    ↓
                </div>



            </motion.div>


        </section>

    )

}