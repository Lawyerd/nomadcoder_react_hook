import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

const useNetwork = onChange => {
  const [status, setStatus] = useState(navigator.onLine);
  //navigator.onLine은 내 웹사이트가 온라인인지 아닌지에 대해서 true or false값을 설정해준다.
  // 이렇게 함으로써 navigator가 온라인인지 알 수 있다.

  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

export default function App() {
  const handleNetworkChange = online => {
    console.log(online ? "We just went online" : "We are offline");
  };
  const online = useNetwork(handleNetworkChange);
  return (
    <div className="App">
      <h1>{online ? "Online" : "Offline"}</h1>
      <div></div>
    </div>
  );
}
