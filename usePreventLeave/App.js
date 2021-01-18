import React from "react";
import "./styles.css";

const usePreventLeave = () => {
  const listener = event => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevet = () => window.addEventListener("beforeunload", listener);
  const disablePrevet = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevet, disablePrevet };
};

export default function App() {
  const { enablePrevet, disablePrevet } = usePreventLeave();
  return (
    <div className="App">
      <div>
        <button onClick={enablePrevet}>Protect</button>
        <button onClick={disablePrevet}>Unprotect</button>
      </div>
    </div>
  );
}
