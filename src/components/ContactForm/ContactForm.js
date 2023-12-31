import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/Contacts/operations';
import { nanoid } from '@reduxjs/toolkit';
import css from './ContactForm.module.css';
import { selectContacts } from 'redux/Contacts/selectors';

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const sameName = contacts.some(
      ({ name }) => name && name.toLowerCase() === contactName.toLowerCase()
    );

    if (sameName) {
      alert(`${contactName} is already in contacts!`);
      return;
    }

    dispatch(
      addContact({
        name: contactName,
        number: contactNumber,
        id: nanoid(),
      })
    );

    setContactName('');
    setContactNumber('');
  };

  const handleChange = e => {
    const { value, name } = e.target;

    switch (name) {
      case 'name':
        setContactName(value);
        break;
      case 'number':
        setContactNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.NameStyle}>
        Name
        <input
          className={css.inputStyle}
          type="text"
          name="name"
          value={contactName}
          onChange={handleChange}
          required
        />
      </label>
      <label className={css.NameStyle}>
        Number
        <input
          className={css.inputStyle}
          type="text"
          name="number"
          value={contactNumber}
          onChange={handleChange}
          required
        />
      </label>
      <button className={css.btn} type="submit">
        Add Contact
      </button>
    </form>
  );
}

export default ContactForm;
