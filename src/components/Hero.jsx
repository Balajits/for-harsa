import { motion } from "framer-motion";


export default function Hero() {

  return (

    <section
      className="
      min-h-screen
      flex
      items-center
      justify-center
      px-6
      text-center
      relative
      overflow-hidden
      "
    >

      {/* Soft Background Glow */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-b
        from-pink-500/10
        via-transparent
        to-black
        pointer-events-none
        "
      />


      <motion.div

        initial={{
          opacity: 0,
          y: 50
        }}

        animate={{
          opacity: 1,
          y: 0
        }}

        transition={{
          duration: 1.2,
          ease: "easeOut"
        }}

        className="
        relative
        z-10
        max-w-5xl
        "

      >


        {/* Date */}
        <motion.p

          initial={{
            opacity:0
          }}

          animate={{
            opacity:1
          }}

          transition={{
            delay:0.5
          }}

          className="
          text-pink-300
          tracking-[6px]
          text-xs
          md:text-sm
          mb-10
          "

        >

          AUGUST 09, 2026

        </motion.p>



        {/* Main Heading */}
        <motion.h1

          initial={{
            opacity:0,
            scale:0.9
          }}

          animate={{
            opacity:1,
            scale:1
          }}

          transition={{
            duration:1,
            delay:0.8
          }}

          className="
          luxury-font
          text-5xl
          md:text-8xl
          font-semibold
          leading-tight
          "

        >

          My Birthday

        </motion.h1>




        {/* First Message */}
        <motion.p

          initial={{
            opacity:0,
            y:20
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            delay:1.8
          }}

          className="
          mt-12
          text-xl
          md:text-3xl
          text-gray-300
          "

        >

          But this day is not only about me...

        </motion.p>




        {/* Gift Message */}
        <motion.p

          initial={{
            opacity:0,
            y:20
          }}

          animate={{
            opacity:1,
            y:0
          }}

          transition={{
            delay:2.8
          }}

          className="
          mt-10
          text-2xl
          md:text-5xl
          luxury-font
          text-pink-400
          "

        >

          Because I already have
          <br/>
          the greatest gift...

        </motion.p>




        {/* YOU */}
        <motion.h2

          initial={{
            opacity:0,
            scale:0.7
          }}

          animate={{
            opacity:1,
            scale:1
          }}

          transition={{
            delay:4,
            duration:1,
            type:"spring"
          }}

          className="
          mt-8
          text-6xl
          md:text-8xl
          luxury-font
          text-white
          "

        >

          You ❤️

        </motion.h2>





        {/* Scroll Indicator */}
        <motion.div

          animate={{
            y:[0,10,0]
          }}

          transition={{
            duration:1.8,
            repeat:Infinity
          }}

          className="
          mt-24
          text-gray-400
          text-sm
          "

        >

          <div
            className="
            text-3xl
            mb-2
            "
          >
            ↓
          </div>


          <p>
            A little more awaits ❤️
          </p>


        </motion.div>



      </motion.div>



    </section>

  );

}