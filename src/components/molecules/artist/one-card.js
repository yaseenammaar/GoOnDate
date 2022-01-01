import React, { useState, useEffect } from 'react';
import { Div } from 'react-atomize';
import image from '../../../assets/images/hero_splash.jpg';
import '../../../styles/global.scss'

function OneCard(props) {
    const [state, setState] = useState('');

    useEffect(() => {
        return () => {

        }
    }, []);

    return (
        <>
       
            <div className="one-card card">
                <div className="img-container">
                  <a href="#">  <img src={props.url} /> </a>
                </div>

                <div className="content-container ">
                    <span className="category"> Date </span>
                    <h5 className="item-name" maxlength="5"> {props.name} </h5>
                    
                </div>

                {/* <div className="h-line"> </div> */}

                <div className="d-flex justify-content-between  py-1">

                    <div className="time-left d-flex align-items-center">
               
                        &nbsp;<p className="m-0"> {props.buyer?<>Sold to Yaseen Ammaar</>:<>Base Price</>} </p>
                    </div>

                    <h2 className="bid-price m-0 d-flex align-items-center">◎ {props.bp}</h2>
                </div>                
        
            </div>
            
        </>
    )
}

export default OneCard;