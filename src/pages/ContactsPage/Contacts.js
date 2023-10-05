import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectContacts } from 'redux/Contacts/selectors';
import ContactList from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';
import { selectLoading, selectError } from 'redux/Contacts/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(selectContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />

      <Filter />
      {isLoading && !error && <ContactList />}
      <ContactList />
    </div>
  );
};

export default Contacts;
