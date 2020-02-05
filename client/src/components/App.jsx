import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import "../css/App.css";
import PrivateRoute from "./PrivateRoute"
import SignUp from "./SignUp"; 
import Login from "./Login";
import Dashboard from "./Dashboard";

const App = () => {

  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute path="/Dashboard" component={Dashboard} />
          <Route path="/signup" component={SignUp} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;