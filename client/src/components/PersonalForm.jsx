import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup';
import { BorderWrap, TitleHeader, FormWarp, FieldCta, ErrorPrompt } from '../assets/Styles'
import PersonalTotal from './PersonalTotal'
import { axiosWithAuth } from '../utils/axiosWithAuth';

const PersonalForm = ({ values, errors, touched, status }, props) => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        status && setExpenses(personalExpenses => [...personalExpenses, status]);
    }, [status]);
    return (
        <div>
            <BorderWrap>
                <TitleHeader>Personal Expenses</TitleHeader>
                <Form>
                    <FormWarp>
                        <FieldCta>
                            <label htmlFor='transportation' style={{ color: `black` }}>
                                <Field id='transportation' value={values.transportation} type='number' name='transportation' placeholder='Transporation' style={{ padding: `5px` }} />
                                {touched.transportation && errors.transportation && (<ErrorPrompt>{errors.transportation}</ErrorPrompt>)}
                            </label>
                        </FieldCta>
                        <FieldCta>
                            <label htmlFor='food'>
                                <Field id='food' value={values.food} type='number' name='food' placeholder='Food' style={{ padding: `5px` }} />
                                {/* {touched.food && errors.food && (<ErrorPrompt>{errors.food}</ErrorPrompt>)} */}
                            </label>
                        </FieldCta>
                        <FieldCta>
                            <label htmlFor='healthInsurance'>
                                <Field id='healthInsurance' value={values.healthInsurance} type='number' name='healthInsurance' placeholder='Health Insurance' style={{ padding: `5px` }} />
                                {touched.healthInsurance && errors.healthInsurance && (<ErrorPrompt>{errors.healthInsurance}</ErrorPrompt>)}
                            </label>
                        </FieldCta>
                        <FieldCta>
                            <label htmlFor='carInsurance'>
                                <Field id='carInsurance' value={values.carInsurance} type='number' name='carInsurance' placeholder='Car Insurance' style={{ padding: `5px` }} />
                                {touched.carInsurance && errors.carInsurance && (<ErrorPrompt>{errors.carInsurance}</ErrorPrompt>)}
                            </label>
                        </FieldCta>
                        <FieldCta>
                            <label htmlFor='personalLoans'>
                                <Field id='personalLoans' value={values.personalLoans} type='number' name='personalLoans' placeholder='Loans' style={{ padding: `5px` }} />
                                {touched.personalLoans && errors.personalLoans && (<ErrorPrompt>{errors.personalLoans}</ErrorPrompt>)}
                            </label>
                        </FieldCta>
                        <FieldCta>
                            <label htmlFor='other'>
                                <Field id='other' value={values.other} type='number' name='other' placeholder='Other Expenses' style={{ padding: `5px` }} />
                                {touched.other && errors.other && (<ErrorPrompt>{errors.other}</ErrorPrompt>)}
                            </label>
                        </FieldCta>
                        {/* FIELD TEMPLATE
                        <FieldCta>
                            <label htmlFor=''></label>
                            <Field type='text' name='' placeholder='' style={{ padding: `5px` }} />
                            {touched. && errors. && (<ErrorPrompt>{errors.}</ErrorPrompt>)}
                        </FieldCta> */}
                    </FormWarp>
                    <button type='submit' >Next</button>

                </Form>
            </BorderWrap>
            <PersonalTotal personalExpenses={expenses} />

        </div>
    )
};

const FormikPersonalForm = withFormik({
    mapPropsToValues({ transportation, food, healthInsurance, carInsurance, personalLoans, other }) {
        return {
            transportation: transportation || '',
            food: food || '',
            healthInsurance: healthInsurance || '',
            carInsurance: carInsurance || '',
            personalLoans: personalLoans || '',
            other: other || ''
        };
    },
    /*Yup validating user input and error prompt*/

    validationSchema: Yup.object().shape({
        transportation: Yup.string().min(0, 'Amount is to small')
            .max(50, 'Amount is to large')
            .required('Amount Required')

    }),

    handleSubmit(expenses, { setStatus, resetForm }) {
        const userID = localStorage.getItem("userID")
        axiosWithAuth()
        .post(`https://cors-anywhere.herokuapp.com/https://dvscalculator.herokuapp.com/users/${userID}/personal`, expenses)
            .then(res => {
                setStatus(res.data);
                resetForm();
            })
            .catch(err => console.log(err.response));
    }
}, [])(PersonalForm);

export default FormikPersonalForm;