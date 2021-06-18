import React from "react";
import Header from "../Header/Header";
import Transports from "../Transports/Transports";
import "./Home.css";
const Home = () => {
  const transports = [
    { name: "Bike", img: "https://i.ibb.co/x5PpmdG/Frame.png", id: 1},
    { name: "Car", img: "https://i.ibb.co/bbpBJCv/Frame-2.png", id: 2},
    { name: "Bus", img: "https://i.ibb.co/z5FhmzS/Frame-1.png", id: 3},
    { name: "Train", img: "https://i.ibb.co/2ypS8kM/Group.png", id: 4},
  ];
  return (
    <div className="banar-area">
        <Header></Header>
      <div className="container">
        <div className="row middle-card">
          {transports.map((trans) => (
            <Transports transport={trans}></Transports>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
