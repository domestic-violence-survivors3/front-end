import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userFetch } from '../actions';
import data from '../assets/data'
import Dashboard from './Dashboard'

const PersonalBudgets = (props) => {
    
    const state = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userFetch())
    }, [dispatch])

    // console.log(props)
    return(
        <div>
            <h4>{state.transport}</h4>
             <div className='entry'>
                {data(item=> {
                  return(
                      <div>
                          <Dashboard 
                      key={item.id}
                      firstname={item.firstname}
                      personal={item.personal}
                         />
                      </div>
                  )
                },[])}
            </div>
        </div>
    )
}

export default PersonalBudgets