import React, { Component } from 'react';
import './App.css';
import { HashRouter,Link} from 'react-router-dom';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div>
        
          <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/photographers'>photographers</Link>
            {routes}
          </div>
      
      </div>
    ); 
  }
}

export default App;
