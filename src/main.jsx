import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";;


import './styles.css';
import { HeroesApp } from './HeroesApp';
import { MarvelPage } from './heroes/pages/MarvelPage';
import { DcPage } from './heroes/pages/DcPage';
import { LoginPage } from './auth/pages/LoginPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeroesApp />,
  },
  {
    path: "MarvelPage",
    element: <MarvelPage/>,
  },
  {
    path: "DcPage",
    element: <DcPage/>,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
