import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import './i18n';
import { StrictMode } from 'react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>

)
