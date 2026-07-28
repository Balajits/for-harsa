import { motion } from "framer-motion";


export default function LoadingScreen() {

    return (

        <div className="
h-screen
flex
items-center
justify-center
bg-black
text-white
">


            <motion.div

                initial={{ opacity: 0, scale: 0.8 }}

                animate={{
                    opacity: 1,
                    scale: 1
                }}

                transition={{
                    duration: 1.5
                }}

                className="text-center"

            >


                <div className="
text-pink-400
text-5xl
mb-8
">

                    ❤️

                </div>


                <h1 className="
luxury-font
text-4xl
mb-4
">

                    A little something

                </h1>


                <p className="
text-gray-400
tracking-widest
">

                    CREATED WITH LOVE

                </p>


                <p className="
mt-8
text-pink-300
">

                    For Harsa

                </p>


                <p className="
text-gray-500
">

                    by Balaji

                </p>


            </motion.div>


        </div>

    )

}