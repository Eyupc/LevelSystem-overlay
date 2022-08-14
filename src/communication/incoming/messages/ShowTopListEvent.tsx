import React from "react";
import MenuTopListComponent from "../../../components/MenuTopListComponent";
import Incoming from "../Incoming";

type Props = {
 data:any
}
export class ShowTopListEvent extends React.Component<Props> implements Incoming{
header: string = "ShowTopListEvent";
data:any;

constructor(props:Props){
    super(props);
    this.data = this.props.data;
}

render(){
    return(<MenuTopListComponent data={this.data}/>);
}

}
