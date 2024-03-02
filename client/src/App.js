
import React, { Component } from 'react';
import './Styles/App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
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

// use -f to force push the main branch, need to update sensitive data

// Solo Developer Git Workflow
/*
// Switch to seperate branch for small contributions (Each branch isolates different line of development... In this case just use 'feature')
git switch feature
// Make changes in the feature branch and commit
git add .
git commit -m "Your commit message"
// Merge changes into the main branch
git switch main
git merge feature
// After resolving merge issues commit main branch
git add .
git commit -m "Merge branch 'feature'"
// Push changes to remote (Just pushing main branch for solo work)
git push origin main
*/