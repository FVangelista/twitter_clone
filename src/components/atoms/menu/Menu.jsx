import MenuContent from "../menuContent";
import "./index.css";

const Menu = ({ setModalVisible }) => {
  return (
    <div className="Menu">
      <MenuContent setModalVisible={setModalVisible} />
      <p className="copy">&copy; by filippo</p>
    </div>
  );
};

export default Menu;
