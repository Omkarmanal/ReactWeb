import React, { useState } from "react";
import Cars from "./components/Cars";
import Navbar from "./components/Navbar";
import amgcars from "./components/amgcars.json";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  console.log(amgcars.cars);
  const [data, setData] = useState(amgcars.cars);
  console.log(data);
  return (
    <div>
      {/* <div className="navbar">
        <div>
          <img className="logo "src="https://www.mercedes-benz.co.in/passengercars/_jcr_content/logo.noscale.cloudsvg.imageLogo.20180312094632.svg"/>
        </div>
        <div className="buttons">
            <button className="btn_1" href="#top" activeStyle>Limousine</button>
            <button className="btn_1" activeStyle>SUV Range</button>
            <button className="btn_1" activeStyle>Coupés</button>
        </div>
        <div >
          <img className="amg2" src="https://i.pinimg.com/originals/dd/28/62/dd2862efbcef5eb7729caf00f93cf58d.jpg"/>
        </div>
        </div> */}
      <div className="black">
        <div className="slider">
          <div className="slides">
            <input type="radio" name="radio-btn" id="radio1" />
            <input type="radio" name="radio-btn" id="radio2" />
            <input type="radio" name="radio-btn" id="radio3" />
            <input type="radio" name="radio-btn" id="radio4" />
            <div className="slide first">
              {/* slideshow images*/}
              <img src="https://wallpaperaccess.com/full/2405858.jpg" alt="/" />
            </div>
            <div className="slide">
              <img src="https://wallpaperaccess.com/full/1921806.jpg" alt="/" />
            </div>
            <div className="slide">
              <img src="https://wallpapercave.com/wp/wp7146319.jpg" alt="/" />
            </div>
            <div className="slide">
              <img src="https://wallpapercave.com/wp/wp7146577.jpg" alt="/" />
            </div>
            {/* automatic navigation */}
            <div className="navigation-auto">
              <div className="auto-btn1"></div>
              <div className="auto-btn2"></div>
              <div className="auto-btn3"></div>
              <div className="auto-btn4"></div>
            </div>
          </div>
          {/* manual navigation  */}
          <div className="navigation-manual">
            <label for="radio1" className="manual-btn"></label>
            <label for="radio2" className="manual-btn"></label>
            <label for="radio3" className="manual-btn"></label>
            <label for="radio4" className="manual-btn"></label>
          </div>
        </div>
        <Cars item={data} />
      </div>
    </div>
  );
};
var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);
export default App;
