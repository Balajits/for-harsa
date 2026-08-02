import Aurora from "./Aurora";
import Stars from "./Stars";
import Moon from "./Moon";
import Clouds from "./Clouds";
import ShootingStars from "./ShootingStars";
import MouseGlow from "./MouseGlow";
import "./background.css";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#02030A]">

      {/* Base Sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#02030A] via-[#06091A] to-[#000000]" />

      {/* Aurora */}
      <Aurora />

      {/* Stars */}
      <Stars />

      {/* Moon */}
      <Moon />

      {/* Clouds */}
      <Clouds />

      {/* Shooting Stars */}
      <ShootingStars />

      {/* Mouse Glow */}
      <MouseGlow />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,.55) 100%)",
        }}
      />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.4) 1px, transparent 1px)",
          backgroundSize: "6px 6px",
        }}
      />
    </div>
  );
}