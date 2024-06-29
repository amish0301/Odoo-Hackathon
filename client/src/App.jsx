import React, { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ProtectRoutes from './utils/ProtectRoutes'

import Home from './Components/Home'
// const Home = lazy(() => import('./Components/Home'))
const About = lazy(() => import('./Pages/About'))
const Contact = lazy(() => import('./Pages/Contact'))
const SignIn = lazy(() => import('./Pages/SignIn'))
const AppLayout = lazy(() => import('./Layout/AppLayout'))


const App = () => {
  const user = true;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>

        <Route path='/sign-in' element={<ProtectRoutes user={user}><SignIn /></ProtectRoutes>} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Suspense>
  )
}

export default App