import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from '../../store/Contacts/operations';
import css from './style.module.css';
import { selectContacts, selectFilters } from 'store/Contacts/selectors';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
function ContactList() {
  const dispatch = useDispatch();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#808080',
    marginTop: '20px',
  }));

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilters);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
      spacing={1}
    >
      {filteredContacts.map(contact => (
        <Item key={contact.id} className={css.list}>
          {`${contact.name}:  ${contact.number}  `}

          <Button
            size="small"
            startIcon={<DeleteIcon />}
            color="error"
            variant="outlined"
            onClick={() => onDeleteContact(contact.id)}
          >
            delete
          </Button>
        </Item>
      ))}
    </Stack>
  );
}

export default ContactList;
