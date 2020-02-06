import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import PersonalForm from './PersonalForm'
import Dashboard from "./Dashboard";

const ExpenseHeader = () => {
return (
    <div>
      {/* Form Header*/}
      <div>
        <header className='expense-header'>
          <div>
            <h1 className='expenseTitleH1'>Budget Freedom</h1>
          </div>

          <Router>
            <nav>
              <Link to='/PersonalForm'>Personal Expense</Link>
              <Link to='/Dashboard'>Dashboard</Link>
            </nav>
            <div>
              <Switch>
                <Route path="/PersonalForm" component={PersonalForm} />
                <Route path="/Dashboard" component={Dashboard} />
              </Switch>
            </div>
          </Router>

        </header>
      </div>
    </div>
  )
}

export default ExpenseHeader