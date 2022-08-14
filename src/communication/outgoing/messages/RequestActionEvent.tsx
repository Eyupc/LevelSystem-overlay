import Outgoing from "../Outgoing";
import WebSocketClient from "../../../WebSocketClient";
import Configuration from "../../../utils/ConfigurationManager";
import Logger from "../../../utils/Logger";
import StringEncoder from "../../../utils/StringEncoder";
export class RequestActionEvent implements Outgoing{
    data : any;

    constructor(){
        this.send();
    }    

     send(){
       WebSocketClient.getWS.send(StringEncoder.StringToBytes(JSON.stringify({'header':"RequestActionEvent",'data':[{'open':true}]})));
    }
}