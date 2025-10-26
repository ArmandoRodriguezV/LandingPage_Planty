import './index.css';
import './styles/general.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Landing from './pages/landing';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Landing />
  </StrictMode>,
)
