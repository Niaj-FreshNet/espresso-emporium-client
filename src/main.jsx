import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import SignUp from './components/SignUp.jsx';
import SignIn from './components/SignIn.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Users from './components/Users.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('https://espresso-emporium-server-esgnol2jn-niajs-projects.vercel.app/coffee'),
  },
  {
    path: "AddCoffee",
    element: <AddCoffee></AddCoffee>
  },
  {
    path: "UpdateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`https://espresso-emporium-server-esgnol2jn-niajs-projects.vercel.app/coffee/${params.id}`)
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>
  },
  {
    path: '/users',
    element: <Users></Users>,
    loader: () => fetch('https://espresso-emporium-server-esgnol2jn-niajs-projects.vercel.app/user')
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
