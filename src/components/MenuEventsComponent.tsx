import React, { createRef } from 'react';
import "../styles/styles.css";
import { MenuNavComponent } from './parts/MenuNavComponent';
import { GoToRoomEvent } from '../communication/outgoing/messages/GoToRoomEvent';
import MenuComponent from './parts/MenuComponent';


type Props = {
    data:any
}

interface Task  {
     id:number,
     name:string,
     description:string,
     image:string,
     type:string,
     room_id:number,
     XP:number,
}

 class MenuEventsComponent extends React.Component<Props>{

    private data:any;
    constructor(props:Props){
        super(props);
        this.data = this.props.data;

     }

    private Tasks = ():JSX.Element[] =>{
        var val:JSX.Element[] = [];
        //let data:Task;
        for(let data of this.data[0].tasks){
          val.push(<div key={this.data[0].id} className="gorev-box">
        <div className="gorev-box-ic">
             <img id="gorev-img" src={data.image} alt=""/>
             <div className="desc">
                  <div className="panel-title">
                       {data.name}
                  </div>
                  <div className="panel-desc">
                       {data.description}
                  </div>
             </div>
             <button className="close-btn">{data.XP + " XP"} </button>
             <button onClick={()=>new GoToRoomEvent(data.room_id)} className="btn-hotel">Odaya gitmek için tıkla!</button>
        </div>
   </div>);
        }
        return val;
    }
    private Component():JSX.Element{
    return(<div className="panel">
    <div className="panel-ici">
     <MenuNavComponent/>
  {this.Tasks().reverse().map((task)=>task)}
                     </div>
                     </div>//TODO
                     );
}
    render(){
        return(
            <MenuComponent level={this.data[0].level} XP={this.data[0].XP} max_XP={this.data[0].max_XP} Component={this.Component()}></MenuComponent>);
            }

}
export default MenuEventsComponent;