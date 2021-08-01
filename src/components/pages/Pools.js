// import React from 'react'
import Card from "../Card"
import './pools.css'

function Pools() {
    return (
        <div className="pool-cards">
         <Card imageSource="/images/index.png" />
         <Card imageSource="/images/eth.png" poolName="DAI Pool"/>
         <Card imageSource="/images/yield.png" poolName="Yield Pool"/>
         <Card imageSource="/images/eth.png" poolName="ETH Pool"/>

       
        </div>
    )
}

export default Pools
