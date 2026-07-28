import { useEffect, useState } from "react";


export default function TypeWriter({ text, speed = 40, start = false }) {

  const [display, setDisplay] = useState("");

  useEffect(() => {

    if (!start) return;


    let index = 0;

    setDisplay("");


    const timer = setInterval(() => {

      setDisplay(text.slice(0, index));

      index++;


      if (index > text.length) {
        clearInterval(timer);
      }


    }, speed);


    return () => clearInterval(timer);


  }, [start, text, speed]);



  return (

    <p>

      {display}

      <span className="animate-pulse text-pink-400">
        |
      </span>

    </p>

  );

}