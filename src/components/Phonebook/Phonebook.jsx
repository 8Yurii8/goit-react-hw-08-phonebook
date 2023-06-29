import React, { useEffect } from 'react';
import css from './style.module.css';
import ContactList from './ContactList';
import ContactForm from './ContactForm/ContactForm';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../../store/Contacts/operations';
import { Filter } from './filter';
import { selectContacts, selectFilters } from 'store/Contacts/selectors';
import { UserMenu } from 'components/User/UserMenu';

const Phonebook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilters);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <UserMenu />
      <div className={css.section}>
        <h1>Phonebook</h1>
        <ContactForm />
        {contacts.length > 0 ? (
          <div>
            <h2>Contacts</h2>
            <Filter />
            <ContactList contacts={filteredContacts} />
          </div>
        ) : (
          <p>No contacts yet.</p>
        )}
      </div>
    </>
  );
};

export default Phonebook;
