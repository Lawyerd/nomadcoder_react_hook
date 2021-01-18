import React, { useEffect, useState, useRef } from "react";
import "./styles.css";

export const useConfirm = (message = " ", confirmOk, confirmCancel) => {
  if (!confirmOk || typeof confirmOk !== "function") {
    return;
  }
  if (confirmCancel && typeof confirmCancel !== "function") {
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
