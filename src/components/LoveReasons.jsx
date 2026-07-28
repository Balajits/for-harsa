import { motion } from "framer-motion";


const reasons = [

    {
        emoji: "❤️",
        title: "Your Love",
        text: "The way you love me makes every day more beautiful."
    },

    {
        emoji: "🤍",
        title: "Your Care",
        text: "The little things you do always make me feel special."
    },

    {
        emoji: "🌸",
        title: "Your Heart",
        text: "Your kindness and the person you are make me proud."
    },

    {
        emoji: "✨",
        title: "Your Smile",
        text: "Your smile is one of my favorite things in this world."
    },

    {
        emoji: "🌙",
        title: "Your Support",
        text: "Thank you for always believing in me."
    },

    {
        emoji: "∞",
        title: "Our Journey",
        text: "I want to create thousands of memories with you."
    }

];


export default function LoveReasons() {


    return (

        <section

            className="
min-h-screen
px-6
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
mb-20
"

            >


                <p className="
text-pink-300
tracking-[5px]
text-sm
">

                    WHY YOU

                </p>


                <h1 className="
luxury-font
text-5xl
md:text-7xl
mt-5
"

                >

                    Things I Love About You ❤️

                </h1>


            </motion.div>



            <div

                className="
grid
grid-cols-1
md:grid-cols-3
gap-6
max-w-6xl
mx-auto
"

            >


                {
                    reasons.map((reason, index) => (


                        <motion.div

                            key={index}

                            initial={{
                                opacity: 0,
                                y: 60
                            }}

                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}

                            viewport={{
                                once: true
                            }}

                            transition={{
                                delay: index * 0.1
                            }}

                            className="
bg-white/5
backdrop-blur-xl
border
border-white/10
rounded-3xl
p-8
text-center
"

                        >


                            <div className="
text-5xl
mb-5
">

                                {reason.emoji}

                            </div>


                            <h2 className="
luxury-font
text-2xl
mb-4
">

                                {reason.title}

                            </h2>


                            <p className="
text-gray-400
leading-relaxed
">

                                {reason.text}

                            </p>


                        </motion.div>


                    ))
                }


            </div>


        </section>

    )

}