import React from "react";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Talks from "./pages/Talks";
import Home from "./pages/Home";
import InputTalks from "./pages/Admin";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Login from "./pages/Auth";


const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Talks" component={Talks} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/Admin" component={InputTalks} />
        <Route component={NoMatch} />
    </Switch>
    </div>
  </Router>;

export default App;