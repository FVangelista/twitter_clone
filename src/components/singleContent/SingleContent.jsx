import { useState, useEffect } from 'react';
import './index.css';

// Icons

import { BsUpload, BsChat, BsHeart, BsArrowDownUp } from 'react-icons/bs';

const SingleContent = ({ data, setPutModalVisible }) => {
  const { userId, body, tags } = data;

  const isCliked = () => {
    setPutModalVisible(true);
  };

  // #1
  const [singleData, setSingleData] = useState({});

  // #2
  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((res) => res.json())
      .then((element) => setSingleData(element));
  }, []);

  // #3
  return (
    <div className="single-content">
      <img
        src={singleData.image}
        alt={singleData.username}
        className="user-img"
      />
      <div className="text-info">
        <span>{singleData.username}</span>
        <span>{'@' + tags.join(' - ')}</span>
        <p>{body}</p>
        <div className="icons">
          <a href="#" className="icon">
            <BsChat />
          </a>
          <a href="#" onClick={isCliked} className="icon">
            <BsArrowDownUp />
          </a>
          <a href="#" className="icon">
            <BsHeart />
          </a>
          <a href="#" className="icon">
            <BsUpload />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleContent;
