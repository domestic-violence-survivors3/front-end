import React from 'react'
import ExpenseHeader from './ExpenseHeader'




const ExpenseList = (props) => {
    // const history = useHistory();
    // console.log("history", history)


    return (
        <div className='ExpenseList'>

            <ExpenseHeader />
            <div>Personal Expenses{props.personalExpenses}</div>
            <div>Moving Expenses{props.moveExpenses}</div>

        </div>
    )
}

export default ExpenseList