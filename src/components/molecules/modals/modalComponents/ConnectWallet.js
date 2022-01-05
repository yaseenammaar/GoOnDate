import {Div, Icon, Text} from "react-atomize";
import React from "react";

const isPhantomInstalled = window.solana && window.solana.isPhantom
console.log("Phanstom installed:" + isPhantomInstalled);
var key;

async function establishConnection(){
    console.log("-------------------------------------------------------");
    try {
        const resp = await window.solana.connect();
        key = resp.publicKey.toString()
        window.localStorage.setItem("walletAddress", key);
        // 26qv4GCcx98RihuK3c4T6ozB3J7L6VwCuFVc7Ta2A3Uo 
    } catch (err) {
        console.log("ERROR:" + err);
        // { code: 4001, message: 'User rejected the request.' }
    }
}



function render(){
    establishConnection();
    return (<Div>

        <Text>Wallet Connected </Text>
        <Text>Wallet Id: {key} </Text>

    </Div>);
}


export default render