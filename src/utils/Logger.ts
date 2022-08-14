
export default function Logger(key:string,value:string){

    switch (key) {
        case "info":
        console.log("%c[WS] "+"%c"+value,"color:green;font-weight:bold;","color:black");
        break;
        case "error":
        console.log("%c[WS ERROR] " + "%c"+value, "color:red;font-weight:bold;","color:black;")
        break;
        case "ping":
        console.log("%c[WS PING]" + "%c "+value, "color:white;font-weight:bold;background-color:red","color:black;")
        break;
        default:
            break;
    }

}