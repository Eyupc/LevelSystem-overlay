import Outgoing from "../Outgoing";
import WebSocketClient from "../../../WebSocketClient";
import Configuration from "../../../utils/ConfigurationManager";
import Logger from "../../../utils/Logger";
import StringEncoder from "../../../utils/StringEncoder";
export class GoToRoomEvent implements Outgoing{
    data : any;
    private roomId:number;
    constructor(roomId:number){
        this.roomId = roomId;
        this.send();
    }    

     send(){
       WebSocketClient.getWS.send(StringEncoder.StringToBytes(JSON.stringify({'header':"GoToRoomEvent",'data':[{'room_id':this.roomId}]})));
    }
}