import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import emailjs from 'emailjs-com';

emailjs.init('YOUR_USER_ID');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
