import React, { useState, useEffect } from 'react';
import {withFormik, Form, Field } from 'formik'
import {Link, useRouteMatch} from 'react-router-dom'
import axios from 'axios'
import * as Yup from 'yup';
import styled from 'styled-components'
import PersonalList from './PersonalExpense'

const TitleHeader = styled.h1`

margin-bottom: -15px;
width 33vw;
margin 0 auto;
padding: 15px 0;

`

const FormWarp = styled.div`
    width: 33vw;
    display:flex;
    flex-direction:column;
    padding: 20px 20px;
    margin: 15px auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: stretch;
    align-items: stretch;
`;
const FieldCta = styled.div`
    display: flex;
    flex-direction:column;
    padding-bottom: 45px;
    padding-left: 155px;
    padding-right: 155px;
`
const ErrorPrompt = styled.p`
    color:#8AC748;
    margin-bottom:-20px;
    margin-top:-2px;
    font-weight: 600;
`

const BorderWrap = styled.div`
width: 33vw;
margin: 0 auto;
padding-bottom: 32px;
`

const PersonalForm = ({ values, errors, touched, status }, props) => {
    const [personalExpenses, setPersonalExpenses] = useState([]);



    useEffect(() => {
        status && setPersonalExpenses(personalExpenses => [...personalExpenses, status]);
        
    }, [status]);
    return (
      
        <div>
            <BorderWrap>
                <TitleHeader>Personal Expenses</TitleHeader>
                <Form>
                    <FormWarp>
                        <FieldCta>
                            <label htmlFor='transportation'>Transportation</label>
                            <Field id='transportation' value={values.transportation} type='number' name='transportation' style={{ padding: `5px` }} />
                            {touched.transportation && errors.transportation && (<ErrorPrompt>{errors.transportation}</ErrorPrompt>)}
                        </FieldCta>
                        <FieldCta>
                            <label htmlFor='food'>Food</label>
                            <Field id='food'value={values.food} type='number' name='food'style={{ padding: `5px` }} />
                            {/* {touched.food && errors.food && (<ErrorPrompt>{errors.food}</ErrorPrompt>)} */}
                        </FieldCta>
                        <FieldCta>
                            <label htmlFor='healthInsurance'>Health Insurance</label>
                            <Field id='healthInsurance' value={values.healthInsurance} type='number' name='healthInsurance'style={{ padding: `5px` }} />
                            {touched.healthInsurance && errors.healthInsurance && (<ErrorPrompt>{errors.healthInsurance}</ErrorPrompt>)}
                        </FieldCta>
                        <FieldCta>
                            <label htmlFor='carInsurance'>Car Insurance</label>
                            <Field id='carInsurance'  value={values.carInsurance} type='number' name='carInsurance'style={{ padding: `5px` }} />
                            {touched.carInsurance && errors.carInsurance && (<ErrorPrompt>{errors.carInsurance}</ErrorPrompt>)}
                        </FieldCta>
                        <FieldCta>
                            <label htmlFor='loans'>Loans</label>
                            <Field id='loans' value={values.loans} type='number' name='loans'style={{ padding: `5px` }} />
                            {touched.loans && errors.loans && (<ErrorPrompt>{errors.loans}</ErrorPrompt>)}
                        </FieldCta>
                        <FieldCta>
                            <label htmlFor='otherExpense'>Other Expenses</label>
                            <Field id='otherExpense' value={values.otherExpense} type='number' name='otherExpense'style={{ padding: `5px` }} />
                            {touched.otherExpense && errors.otherExpense && (<ErrorPrompt>{errors.otherExpense}</ErrorPrompt>)}
                        </FieldCta>
{/* FIELD TEMPLATE
                        <FieldCta>
                            <label htmlFor=''></label>
                            <Field type='text' name='' placeholder='' style={{ padding: `5px` }} />
                            {touched. && errors. && (<ErrorPrompt>{errors.}</ErrorPrompt>)}
                        </FieldCta> */}

           
                    </FormWarp>
                    <PersonalList personalExpenses={personalExpenses} />

                    <Link to='/move-expenses'>
                    <button type='submit' renderAs='button'>Next</button>
                    </Link>
                </Form>
            </BorderWrap>
        </div>
    )
};

const FormikPersonalForm= withFormik({
    mapPropsToValues({ transportation, food, healthInsurance,carInsurance,loans, otherExpense }) {
        return {
            transportation: transportation || '',
            food: food || '',
            healthInsurance: healthInsurance || '',
            carInsurance: carInsurance || '',
            loans: loans || '',
            otherExpense: otherExpense || ''
        };
    },
    /*Yup validating user input and error prompt*/

    validationSchema: Yup.object().shape({
        transportation: Yup.string().min(0, 'Amount is to small')
            .max(50, 'Amount is to large')
            .required('Amount Required')

    }),



    handleSubmit(values, { setStatus, resetForm }) {
        axios.post('https://reqres.in/api/users', values)
            .then(res => {
                // console.log(res.data);
                setStatus(res.data);
                resetForm();
                
            })

       
            .catch(err => console.log(err.response));
    }
})(PersonalForm);

export default FormikPersonalForm;