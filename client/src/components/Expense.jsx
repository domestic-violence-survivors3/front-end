import React from 'react';


const MoveTotal = (props) => {

    return (
        <div>
            {props.moveExpenses.map((props) => {
                let arr = Object.values(props)
                const total = arr.reduce((sum, value) => (typeof value == 'number' ? sum + value : sum), 0)
                console.log(total)
                return <div>{total}</div>
            })}
        </div>
    )
}

export default MoveTotal;
