import css from '../style.module.css';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../../store/Contacts/operations';
import { validationSchema } from './validationSchema';
import { TextField, Button } from '@mui/material';
import { selectContacts } from 'store/Contacts/selectors';

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onSubmit = ({ name, number }, actions) => {
    if (isContactExist(name)) {
      alert(`Name ${name} is already in contacts`);
      return;
    }

    const newContact = {
      name,
      number,
    };
    dispatch(addContact(newContact));

    actions.resetForm();
  };

  const isContactExist = name => {
    return contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => (
        <Form className={css.contact}>
          <div>
            <Field
              sx={{
                width: '400px',
              }}
              className={css.field}
              as={TextField}
              type="text"
              id="name"
              name="name"
              size="small"
              label="Name"
              multiline
              variant="filled"
            />
            <ErrorMessage name="name" component="div" />

            <Field
              sx={{
                width: '400px',
              }}
              as={TextField}
              type="tel"
              id="number"
              name="number"
              size="small"
              label="Number"
              multiline
              variant="filled"
            />
            <ErrorMessage name="number" component="div" />
          </div>
          <Button
            style={{ marginTop: '10px' }}
            type="submit"
            disabled={!formik.isValid}
            variant="contained"
          >
            add contact
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
