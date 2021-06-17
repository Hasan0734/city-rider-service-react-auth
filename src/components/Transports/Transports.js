import React from "react";
import "./Transports.css";
const Transports = (props) => {
  const { name, img } = props.transport;
  return (
    <div className="col-md-3">
      <div className="card d-flex align-items-center justify-content-center">
        <div>
        <div className="d-flex justify-content-center">
          <img src={img} alt="" />
        </div>
        <h2 className="text-center mt-4">{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Transports;
