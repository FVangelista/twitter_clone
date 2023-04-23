import './index.css';
import { RiQuillPenLine } from 'react-icons/ri';

const MobileButton = ({ clickFunc }) => {
  return (
    <div className="MobileButton">
      <button onClick={clickFunc} className="tweet-btn-mobile">
        <RiQuillPenLine />
      </button>
    </div>
  );
};

export default MobileButton;
