import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ExpenseHeader from './ExpenseHeader';

const Dashboard = () => {

  return(
    <div>
      <h1>Welcome to your Dashboard</h1>
      <h2>Past Prices</h2>
      <h2>Find a new Price</h2>
    

      <Router>
        <div className="dashboard">
        <Link to="/ExpenseHeader">Expenses</Link>
          <Switch>
            <Route path="/ExpenseHeader" component={ExpenseHeader}>
              <ExpenseHeader />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default Dashboard;