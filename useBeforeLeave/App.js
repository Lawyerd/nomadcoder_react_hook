import React, { useEffect } from "react";
import "./styles.css";

const useBeforeLeave = onBefore => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = event => {
    const { clientY } = event;
    if (clientY <= 0) {
      // 이렇게 하면 위로 나가는 경우만 컨트롤할 수 있다.
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

export default function App() {
  const begForLife = () => console.log("Plz dont leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>Hello</h1>
      <div></div>
    </div>
  );
}
