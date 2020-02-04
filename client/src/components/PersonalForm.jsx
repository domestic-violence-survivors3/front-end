import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik'
import axios from 'axios'
import * as Yup from 'yup';
import { BorderWrap, TitleHeader, FormWarp, FieldCta, ErrorPrompt } from '../assests/Styles'
import PersonalTotal from './PersonalTotal'

const PersonalForm = ({ values, errors, touched, status }, props) => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        status && setExpenses(personalExpenses => [...personalExpenses, status]);
    }, [status]);
    return (
        <div>
            <BorderWrap>
                <h2>Personal Expenses</h2>
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
                            <label htmlFor='loans'>
                                <Field id='loans' value={values.loans} type='number' name='loans' placeholder='Loans' style={{ padding: `5px` }} />
                                {touched.loans && errors.loans && (<ErrorPrompt>{errors.loans}</ErrorPrompt>)}
                            </label>
                        </FieldCta>
                        <FieldCta>
                            <label htmlFor='otherExpense'>
                                <Field id='otherExpense' value={values.otherExpense} type='number' name='otherExpense' placeholder='Other Expenses' style={{ padding: `5px` }} />
                                {touched.otherExpense && errors.otherExpense && (<ErrorPrompt>{errors.otherExpense}</ErrorPrompt>)}
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
    mapPropsToValues({ transportation, food, healthInsurance, carInsurance, loans, otherExpense }) {
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

    handleSubmit(expenses, { setStatus, resetForm }) {
        axios.post('https://reqres.in/api/users', expenses)
            .then(res => {
                // console.log(res.data);
                setStatus(res.data);
                resetForm();
            })
            .catch(err => console.log(err.response));
    }
}, [])(PersonalForm);

export default FormikPersonalForm;