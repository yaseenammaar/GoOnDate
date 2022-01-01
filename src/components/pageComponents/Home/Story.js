import React from "react";
import {Link} from "react-router-dom";
import OneCard from "../../molecules/artist/one-card";
import nft from "../../../assets/images/nft.png";
import nft1 from "../../../assets/images/1.png";
import nft2 from "../../../assets/images/2.png";
import nft3 from "../../../assets/images/3.png";
import nft4 from "../../../assets/images/4.png";
import { Text } from "react-atomize";

function Story(props) {

    
    return (
        <>
            <section id="trending" className="card-collection">
                <div className="container">




                    <div className="container">
                        <div className="row mt-5">
                        <center>
                            <Text tag="h1" textSize="display1" m={{ b: "4rem" }}>
                                Why GoOnDate NFT Project?
                            </Text>
                        
                            How beautiful is the memory of a loved one! But what remains with us? A picture? A date? Do you remember the date when you last saw them or when you held your baby in your hands for the first time? We feel the same way and it's our desire that you never get loose of the memory that keeps value to you, that is close to your heart. Let's capture those dates together!
                            <br/>
                            <a href="#">Read More...</a>
                        
                        </center>

                        
                            
                            
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Story