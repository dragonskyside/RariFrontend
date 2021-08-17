// import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children,
    // type,
    onClick,
    buttonStyle,
    buttonSize,
    toggle
   
    
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    if (STYLES[1] && children === 'FUSE') {
        return (
            <Link to='/Fuse' className='btn-mobile'>
                <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                // type={type}
                >
                    {children}
                </button>
                </Link>
    
                
        );
        
    } 

    else if (STYLES[1] && children === 'ASSET POOLS') {
        return (
            <Link to='/Pools' className='btn-mobile'>
                <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                // type={type}
                >
                    {children}
                </button>
                </Link>
    
                
        );
    };


     if (STYLES[1] && children === 'OPEN') {
        return (
            // <Link to='#' className='btn-mobile'>
                <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={toggle}
                >
                    {children}
                </button>
                // </Link>
        )};


    
    
      return (
        <Link to='/' className='btn-mobile'>
            <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            // type={type}
            >
                {children}
            </button>
            </Link>

            
    );

    };

export default Button