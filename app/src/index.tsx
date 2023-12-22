import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { createHashRouter } from 'react-router-dom';
import App from './App';
import MoreProjects from './Components/MoreProjects/MoreProjects';
import AllProjectsCards from './Components/AllProjectsCards/AllProjectsCards';


const router = createHashRouter([
  
  {
    path: '/',
    element: <App />,
    errorElement: <div>Something went wrong</div>
  },
  {
    path: '/more',
    element: <MoreProjects />,
    children: [
      {
        path: 'portfolios',
        element: <AllProjectsCards category='portfolio' />
      },
      {
        path: 'business',
        element: <AllProjectsCards category='business' />
      },
      {
        path: 'ecommerce',
        element: <AllProjectsCards category='ecommerce' />
      },
      {
        path: 'fun',
        element: <AllProjectsCards category='fun' />
      }
    ]
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
