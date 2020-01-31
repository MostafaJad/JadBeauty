import React from 'react';
import {Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

import './App.css';



const MakeUp = () => (
  <div>
    <h1>MakeUp Page</h1>
  </div>
)
function App(){

    return(
      <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/makeup' component={MakeUp} />
      </Switch>
    </div>
    )
  
}

export default App;
