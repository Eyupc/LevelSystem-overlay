import React, { FC } from 'react';
import { OpenMenuEvent } from '../../communication/outgoing/messages/OpenMenuEvent';
import "../../styles/styles.css";
import {OutgoingManager} from "../../communication/outgoing/OutgoingManager";
import WebSocketClient from '../../WebSocketClient';
import { useState } from 'react';

type Props = {
    data:any
}

export function MenuIconComponent(props:Props):JSX.Element{  
    function ShowMenu() {
        if(!document.getElementById("all-panel")){
        let OpenMenu = WebSocketClient.outgoing.messages.get("OpenMenuEvent");
        OpenMenu = new OpenMenu();
        }

    }
        return(
            <img src="https://cdn.discordapp.com/attachments/933831976203452446/999722891941777479/Screenshot_393.png" 
            style={{float:"left", position:"relative",top:"10px",zIndex:"9999"}} onClick={ShowMenu}/>
        )
               

}
export default MenuIconComponent;