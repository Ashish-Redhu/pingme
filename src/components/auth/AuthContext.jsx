// To manage user authentication (login/logout) state globally, we use React Context (means useContext).
// And, globally means we will store data somewhere which can be passed to a component directly without prop drilling. useContext is helpful when we have lot of compnents (large project).
import React, { useState, createContext, useContext } from 'react'
const AuthContext = createContext(); //1.) We have created a context. As context is the thing which will store something globally. As the data is related to authentication, we name it as "AuthContext"; This context will store the user details and authentication functions (login, logout).
// Upper statement means (announcement: ki bhaiya main aik global store banane wala hoon).

// 2.) Now AuthProvider is a wrapper function that will provide data to all children. K bhai jo data humare pass hai, globally store kiya hai usse kuch components tak pahunchane k liye iss tarike se unn components ko wrap kiya jata (wo coponents children kehlate hain).
// This is our global store. Name can be anything.
export const AuthProvider = ({children}) => {

    //2.i) Aik tarike se jo yahan chijein hain wo class definition ki tarah hain. Humne aik method banaya ki humare pass kya-kya hai (variables, functions);
    const [user, setUser] = useState(null);

    const login = (userData) =>{
        setUser(userData);
    }
    const logout = () =>{
        setUser(null);
    }
    // 2.ii) Aur jo return k ander chijein hain wo object ki tarah hain. ki bhai wo upper chijein define kar di unko aise use kar lo.
    return (
        // Ye jo values hain wo children k pass chali jayengi.
        <AuthContext.Provider value={{user, login, logout}}> 
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
// Yahan humnein announcement karne wale bande ko export kar diya (owner exported).
// We have stored the owner into "useAuth", so that we don't have to use "useContext(AuthContext)" again and again.

// a.) 
// Now to use this AuthContext (global store) we have to wrap our app or those components where we want this data to make available. 
// We will wrap app.jsx with AuthProvider (the method/class we have created above). Because that is also a kind of declaration that hey, you can use this store data. 
// go to App.jsx;

// b.)
// And, when individual components want to use this data, they can use "useAuth" hook.
// like: import {useAuth} from '../auth/AuthContext';
// const {user, login, logout} = useAuth();
