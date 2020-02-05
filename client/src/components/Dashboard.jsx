import React from 'react';
import PersonalBudget from './PersonalBudgets'
const Dashboard = props => {
// console.log(props.firstname)
  return(
    <div className='dashboard-cta'>
    <h2>Welcome to Your Dashboard!</h2>
  <div className='dashboard-header'>
    <h5 className='welcome-user'>Hello User</h5> 
  <h5 className='last-budget'>Most Recent Budget<span></span></h5>
  </div>  
  <PersonalBudget />
  <h3>{props.id}</h3>
  
    </div>

  )
}

export default Dashboard