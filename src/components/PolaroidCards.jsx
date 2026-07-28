import {motion} from "framer-motion";
import {memories} from "../data/memories";


export default function PolaroidCards(){


return (

<section

className="
px-6
py-32
"

>


<h1

className="
luxury-font
text-5xl
text-center
mb-20
"

>

Little Pieces Of Us ❤️

</h1>



<div

className="
flex
flex-wrap
justify-center
gap-10
"

>


{
memories.map((memory,index)=>(


<motion.div


key={index}


initial={{
opacity:0,
y:80,
rotate:index%2===0?-5:5
}}


whileInView={{
opacity:1,
y:0
}}


viewport={{
once:true
}}


transition={{
duration:0.8
}}



whileHover={{
scale:1.05,
rotate:0
}}


className="
bg-white
text-black
p-4
w-[280px]
rounded-sm
shadow-2xl
"


>


<img

src={memory.image}

alt={memory.title}

className="
w-full
h-[260px]
object-cover
"

/>


<div className="
py-5
text-center
"


>

<h2 className="
font-serif
text-xl
"

>

{memory.title}

</h2>


<p className="
text-sm
mt-3
"

>

{memory.caption}

</p>


</div>


</motion.div>


))
}


</div>


</section>

)

}