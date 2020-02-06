import React from 'react';

import axios from 'axios'

const Dashboard = props => {

 
// Optionally the request above could also be done as
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  return(
    <div className="dashboard">
      <div className='dashboard-cta'>
        <h2>Welcome to Your Dashboard!</h2>
        <div className='dashboard-header'> 
          <h5 className='last-budget'>Most Recent Budget<span></span></h5>
        </div>  
        <h3>{props.data}</h3>


      </div>

        <div className="dashboard">
 
 
        </div>

    </div>
  )


}

export default Dashboard