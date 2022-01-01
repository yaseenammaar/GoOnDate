import React, {useState} from "react";
import useSearchSuggestions from "../../../hooks/useSearchSuggestions";
import {useHistory} from "react-router-dom"
import MainSearchBar from "../../molecules/search/MainSearchBar";
import { Button } from "react-atomize";


function Hero() {
    let history = useHistory()
    const {searchText, setSearchText, search} = useSearchSuggestions();
    const [showSuggestions, setShowSuggestions] = useState(false)

    return (
        <>
            <section id="hero" className="container mt-5">
                <div className="overlay">
                </div>

                <div className="text-center content">
                    <h1>New Year Sale is Live!</h1>
                    <p>Start your new year resolution</p>

                    <center> 
                        <Button
                            
                            bg="info700"
                            hoverBg="info800"
                            rounded="lg"
                            m={{ r: "1rem" }}
                        >
                            Buy Now
                        </Button></center>

                </div>
            </section>
        </>
    );
}


export default Hero