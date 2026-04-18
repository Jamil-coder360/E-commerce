import { useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.config";

export const AuthContext  =createContext ({
    user: {},
    setUser: ()=>{}
})

const AuthProvider = ({children}) =>{
    const [user,setUser] = useState({});

const signUp = (email,password) => {

 createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(erroemessage);
    // ..
  });
};


    return<AuthContext value={{user,setUser,signUp}}>
        {children}
    </AuthContext>
}

export default AuthProvider;