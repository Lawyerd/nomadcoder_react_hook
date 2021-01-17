import React, { useState } from "react";
import "./styles.css";

const practiceHook = () => {
  const [item, setItem] = useState(0);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return item;
};

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    let willUpdate = true;
    if (typeof validator === "function") {
      console.log(validator(value));
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(event.target.value);
      console.log(value);
    }
  };
  return { value, onChange };
};

export default function App() {
  const maxLen = value => !value.includes("@"); // 이러한 함수(규칙)를 정의해서
  const name = useInput("Mr. ", maxLen); // 여기에다가 넣어준다

  return (
    <div className="App">
      <div>
        <input placeholder="Name" value={name.value} onChange={name.onChange} />
        {/* <input placeholder="Name" {...name} />  이렇게 하면 name을 unpack해서 name의 모든 값을 가져온다.*/}
      </div>
    </div>
  );
}
