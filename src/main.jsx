import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'

import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'

 const route = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Login/>
      },
      {
        path:"register",
        element:<Register/>
      }
    ]
  }
 ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <RouterProvider router={route}>
    <App />
    </RouterProvider>
   
  </React.StrictMode>,
)
