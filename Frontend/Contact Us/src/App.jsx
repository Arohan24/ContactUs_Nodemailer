import React from 'react';
import './App.css'; // Import your CSS file here
import ContactForm from './components/ContactForm.jsx'; // Assuming ContactForm is in a separate file

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our Website</h1>
        {/* Render the ContactForm component */}
        <ContactForm />
      </header>
    </div>
  );
}

export default App;
