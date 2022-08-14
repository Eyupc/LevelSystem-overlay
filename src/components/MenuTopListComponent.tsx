import React from 'react';
import "../styles/styles.css";
import { MenuNavComponent } from './parts/MenuNavComponent';
import { GoToRoomEvent } from '../communication/outgoing/messages/GoToRoomEvent';
import MenuComponent from './parts/MenuComponent';


type Props = {
    data:any
}

class MenuTopListComponent extends React.Component<Props>{

    private data:any;
    constructor(props:Props){
        super(props);
        this.data = this.props.data;
     }


    private Element =():JSX.Element[] =>{
        let data:JSX.Element[]= [];


    data.push(
    <div className="ortalama"><div className="top-uc">
               <div className="iki">
                    <img src={"https://www.habbo.com/habbo-imaging/avatarimage?figure=" + this.data[0].users[1]?.avatar+ "&size=m&direction=4&head_direction=4&gesture=sml&headonly=1"} alt=""/>
                    <h2>{this.data[0].users[1]?.username}</h2>
                    <div className="iki-box top-box">
                         <div className="ortalama">
                              <h1>2</h1>
                              <h3>{this.data[0].users[1]?.level + " LVL"}</h3>
                         </div>
                    </div>
               </div>
               <div className="bir">
               <img src={"https://www.habbo.com/habbo-imaging/avatarimage?figure=" + this.data[0].users[0]?.avatar+ "&size=m&direction=4&head_direction=4&gesture=sml&headonly=1"} alt=""/>
               <h2>{this.data[0].users[0]?.username}</h2>
                    <div className="bir-box top-box">
                         <div className="ortalama">
                              <h1>1</h1>
                              <h3>{this.data[0].users[0]?.level+" LVL"}</h3>
                         </div>
                    </div>
               </div>
               <div className="uc">
               <img src={"https://www.habbo.com/habbo-imaging/avatarimage?figure=" +  this.data[0].users[2]?.avatar+ "&size=m&direction=4&head_direction=4&gesture=sml&headonly=1"} alt=""/>
               <h2>{this.data[0].users[2]?.username}</h2>
                    <div className="uc-box top-box">
     <div className="ortalama">
          <h1>3</h1>
          <h3>{this.data[0].users[2]?.level + " LVL"}</h3>
     </div>
                    </div></div></div></div>);

if(Object.keys(this.data[0].users).length > 3){
    var dt:JSX.Element[] = [];
    for(var i = 3; i<=Object.keys(this.data[0].users).length-1; i++){
        dt.push(<><div className="top-kullanici">
            <img src={"https://www.habbo.com/habbo-imaging/avatarimage?figure="+this.data[0].users[i]?.avatar+"&size=m&direction=2&head_direction=3&gesture=sml&headonly=1"} alt="" />
            <h2>{this.data[0].users[i]?.username + "#" + (i+1).toString()}</h2>
            <h3>{this.data[0].users[i]?.level+" LVL"}</h3>
        </div><hr /></>);
    }
    data.push(<div className="top-liste">{dt.map((x)=>x)}</div>)
}
return data;
    }

    private Component():JSX.Element {
        return(
            <div className="panel">
    <div className="panel-ici">
        <MenuNavComponent/>
        <div className="top">
        {this.Element().map((x)=>x)}</div></div>
        </div>);
    }
    render(){
        return(
            <MenuComponent level={this.data[0].level} XP={this.data[0].XP} max_XP={this.data[0].max_XP} Component={this.Component()}></MenuComponent>);
            }

}
export default MenuTopListComponent;