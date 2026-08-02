import "./Timeline.css";
import TimelineCard from "./TimelineCard";
import TimeLineOne from "../../assets/images/one.jpg";
import TimeLineTwo from "../../assets/images/two.jpg";
import TimeLineThree from "../../assets/images/three.jpg";
const memories = [
    {
        id: 1,
        date: "Proof That We Look Cute Together(1st Selfie)",
        title: "We Didn't Know We'd Become Us",
        description:
            "I only wanted a nice picture... but somehow you walked away with my heart too. Looking back, I guess that was a pretty fair trade.",
        image: TimeLineOne,
    },
    {
        id: 2,
        date: "Mission: Family Meet-Up",
        title: "Objective: Survive the First Family Meet",
        description:
            "The parents talked. The moms smiled. My sister kept everyone laughing. Your friend enjoyed the whole show. And when everything finally settled down, we stole one quiet little moment for ourselves... and captured our ''We Did It!'' selfie—the perfect ending to a day we'll never forget.",
        image: TimeLineTwo,
    },
    {
        id: 3,
        date: "Too Late to Run Now",
        title: "The Beginning of Our Forever",
        description:
            "After this day, there was no 'me' or 'you'... only 'us. From this moment on, every dream, every celebration, every adventure, and even every little argument belongs to both of us.You're officially stuck with this over-loving, over-caring, selfie-obsessed guy forever. Which means you'll have to survive my terrible jokes, random singing, endless selfies, and all the love I have to give.Too late to change your mind... because I'm never letting you go.",
        image: TimeLineThree,
    },
];

export default function Timeline() {
    return (
        <section className="timeline-section">

            <div className="timeline-header">

                <p>OUR JOURNEY</p>

                <h2>Every Love Story Has A Beginning</h2>

                <span>
                    Here are some of the moments that made our story so special.
                </span>

            </div>

            <div className="timeline">

                <div className="timeline-line" />

                {memories.map((memory, index) => (
                    <TimelineCard
                        key={memory.id}
                        memory={memory}
                    />
                ))}

            </div>

        </section>
    );
}