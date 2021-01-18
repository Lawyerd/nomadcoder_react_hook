import React, { useEffect, useState, useRef } from "react";
import "./styles.css";

const useConfirm = (message = " ", confirmOk, confirmCancel) => {
  if (typeof confirmOk !== "function") {
    return;
  }
  if (typeof confirmCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      // message창을 띄어서 물어본다.
      confirmOk(); // 만약 OK를 눌렀으면 confirmOK창을 실행
    } else {
      confirmCancel(); // 만약 cancel을 눌렀으면 다음 창을 실행
    }
  };
  return confirmAction;
};

export default function App() {
  const deleteWorld = () => console.log("Deleting the World");
  const abort = () => console.log("shoud best choice");
  // 각각의 상황에 맞게 실행할 함수를 넣어준다.
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  return (
    <div className="App">
      <div>
        <button onClick={confirmDelete}>Delete the World</button>
      </div>
    </div>
  );
}
