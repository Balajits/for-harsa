import { motion } from "framer-motion";
import { memories } from "../data/memories";


export default function CinematicGallery() {


    return (

        <section
            className="
space-y-32
px-5
py-20
"
        >


            {
                memories.map((memory, index) => (


                    <motion.div

                        key={index}

                        initial={{
                            opacity: 0,
                            scale: 0.95
                        }}

                        whileInView={{
                            opacity: 1,
                            scale: 1
                        }}

                        viewport={{
                            once: true,
                            amount: 0.3
                        }}

                        transition={{
                            duration: 1
                        }}

                        className="
relative
"

                    >


                        <img

                            src={memory.image}

                            alt={memory.title}

                            loading="lazy"

                            className="
w-full
h-[70vh]
object-cover
rounded-3xl
"

                        />



                        <div

                            className="
absolute
bottom-0
left-0
right-0
p-8
rounded-b-3xl
bg-gradient-to-t
from-black
"

                        >


                            <p className="
text-pink-300
"

                            >
                                {memory.date}
                            </p>


                            <h2 className="
luxury-font
text-4xl
mt-2
"

                            >
                                {memory.title}
                            </h2>


                            <p className="
text-gray-300
mt-3
"

                            >
                                {memory.description}
                            </p>


                        </div>


                    </motion.div>


                ))
            }


        </section>

    )

}