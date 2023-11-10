
import React, { Component } from 'react';
import './Styles/App.css';
import NavBar from './Components/NavBar';
import {
  BrowserRouter as Router, 
  Route, 
  Routes
} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import RegistrationPage from './Pages/RegistrationPage';
import LoginPage from './Pages/LoginPage';
import AccountPage from './Pages/AccountPage';
import BookingPage from './Pages/BookingPage';

// Other techniques for App.js Layout
//const App = () => { 
//function App() {

// Working Project Code
class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </Router>
    );
  };
};

export default App;


// Original Code
/*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
*/