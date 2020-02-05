import React, {
    useEffect,
    useState
  } from "react";
  import axios from "axios";
  import data from '../assets/data'
  import Dashboard from './Dashboard'

const PersonalBudgets = (props) => {
    const [budgets, setBudgets] = useState([])

    let john = data[0];
    let personal = john.personal;
    // console.log(john)

    useEffect(() =>{
        axios.get(data)
        .then(res=> {
            console.log(res)
           setBudgets(res)
        }).catch(err=> {
            console.log(err)
        });
    })
    // console.log(props)
    return(
        <div>
            <h4>{props.transport}</h4>
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