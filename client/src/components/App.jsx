import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../css/App.css";
import SignUp from './SignUp';
import Login from './Login';
import PrivateRoute from "./PrivateRoute"
import ExpenseHeader from './ExpenseHeader';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute exact path="/" component={ExpenseHeader}/>
          <Route path="/SignUp" component={SignUp} />
          <Route path="/Login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;