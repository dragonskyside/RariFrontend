import React from 'react';
import './Fuse.css';
import LendBorrow from '../LendBorrow';
import Button from '../Button';

function Fuse() {
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

            <div className="fuse-card">
                <div className="col">Olympus Pool</div>
                <div className="col">3.3</div>
                <div className="col">$47,094,315.69</div>
                <div className="col">$4,808,015</div>
                <div className="col">B</div>
                <Button
                  className='btn--fuse'
                  buttonStyle='btn--outline'
                  buttonSize='btn--medium'
                 >
         OPEN
        </Button>
            </div>

            <LendBorrow />

        </div>
    )
}


export default Fuse
