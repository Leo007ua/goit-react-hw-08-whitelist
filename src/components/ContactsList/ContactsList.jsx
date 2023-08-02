import React from 'react';
import PropTypes from 'prop-types';
import Contact from 'components/Contact/Contact';
import { StyledContactsList, StyledContactsTitle } from './ContactsList.styled';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/contactsSelectors';

function ContactsList({ title, contacts, deleteContact }) {
  const filter = useSelector(selectFilter);
  const contactsFilter = () => {
    return contacts.filter(({ name }) =>
      name?.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filteredContacts = contactsFilter();

  return (
    <>
      <StyledContactsTitle>{title}</StyledContactsTitle>
      <StyledContactsList>
        {filteredContacts.map(({ name, id, number }) => {
          return (
            <Contact
              key={id}
              name={name}
              id={id}
              phone={number}
              deleteContact={deleteContact}
            ></Contact>
          );
        })}
      </StyledContactsList>
    </>
  );
}

export default ContactsList;

ContactsList.propType = {
  deleteContact: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  }).isRequired,
};
