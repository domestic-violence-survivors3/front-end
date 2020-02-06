import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userFetch } from '../actions';

const PersonalBudgets = () => {
    
    const state = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userFetch())
    }, [dispatch])

    return(
        <div>
            {/* <h4>{state.data.user.username}</h4> */}
             
                 {state.data.personalBudget.map(item => (
                     <ul key={item.id}>
                        <li>id: {item.id}</li>
                        <li>Transportation: {item.transportation}</li>
                        <li>Food: {item.food}</li>
                        <li>Health Insurance: {item.healthInsurance}</li>
                        <li>Car Insurance{item.carInsurance}</li>
                        <li>Car Loans: {item.carLoans}</li>
                        <li>Health Care: {item.healthCare}</li>
                        <li>PersonalLoans: {item.personalLoans}</li>
                        <li>Other: {item.other}</li>
                     </ul>
                 ))}
                 
             
        </div>
    )
}

export default PersonalBudgets;