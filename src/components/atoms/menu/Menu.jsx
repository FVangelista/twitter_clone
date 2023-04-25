import { RiGithubLine } from "react-icons/ri";
import "./index.css";
import MenuContent from "../menuContent";

const Menu = ({ setModalVisible }) => {
  return (
    <div className="Menu">
      <MenuContent setModalVisible={setModalVisible} />
      <p className="copy">
        &copy; by filippo{" "}
        <a href="https://github.com/FVangelista">
          <RiGithubLine className="icon" />
        </a>
      </p>
    </div>
  );
};

export default Menu;
