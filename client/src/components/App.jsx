import React from "react";
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import "../css/App.css";
import PrivateRoute from "./PrivateRoute"
import ExpenseHeader from './ExpenseHeader';
import ExpenseList from "./ExpenseList";

const App = () => {
  return (
    <Router>
    <div className="App">
      <div>
      <ExpenseHeader/>
      <Route path="/signup" component={SignUp} />
       <Route path="/login" component={Login} />
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
      </div>
    <Switch>
    <Route path="/ExpenseHeader" component={ExpenseHeader} />
   
        {/* Change to avoid 500 error  */}
      </Switch>
    </div>
    </Router>
  );
}

export default App;