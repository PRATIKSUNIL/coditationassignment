import React, { Component } from 'react';


import Grid from './components/Grid';
import Box from './components/Box';

class Main extends Component{
  constructor(props) {
    super(props);
    this.noofrows=30;
    this.noofcoloums=50;

    this.state = { 
      value: 0,
      
      // for griding a array using filling object which can show a cells
      filling: Array(this.noofrows).fill().map(()=> Array(this.noofcoloums).fill(false))

     };
  }
  seedbtn =()=>{
// clonnig a array using Json strigify
    function arrayClone(arr) {
      return JSON.parse(JSON.stringify(arr));
    }
  let  clickcopy= arrayClone(this.state.filling)
  for (let i = 0; i < this.noofrows; i++) {
    for (let j = 0; j < this.noofcoloums; j++) {
//  random cell intialization using math function
      if (Math.floor(Math.random() * 4) === 1) {
       clickcopy[i][j] = true;
      }
    
      //intialising a values of clickcopy into state
      this.setState({filling:clickcopy,
      value:this.state.value+1})
     
    }
  }
  }
 
clickbox =(row ,col)=>{
  function arrayClone(arr) {
    return JSON.parse(JSON.stringify(arr));
  }
  
  let clickcopy= arrayClone(this.state.filling)
  clickcopy[row][col] = !clickcopy[row][col]
  // changing a values using of object filling using setstate
  this.setState({filling: clickcopy});
}
play=()=>{
// creating a play button for intialinsing all rules of assignment
// Any live cell with fewer than two live neighbors dies, as if by loneliness.
// 2. Any live cell with more than three live neighbors dies, as if by overcrowding.
// 3. Any live cell with two or three live neighbors lives, unchanged, to the next generation.
// 4. Any dead cell with exactly three live neighbors comes to life.

  function arrayClone(arr) {
    return JSON.parse(JSON.stringify(arr));
  }
  let g = this.state.filling;
  let clickcopy= arrayClone(this.state.filling);
  for (let i = 0; i < this.noofrows; i++) {
    for (let j = 0; j < this.noofcoloums; j++) {
      let count = 0;
      if (i > 0) if (g[i - 1][j]) count++;
      if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
      if (i > 0 && j < this.noofcoloums - 1) if (g[i - 1][j + 1]) count++;
      if (j < this.noofcoloums- 1) if (g[i][j + 1]) count++;
      if (j > 0) if (g[i][j - 1]) count++;
      if (i < this.noofrows - 1) if (g[i + 1][j]) count++;
      if (i < this.noofrows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
      if (i < this.noofrows - 1 && j < this.noofcoloums- 1) if (g[i + 1][j + 1]) count++;
      if (g[i][j] && (count < 2 || count > 3)) clickcopy[i][j] = false;
      if (!g[i][j] && count === 3) clickcopy[i][j] = true;
    }
  }
  this.setState({
   filling:clickcopy,
    value: this.state.value + 1
  });


}
playbtn =()=>{

  clearInterval(this.intervalId);
		this.intervalId = setInterval(this.play, 100);
}
pausebtn=()=>{

  clearInterval(this.intervalId);
}
clearbtn=()=>{
   
		var pause= Array(this.noofrows).fill().map(() => Array(this.noofcoloums).fill(false));
		this.setState({
		filling: pause,
			value: 0
		});
	

}



componentDidMount() {
  this.seedbtn();
  // this.playbtn();
}

  render() {
    // destructuring the states and objects
    const{filling ,value}=this.state;
    const{noofcoloums}=this.noofcoloums;
    const{noofrows}=this.noofrows;
    console.log("value",value);

    return (
      <div className="main">
        
        <div className="buttons">
        {/* buttons for making action with appropriate listners */}
        <button onClick={this.playbtn}>play</button>
        <button  onClick={this.pausebtn}>pause</button>
        <button onClick={this.clearbtn}>clear</button>
        <button  onClick={this.seedbtn}>seed</button>
        </div>
      <Grid  
      // props for creating Grid
      filling={filling}
      noofcoloums={noofcoloums}
      noofrows={noofrows}
      clickbox={this.clickbox}      />
     <h4>no of generation:{value}</h4>
      </div>
    );
  }
}

export default Main;