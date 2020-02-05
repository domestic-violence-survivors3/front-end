import React from "react";
import { Link, Route, Switch} from 'react-router-dom';
import PersonalForm from './PersonalForm'
import MoveForm from './MoveForm'

import styled from 'styled-components';

const ExpenseHeader = () => {

    const HeaderWrap = styled.div`
  display: flex;
  width:100%;
  color: #fffff;
 
  font-family: 'Architects Daughter', cursive;
  margin: 0 auto;
  h1{
    one-edge-shadow:
        -webkit-box-shadow: 0 8px 6px -6px #778899;
           -moz-box-shadow: 0 8px 6px -6px #778899;
                box-shadow: 0 8px 6px -6px #778899;
    padding-bottom: 2.1rem;
    padding-top: 1.0rem;
    margin-top:-0.4rem;            
    background:  #FDFED2;
    
     
  }
  a {
   text-decoration:none;
   padding:0.5rem;
   font-size:1.2rem;
   color:black;
  }
  nav {
    display:flex;
    justify-content:space-around;
  }
  header {
    width:100%;
  }`

    return (
        <div>
            <HeaderWrap>
                <header className='expense-header'>
                    <h1 className='expenseTitleH1'>Budget Freedom</h1>
                    <nav>
                        <Link to='/PersonalForm' component={PersonalForm}>Personal Expense</Link>
                        <Link to='/MovingForm' component={MoveForm}>Moving Expense</Link>
                    </nav>
                    <div>
                      <Switch>
                        <Route path="/PersonalForm" component={PersonalForm} />
                        <Route path="/MovingForm" component={MoveForm} />
                      </Switch>
                    </div>

                </header>
            </HeaderWrap>
        </div>
    )
}

export default ExpenseHeader