import styled from 'styled-components'


/** FORM STYLING **/
export const TitleHeader = styled.h2`

margin-bottom: -15px;
width 33vw;
margin 0 auto;
padding: 15px 0;

`
export const FormWarp = styled.div`
    width: 55vw;
    display:flex;
    padding: 20px 20px;
    margin: 15px auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: center;

`
export const FieldCta = styled.div`
    display: flex;
    flex-direction:column;

    width:fit-content;
    padding:45px;

`
export const ErrorPrompt = styled.p`
    color:#8AC748;
    margin-bottom:-20px;
    margin-top:-2px;
    font-weight: 600;
`

export const BorderWrap = styled.div`
displauy:flex;
width: 75vw;
margin: 0 auto;
padding-bottom: 32px;
flex-direction:row;

label {
    width:fit-content;
}
`
export const ExpenseCta = styled.div`
    height: 15vh;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content:center;
    align-items: stretch;
    align-content: center;
    margin: 5px;
`
export const HeaderWrap = styled.div`
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
