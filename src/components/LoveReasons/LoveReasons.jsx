import "./LoveReasons.css";
import LoveCard from "./LoveCard";
import smile from "../../assets/images/smile2.JPG";
import care from '../../assets/images/care.JPG';
import eyes from '../../assets/images/eyes.JPG';
import kindness from '../../assets/images/l_three.JPEG';
import support from '../../assets/images/support2.JPG';
import simple from '../../assets/images/simply3.JPG'

const reasons = [
    {
        id: 1,
        image: smile,
        title: "Your Beautiful Smile...",
        description:
            "Every smile of yours brightens my darkest days.",
        message: "Every time you smile, I forget every problem in my life. I just want to keep seeing that smile forever. ❤️"

    },
    {
        id: 2,
        image: care,
        title: "Your Caring Heart",
        description:
            "You always think about others before yourself.",
        message: "Every time you smile, I forget every problem in my life. I just want to keep seeing that smile forever. ❤️"

    },
    {
        id: 3,
        image: eyes,
        title: "Your Eyes",
        description:
            "Every time I look into your eyes, I find peace.",
        message: "Every time you smile, I forget every problem in my life. I just want to keep seeing that smile forever. ❤️"

    },
    {
        id: 4,
        image: kindness,
        title: "Your Kindness",
        description:
            "Your kindness makes everyone around you feel loved.",
        message: "Every time you smile, I forget every problem in my life. I just want to keep seeing that smile forever. ❤️"

    },
    {
        id: 5,
        image: support,
        title: "Your Support",
        description:
            "You believe in me even when I doubt myself.",
        message: "Every time you smile, I forget every problem in my life. I just want to keep seeing that smile forever. ❤️"

    },
    {
        id: 6,
        image: simple,
        title: "Simply You",
        description:
            "I don't love you for one reason. I love you because you're you.",
        message: "Every time you smile, I forget every problem in my life. I just want to keep seeing that smile forever. ❤️"

    },
];

export default function LoveReasons() {
    return (
        <section className="reasons-section">

            <div className="reasons-header">

                <p>FOR YOU ❤️</p>

                <h2>
                    Six Little Things That Made Me Fall in Love With You
                </h2>

                <span>
                    Every little thing about you became one more reason
                    for me to fall in love with you.
                </span>

            </div>

            <div className="reasons-grid">

                {reasons.map((reason, index) => (
                    <LoveCard
                        key={reason.id}
                        reason={reason}
                        index={index}
                    />
                ))}

            </div>

        </section>
    );
}