import React from 'react'
import "./Card.css"
import Button from './Button'

function Card({imageSource, poolName})  {
    return (
        
        <div className="card-container">
            <img className="logo" src={imageSource} alt="logo" height="50" width="50"></img>

            <p className="description">{poolName}</p>
            
            <p>Current Projected Yield (APY) </p>
            
            <p>Current Deposits </p>
            <p>Your Deposits </p>

            {/* <Button color='white' text='Connect now'/> */}
             <Button buttonStyle='btn--outline'>CONNECT</Button>
        
        </div>
        
       
    )
}

Card.defaultProps = {
    poolName: 'USDC Pool'
}

export default Card
