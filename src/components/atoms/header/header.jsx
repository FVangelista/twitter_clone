import "./index.css";
import { useState } from "react";
import { IoMdArrowBack, IoIosMore } from "react-icons/io";

const Header = ({ scroll, inputData, setInputData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputData);
  };
  const handleInput = (e) => setInputData(e.target.value);

  return (
    <div className={`Header ${scroll ? "scrollEffect" : ""}`}>
      <div className="nav-top">
        <a>
          <IoMdArrowBack />
        </a>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="search-bar"
            placeholder="search on twitter"
            value={inputData}
            onChange={handleInput}
          />
        </form>
        <a>
          <IoIosMore />
        </a>
      </div>
      <div className="nav-bottom">
        <ul>
          <li>popular</li>
          <li>news</li>
          <li>users</li>
          <li>photos</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
