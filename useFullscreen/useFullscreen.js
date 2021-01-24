export const useFullscreen = callback => {
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
