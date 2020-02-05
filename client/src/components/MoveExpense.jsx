import React from 'react';
import styled from 'styled-components';

const MoveBox = styled.div`
    height: 15vh;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content:center;
    align-items: stretch;
    align-content: center;
    margin: 5px;
`

const MoveExpense = (props) => {

    return (
        <MoveBox>
            {props.MoveExpenses.map((props) => {
                let arr = Object.values(props)
                const total = arr.reduce((sum, value) => (typeof value == 'number' ? sum + value : sum), 0)
                console.log(total)
                return <div>{total}</div>
            })}
        </PersonalBox>
    )
}

export default MoveExpense;