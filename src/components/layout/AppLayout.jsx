import React from 'react'
import { Outlet } from 'react-router-dom'; 
import { useAuth } from '../auth/AuthContext';
import Header from './Header'
import Footer from './Footer'

const AppLayout = () => {
  const {user} = useAuth();
  return (
    <>
       {/* // If user is there only then we will show header. */}
       {user && <Header/>} 
       <Outlet/> {/* Renders the current route's component dynamically */}
       {/* Outlet simply says, "I will bring header and footer and keep render. You just go and bring something to disply at the place of "Outlet" means dynamic changes.  */}
       {user && <Footer/>}

       {/* The two things with header and footer are for Home page. Because home page is not under protected routes. So, we can see the home page even if the user is not logged in. But we can't see Header and footer. */}
    </>
  )
}

export default AppLayout;

// Now we can simply wrap the paths/pages which we want to have this Applayout features.
// go to "App.jsx"