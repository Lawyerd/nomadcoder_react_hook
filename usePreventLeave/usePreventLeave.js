export const usePreventLeave = () => {
  const listener = event => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevet = () => window.addEventListener("beforeunload", listener);
  const disablePrevet = () =>
    window.removeEventListener("beforeunload", listener);
  return { enablePrevet, disablePrevet };
};
