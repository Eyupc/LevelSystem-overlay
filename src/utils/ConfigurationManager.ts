import Logger from "./Logger";

export default class Configuration {

    private config:any;
    private sso:string = "";
    private websocket:string = "";
    private iconsURL:string;
    constructor(){
        
        //@ts-ignore
        this.config = WSConfiguration;
        this.sso = this.config.sso;
        this.websocket = this.config.ws;
        this.iconsURL = this.config.icons;
    }

    public getSSO(){
    return this.sso;
    }

    public getWSURL(){
    return this.websocket;
    }
    public getIconsRL(){
        return this.iconsURL; //icons path
    }

    public static errors():boolean{ // false = no errors, true = errors
        //@ts-ignore
        if(typeof(WSConfiguration) == 'undefined'){
        throw new Error("[WS ERROR] Configuration missed! (Configuration is not defined)")
       }
       //@ts-ignore
       var config = WSConfiguration;
       
           if(typeof(config.sso) == 'undefined' && typeof(config.ws) == 'undefined'){
               Logger("error","Configuration failed! Missing keys: ws, sso !")
               return true;
               }
       
               if(typeof(config.ws) == 'undefined'){
               Logger("error","Configuration failed! Missing key: ws !")
               return true;
               }else {
       
                   if(!config.ws.startsWith("ws://") && !config.ws.startsWith("wss://")){
                    Logger("error","WebSocket URL is wrong!");
                    return true;
                   }
                   
               }
               if(typeof(config.sso) == 'undefined'){
               Logger("error","Configuration failed! Missing key: sso !")
               return true;
               }else if(config.sso == ""){
                   Logger("error","WHERE TF IS YOUR SSO?");
                   return true;
               }
               return false;
       }
}