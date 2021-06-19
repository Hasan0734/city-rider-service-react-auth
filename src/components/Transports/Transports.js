import React from "react";
import { useHistory } from "react-router-dom";
import "./Transports.css";
const Transports = (props) => {
  const { name, img, id} = props.transport;
  const history = useHistory()
  const handleClick = (id) => {
    history.push(`./find-transport/${id}`)
    
  }
  return (
    <div className="col-md-3 mt-">
      <div onClick={() => handleClick(id)} className="card cars d-flex align-items-center justify-content-center">
        <div>
        <div className="d-flex justify-content-center">
          <img className="img" src={img} alt="" />
        </div>
        <h2 className="text-center mt-4">{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Transports;
