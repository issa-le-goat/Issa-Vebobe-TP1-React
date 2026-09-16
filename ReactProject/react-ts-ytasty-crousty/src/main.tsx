import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './index.css';

// Importation des vues (Pages)
import HomePage from './pages/HomePage.tsx';
import Users from './pages/Users.tsx';
import User from './pages/UserPage.tsx';
import Recipe from './pages/Recpie.tsx';
import NotFound from './pages/NotFound.tsx';
import Header from './Components/Header.tsx';
import Login from './pages/login.tsx';
import Profile from './pages/profile.tsx'; // 1. Nouvel import ajouté

const Layout = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
  </>
);

const router = createBrowserRouter([
  {
    element: <Layout />, 
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/recipe/:id",
        element: <Recipe />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/users/:id",
        element: <User />,
      },
      {
        path: "/login",
        element: <Login />
      },
      // 2. Nouvelle route ajoutée pour le profil
      {
        path: "/profile/:id",
        element: <Profile />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);