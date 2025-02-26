import React, {lazy, Suspense} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { AuthProvider } from './components/auth/AuthContext'
import AppLayout from './components/layout/AppLayout'
import ProtectedRoute from './components/auth/ProtectedRoute'

// import Home from './pages/Home' Normal imports.
// Lazy import:
const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Groups = lazy(() => import('./pages/Groups'))
const Chat = lazy(() => import('./pages/Chat'))
const NotFound = lazy(() => import('./pages/NotFound'))
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>

          {/* Routes that share "AppLayout" OR say the Header & Footer */}
          <Route element={<AppLayout />} >
             
             {/* So, when we go to home, we can see home because it is not under protected routes. */}
            <Route path="/" element={<Home />} />

            {/* Protected Routes for Logged-in Users */}
            <Route element={<ProtectedRoute/>}>
              <Route path="/chat" element={<Chat />} />
              <Route path="/groups" element={<Groups />} />
            </Route>
          </Route>

          {/* Routes without Header & Footer */}
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
        </Suspense>
      </Router> 
    </AuthProvider>
  );
}

export default App