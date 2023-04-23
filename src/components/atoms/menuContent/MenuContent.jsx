import { IoLogoTwitter } from 'react-icons/io';
import { FaHashtag, FaEnvelope, FaRegBookmark } from 'react-icons/fa';
import { RiHome7Fill, RiNotification2Line } from 'react-icons/ri';

import MobileButton from '../mobileButton';
import './index.css';

const MenuContent = ({ setModalVisible }) => {
  const isCliked = () => {
    setModalVisible(true);
  };

  return (
    <div className="MenuContent">
      <ul>
        <li className="main-logo">
          <IoLogoTwitter className="logo" />
        </li>
        <li>
          <a href="#">
            <RiHome7Fill className="logo" />
            <p className="menu-text">home</p>
          </a>
        </li>
        <li>
          <a href="#">
            <FaHashtag className="logo" />
            <p className="menu-text">explore</p>
          </a>
        </li>
        <li>
          <a href="#">
            <RiNotification2Line className="logo" />
            <p className="menu-text">notifications</p>
          </a>
        </li>
        <li>
          <a href="#">
            <FaEnvelope className="logo" />
            <p className="menu-text">messages</p>
          </a>
        </li>
        <li>
          <a href="#">
            <FaRegBookmark className="logo" />
            <p className="menu-text">bookmarks</p>
          </a>
        </li>
        <li>
          <button onClick={isCliked} className="tweet-btn">
            tweet
          </button>
          <MobileButton clickFunc={isCliked} />
        </li>
      </ul>
    </div>
  );
};

export default MenuContent;
