import React, { useState } from "react";
import Card from "../Card";
import AddTasks from "../AddTasks";
import "./pools.css";
import "../AddTasks.css";
import Footer from "../Footer";

function Pools() {
  const [showElement, setShowElement] = useState(true);
  return (
    <>
      <div className="pool-cards">
        <Card imageSource="/images/index.png" />
        <Card imageSource="/images/eth.png" poolName="DAI Pool" />
        <Card imageSource="/images/yield.png" poolName="Yield Pool" />
        <Card imageSource="/images/eth.png" poolName="ETH Pool" />
      </div>
      <Footer/>
    </>
  );
}

export default Pools;
