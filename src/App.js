import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"; 
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/not-found" component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
