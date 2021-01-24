import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

const useScroll = () => {
  const [state, setState] = useState({ x: 0, y: 0 });

  const onScroll = () => {
    setState({ x: window.scrollX, y: window.scrollY });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};

export default function App() {
  const { y } = useScroll();
  return (
    <div className="App" style={{ width: "1000vh", height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 500 ? "red" : "blue" }}>Hi</h1>
      <div></div>
    </div>
  );
}
