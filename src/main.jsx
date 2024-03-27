import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'

import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import VotingSetup from './components/Admin/VotingSetup.jsx'
import Store from './components/utils/Store.js'

import Votingoption from './components/Admin/Votingoption.jsx'
import VotingPage from './components/Admin/VotingPage.jsx'
import Dashboard from './components/Dashboard.jsx'
import Vote from './components/Vote.jsx'

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
      },
      {
        path:"dashboard",
        element:<Dashboard/>
      },
      {
        path:"/vote",
        element:<VotingSetup/>,
        children:[
          {
            path:"addvote",
            element:<Votingoption/>
          },
          {
            path:"voting",
            element:<VotingPage/>
          },
          {
            path:"votingPortal",
            element:<Vote/>
          }
        ]
      }
    ]
  }
 ])

ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={Store}>
  <RouterProvider router={route}>
    <App />
    </RouterProvider>
    </Provider>

)


