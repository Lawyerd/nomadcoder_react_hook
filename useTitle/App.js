import React, { useEffect, useState } from "react";
import "./styles.css";

const useTitle = initialTitle => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

export default function App() {
  const titleUpdater = useTitle("Loading...");
  // 위 함수로 인해서 title이 변경되면 useTitle안에 있는 useEffect가 실행된다.

  setTimeout(() => titleUpdater("junseok"), 5000);

  return (
    <div className="App">
      <div></div>
    </div>
  );
}
