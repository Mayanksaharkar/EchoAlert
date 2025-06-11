import React from 'react';
import { BrowserRouter as Router, Routes, Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout/layout.jsx';
import LandingPage from './Screens/LandingPage/LandingPage.jsx';
function App() {
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
    ],
  },
])

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
