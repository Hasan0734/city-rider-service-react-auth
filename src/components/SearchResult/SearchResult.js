import React from "react";
import "./SearchResult.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
const SearchResult = (props) => {
  const { pickForm, pickTo } = props.data;
  const riderData = [
    {
      id: 1,
      name: "Bike",
      img: "https://i.ibb.co/x5PpmdG/Frame.png",
      price: 64,
      seat: 4,
    },
    {
      id: 1,
      name: "Bike",
      img: "https://i.ibb.co/x5PpmdG/Frame.png",
      price: 54,
      seat: 4,
    },
    {
      id: 1,
      name: "Bike",
      img: "https://i.ibb.co/x5PpmdG/Frame.png",
      price: 45,
      seat: 4,
    },
    {
      id: 2,
      name: "Car",
      img: "https://i.ibb.co/bbpBJCv/Frame-2.png",
      price: 45,
      seat: 4,
    },
    {
      id: 2,
      name: "Car",
      img: "https://i.ibb.co/bbpBJCv/Frame-2.png",
      price: 45,
      seat: 4,
    },
    {
      id: 2,
      name: "Car",
      img: "https://i.ibb.co/bbpBJCv/Frame-2.png",
      price: 45,
      seat: 4,
    },
    {
      id: 3,
      name: "Bus",
      img: "https://i.ibb.co/z5FhmzS/Frame-1.png",
      price: 45,
      seat: 4,
    },
    {
      id: 3,
      name: "Bus",
      img: "https://i.ibb.co/z5FhmzS/Frame-1.png",
      price: 45,
      seat: 4,
    },
    {
      id: 3,
      name: "Bus",
      img: "https://i.ibb.co/z5FhmzS/Frame-1.png",
      price: 45,
      seat: 4,
    },
    {
      id: 4,
      name: "Train",
      img: "https://i.ibb.co/2ypS8kM/Group.png",
      price: 45,
      seat: 4,
    },
    {
      id: 4,
      name: "Train",
      img: "https://i.ibb.co/2ypS8kM/Group.png",
      price: 45,
      seat: 4,
    },
    {
      id: 4,
      name: "Train",
      img: "https://i.ibb.co/2ypS8kM/Group.png",
      price: 45,
      seat: 4,
    },
  ];
  const singleData = riderData.filter(
    (singleId) => singleId.id === Number(props.id)
  );
  return (
    <div>
      <div className="address-area d-flex">
        <div className="destination">
          <div className="point"></div>
          <div className="point point-2"></div>
        </div>
        <div className="address-name">
          <h3 className="first">{pickForm}</h3>
          <h3>{pickTo}</h3>
        </div>
      </div>
      {singleData.map((mettro) => (
        <div className="show-result">
          <div className="single-result">
            <div className="d-flex align-items-center">
              <img src={mettro.img} className="w-25 pe-3" alt="" />
              <h3 className="pe-3">{mettro.name}</h3>
              <h3 className="pe-3">
                <FontAwesomeIcon icon={faUserFriends} /> {mettro.seat}
              </h3>
            </div>
            <div>
              <h3>${mettro.price}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
