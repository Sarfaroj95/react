import React from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import logo from './logo.svg';
import './App.css';


import Home from './components/Home';
import Employee from './components/Employee';
import Department from './components/Department';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h2 className="p-3 text-center">Qilinlab Software Pvt. Ltd.</h2>
        <Navigation />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/department' component={Department} />
          <Route path='/employee' component={Employee} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
