import { GoToRoomEvent } from "./messages/GoToRoomEvent";
import { OpenMenuEvent } from "./messages/OpenMenuEvent";
import { RequestActionEvent } from "./messages/RequestActionEvent";
import { RequestTopListEvent } from "./messages/RequestTopListEvent";
import { SSOTicketEvent } from "./messages/SSOTicketEvent";
export class OutgoingManager{
    public messages : Map<String,any>;

    constructor(){
    this.messages = new Map<String,any>();
    this.registerMessages();
    }

    registerMessages(){
        this.messages.set("SSOTicketEvent",SSOTicketEvent);
        this.messages.set("OpenMenuEvent",OpenMenuEvent);
        this.messages.set("GoToRoomEvent",GoToRoomEvent);
        this.messages.set("RequestTopListEvent",RequestTopListEvent);
        this.messages.set("RequestActionEvent",RequestActionEvent);
    }


}