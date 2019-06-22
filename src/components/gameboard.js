import React, { Component } from 'react'
import GameTile from './gametile.js'

export default class GameBoard extends Component {
  constructor(props){
    super(props)
    this.state = {
      icons: [1,2,3,4,5,6,7,8,9,10,11,12],
      chosen: [],
      message: 'Click any tile to start!'
    }

  }

  componentDidMount(){
    this.randomizeArray()
  }

  listStyle = {
    listStyle: 'none',
    display: 'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
    gridGap: '1em',
    padding: '0'
  }

  clickTile = (num) => {
    if(this.state.chosen.indexOf(num) === -1){
      let tempArr = this.state.chosen
      tempArr.push(num)
      console.log(num)
      console.log(tempArr)
      this.setState({
        chosen: tempArr,
        message: 'Good Luck!'
      })
      this.props.updateScore()
    } else {
      this.props.resetScore()
      this.setState({
        chosen: [],
        message: 'Wrong guess, better luck next time! Click a tile to start again!'
      })
    }
    this.randomizeArray()
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  randomizeArray(){
    let tempArr = this.state.icons
    this.shuffle(tempArr)
    this.setState({icons: tempArr})
  }

  render(){
    return(
      <div style={{width: '1200px', margin: '0 auto'}}>
        <p style={{width: '100%', textAlign: 'center', fontSize: '2.5em'}}>{this.state.message}</p>
        <ul style={this.listStyle}>
          {this.state.icons.map(num=><GameTile style={{display: 'block', margin: '0 auto'}} key={num} num={num} handleClick={this.clickTile}/>)}
        </ul>
      </div>
    )
  }
}
