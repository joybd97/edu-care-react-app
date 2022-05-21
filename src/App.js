import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Home from "./Components/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./Components/About/About";
import NotFound from "./Components/NotFound/NotFound";
import Courses from "./Components/Courses/Courses";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
       <Router>
       <Switch>
          <Route path="/home">
             <Home></Home>
          </Route>
          <Route path="/courses">
             <Courses></Courses>
          </Route>
          <Route path="/about">
             <About></About>
          </Route>
          <Route path="/contact">
             <Contact></Contact>
          </Route>
          <Route exact path="/">
             <Home></Home>
          </Route>
          <Route path="*">
          <NotFound></NotFound>
          </Route>
        </Switch>

       </Router>
    </div>
  );
}

export default App;
