import React, { Component } from 'react'

export default class TopBar extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px',
    fontSize: '3em',
    backgroundColor: 'purple',
    color: 'white'
  }

  render(){
    return(<nav style={this.navStyle}><span>Score: {this.props.score}</span><span>Heroes Guessing Game</span><span>Top Score: {this.props.topScore}</span></nav>)
  }
}
