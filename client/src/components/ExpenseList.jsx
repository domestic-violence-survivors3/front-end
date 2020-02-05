import React from 'react'
import ExpenseHeader from './ExpenseHeader'

const ExpenseList = (props) => {

    return (
        <div className='ExpenseList'>
            <div>Personal Expenses{props.personalExpenses}</div>
            <div>Moving Expenses{props.moveExpenses}</div>
        </div>
    )
}

export default ExpenseList