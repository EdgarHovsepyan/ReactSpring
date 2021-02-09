import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";
import "../assets/card_styles.css";

const Card = () => {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <div onClick={() => set((state) => !state)} className="card">
      <a.div
        className="c back"
        style={{ opacity: opacity.to((o) => 1 - o), transform }}
      />
      <a.div
        className="c front"
        style={{
          opacity,
          transform: transform.to((t) => `${t} rotateX(180deg)`),
        }}
      />
    </div>
  );
};

export default Card;
