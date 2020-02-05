import React from 'react';
<<<<<<< HEAD
=======
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import ExpenseHeader from './ExpenseHeader';
>>>>>>> d8dda15b181dc6cb825177cc2539d29f3407774e
import PersonalBudget from './PersonalBudgets'

const Dashboard = props => {
  return(
<<<<<<< HEAD
    <div className='dashboard-cta'>
    <h2>Welcome to Your Dashboard!</h2>
  <div className='dashboard-header'>
    <h5 className='welcome-user'>Hello User</h5> 
  <h5 className='last-budget'>Most Recent Budget<span></span></h5>
  </div>  
  <PersonalBudget />
  <h3>{props.id}</h3>
  
    </div>
=======
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
>>>>>>> d8dda15b181dc6cb825177cc2539d29f3407774e

  )
}

export default Dashboard