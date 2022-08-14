import Outgoing from "../Outgoing";
import WebSocketClient from "../../../WebSocketClient";
import Configuration from "../../../utils/ConfigurationManager";
import Logger from "../../../utils/Logger";
import StringEncoder from "../../../utils/StringEncoder";
export class SSOTicketEvent implements Outgoing{
    header : string =  "sso";
    data : any;

    private sso:string;

    constructor(){
        this.sso = new Configuration().getSSO();
        this.data = this.sso;
        this.send();
    }    


     send(){
       WebSocketClient.getWS.send(StringEncoder.StringToBytes(JSON.stringify({'header':"SSOTicketEvent",'data':[{'SSO':this.sso}]}))); // send sso
    }
}