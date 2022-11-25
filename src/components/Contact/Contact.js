import PropTypes from 'prop-types';
import { MdDeleteForever } from 'react-icons/md';

import { getRandomHexColor, upFirst } from '../../utils/index';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import {
  ContactWrapper,
  Text,
  Avatar,
  Button,
} from './Contacts.styled';

export const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactWrapper>
      <Avatar color={getRandomHexColor()}>{upFirst(name)}</Avatar>

      <Text>
        {name}
        <span>Phone: {number}</span>
      </Text>

      <Button type="button" onClick={handleDelete}>
        <MdDeleteForever size={28} />
      </Button>
    </ContactWrapper>
  );
};

Contact.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
