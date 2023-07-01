import React from 'react';
import './App.css';
import ContactFormComponent from './components/ContactFormComponent.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarColor from './components/NavBarColor.js';
import './components/styled.css';
import ContactsTableComponent from './components/ContactsTableComponent'

function App() {
  return (
    <div className='App'>
      <NavBarColor/>
      <ContactFormComponent/>
      <ContactsTableComponent/>
    </div>
  );
}

export default App;