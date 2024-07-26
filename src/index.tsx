import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import emailjs from 'emailjs-com';

emailjs.init('YOUR_USER_ID');

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
