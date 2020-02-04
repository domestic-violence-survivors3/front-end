import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik'
import axios from 'axios'
import * as Yup from 'yup';
import { BorderWrap, TitleHeader, FormWarp, FieldCta, ErrorPrompt } from '../assests/Styles'
import MoveTotal from './MoveTotal'


const MoveForm = ({ values, errors, touched, status }, props) => {


    const [moveExpenses, setMoveExpenses] = useState([]);

    useEffect(() => {
        status && setMoveExpenses(moveExpenses => [...moveExpenses, status]);
    }, [status]);
    return (
        <div>
            <BorderWrap>
                <TitleHeader>Moving Expenses</TitleHeader>
                <Form>
                    <FormWarp>

                        <FieldCta>
                            <label htmlFor='housing'>
                                <Field id='housing' value={values.housing} type='number' name='housing' placeholder='Housing' style={{ padding: `5px` }} />
                                {touched.housing && errors.housing && (<ErrorPrompt>{errors.housing}</ErrorPrompt>)}
                            </label>
                        </FieldCta>
                        <FieldCta><label>
                            <Field id='rentalDeposit' value={values.rentalDeposit} type='number' name='rentalDeposit' placeholder='Rental Deposits' style={{ padding: `5px` }} />
                            {touched.rentalDeposit && errors.rentalDeposit && (<ErrorPrompt>{errors.rentalDeposit}</ErrorPrompt>)}
                        </label>
                        </FieldCta>
                        <FieldCta>
                            <label htmlFor='utilitySetup'>
                                <Field id='utilitySetup' value={values.utilitySetup} type='number' name='utilitySetup' placeholder='Utiltity Setup' style={{ padding: `5px` }} />
                                {touched.utilitySetup && errors.utilitySetup && (<ErrorPrompt>{errors.utilitySetup}</ErrorPrompt>)}
                            </label>
                        </FieldCta>
                        <FieldCta>
                            <label htmlFor='storage'>
                                <Field id='storage' value={values.storage} type='number' name='storage' placeholder='Storage' style={{ padding: `5px` }} />
                                {touched.storage && errors.storage && (<ErrorPrompt>{errors.storage}</ErrorPrompt>)}
                            </label>
                        </FieldCta>
                        <FieldCta>
                            <label htmlFor='incomeLoss'>
                                <Field id='incomeLoss' value={values.incomeLoss} type='number' name='incomeLoss' placeholder='Income Loss' style={{ padding: `5px` }} />
                                {touched.incomeLoss && errors.incomeLoss && (<ErrorPrompt>{errors.incomeLoss}</ErrorPrompt>)}
                            </label>
                        </FieldCta>
                        <FieldCta>
                            <label htmlFor='otherExpenses'>
                                <Field id='otherExpenses' value={values.otherExpenses} type='number' name='additionalExpenses' placeholder='Other Expense' style={{ padding: `5px` }} />
                                {touched.otherExpenses && errors.otherExpenses && (<ErrorPrompt>{errors.additionalExpenses}</ErrorPrompt>)}
                            </label>
                        </FieldCta>

                        {/* FIELD TEMPLATE
                        <FieldCta>
                            <label htmlFor=''></label>
                            <Field type='text' name='' placeholder='' style={{ padding: `5px` }} />
                            {touched. && errors. && (<ErrorPrompt>{errors.}</ErrorPrompt>)}
                        </FieldCta> */}


                    </FormWarp>
                    <button type='submit'>Next</button>
                </Form>
            </BorderWrap>

            <MoveTotal moveExpenses={moveExpenses} />

        </div>
    )
};

const FormikMoveForm = withFormik({
    mapPropsToValues({ housing, rentalDeposit, utilitySetup, storage, incomeLoss, otherExpense }) {
        return {
            housing: housing || '',
            rentalDeposit: rentalDeposit || '',
            utilitySetup: utilitySetup || '',
            storage: storage || '',
            incomeLoss: incomeLoss || '',
            otherExpense: otherExpense || ''
        };
    },
    /*Yup validating user input and error prompt*/

    validationSchema: Yup.object().shape({
        transportation: Yup.string().min(1, 'Please Enter Amount')

            .required('Amount Required')

    }),



    handleSubmit(values, { setStatus, resetForm }) {
        axios.post('https://reqres.in/api/users', values)
            .then(res => {
                console.log(res.data);
                setStatus(res.data);
                resetForm();
            })
            .catch(err => console.log(err.response));
    }
},)(MoveForm);

export default FormikMoveForm;