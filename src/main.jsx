import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Layouts/MainLayout.jsx';
import Home from './components/Home.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import CoffeeDetails from './components/CoffeeDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
      { 
        index: true,
        loader:()=> fetch('http://localhost:3000/coffees'),
        Component:Home
      },
      {
        path:'coffee/:id',
        Component:CoffeeDetails
      },
      {
        path:'addCoffee',
        Component:AddCoffee
      },
      {
        path:'updateCoffee/:id',
        loader:({params})=>fetch(`http://localhost:3000/coffees/${params.id}`) ,
        Component: UpdateCoffee
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
