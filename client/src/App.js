import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SignUp from './components/SignUp';
import Login from './components/Login';
import PrivateRoute from "./components/PrivateRoute"
import ExpenseHeader from './components/ExpenseHeader';
import Personalform from './components/PersonalForm';
import Moveform from './components/MoveForm';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <ExpenseHeader/>
          <Switch>
          <Route path exact="/" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/personal-form" component={Personalform} />
          <Route path="/move-form" component={Moveform} />
          </Switch>
        </Switch>
      </div>
    </Router>
  );
}

export default App;