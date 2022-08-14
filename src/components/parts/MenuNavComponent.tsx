import React from 'react';
import { OpenMenuEvent } from '../../communication/outgoing/messages/OpenMenuEvent';
import {OutgoingManager} from "../../communication/outgoing/OutgoingManager";
import WebSocketClient from '../../WebSocketClient';
import "../../styles/styles.css";
import { RequestTopListEvent } from '../../communication/outgoing/messages/RequestTopListEvent';
import { RequestActionEvent } from '../../communication/outgoing/messages/RequestActionEvent';
type Props = {
    data:any
}

export function MenuNavComponent(props={}):JSX.Element{
    
    return(
        <div className="panel-nav">
             <ul>
                  <li><a id="etkinlik" style={{cursor:"pointer"}} onClick={()=>new OpenMenuEvent()}>Etkinlik</a></li>
                  <li><a style={{cursor:"pointer"}} onClick={()=>new RequestActionEvent()} id="eylem">Eylem</a></li>
                  <li><a id="top-list" style={{cursor:"pointer"}} onClick={()=>new RequestTopListEvent()}>Top List</a></li>
             </ul>
        </div>);
}