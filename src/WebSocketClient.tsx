import { OutgoingManager } from './communication/outgoing/OutgoingManager';
import { IncomingManager } from './communication/incoming/IncomingManager';
import React from 'react';
import Configuration from './utils/ConfigurationManager';
import Logger from './utils/Logger';
import StringEncoder from './utils/StringEncoder';


type MessageState= {
    message:any,
}

export default class WebSocketClient extends React.Component<{},MessageState>{
    private ws! : WebSocket;
    public static outgoing: OutgoingManager ;
    private incoming! : IncomingManager;

    public static getWS : WebSocket;


    private PingEvent:any;

    constructor(props = {}){
        super(props);
        
        if(Configuration.errors())
        return;

        this.ws = new WebSocket(new Configuration().getWSURL());
        this.ws.binaryType = 'arraybuffer';
        WebSocketClient.getWS = this.ws;

        WebSocketClient.outgoing = new OutgoingManager();
        this.incoming = new IncomingManager();

        this.ws.onopen =()=> this.onOpen();
        this.ws.onmessage = (msg:any) => this.onMessage(msg);
        this.ws.onclose = () => this.onClose();
        this.ws.onerror = (err) => this.onError(err);

        this.state = {message: ''};
    }
    
   

   private  onOpen(){
        const messages = WebSocketClient.outgoing.messages;
        Logger("info","CONNECTED!");

        let ssoEvent = messages.get("SSOTicketEvent"); //SSOTicket
        ssoEvent =  new ssoEvent();
        this.PingPong(this.ws); //Ping Pong event every {amount} sec.
        
    }

    private PingPong(websocket:WebSocket){
        this.PingEvent = setInterval(function(){
            websocket.send(StringEncoder.StringToBytes(JSON.stringify({'header':'PingEvent','data':[{'Ping':"Ping!"}]}))); //send ping
        },3000); //every 3 secs a ping pong event
    }

   private onMessage(msg:any):void{
        const messages = this.incoming.messages;

            let incomingMessage = new TextDecoder("UTF-8").decode(msg.data);
        
            //console.log(incomingMessage);
            var header:string = JSON.parse(incomingMessage.toString()).header;
            var data:any = JSON.parse(incomingMessage.toString()).data;

           switch (header){
           case "PongEvent":
            Logger("ping","🏓"+data); //send PONG!    
            break;
            default:
           let IncomingEvent = messages.get(header);
           this.setState(prev=>{
                return{message:[...prev.message,<IncomingEvent data={data}/>]}
           });
        }
    }

   private onClose():void{
    Logger("info","CLOSED!");
    clearInterval(this.PingEvent);
    setTimeout(this.reConnect,1000); //reconnect
}

private reConnect(){
    Logger("info","Trying to reconnect..");
    new WebSocketClient(); //try to reconnect
}

  private onError(err:any):void{
      console.log(err); //error logss
    }

    render(){
        return(<>{this.state.message}</>);
    }

}