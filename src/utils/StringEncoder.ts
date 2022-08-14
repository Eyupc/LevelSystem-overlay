import Encoder from "./Encoder";

export default class StringEncoder {

    public static StringToBytes(msg:string):Uint8Array{
    return Encoder.getInstance().encode(msg);
    }

}
