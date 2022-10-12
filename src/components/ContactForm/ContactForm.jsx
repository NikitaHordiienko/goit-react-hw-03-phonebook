import React, { Component } from "react";
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }

    handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value })
    }

    handleSumbit = event => {
        event.preventDefault();

        const contact = {
            id: nanoid(),
            name: this.state.name,
            number: this.state.number,
        }

        this.props.onSubmit(contact);

        this.reset();
    }

    reset = () => {
        this.setState({ name: '', number: '',});
    };

    render() {
        return (
            <form className={css.form} onSubmit={this.handleSumbit}>
                <label className={css.formLabel} htmlFor="name">Name</label>
                <input
                    className={css.formInput}
                    type="text"
                    name="name"
                    value={this.state.name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={this.handleChange}
                />
                <label className={css.formLabel} htmlFor="number">Number</label>
                <input
                    className={css.formInput}
                    type="tel"
                    name="number"
                     value={this.state.number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={this.handleChange}
                />
                <button className={css.formButton} type="submit">Add contact</button>
            </form>
        )
    }
}

export default ContactForm;