export default class Encoder{
    private static encoder:TextEncoder = new TextEncoder();

    public static getInstance():TextEncoder{
        return this.encoder;
    }
}