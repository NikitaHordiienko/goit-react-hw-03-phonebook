import React from "react";
import PropTypes from 'prop-types';
import ContactListItem from "components/ContactListItem/ContactListItem";
import css from './ContactList.module.css';

const ContactList = ({contacts, onDeleteContact}) => {
    return (
        <ul className={css.list}>
            {contacts.map(contact => {
                return (
                    <ContactListItem
                        contact={contact}
                        onDeleteContact={onDeleteContact}
                        key={contact.id}
                    />
                )
             })}
        </ul>
    )
}

ContactList.propTypes = {
    conatcts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    onDeleteContact: PropTypes.func.isRequired,
}

export default ContactList;
