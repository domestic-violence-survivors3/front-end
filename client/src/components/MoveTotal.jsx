import React from 'react';


const MoveTotal = (props) => {

    return (
        <div>
            {props.moveExpenses.map((props) => {

                const moveArr = []
                
                let arr = Object.values(props)
                const total = arr.reduce((sum, value) => (typeof value == 'number' ? sum + value : sum), 0)
                console.log(moveArr[total])
                return moveArr[total]
            })}
        </div>
    )
}

export default MoveTotal;
