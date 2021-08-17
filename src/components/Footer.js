import React from 'react'

const Footer = () => {
  return (

    
    <footer id="footer" className="footer">
        

    <div className="rari-logo2">
      <img src="./images/rari.png" alt="Rari" height="75" />
    </div>

    <div className="footer__addr">
      <h1 className="footer__logo">Rari Capital</h1>
      


     
    </div>

    <ul className="footer__nav">
      <li className="nav__item">
        <h2 className="nav__title">PRODUCTS</h2>

        <ul className="nav__ul">
          <li>
            <a href="#">Earn</a>
          </li>

          <li>
            <a href="#">Tranches</a>
          </li>

          <li>
            <a href="#">Governance</a>
          </li>
        </ul>
      </li>

      <li className="nav__item">
        <h2 className="nav__title">RESOURCES</h2>

        <ul className="nav__ul">
          <li>
            <a href="#">About</a>
          </li>

          <li>
            <a href="#">Medium</a>
          </li>

          <li>
            <a href="#">FAQ</a>
          </li>

          <li>
            <a href="#">DeFi Pulse</a>
          </li>
        </ul>
      </li>

    
      <li className="nav__item">
        <h2 className="nav__title">RGT</h2>

        <ul className="nav__ul">
          <li>
            <a href="#">Coingecko</a>
          </li>

          <li>
            <a href="#">Buy with USD</a>
          </li>
          <li>
            <a href="#">Learn</a>
          </li>
        </ul>
      </li>
    

      <li className="nav__item">
        <h2 className="nav__title">COMMUNITIES</h2>

        <ul className="nav__ul">
          <li>
            <a href="#">Discord</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Youtube</a>
          </li>
        </ul>
      </li>
    </ul>

    <div className="legal">
      <p>&copy; 2021 Rari Capital. All rights reserved.</p>

      
    </div>

    
  </footer>
  )
}

export default Footer

