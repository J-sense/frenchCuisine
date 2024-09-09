import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HeroSection from './components/Herosection.jsx';
import Latestmeal from './components/Latestmeal.jsx';
import Details from './components/Details.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/",
        element:<HeroSection/>
      },
      {
        path:"/latest",
        element:<Latestmeal/>
      },
      {
        path:"/details/:id",
        element:<Details />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
