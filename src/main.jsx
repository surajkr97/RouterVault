import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github, { githubInfoLoader } from './components/Github/Github'
import SignUp from './components/SignUp/SignUp'
import LogIn from './components/LogIn/Login'
import Hero from './components/Hero/Hero'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Hero/>}/> 
      <Route path='signup' element={<SignUp/>}/>
      <Route path='login' element={<LogIn/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path ='about' element={<About/>}/>
      <Route path = 'contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route loader={githubInfoLoader} path='github' element={<Github/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
