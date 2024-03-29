import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main/Main";
import LargeFoto from "./components/LargeFoto/LargeFoto";
// import NotFound from './components/NotFound/NotFound';

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/:title" component={LargeFoto} />
          <Route exact path="/" component={Main} />
          {/* <Route exact path="/not-found" component={NotFound} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
