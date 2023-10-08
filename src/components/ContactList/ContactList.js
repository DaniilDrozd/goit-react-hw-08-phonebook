import React from 'react';
import { useEffect } from 'react';
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, addContact } from 'redux/Contacts/operations';
import { selectContacts, selectFilter } from 'redux/Contacts/selectors';
const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const getViewContacts = contacts.filter(contact =>
    (contact.name || '').toLowerCase().includes((filter || '').toLowerCase())
  );

  useEffect(() => {
    dispatch(addContact());
  }, [dispatch]);

  return (
    <ul className={css.ulList}>
      {getViewContacts.map(({ name, number, id }) => (
        <li className={css.Li} key={id} id={id}>
          {name}: {number}
          <button
            className={css.btnContact}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
