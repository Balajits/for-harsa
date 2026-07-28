import { useState } from "react";
import { motion } from "framer-motion";
import TypeWriter from "./TypeWriter";


export default function LoveLetter(){


const [startTyping,setStartTyping] = useState(false);



const letter = `
Dear Harsa ❤️


On my birthday, I wanted to create
something special for you.


Because the best gift I have ever received
is not something I can hold...

It's you.


Thank you for your love,
your care,
your patience,
and every beautiful moment
we share together.


You make my ordinary days special
and my happiest moments unforgettable.


I promise to always stay loyal,
to respect you,
to support your dreams,
and to take care of your smile.


If I get a little possessive sometimes,
it's only because you are someone
very precious to me.


No matter where life takes us,
I want to keep creating memories
with you.


Forever yours,

Balaji ❤️
`;



return (

<section

className="
min-h-screen
flex
items-center
justify-center
px-5
py-32
"


>


<motion.div


initial={{
opacity:0,
y:80
}}


whileInView={{
opacity:1,
y:0
}}


viewport={{
once:true,
amount:0.3
}}


onViewportEnter={()=>setStartTyping(true)}


transition={{
duration:1
}}


className="

max-w-4xl
w-full

bg-white/5

backdrop-blur-2xl

border
border-white/10

rounded-[32px]

p-8
md:p-14

shadow-2xl

"


>



{/* Heading */}

<motion.h2

initial={{
opacity:0
}}

animate={{
opacity:startTyping ? 1 : 0
}}

transition={{
delay:0.5
}}

className="

luxury-font

text-4xl
md:text-6xl

text-center

mb-12

text-pink-300

"

>

A Letter For You ❤️

</motion.h2>





{/* Letter Content */}

<div

className="

font-serif

text-gray-200

text-lg
md:text-xl

leading-loose

whitespace-pre-line

"

>

<TypeWriter

text={letter}

speed={28}

start={startTyping}

/>


</div>



</motion.div>


</section>

)

}