import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterChangeAction } from '../../store/Contacts/phonebookReducer';
import { selectFilters } from 'store/Contacts/selectors';
import { Formik, Form, Field } from 'formik';
import { TextField, Button } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilters);

  const handleSubmit = values => {
    dispatch(filterChangeAction(values.filter));
  };

  return (
    <div>
      <Formik initialValues={{ filter }} onSubmit={handleSubmit}>
        <Form style={{ display: 'flex', alignItems: 'center' }}>
          <Field
            as={TextField}
            type="text"
            id="filter"
            name="filter"
            label="Filter contacts by name:"
            variant="outlined"
            size="small"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginLeft: '5px', height: '40px' }}
          >
            Filter
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
