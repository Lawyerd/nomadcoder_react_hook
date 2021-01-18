export const useClick = onClick => {
  const element = useRef();
  useEffect(() => {
    // useEffect에 들어있는 함수는
    // component가 didMount되거나 didUpdate될 때 실행된다.
    if (element.current) {
      // element가 current하다면 === element가 어떤 값을 참조하고 있다면,
      element.current.addEventListener("click", onClick);
      // 여기서 첫번째 들어가는 인자"click"은 click되었을 때 두번째 인자인 onClick함수를 실행시킨다는 의미
      // 이러한 이벤트를 element가 지목하고 있는 current에 부착하겠다!
    }
    return () => {
      // return은  componentWillUnmount일 때 실행시킬 함수를 적는다.
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};
