import { Component } from "react";
import React from "react";
import './grid.css';


import Box from "./Box";


class Grid extends Component {

	
  render(props){

const {filling }=this.props;
    const width = (50*16);
    var cellgrid=[]
// genral mapping for the griding
    var boxClass= "";
		for (var i = 0; i < 30; i++) {
			// same as mapping statement
			for (var j = 0; j < 50; j++) {
				// for assigning a cell id 
				let boxId = i + "N" + j;

			boxClass= filling[i][j] ? "box on" : "box off";
				//pushing the component box which can create idividual cell of grid 
			cellgrid.push(
					<Box
						boxClass={boxClass}
						key={boxId}
						boxId={boxId}
						row={i}
						col={j}
						clickbox={this.props.clickbox}  
					></Box>
				);
			}
		}
// console.log(cellgrid)
// console.log(noofcoloums)
// console.log(noofrows);
		return (
			<div className="grid" style={{ 
			width: width}}>
			{cellgrid}
			</div>
		);
	}
}



export default Grid;