import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom'
import './index.css'

import Layout from './Layout.jsx'
import Home from './component/Home/home.jsx'
import About from './component/About/about.jsx'
import Contact from './component/Contact/contact.jsx'
import User from "./component/User/user.jsx";
import Github, { githubInfoLoader } from './component/Github/github.jsx'

// const router = createBrowserRouter([    // 1st method
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         index: true,
//         element: <Home />
//       },
//       {
//         path: 'home',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact/>
//       }
//     ]
//   }
// ])  
const router = createBrowserRouter(        // 2nd method
  createRoutesFromElements( 
    <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='user/:userid' element={<User/>}/>
        <Route 
          loader={githubInfoLoader}
          path="github" 
          element={<Github/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)