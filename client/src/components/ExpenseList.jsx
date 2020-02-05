import React from 'react'
import ExpenseHeader from './ExpenseHeader'

const ExpenseList = (props) => {

    return (
        <div className='ExpenseList'>
            <ExpenseHeader />
            <div>{props.personalExpenses}</div>
            <div>{props.moveExpenses}</div>
        </div>
    )
}

export default ExpenseList