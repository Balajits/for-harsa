import "./Gallery.css";
import GalleryItem from "./GalleryItem";
import PhotoTwo from "../../assets/images/triponeo.jpeg";
import PhotoOne from '../../assets/images/triptwo.JPEG';
import PhotoThree from "../../assets/images/l_one.JPEG";
import PhotoFour from "../../assets/images/bday.jpg";
import PhotoFive from "../../assets/images/templeMurugan.jpeg"

const memories = [
  {
    id: 4,
    image: PhotoTwo,
    title: "Our Default Destination 🏞️",
    description:
      "We came here once to spend time together... and somehow never really left. Every visit adds another memory, another selfie, another laugh, and another reason to come back. At this point, even Google Maps probably knows this is 'our place'.",
  },
  {
    id: 3,
    image: PhotoFive,
    title: "Murugan Finally Said Go Together!",
    description:
      "Visiting this temple had been my wish for a long time, but somehow the trip never happened. Now I know Murugan was simply saying, 'Wait... your partner hasn't arrived yet. Wait until she comes.' Looking back, I'm glad I listened without even knowing it. Fair enough... His plan was far more beautiful than mine. ❤️🙏",
  },
  {
    id: 1,
    image: PhotoOne,
    title: "Worst Rejection Plan Ever 😂",
    description:
      "Life writes the best stories when nobody is expecting them. We started as travellers enjoying beautiful days together. We came back as two hearts that finally found each other. Honestly... I still think 'Mogo Paja' was the best plot twist ever.",
  },
  
  
  {
    id: 2,
    image: PhotoFour,
    title: "Mission Failed Successfully ❤️😂",
    description:
      "I planned a secret birthday surprise, but you solved the mystery before the cake even arrived. 😄 I thought my plan had completely failed... until you smiled, looked at me, and said, 'Mogo Paja.' In that moment, I realized the cake was never the surprise—you were. And that night wasn't just another night... it became one of my favourite memories. I'm definitely not complaining though... keep surprising me like that forever. ❤️😉",
  },
  
 
  
  {
    id: 5,
    image: PhotoThree,
    title: "Nila... Athu Vaanathu Mela... 🌙",
    description:
      "Our first... and definitely not our last moon selfie. They say the moon heals broken hearts, but that night it seemed far more interested in watching two people fall deeper in love. As for our jungle nights... the jungle knows our story, the moon knows our secrets... and thankfully, both of them know how to keep quiet. 😉",
  },
];

export default function Gallery() {
  return (
    <section className="gallery-section">

      <div className="gallery-header">

        <p>BEST MOMENTS</p>

        <h2>Best Moments In Our Life</h2>

        <span>
          Every picture is a memory I never want to forget.
        </span>

      </div>

      <div className="gallery-grid">

        {memories.map((memory, index) => (
          <GalleryItem
            key={memory.id}
            memory={memory}
            index={index}
          />
        ))}

      </div>

    </section>
  );
}