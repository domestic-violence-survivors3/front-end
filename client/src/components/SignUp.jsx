import React, { useState } from "react";
import { Form, Field, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";

const SignUp = ({ values, errors, touched, status }) => {
  const [message, setMessage] = useState([]);

  const { push } = useHistory();

  //Submits ----

  const handleSubmit = (values, { setStatus, resetForm }) => {
    axios.post(`http://localhost:5000/api/signup`, values)

      .then(res => {
        setMessage([...message, values]);
        setStatus(res.data);
        resetForm();
        console.log(res, `success`);
        localStorage.setItem("token", res.data.payload);
        push("/calculator");
      })
      .catch(err => console.log(err))
      .finally();
  };

  // Checking Validations !! ----
  const SignupSchema = () =>
    Yup.object().shape({
      username: Yup.string().min(3, `Name Too Short!`),

      password: Yup.string().required(`Password required`)
    });

  // REturn STARTS HERE  - -------------
  return (
    <div>
      <h1>My Form</h1>
      <Formik
        initialValues={{ username: ``, password: `` }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}>
        {({ values }) => {
          return (
            <Form className='formbody'>
              <Field 
                className='formFields'
                name='first name'
                type='text'
                placeholder='First Name'
              />
              <Field 
                className='formFields'
                name='last name'
                type='text'
                placeholder='Last Name'
              />
              <Field
                className='formFields'
                name='username'
                type='text'
                placeholder='Username'
              />
              {console.log(values, "values")}
              <ErrorMessage name='name' component='div' className='red' />
              <Field
                className='formFields'
                name='password'
                type='password'
                placeholder='Password'
              />
              <ErrorMessage name='password' component='div' className='red' />
              &nbsp;
              <input type='submit' />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default SignUp;