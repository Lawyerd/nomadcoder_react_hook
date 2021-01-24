import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

const useFullscreen = callback => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    if (element.current) document.exitFullscreen();
    // Full screen에 들어갈때는 element를 통해서 들어가지만
    // 나올 때는 document를 통해서 나온다
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };
  return { element, triggerFull, exitFull };
};

export default function App() {
  const onFullS = isFull => {
    console.log(isFull ? "Full" : "Small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  // 이렇게 가져와서 element와 trigeerFull을 각각 다른 태그에 부착하는 것이 가능하다.
  return (
    <div className="App">
      <div ref={element}>
        <img src="https://i.pinimg.com/564x/25/cd/bf/25cdbfb4c026ab04e3754ae707a4c7eb.jpg" />
        <div>
          <button onClick={exitFull}>exit full screen</button>
        </div>
      </div>
      <div>
        <button onClick={triggerFull}>image full screen</button>
      </div>
    </div>
  );
}
