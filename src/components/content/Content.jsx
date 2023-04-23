// Hooks
import { useState, useRef } from "react";

// Components

import Header from "../atoms/header";
import ContentList from "../contentList/ContentList";
import { RiQuillPenLine } from "react-icons/ri";

import "./index.css";

const Content = ({ setModalVisible, setPutModalVisible }) => {
  const isCliked = () => {
    setModalVisible(true);
  };

  const [inputData, setInputData] = useState("");

  // 09-03-2023 - README file for more details.
  // #1
  const mainContentRef = useRef(null);

  // 2#
  const scrollEffect = () => {
    // 3#
    mainContentRef.current.scrollTop >= 1 ? setScroll(true) : setScroll(false);
  };

  // 4#
  const [isScroll, setScroll] = useState(false);

  return (
    <div className="Content" ref={mainContentRef} onScroll={scrollEffect}>
      {/* #5 */}
      <Header
        scroll={isScroll}
        setInputData={setInputData}
        inputData={inputData}
      />
      <ContentList
        setPutModalVisible={setPutModalVisible}
        inputData={inputData}
      />
      <button onClick={isCliked} className="tweet-btn-mobile">
        <RiQuillPenLine />
      </button>
    </div>
  );
};

export default Content;
