import {Div, Icon, Text} from "react-atomize";
import React from "react";

const isPhantomInstalled = window.solana && window.solana.isPhantom
console.log("Phanstom installed:" + isPhantomInstalled);

window.solana.on("connect", () => console.log("connected!"));

async function establishConnection(){
    try {
        const resp = await window.solana.connect();
        resp.publicKey.toString()
        // 26qv4GCcx98RihuK3c4T6ozB3J7L6VwCuFVc7Ta2A3Uo 
    } catch (err) {
        console.log("ERROR:" + err);
        // { code: 4001, message: 'User rejected the request.' }
    }
}

establishConnection();



function AboutUs(props) {
    return(
        <Div>

            <Text>Wallet Connection</Text>
        </Div>
    )
}

export default AboutUs