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
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import CardDetails from './components/CardDetails/CardDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';
import AuthProvider from './Provider/AuthProvider';
import PrivateRoutes from './Routes/PrivateRoutes';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: '/data/:id',
        element: <PrivateRoutes><CardDetails></CardDetails></PrivateRoutes>,
        loader: () => fetch("/data.json"),
      },
      {
        path: '/updateprofile',
        element: <PrivateRoutes><UpdateProfile></UpdateProfile></PrivateRoutes>
      },
      {
        path: "/userprofile",
        element: <PrivateRoutes><UserProfile></UserProfile></PrivateRoutes>
      },
      {
        path: "/contact",
        element: <PrivateRoutes><Contact></Contact></PrivateRoutes>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider><RouterProvider router={router} /></AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
