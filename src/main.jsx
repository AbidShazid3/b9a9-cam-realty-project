import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import MainLayout from './components/MainLayout/MainLayout';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';
import UserProfile from './components/UserProfile/UserProfile';
import Contact from './components/Contact/Contact';
import About from './components/About/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/updateprofile',
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: "/userprofile",
        element: <UserProfile></UserProfile>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/about",
        element: <About></About>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
