import { useState } from "react";
import { motion } from "framer-motion";


export default function SecretGate({ onUnlock }) {

  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);


  const checkDate = () => {

    if (date === "2026-06-24") {

      setError("");
      onUnlock();

    } else {

      setError(
        "Almost there ❤️ This isn't our special day... try the day our beautiful journey began."
      );

      setShake(true);

      setTimeout(() => {
        setShake(false);
      }, 500);

    }

  };


  return (

    <div className="
      h-screen
      flex
      items-center
      justify-center
      bg-black
      text-white
      px-6
    ">


      <motion.div

        animate={
          shake
          ?
          {
            x:[
              -10,
              10,
              -10,
              10,
              0
            ]
          }
          :
          {}
        }


        initial={{
          opacity:0,
          y:40
        }}


        animate={{
          opacity:1,
          y:0
        }}


        className="
        text-center
        p-8
        rounded-3xl
        bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        max-w-md
        "

      >


        <div className="
          text-5xl
          mb-6
        ">
          ❤️
        </div>


        <h1 className="
          luxury-font
          text-4xl
          mb-4
        ">
          For Harsa
        </h1>


        <p className="
          text-gray-400
          mb-8
        ">
          Select the day our story officially started
        </p>



        <input

          type="date"

          value={date}

          onChange={(e)=>{
            setDate(e.target.value);
            setError("");
          }}


          className="
          bg-white/10
          border
          border-white/20
          rounded-full
          px-6
          py-3
          text-white
          outline-none
          "

        />



        <br />



        <button

          onClick={checkDate}

          className="
          mt-6
          px-8
          py-3
          rounded-full
          bg-pink-500
          hover:bg-pink-400
          transition
          "

        >

          Unlock Our Story ❤️

        </button>



        {
          error &&

          <motion.p

            initial={{
              opacity:0
            }}

            animate={{
              opacity:1
            }}

            className="
            mt-6
            text-pink-300
            text-sm
            "

          >

          {error}

          </motion.p>

        }



      </motion.div>


    </div>

  );

}