import React, { useState } from "react";
import "./Card.css";
import Button from "./Button";
import AddTasks from "./AddTasks";

function Card({ imageSource, poolName }) {
  const [showElement, setShowElement] = useState(false);

  return (
    <div className="card-container">
      <img
        className="logo"
        src={imageSource}
        alt="logo"
        height="50"
        width="50"
      ></img>

      <p className="description">{poolName}</p>

      {/* <div className="cardData"> */}

      <p>Current Projected Yield (APY) </p>

      <p>Current Deposits </p>
      <p>Your Deposits </p>

      <Button
        buttonStyle="btn--outline"
        buttonSize="medium"
        toggle={() => setShowElement(!showElement)}
      >
        CONNECT
      </Button>

      {showElement && <AddTasks />}
    </div>
  );
}

Card.defaultProps = {
  poolName: "USDC Pool",
};

export default Card;
