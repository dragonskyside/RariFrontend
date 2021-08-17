import React, {useState} from 'react';
import './Fuse.css';
import Button from '../Button';
import FuseCard from './FuseCard';

function Fuse() {

    const [showElement, setShowElement] = useState(false);
    
    // const toggle = () => setShowElement(!showElement);
   
   


    return (
        
        <div className="fuse-container">

            <div className="fuse-header">
                <div className="col">Pool Assets</div>
                <div className="col">Pool Number</div>
                <div className="col">Total Supplied</div>
                <div className="col">Total Borrowed</div>
                <div className="col">Pool Risk Score</div>
                {/* <div className="col">Pool Risk Score</div> */}

            </div>

            <FuseCard />  
            <FuseCard />  
            <FuseCard />  
            <FuseCard />  
            <FuseCard />  
            <FuseCard />  
            <FuseCard />  
            <FuseCard />  


        </div>
    )
}


export default Fuse
