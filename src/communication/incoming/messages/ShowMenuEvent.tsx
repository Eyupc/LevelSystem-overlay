import React from "react";
import MenuEventsComponent from "../../../components/MenuEventsComponent";
import Incoming from "../Incoming";

type Props = {
 data:any
}
export class ShowMenuEvent extends React.Component<Props> implements Incoming{
header: string = "ShowMenuEvent";
data:any;

constructor(props:Props){
    super(props);
    this.data = this.props.data;
}

render(){
    return(<MenuEventsComponent data={this.data}/>);
}

}
