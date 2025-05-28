import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './i18n/config';  // aqui inicializa o i18next
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
