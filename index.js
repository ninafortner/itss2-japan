import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/resources/App';
import { BrowserRouter } from 'react-router-dom';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
