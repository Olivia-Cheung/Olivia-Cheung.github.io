import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <link rel="icon" type="image/x-icon" href="/Icon.png"></link>
    <App />
    
  </HashRouter>,
)

