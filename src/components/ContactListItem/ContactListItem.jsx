import React from "react";
import css from './ContactListItem.module.css';

const ContactListItem = ({ contact, onDeleteContact }) => {
    return (
        <li key={contact.id} >
            <div className={css.item}>
                <p className={css.text}>{contact.name}:</p>
                <a className={css.phone} href={"tell:" + contact.number}>{contact.number}</a>
                <button
                    className={css.button}
                    type="button"
                    onClick={() => onDeleteContact(contact.id)}
                >Delete</button>
            </div>            
        </li>
    )
}

export default ContactListItem;