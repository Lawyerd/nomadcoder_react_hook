import React, { useEffect, useRef } from "react";
import "./styles.css";

const useFadeIn = (duration = 1, delay = 0) => {
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  const element = useRef(); // 이 값을 참조하는 것에 대한 정보를 가져올 수 있다.
  useEffect(() => {
    // 그리고 그 가져온 객체를 직접 수정한다. useEffect를 통해서 didMount될 때마다.
    if (element.current) {
      const { current } = element;
      current.style.transition = `ease-in-out ${delay}s opacity ${duration}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

export default function App() {
  const fadeInH1 = useFadeIn(3, 1);
  return (
    <div className="App">
      <div>
        <h1 {...fadeInH1}>Hello</h1>
      </div>
    </div>
  );
}
