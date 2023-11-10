/*
Particular directory for 'npm start'
C:\Users\19415\Web_Dev\boat-club02-app\client (or server)

If your project has separate client and server folders within the root directory, 
you'll need to run npm start in each respective folder, depending on whether you 
want to start the client-side development server or the server-side application.
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Styles/index.css';
import './Styles/bootstrap-5.2.3-dist/css/bootstrap.css'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
