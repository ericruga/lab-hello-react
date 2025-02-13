import './App.css';
import logo from './images/ironhack-logo-xs.png';
import menu from './images/menu-top-xs.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';

import LogoImage from "./components/LogoImage";
import MenuImage from "./components/MenuImage";
import HeaderText from "./components/HeaderText";
import HeaderButton from "./components/HeaderButton";
import MenuIcons from "./components/MenuIcons";


function App() {
  return (
<div className="App">
  <div className="Main">
    <img src={logo}/>
    <img src={menu}/>
    <h1>Say hello to ReactJS</h1>
    <p>You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
  </div>
  <div className="Second">
    <div className="Second1">
      <img src={icon1} max-width="20px" max-heigth="20px" alt="icon1"/>
      <p>React makes it painless to create interactive UIs.</p>
    </div>
    <div className="Second2">
    <img src={icon2} max-width="20px" max-heigth="20px" alt="icon2"/>
      <p>Build encapsulated components that manage their state.</p>
    </div>
    <div className="Second3">
    <img src={icon3} max-width="20px" max-heigth="20px" alt="icon3"/>
      <p>A set of immutable values are passed to the component's.</p>
    </div>
    <div className="Second4">
    <img src={icon4} max-width="20px" max-heigth="20px" alt="icon4"/>
      <p>Statically-typed, designed to run on modern browsers.</p>
    </div>
  
  </div>
</div>

  );
}
export default App;

