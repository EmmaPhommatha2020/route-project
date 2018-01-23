import React from 'react';
import FAQ from './FAQ/FAQ.js';
import {Link, Route} from 'react-router-dom';


export default function About(){
  return(
    <div>
      <h1>This is the About!</h1>
      <Link to ='about/faq'>FAQ</Link>
      <Route path='about/faq'component={FAQ} />
    </div>
  )
}