import React,{Component} from "react";
import Grid from "./Grid";
import '../box.css';


class Box extends Component {

    clickbox=()=>{
        // const {clickcell,row,col}=this.props;
    // selectbox function that created in main.js
       this.props.clickbox(this.props.row,this.props.col)
    }
    render() {
        const {boxClass,id}=this.props;
        // console.log('id',id)
        return (
         <div 
         className={boxClass}
         id={id}
         onClick={this.clickbox}
         ></div>
        );
    }
}

export default Box;