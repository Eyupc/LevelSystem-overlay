import React from "react";
import MenuActionComponent from "../../../components/MenuActionComponent";
import Incoming from "../Incoming";

type Props = {
 data:any
}
export class ShowActionEvent extends React.Component<Props> implements Incoming{
header: string = "ShowActionEvent";
data:any;

constructor(props:Props){
    super(props);
    this.data = this.props.data;
}

render(){
    return(<MenuActionComponent data={this.data}/>);
}

}
