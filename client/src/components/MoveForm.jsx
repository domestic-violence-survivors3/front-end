import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { withFormik, Form, Field } from 'formik'
import axios from 'axios'
import * as Yup from 'yup';
import { BorderWrap,  FormWarp, FieldCta, ErrorPrompt } from '../assets/Styles'
import MoveTotal from './MoveTotal'
import PersonalTotal from './PersonalTotal';

const MoveForm = ({ values, errors, touched, status }, props) => {

    const [expenses, setExpenses] = useState([]);
    const { push } = useHistory();
    
    useEffect(() => {
        status && setExpenses(moveExpenses => [...moveExpenses, props.target.value, status],
            push('/dashboard'));
    }, [status]);
    return (
        <div>
            <BorderWrap>
                <div>
                <h2>Moving Expenses</h2>
                </div>

       

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
           

        </div>
    )
};

const FormikPersonalForm = withFormik({
    mapPropsToValues({ id, hotelCosts, rentalDeposit, utilities, storage, carRental , gas, cellphoneFees,movingTruck,other,user_id }) {
        return {
            id: 0,
            hotelCosts: 0,
            rentalDeposit: 0,
            utilities: 0,
            storage: 0,
            rent: 0,
            carRental: 0,
            gas: 0,
            cellphoneFees: 0,
            movingTruck: 0,
            mentalHealth: 0,
            incomeLoss: 0,
            other: 0,
            user_id: ''
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
                console.log(res.data);
                setStatus(res.data);
                resetForm();
            })
            .catch(err => console.log(err.response));
    }
}, [])(MoveForm);

export default FormikPersonalForm;