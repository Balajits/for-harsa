import { useState } from "react";
import { motion } from "framer-motion";


export default function GiftReveal() {


    const [open, setOpen] = useState(false);



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
max-w-3xl
"

            >


                <p className="
text-pink-300
tracking-[5px]
text-sm
"

                >

                    ONE LAST THING

                </p>



                <h1 className="
luxury-font
text-5xl
md:text-7xl
mt-8
"

                >

                    I Have A Surprise
                    For You ❤️

                </h1>



                {
                    !open &&

                    <motion.button

                        whileHover={{
                            scale: 1.05
                        }}

                        whileTap={{
                            scale: 0.95
                        }}

                        onClick={() => setOpen(true)}

                        className="
mt-12
px-10
py-4
rounded-full
bg-pink-500
text-white
"

                    >

                        Reveal Surprise ✨

                    </motion.button>

                }



                {
                    open &&

                    <motion.div

                        initial={{
                            opacity: 0,
                            scale: 0.8
                        }}

                        animate={{
                            opacity: 1,
                            scale: 1
                        }}

                        transition={{
                            duration: 1
                        }}

                        className="
mt-12
bg-white/5
border
border-white/10
backdrop-blur-xl
rounded-3xl
p-10
"

                    >


                        <div className="
text-6xl
mb-6
">

                            🎁

                        </div>



                        <h2 className="
luxury-font
text-4xl
"

                        >

                            Surprise Unlocked ❤️

                        </h2>



                        <p className="
mt-8
text-xl
text-gray-300
leading-relaxed
"

                        >

                            Your little surprise
                            is waiting somewhere close...

                        </p>



                        <p className="
mt-6
text-pink-300
text-lg
"

                        >

                            Go find it 🚗❤️

                        </p>



                    </motion.div>

                }



            </motion.div>


        </section>

    )

}