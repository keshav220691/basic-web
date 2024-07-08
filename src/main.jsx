import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Root from './Root'
import About from './components/About/About'
import Contact from './components/ConactUs/Contact'
import Home from './components/Home/Home'
import User from './components/User/User'
import Github, { githubInfoLoader } from './components/Github/Github'


// choice 1
// const router  = createBrowserRouter([
//   {
//     path:'/',
//     element:<Root />,
//     children: [
//       {
//         path:'',
//         element:<Home />
//       },
//       {
//         path:'about',
//         element:<About />
//       },
//       {
//         path:'contact',
//         element:<Contact />
//       }
//     ]
//   }
// ])

// choice 2

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <Root />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>
      <Route
      loader={githubInfoLoader}
       path='github'
        element={<Github />}
      />
      <Route path='user/:userid' element={<User />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
