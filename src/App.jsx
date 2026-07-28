import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import SecretGate from "./components/SecretGate";
import Hero from "./components/Hero";
import LoveLetter from "./components/LoveLetter";
import Timeline from "./components/Timeline";
import CinematicGallery from "./components/CinematicGallery";
import PhotoGrid from "./components/PhotoGrid";
import PolaroidCards from "./components/PolaroidCards";
import LoveReasons from "./components/LoveReasons";
import GiftReveal from "./components/GiftReveal";
import FinalMessage from "./components/FinalMessage";
function App() {


  const [loading, setLoading] = useState(true);

  const [unlock, setUnlock] = useState(false);



  setTimeout(() => {

    setLoading(false)

  }, 3000);



  if (loading)
    return <LoadingScreen />


  if (!unlock)
    return <SecretGate onUnlock={() => setUnlock(true)} />


  return (

    <div>

      <Hero />

      <LoveLetter />
      <Timeline />

      


<CinematicGallery />

<PhotoGrid />

<PolaroidCards />
<LoveReasons />

<GiftReveal />
<FinalMessage />


    </div>

  )


}


export default App;