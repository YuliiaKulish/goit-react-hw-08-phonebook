import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/contacts/selectors';

import { Contact } from '../Contact/Contact';
import { ContactsList, ContactListItem } from './ContactList.styled';

const ContactList = () => {
  const visibleСontacts = useSelector(selectVisibleContacts);

  return (
    <ContactsList>
      {visibleСontacts.map(contact => (
        <ContactListItem key={contact.id}>
          <Contact contact={contact} />
        </ContactListItem>
      ))}
    </ContactsList>
  );
};

export default ContactList;
