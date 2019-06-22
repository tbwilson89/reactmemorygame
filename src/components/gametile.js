import React, { Component } from 'react'

export default class GameTile extends Component {
  constructor(props){
    super(props)
    this.state = {
      num: this.props.num
    }
  }

  render(){
    return(
      <li>
        <img style={{width: '100%'}} src={`/images/${this.props.num}.png`} alt={this.props.num} onClick={() => this.props.handleClick(this.props.num)}/>
      </li>
    )
  }
}
