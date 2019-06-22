import React, {Component} from 'react';
import TopBar from './components/topbar.js'
import GameBoard from './components/gameboard.js'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      score: 0,
      topScore: 0
    }
  }
  updateScore = () => {
    let newScore = this.state.score + 1
    let newTop
    if(newScore > this.state.topScore){
      newTop = newScore
    } else {
      newTop = this.state.topScore
    }
    this.setState({
      score: newScore,
      topScore: newTop
    })
  }
  resetScore = () => {
    this.setState({
      score: 0
    })
  }

  render(){
    return (
      <div className="App">
        <TopBar score={this.state.score} topScore={this.state.topScore} />
        <GameBoard updateScore={this.updateScore} resetScore={this.resetScore} message={this.state.message} />
      </div>
    );
  }
}
