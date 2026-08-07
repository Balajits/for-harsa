import { useState } from "react";

import Background from "./components/Background/Background";
import Welcome from "./components/Welcome/Welcome";
import SecretGate from "./components/SecretGate/SecretGate";
import Hero from "./components/Hero/Hero";
import LoveLetter from "./components/LoveLetter/LoveLetter";
import Timeline from "./components/Timeline/Timeline";
import Gallery from "./components/Gallery/Gallery";
import LoveReasons from "./components/LoveReasons/LoveReasons";
import GiftReveal from "./components/GiftReveal/GiftReveal";
import FinalMessage from "./components/FinalMessage/FinalMessage";

export default function App() {
  const [stage, setStage] = useState("welcome");

  return (
    <>
      <Background />
      
      {stage === "welcome" && (
        <Welcome onBegin={() => setStage("secret")} />
      )}

      {stage === "secret" && (
        <SecretGate onUnlock={() => setStage("hero")} />
      )}

      {stage === "hero" && <Hero />}


      {stage === "hero" && <Timeline />}
      {stage === "hero" && <Gallery />}
      {stage === "hero" && <LoveReasons />} 
      {stage === "hero" && <LoveLetter />}
      {stage === "hero" && <GiftReveal />}
      {stage === "hero" && <FinalMessage />}


    </>
  );
}