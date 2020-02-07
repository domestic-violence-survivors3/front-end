import React from "react"
import View from './GetRequest'



const Dashboard = (props) => {


console.log(props.expenses)

  return(
    <div className="dashboard">
      <div className='dashboard-cta'>
        <h2>Welcome to Your Dashboard!</h2>
        <div className='dashboard-header'> 
          {/* <h5 className='last-budget'>Most Recent Budget<span></span></h5> */}
        </div>  
        <h3>GET REQUEST ON A DIME</h3>
        <div className="dashboard">
          <div><View/></div>

 </div>
     
      </div>
  
    </div>
  )


}

export default Dashboard