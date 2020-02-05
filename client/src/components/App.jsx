import React from "react";
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

import "../css/App.css";
import PrivateRoute from "./PrivateRoute"
import ExpenseHeader from './ExpenseHeader';
import ExpenseList from "./ExpenseList";



const App = () => {
  return (

    <div className="App">
 
      <ExpenseHeader/>
 
      </div>
 
 
  );
}

export default App;