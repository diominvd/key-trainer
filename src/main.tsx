import React from 'react';
import ReactDOM from 'react-dom/client';
// Components;
import { App } from '@app/App.tsx';
// Styles;
import '@styles/main.scss';
import '@styles/theme-dark.scss';
import '@styles/colors.scss';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
