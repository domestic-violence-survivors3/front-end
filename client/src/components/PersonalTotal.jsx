import React from 'react';

const PersonalTotal = (props) => {
  
    return (
      
        <div>
            {
               
           props.personalExpenses.map((props) => {

                let arr = Object.values(props)
                const total = arr.reduce((sum, value) => (typeof value == 'number' ? sum + value : sum), 0)
                console.log(total)
                return total
            })}
        </div>
    )
}

export default PersonalTotal;
