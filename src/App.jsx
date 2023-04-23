import Content from './components/content';

import Menu from './components/atoms/menu';
import Trends from './components/atoms/trends';
import Modal from './components/modal';
import PutModal from './components/putModal/PutModal';
import PopUp from './components/atoms/popup';
// import PopUp from './components/atoms/popup';
import './App.css';

import { useState } from 'react';

function App() {
  const [isModal, setModal] = useState(false);
  const [isPutModal, setPutModal] = useState(false);
  const [isPopup, setPopup] = useState(false);

  return (
    <div className="App">
      <Menu setModalVisible={setModal} />

      <Content setModalVisible={setModal} setPutModalVisible={setPutModal} />

      <Trends />

      {isModal && <Modal setModalVisible={setModal} />}
      {isPutModal && <PutModal setPutModalVisible={setPutModal} />}
      <PopUp popUp={isPopup}>
        <button onClick={() => setPopup(true)}>accept</button>
      </PopUp>
    </div>
  );
}

export default App;
