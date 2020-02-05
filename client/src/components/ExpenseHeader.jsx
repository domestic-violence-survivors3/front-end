import React from "react";
import { Link, Route, Switch } from 'react-router-dom';
import PersonalForm from './PersonalForm'
import MoveForm from './MoveForm'
import styled from 'styled-components'
import Dashboard from "./Dashboard";
import SignUp from "./SignUp";
import Login from "./Login";
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

    {/* LOG / SIGN UP*/}
      <div>

      </div>
      <div>
      </div>
      {/* Form Header*/}
      <HeaderWrap>
        <header className='expense-header'>
    <div>
          <h1 className='expenseTitleH1'>Budget Freedom <span>  <Link to='/dashboard'>Dashboard</Link></span></h1>
          </div>
          <nav>
            <Link to='/personal-form'>Personal Expense</Link>
            <Link to='/moving-form'>Moving Expense</Link>
          </nav>
          <div>

            <Switch>
              <Route path="/personal-form" component={PersonalForm} />
              <Route path="/moving-form" component={MoveForm} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/signup" component={SignUp} />
             <Route path="/login" component={Login} />
            </Switch>
          </div>
          <Link to="/login">Login</Link>
       <Link to="/signup">Sign Up</Link>

        </header>
        
      </HeaderWrap>
      <div>

      </div>

    </div>
  )
}

export default ExpenseHeader