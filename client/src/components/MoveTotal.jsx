import React from 'react';

const MoveTotal = (props) => {
  
    return (
      
        <div>
            {
               
           props.moveExpenses.map((props) => {
                let arr = Object.values(props)
                const total = arr.reduce((sum, value) => (typeof value == 'number' ? sum + value : sum), 0)
                return total
            })}
        </div>
    )
}

export default MoveTotal;
