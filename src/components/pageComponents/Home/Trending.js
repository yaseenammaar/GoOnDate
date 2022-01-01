import React from "react";
import {Link} from "react-router-dom";
import OneCard from "../../molecules/artist/one-card";
import nft from "../../../assets/images/nft.png";
import nft1 from "../../../assets/images/newyear.png";
import nft2 from "../../../assets/images/2.png";
import nft3 from "../../../assets/images/3.png";
import nft4 from "../../../assets/images/4.png";

function Trending(props) {

    
    return (
        <>
            <section id="trending" className="card-collection">
                <div className="container">


                    <div className="d-flex justify-content-between align-items-center collection-title">
                        <h2 className="m-0"> Live SALE </h2>
                        <a className="m-0" href="#">See All</a>
                    </div>


                    <div className="container">
                        <div className="row mt-5">
                        <div className="col-md-3 col-6">
                            <Link
                                >
                                    <OneCard url={nft1} name="New Year NFT" category="Date" bp="0.3"/>
                                
                            </Link>
                            </div>
                          
                            
                            
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Trending