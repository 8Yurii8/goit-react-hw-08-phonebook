import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Button } from '@mui/material';
import { createUser } from '../../store/user/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Register = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.user.isLoading);
  const error = useSelector(state => state.user.error);
  const navigate = useNavigate();
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const resultAction = await dispatch(createUser(values));
      if (createUser.fulfilled.match(resultAction)) {
        toast.success('Success');
        navigate('/login');
      }
    } catch (error) {
      toast.error('Error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      {error && <div>Error: {error.message}</div>}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <Field
              as={TextField}
              type="text"
              id="name"
              name="name"
              label="Name"
              variant="outlined"
              sx={{
                width: 500,
                maxWidth: '100%',
              }}
            />
            <ErrorMessage name="name" component="div" />
          </div>

          <div>
            <Field
              as={TextField}
              type="email"
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              sx={{
                width: 500,
                maxWidth: '100%',
              }}
            />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <Field
              as={TextField}
              type="password"
              id="password"
              name="password"
              label="Password"
              variant="outlined"
              sx={{
                width: 500,
                maxWidth: '100%',
              }}
            />
            <ErrorMessage name="password" component="div" />
          </div>

          <Button
            style={{ marginTop: '10px' }}
            type="submit"
            variant="contained"
            color="primary"
            disabled={isLoading}
          >
            {isLoading ? 'Registering...' : 'Register'}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
export default Register;
