import {Div, Icon, Text} from "react-atomize";
import React from "react";

const isPhantomInstalled = window.solana && window.solana.isPhantom
console.log("Phanstom installed:" + isPhantomInstalled);

console.log("HII:"+window.localStorage.getItem("walletAddress"));
window.localStorage.removeItem("walletAddress");
window.solana.on('disconnect', () => console.log("disconnected!"))

window.solana.disconnect();




function AboutUs(props) {
    return(
        <Div>
            <Text>Wallet Desconnected </Text>
        </Div>
    )
}

export default AboutUs