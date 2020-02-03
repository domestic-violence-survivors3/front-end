import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import "../css/App.css";
import PrivateRoute from "./PrivateRoute"
import SignUp from "./SignUp"; 
import Login from "./Login";
import Calculator from "./Calculator";

const App = () => {
  return (
    <div className="App">
      <h1>Domestic Violence Survivors</h1>

      <div>
        <Link to="/signup">Sign Up</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
      <div>
        <Link to="/calculator">Calculator</Link>
      </div>

      <Switch>
        <PrivateRoute path="/calculator" component={Calculator} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;