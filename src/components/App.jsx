// import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from './Filter/Filter';
import Notiflix from 'notiflix';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { useEffect, useState } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    if (!name || !number) {
      return;
    }

    if (
      contacts.find(
        item =>
          item.name.toLowerCase() === name.toLowerCase() ||
          item.number === number
      )
    ) {
      Notiflix.Notify.failure(`Is already in contacts`);
      return;
    }
    setContacts(prevContacts => [
      ...prevContacts,
      { name: name, id: nanoid(), number: number },
    ]);
  };

  const stateFilter = name => {
    setFilter(name);
  };

  const deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }));
  };

  const filterContact = contacts.filter(contacts =>
    contacts.name.toLowerCase().includes(filter)
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter stateFilter={stateFilter} />
      <ContactList contacts={filterContact} deleteContact={deleteContact} />
      <GlobalStyle />
    </div>
  );
};
