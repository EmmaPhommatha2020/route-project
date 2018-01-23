// import React, { Component } from 'react';
// import axios from 'axios';
// export default class Photographer extends Comment {
//   constructor() {
//     super()
//     this.state = {
//       Photographer: []
//     }
//   }
//   componentDidMount() {
//     // axios.get('http://192.168.3.98:3001/api/getPhotographers').then(res => {
//     //   this.setState({ Photographer: res.data })
//     // })
//   }

//   render() {
//     const Photographer = this.state.Photographers.map((e, i) => {
//       return (
//         <h3 key={i}>{name}</h3>
//       )
//     }
//     )
//     return (
//       <div>
//         <h1>
//           This is the Photographer Component!
//         </h1>
//       </div>

//     )
//   }
// }
import React, { Component } from 'react';
import data from './data'
import {Link} from 'react-router-dom';

export default class Photographers extends Component {
  constructor() {
    super()
    this.state = {
      photographers: data
    }
  }

  render() {

    const photographers = this.state.photographers.map((e, i) => {
      return (
        <Link key={i} to={'/photographers/'+ e.id}>
        <h3>{e.name}</h3>
        </Link>
      )
    })

    return (
      <div>
        <h1>This is the Photographer!</h1>
        { photographers }
      </div>
    )
  }

}