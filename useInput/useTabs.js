import React, { useState } from "react";
import "./styles.css";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2",
  },
];

const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

export default function App() {
  const { currentItem, changeItem } = useTabs(0, content);
  // useTabs에서 두가지 return값(함수 두개)를 가져온다.
  return (
    <div className="App">
      <div>
        {content.map((
          section,
          index // content 배열의 각 원소들에게 명령합니다. 다음 함수를 실행하세요
        ) => (
          <button onClick={() => changeItem(index)}>{section.tab}</button>
          // onClick의 인자는 이런식으로 함수 형태로 만들어줘야 한다.
        ))}
      </div>
      {currentItem.content}
    </div>
  );
}
