import React from 'react'
import { Link, Route, Switch} from 'react-router-dom';
import PersonalForm from './PersonalForm'
import MoveForm from './MoveForm'
import {HeaderWrap} from '../assets/Styles'

const ExpenseList = (props) => {

    return (
        <div>
        <HeaderWrap>
        <header className='expense-header'>
          <nav>
            <Link to='/personal-form'>Personal Expense</Link>
            <Link to='/moving-form'>Moving Expense</Link>
          </nav>
          <div>
            <Switch>
              <Route path="/personal-form" component={PersonalForm} />
              <Route path="/moving-form" component={MoveForm} />
            </Switch>
          </div>
        </header>
      </HeaderWrap>

        <div className='ExpenseList'>
            <div>Personal Expenses{props.personalExpenses}</div>
            <div>Moving Expenses{props.moveExpenses}</div>
        </div>
  
        </div>
    )
}

export default ExpenseList