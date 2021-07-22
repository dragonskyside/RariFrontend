
import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay />

      <h3>  Rari Capital is a yield aggregator and open interest rate DeFi protocol.</h3>
      <p>   Our platform allows you deposit assets into our pool and earn
              yield. 
              You may borrow or lend assets or even create markets of your own.
              Join the ranks of elite DeFi investors who have discovered the
              RARI advantage.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
         ASSET POOLS
        </Button>

        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
         FUSE PROTOCOL
        </Button>

        <p>Built on the best technologies</p>

        <img src="./images/aave-3.png" alt="Aave logo" height="35" />
        <img src="./images/alpha.png" alt="alpha-finance-logo" height="35" />
        <img src="./images/sushiswap-2.png" alt="sushi-finance logo" height="35" />
        <img src="./images/yearn-2.png" alt="yearn-finance logo" height="35" />
        <img src="./images/synthetix-2.png" alt="Synthetix logo" height="35" />


        {/* <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
