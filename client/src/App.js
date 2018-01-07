import React from "react";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Talks from "./pages/Talks";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Auth from "./pages/Auth";
import AuthGoogle from "./pages/AuthGoogle";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Auth} />
        <Route exact path="/Talks" component={Talks} />
        <Route exact path="/AuthGoogle" component={AuthGoogle} />
        <Route exact path="/Talks/:id" component={Detail} />
        <Route component={NoMatch} />
    </Switch>
    </div>
  </Router>;

export default App;