import React, {useState} from 'react';
import './Fuse.css';
import Button from '../Button';
import FuseCard from './FuseCard';
import Footer from '../Footer';


function Fuse() {

    const [showElement, setShowElement] = useState(false);
    
    // const toggle = () => setShowElement(!showElement);
   
   


    return (
       <> 
        <div className="fuse-container">

            <div className="fuse-description">
                <div className="lt-panel">
                    <p className="fuseName">FUSE</p>
                    <p>The first truly open interest rate protocol.<br/>
                        Lend, borrow and create isolated lending markets with unlimited flexibility</p>
                </div>
                <div className="rt-panel">
                    TOTAL VALUE SUPLIED ACROSS FUSE
                </div>
            </div>

        
                     
            

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
        <Footer />
        </>
    )
}


export default Fuse
