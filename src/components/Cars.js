import React from "react";
import "./Cars.css";
import suv from "../components/suv.json";
import coupe from "../components/coupe.json";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";

export const Bars = styled(FaBars)`
  display: none;
  color: #ffff;

  @media screen and (max-width: 668px) {
    display: block;
    position: absolute;
    top: -1vh;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 15;
  }
`;

const Cars = ({ item }) => {
  console.log(item);
  console.log(suv.suv);
  console.log(coupe.coupe);
  return (
    <>
      {/* Navigation bar */}
      <div id="home" className="navbar navv">
        <div>
          <a href="#ontop">
            <img
              className="logo "
              src="https://www.mercedes-benz.co.in/passengercars/_jcr_content/logo.noscale.cloudsvg.imageLogo.20180312094632.svg"
            />
          </a>
        </div>
        <div className="buttons">
          <ul>
            <li>
              <a className="btn_1" href="#top">
                Limousine
              </a>
            </li>
            <li>
              <a className="btn_1" href="#middle">
                SUV Range
              </a>
            </li>
            <li>
              <a className="btn_1" href="#bottom">
                Coupés
              </a>
            </li>
          </ul>
        </div>
        <div>
          <img
            className="amg2"
            alt="carimage"
            src="https://i.pinimg.com/originals/dd/28/62/dd2862efbcef5eb7729caf00f93cf58d.jpg"
          />
        </div>
        {/* <div className="bars"><Bars ></Bars></div> */}
        <Bars className="sandwhich"
          onClick={function () {
            // let n = document.querySelector(".navbar");
            // let t = n.getBoundingClientRect();
            // console.log(t);
            let x  = document.querySelector(".barss").offsetTop;
            console.log(x);
            if(x > '-500'  && x<'50'){
            document.querySelector(".barss").style.top = "10vh";
            // console.log(b);
            }else {
              document.querySelector(".barss").style.top = "-35vh";
              console.log(x);
            }
          }}
        ></Bars>
        {/* sandwhich starts ends here */}
      </div>
      {/* navigation bar ends here */}
      {/* sandwhich starts */}

      <div id="top" className="all">
        {/* Limousine cars */}

        <div id="title1" className="title">
          <span>Limousine</span>
        </div>
        <div className="cardcontainer">
          {item.map((elem, index) => {
            return (
              <>
                <div className="cards" key={index}>
                  <div className="info">
                    <div className="class">
                      <span>{elem.class}</span> <span>{elem.speed}</span>{" "}
                      <span>{elem.type}</span>
                    </div>
                    <div className="price">
                      <span>
                        <span>{elem.start} &#8377;</span>{" "}
                        <span>
                          {elem.price}
                          <sup>[a]</sup>
                        </span>
                      </span>
                    </div>
                    <div>
                      <img
                        className="amg"
                        src="http://s3.amazonaws.com/gt7sp-prod/decal/60/93/55/8215134177164559360_1.png"
                      />
                    </div>
                  </div>

                  <div>
                    <img className="carimage" src={elem.carimage} />
                  </div>
                  {/* <div className = "information"></div> */}
                </div>
              </>
            );
          })}
        </div>
        <div id="middle" className="suv">
          {/* suv cars */}
          <div id="middletop">
            <div className="title">
              <span>SUV Range</span>
            </div>
            <div className="cardcontainer">
              {suv.suv.map((elem) => {
                return (
                  <>
                    <div className="cards">
                      <div className="info">
                        <div className="class">
                          <span>{elem.class}</span> <span>{elem.speed}</span>{" "}
                          <span>{elem.type}</span>
                        </div>
                        <div className="price">
                          <span>
                            <span>{elem.start} &#8377;</span>{" "}
                            <span>
                              {elem.price}
                              <sup>[a]</sup>
                            </span>
                          </span>
                        </div>
                        <div>
                          <img
                            className="amg"
                            src="http://s3.amazonaws.com/gt7sp-prod/decal/60/93/55/8215134177164559360_1.png "
                            alt="Amg logo"
                          />
                        </div>
                      </div>

                      <div>
                        <img className="carimage" src={elem.carimage} />
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        {/* Coupe cars */}
        <div id="bottom" className="title">
          <span>Coupés</span>
        </div>
        <div className="cardcontainer">
          {coupe.coupe.map((elem) => {
            return (
              <>
                <div className="cards">
                  <div className="info">
                    <div className="class">
                      <span>{elem.class}</span> <span>{elem.speed}</span>{" "}
                      <span>{elem.type}</span>
                    </div>
                    <div className="price">
                      <span>
                        <span>{elem.start} &#8377;</span>{" "}
                        <span>
                          {elem.price}
                          <sup>[a]</sup>
                        </span>
                      </span>
                    </div>
                    <div>
                      <img
                        className="amg"
                        src="http://s3.amazonaws.com/gt7sp-prod/decal/60/93/55/8215134177164559360_1.png"
                      />
                    </div>
                  </div>

                  <div>
                    <img className="carimage" src={elem.carimage} />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div id="ontop"></div>
      {/* small navbar starts */}
      <div id="snavbar" className="barss navv">
        <div className="buttons1">
          <ul>
          <li>
              <a className="btn_2" href="#ontop">
                Home
              </a>
            </li>
            <br></br>
            <li>
              <a className="btn_2" href="#top">
                Limousine
              </a>
            </li>
            <br></br>
            <li>
              <a className="btn_2" href="#middle">
                SUV Range
              </a>
            </li>
            <br></br>
            <li>
              <a className="btn_2" href="#bottom">
                Coupés
              </a>
            </li>
            <br></br>
          </ul>
        </div>
      </div>
      {/* small navbar ends */}
    </>
  );
};
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("home").style.top = "0";
  } else {
    document.getElementById("home").style.top = "-85px";
  }
  prevScrollpos = currentScrollPos;
};
// {
// var prevScroll = window.pageYOffset;
// window.onscroll = function () {
//   var currentScroll = window.pageYOffset;
//   if (prevScroll > currentScroll) {
//     document.getElementsByClassName(".navv").style.top = "0";
//   } else {
//     document.getElementsByClassName(".navv").style.top = "-85px";
//   }
//   prevScroll = currentScroll;
// };
// }
document.addEventListener("mousemove", function () {
  if ((document.querySelector(".navbar").style.top = "0")) {
    document.querySelector(".navbar").style.top = "0vh";
  }
});
// let bar = document.getElementsByTagName('Bars');
// Array.from(bar).addEventListener('click', function(){
//   document.getElementById('snavbar').style.top="10vh"
// })
// document.onmousemove = resetTimer;
// document.onclick = resetTimer;

// function resetTimer = function() {
//   clearTimeout(timeout);
//   timeout = setTimeout(function(){alert("3 minute warning");}, 3*60*1000);
// }
export default Cars;
