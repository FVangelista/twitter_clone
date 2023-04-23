import MenuContent from '../menuContent';
import './index.css';

const Menu = ({ setModalVisible }) => {
  return (
    <div className="Menu">
      <MenuContent setModalVisible={setModalVisible} />
    </div>
  );
};

export default Menu;
