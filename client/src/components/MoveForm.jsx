import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik'
import axios from 'axios'
import * as Yup from 'yup';
import { BorderWrap, TitleHeader, FormWarp, FieldCta, ErrorPrompt } from '../assets/Styles'
import MoveTotal from './MoveTotal'

const PersonalForm = ({ values, errors, touched, status }, props) => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        status && setExpenses(moveExpenses => [...moveExpenses, status]);
    }, [status]);
    return (
        <div>
            <BorderWrap>
                <h2>Moving Expenses</h2>
                <Form>
                    <FormWarp>
                        <FieldCta>
                            <label htmlFor='housing' style={{ color: `black` }}>
                                <Field id='housing' value={values.housing} type='number' name='housing' placeholder='Transporation' style={{ padding: `5px` }} />
                                {touched.housing && errors.housing && (<ErrorPrompt>{errors.housing}</ErrorPrompt>)}
                            </label>
                        </FieldCta>
                        <FieldCta>
                            <label htmlFor='rentalDeposit'>
                                <Field id='rentalDeposit' value={values.rentalDeposit} type='number' name='rentalDeposit' placeholder='Rental Deposit' style={{ padding: `5px` }} />
                                {/* {touched.rentalDeposit && errors.rentalDeposit && (<ErrorPrompt>{errors.rentalDeposit}</ErrorPrompt>)} */}
                            </label>
                        </FieldCta>
                        <FieldCta>
                            <label htmlFor='utilitySetup'>
                                <Field id='utilitySetup' value={values.utilitySetup} type='number' name='utilitySetup' placeholder='Utility Setup' style={{ padding: `5px` }} />
                                {touched.utilitySetup && errors.utilitySetup && (<ErrorPrompt>{errors.utilitySetup}</ErrorPrompt>)}
                            </label>
                        </FieldCta>
                        <FieldCta>
                            <label htmlFor='storage'>
                                <Field id='storage' value={values.storage} type='number' name='storage' placeholder='Car Insurance' style={{ padding: `5px` }} />
                                {touched.storage && errors.storage && (<ErrorPrompt>{errors.storage}</ErrorPrompt>)}
                            </label>
                        </FieldCta>
                        <FieldCta>
                            <label htmlFor='incomeLoss '>
                                <Field id='incomeLoss ' value={values.incomeLoss } type='number' name='incomeLoss ' placeholder='Income Loss ' style={{ padding: `5px` }} />
                                {touched.incomeLoss  && errors.incomeLoss  && (<ErrorPrompt>{errors.incomeLoss }</ErrorPrompt>)}
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
            <MoveTotal moveExpenses={expenses} />

        </div>
    )
};

const FormikPersonalForm = withFormik({
    mapPropsToValues({ housing, rentalDeposit, utilitySetup, storage, incomeLoss , otherExpense }) {
        return {
            housing: housing || '',
            rentalDeposit: rentalDeposit || '',
            utilitySetup: utilitySetup || '',
            storage: storage || '',
            incomeLoss : incomeLoss  || '',
            otherExpense: otherExpense || ''
        };
    },
    /*Yup validating user input and error prompt*/

    validationSchema: Yup.object().shape({
        housing: Yup.string().min(0, 'Amount is to small')
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