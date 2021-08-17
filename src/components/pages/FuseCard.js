import React, {useState} from 'react'
import Button from '../Button'
import LendBorrow from '../LendBorrow';
import './Fuse.css'

const FuseCard = () => {

    const [showElement, setShowElement] = useState(false);

    return (
        
        <>
        <div className="fuse-card">

                <div className="col">Olympus Pool</div>
                <div className="col">3.3</div>
                <div className="col">$47,094,315.69</div>
                <div className="col">$4,808,015</div>
                <div className="col">B</div>

                <Button
                
                  buttonStyle='btn--outline'
                  buttonSize='btn--medium'
                  toggle = {() => setShowElement(!showElement)}
                 >
                 OPEN
                </Button>
                </div>
               
                {showElement && <LendBorrow />}

                </>

            
    )
}

export default FuseCard
