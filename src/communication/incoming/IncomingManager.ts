
import { ShowActionEvent } from "./messages/ShowActionEvent";
import { ShowMenuEvent } from "./messages/ShowMenuEvent";
import { ShowMenuIconEvent } from "./messages/ShowMenuIconEvent";
import { ShowTopListEvent } from "./messages/ShowTopListEvent";
export class IncomingManager {
    public messages : Map<string,any>;
    
    constructor(){
        this.messages = new Map<string,any>();
        this.registerMessages();
    }

    registerMessages(){
    this.messages.set("ShowMenuEvent",ShowMenuEvent)
    this.messages.set("ShowMenuIconEvent",ShowMenuIconEvent);
    this.messages.set("ShowTopListEvent",ShowTopListEvent);
    this.messages.set("ShowActionEvent",ShowActionEvent);
    }

}