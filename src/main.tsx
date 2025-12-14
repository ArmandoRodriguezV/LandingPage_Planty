import './index.css';
import './styles/general.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Landing from './pages/landing/landing';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Terms from './pages/terms/terms';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path:"/avisoprivacidad",
    element:<Terms />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
