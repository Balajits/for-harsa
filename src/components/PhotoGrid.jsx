import { motion } from "framer-motion";
import { memories } from "../data/memories";


export default function PhotoGrid() {


    return (

        <section
            className="
px-5
py-32
"
        >


            <motion.div

                initial={{
                    opacity: 0,
                    y: 50
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
mb-16
"

            >

                <p className="
text-pink-300
tracking-[5px]
text-sm
">

                    MEMORIES

                </p>


                <h1 className="
luxury-font
text-5xl
mt-5
">

                    Our Little Moments ❤️

                </h1>


                <p className="
text-gray-400
mt-5
"

                >
                    Every picture has a story...
                </p>


            </motion.div>




            <div

                className="
grid
grid-cols-2
md:grid-cols-3
gap-4
max-w-6xl
mx-auto
"

            >


                {
                    memories.map((memory, index) => (


                        <motion.div

                            key={index}

                            initial={{
                                opacity: 0,
                                scale: 0.9
                            }}

                            whileInView={{
                                opacity: 1,
                                scale: 1
                            }}

                            viewport={{
                                once: true
                            }}

                            transition={{
                                delay: index * 0.1
                            }}

                            className="
overflow-hidden
rounded-2xl
"

                        >


                            <img

                                src={memory.image}

                                alt={memory.title}

                                loading="lazy"

                                className="
w-full
aspect-square
object-cover
hover:scale-110
transition
duration-700
"

                            />


                        </motion.div>


                    ))
                }


            </div>



        </section>

    )

}