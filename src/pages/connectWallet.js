import React, { useState, useEffect } from 'react';
import {
    ThemeProvider,
    Div,
    Row,
    Col,
    Modal,
    DefaultTheme,
    Button,
    Icon,
    Text
  } from "react-atomize";

  const theme = {
	...DefaultTheme,
	  grid: {
		  ...DefaultTheme.grid,
		colCount: 12,
		gutterWidth: 2
    }
   
	};


async function connectWallet(){
    var key;
    try {
        const resp = await window.solana.connect();
        var key = resp.publicKey.toString()
        
        // 26qv4GCcx98RihuK3c4T6ozB3J7L6VwCuFVc7Ta2A3Uo 
    } catch (err) {
        console.log("ERRPOR:"+err);
    }

    return(
    <>
    <Modal 
        isOpen={true} 
        align="center" 
        rounded="md" 
        shadow="1"
         >
             <Div>
                <Icon
                    name="Cross"
                    pos="absolute"
                    top="1rem"
                    right="1rem"
                    size="16px"
                    cursor="pointer"
                />
                
                    <button className="follow-btn">Wallet Connected</button>
        
                 <button>Wallet Address {key}</button>
            </Div>
        </Modal></>)
}

export default connectWallet;

