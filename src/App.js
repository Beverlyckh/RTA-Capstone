import React, { Component, } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Home from './components/Home.js';
import Header from './components/Header.js';
import Profile from './components/Profile.js';
import Card from './components/Card.js';

class App extends Component {
  render() {
    return <BrowserRouter>
      <div>
      <Header />
        <div className="container test">

        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/Card" component={Card} />


          

        </Switch>
      </div>
      </div>
      </BrowserRouter>;
      

      
    
  }
}

export default App;
