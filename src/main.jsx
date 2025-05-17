import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css';
import './tailwind.css';
import Login from './pages/Login.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Login />
  </StrictMode>
);
