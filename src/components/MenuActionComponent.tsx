import React, { createRef } from 'react';
import "../styles/styles.css";
import MenuComponent from './parts/MenuComponent';
import { MenuNavComponent } from './parts/MenuNavComponent';



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

class MenuActionComponent extends React.Component<Props>{

    private data:any;
    constructor(props:Props){
        super(props);
        this.data = this.props.data;

     }

    private Tasks = ():JSX.Element[] =>{
        var val:JSX.Element[] = [];
        //let data:Task;
        for(let data of this.data[0].tasks){
          val.push(<div className="gorev-box">
        <div className="gorev-box-ic">
             <img id="gorev-img" src={"https://cdn.discordapp.com/attachments/993785560005091398/1001362930706694175/222.png"} alt=""/>
             <div className="desc">
                  <div className="panel-title">
                       {data?.title}
                  </div>
                  <div className="panel-desc">
                       {data?.description}
                  </div>
             </div>
             <button className="close-btn">{data?.XP + " XP"} </button>
        </div>
   </div>);
        }
        return val;
    }
    private Component():JSX.Element{
    return(<div className="panel">
    <div className="panel-ici">
     <MenuNavComponent/>
  {this.Tasks().map((task)=>task)}
                     </div>
                     </div>//TODO
                     );
}
    render(){
        return(
            <MenuComponent level={this.data[0].level} XP={this.data[0].XP} max_XP={this.data[0].max_XP} Component={this.Component()}></MenuComponent>);
            }

}
export default MenuActionComponent;