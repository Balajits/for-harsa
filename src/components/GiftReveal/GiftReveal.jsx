import "./GiftReveal.css";
import GiftBox from "./GiftBox";

export default function GiftReveal() {
  return (
    <section className="gift-section">

      <div className="gift-header">

        <p>ONE LAST SURPRISE</p>

        <h2>I Saved Something Special For You</h2>

        <span>
          Before you reach the end of this little journey,
          there's one more surprise waiting for you...
        </span>

      </div>

      <GiftBox />

    </section>
  );
}