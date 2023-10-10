import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './components/Main.jsx'
import CountryPage from './components/CountryPage.jsx'

import data from './assets/data.json'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main data={data} />
      },{
        path: '/country-page/:countryName',
        element: <CountryPage data={data} />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
