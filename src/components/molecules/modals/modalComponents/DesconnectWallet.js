import {Div, Icon, Text} from "react-atomize";
import React from "react";

window.solana.on('disconnect', () => console.log("disconnected!"))
window.solana.disconnect();


function AboutUs(props) {
    return(
        <Div>

            <Text>Wallet Desconnection</Text>
        </Div>
    )
}

export default AboutUs