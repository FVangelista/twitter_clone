import './index.css';

const PopUp = ({ popUp, children }) => {
  return (
    <div className={`PopUp ${popUp ? 'hide' : ''}`}>
      <h1>this is a pop up</h1>
      {children}
    </div>
  );
};

export default PopUp;
