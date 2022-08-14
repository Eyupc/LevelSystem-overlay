import React from "react";
import MenuIconComponent from "../../../components/parts/MenuIconComponent";
import Incoming from "../Incoming";

type Props = {
 data:any
}
export class ShowMenuIconEvent extends React.Component<Props> implements Incoming{
header: string = "ShowMenuIconEvent";
data:any;

constructor(props:Props){
    super(props);
    this.data = this.props.data;
}

render(){
    return(<MenuIconComponent data={this.data}/>
    );
}

}
