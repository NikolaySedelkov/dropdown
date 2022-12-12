import './App.css';
import { useState } from 'react';
import DropdownList from "./DropdownList.js";

function App() {
  var option = ["Profile information", "Change Password", "BecomePRO", "Help", "Log out"];
  const [curOption, setOption] = useState(option[0]);
  const setTitle = (localOption) => {
      setOption(localOption);
  }
  const [isOpen, setOpen] = useState(false);
  const toggleList = () =>{
    setOpen(!isOpen);
  } 
  return (
    <div className="App">
      <header className="App-header"  onClick={toggleList}>
        <span>ACOUNT SETTING</span>
        <div className="contenier__box">
          <div className="box"></div>
        </div>
      </header>
  
        <DropdownList data={option} current={curOption} func={setTitle} _class={isOpen?"open":null}/>
  
      </div>
  );
}

export default App;
