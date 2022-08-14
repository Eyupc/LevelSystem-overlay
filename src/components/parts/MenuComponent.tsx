import React, { ReactElement, useRef } from "react";
import { useState } from "react";
import "../../styles/styles.css";
import Draggable, {DraggableCore} from 'react-draggable'; 

type Props = {
    level:number,
    XP:number,
    max_XP:number,
    Component:JSX.Element

}

export class MenuComponent extends React.Component<Props>{
private static dragPos:{X:any,Y:any} ={X:0,Y:0};
state = {
     visible:true,
}
constructor(props:Props){
super(props);

if(document.getElementById("all-panel")){
     document.getElementById("all-panel")?.remove();
}
}

private eventLogger = (e:any, data:any) => {
     MenuComponent.dragPos.X =data.x;
     MenuComponent.dragPos.Y = data.y;
   };


render(){
if(this.state.visible){
return(<Draggable defaultPosition={{x:MenuComponent.dragPos.X,y:MenuComponent.dragPos.Y}} onStop={this.eventLogger} handle=".panel-header">
<div id="all-panel" className="gorev-panel">
<div className="panel-header">
     <button onClick={()=>{this.setState({visible:false});MenuComponent.dragPos = {X:0,Y:0}}} id="close-btn-panel">X</button>
     <div className="ortalama">
          <img id="panel-logo" src="https://cdn.discordapp.com/attachments/939416749563084851/997134928263266434/logoron.png" draggable={false} alt=""/>
          <h2>Görev Listesi</h2>
          <div className="ortalama">
               <div className="level">
                    <div className="level-bari">
                         <div className="loading-cubugu" style={{width:((100/this.props.max_XP)*this.props.XP)+"%"}}>
                              <h2>{this.props.XP + "/" + this.props.max_XP}</h2>
                         </div>
                    </div>
                    <div className="loading-xp">
                         <h2>{this.props.level +  " LVL"}</h2>
                    </div>
               </div>
          </div>
</div></div>
{this.props.Component}
</div></Draggable>);
}else {
     return(<></>)
}
}
}

export default React.memo(MenuComponent);

