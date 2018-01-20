import React from "react";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Talks from "./pages/Talks";
import InputTalks from "./pages/Admin";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Login from "./pages/Auth";
import AuthGoogle from "./pages/AuthGoogle";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Login} />

        <Route exact path="/Talks" component={Talks} />

        <Route exact path="/login" component={Login} />

        <Route exact path="/Admin" component={InputTalks} />

        <Route exact path="/AuthGoogle" component={AuthGoogle} />
        
        <Route component={NoMatch} />
    </Switch>
    </div>
  </Router>;

export default App;