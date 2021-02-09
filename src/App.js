import React, { useState } from "react";
import { useTrail, animated as a } from "react-spring";
import TextTrail from "./components/TextTrail";
import Card from "./components/Card";
import Trail from "./components/Trail";
import Parallax from "./components/Parallax";
import "./App.css";

const items = ["Item1", "Item2", "Item3", "Item4"];
const config = { mass: 5, tension: 2000, friction: 200 };

export default function App() {
  const [toggle, set] = useState(true);
  const [open, setOpen] = useState(true);

  useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <div className="component">
      <TextTrail
        items={["Item1", "Item2", "Item3", "Item4"]}
        backgroundColor={"#c7c7c7"}
      />
      <TextTrail
        items={["Item5", "Item6", "Item7", "Item8"]}
        backgroundColor={"#a9a4a4"}
      />
      <Trail open={open} onClick={() => setOpen(!open)}>
        <span>Lorem</span>
        <span>Ipsum</span>
        <span>Dolor</span>
        <span>Sit</span>
      </Trail>
      <Card />
      <Parallax />
    </div>
  );
}
