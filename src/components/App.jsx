import React, { Component } from "react";
import Section from "./Section/Section";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";


class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79'  },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  componentDidMount() {
    const contactsStorage = localStorage.getItem('contacts');
    const parsedContactsStorage = JSON.parse(contactsStorage);
    
    if (parsedContactsStorage) {
      this.setState({contacts: parsedContactsStorage})
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  addContact = newContact => {

    const existingContact = this.state.contacts.find(contact =>
      contact.name === newContact.name);

    if (existingContact) {
      alert(`${newContact.name} is already in contacts`)
      return
    }

    this.setState(({ contacts }) => ({
      contacts:[newContact, ...contacts]
    }))
  }

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))
  }

  changeFilter = event => {
    this.setState({filter: event.currentTarget.value})
  }

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    ); 
  }

  render() {    
    const filteredContacts = this.filterContacts();
    const { filter } = this.state;

    return (
      <>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList contacts={filteredContacts} onDeleteContact={this.deleteContact}/>
        </Section>
    </>
  );
  }  
};

export default App;