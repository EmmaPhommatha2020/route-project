import React, { Component } from 'react';
import './App.css';
import { Route,Switch} from 'react-router-dom';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Photographers from './components/Photographers/Photographers.js';
import Details from './components/Photographers/Details/Details.js';
import Nope from'./components/Nope.js';

export default (
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about'component={About} />
              <Route path='/photographers/:id'component={Details} />
              <Route path='/photographers'component={Photographers} />
              <Route component={Nope} />
            </Switch>

)