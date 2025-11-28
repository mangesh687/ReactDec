import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//react 18 version se pehle ReactDOM.render method use hota tha
//react 18 me ReactDOM.createRoot method use hota hai
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//this file is calling from public/index.html file where div with id 'root' is present
//root created using ReactDOM.createRoot method and rendering App component inside it
//root is calling next with App.js file.


reportWebVitals();
