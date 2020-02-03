import React, {useState} from 'react'
import {Switch, Route, NavLink} from 'react-router-dom'
import MoveForm from './MoveForm'
import PersonalForm from './PersonalForm'


const ExpenseList = (props) => {


    return (
        <div className='ExpenseList'>
            <nav>
                <div className='nav-links'>
            <NavLink className='personal-link' to='/personal-expenses'>
                Personal Expenses
            </NavLink>
            <NavLink className='move-link' to='/move-expenses'>
                Moving Expense
                </NavLink>
            </div>
            </nav>
            <Switch>
                <Route exact path='/personal-expenses' component={PersonalForm}/>
                <Route path="/move-expenses" component={MoveForm}/>
            </Switch>
            </div>
    )
}

export default ExpenseList