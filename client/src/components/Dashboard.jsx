import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import ExpenseHeader from './ExpenseHeader';
import PersonalBudget from './PersonalBudgets'

const Dashboard = props => {
  return(
    <div className="dashboard">
      <div className='dashboard-cta'>
        <h2>Welcome to Your Dashboard!</h2>
        <div className='dashboard-header'>
          <h5 className='welcome-user'>Hello User</h5> 
          <h5 className='last-budget'>Most Recent Budget<span></span></h5>
        </div>  
        <PersonalBudget />
        <h3>{props.id}</h3>
      </div>

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

export default Dashboard