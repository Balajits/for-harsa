import { motion } from "framer-motion";


export default function FinalMessage() {

    return (

        <section

            className="
min-h-screen
flex
items-center
justify-center
px-6
text-center
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
                    once: true,
                    amount: 0.3
                }}

                transition={{
                    duration: 1.2
                }}

                className="
max-w-3xl
"

            >


                <p

                    className="
text-pink-300
tracking-[5px]
text-sm
mb-10
"

                >

                    FOREVER

                </p>



                <h1

                    className="
luxury-font
text-5xl
md:text-7xl
"

                >

                    Thank You Harsa ❤️

                </h1>



                <motion.p

                    initial={{
                        opacity: 0
                    }}

                    whileInView={{
                        opacity: 1
                    }}

                    viewport={{
                        once: true
                    }}

                    transition={{
                        delay: 0.8
                    }}

                    className="
mt-10
text-xl
md:text-3xl
text-gray-300
leading-relaxed
"

                >

                    For being my happiness,
                    <br />

                    my peace,
                    <br />

                    and my favorite person.

                </motion.p>




                <motion.p

                    initial={{
                        opacity: 0
                    }}

                    whileInView={{
                        opacity: 1
                    }}

                    viewport={{
                        once: true
                    }}

                    transition={{
                        delay: 1.5
                    }}

                    className="
mt-10
text-lg
text-gray-400
leading-loose
"

                >

                    My birthday became special
                    because I have you.

                    <br /><br />

                    Thank you for every smile,
                    every moment,
                    and every memory.

                </motion.p>




                <motion.div

                    initial={{
                        scale: 0
                    }}

                    whileInView={{
                        scale: 1
                    }}

                    viewport={{
                        once: true
                    }}

                    transition={{
                        delay: 2,
                        type: "spring"
                    }}

                    className="
mt-12
text-5xl
"

                >

                    ❤️

                </motion.div>



                <p

                    className="
mt-8
text-pink-300
luxury-font
text-2xl
"

                >

                    Forever yours,

                    <br />

                    Balaji

                </p>



            </motion.div>


        </section>

    )

}