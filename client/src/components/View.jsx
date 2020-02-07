import React from "react";


  
  
  const View = props => {

    return(
      <div>
<h3>{props.breed}</h3><br/>
<img src={props.imgUrl} />        
      </div>
    )

  
  }
  
  export default View