import React, { Component } from 'react';
import data from '../data.js';
console.log(data)
export default class Details extends Component {
  constructor() {
    super()
    this.state = {
      photographer: {}
    }

  }
  componentDidMount() {
    console.log(this.props.match.params.id)
    // api request with this.props.match.params.id
    let photographer = data.filter(e => {
      
      if (e.id === +this.props.match.params.id) {
        return e
      }
    })
    console.log(photographer)
    this.setState({
      photographer: photographer[0]
    })
  }
  render() {
    console.log(this.state.photographer)
    return (
      <div>
        <h1>{this.state.photographer.name}</h1>
        <h1>{this.state.photographer.description}</h1>
        <img src={this.state.photographer.image} />
      </div>
    )
  }



}