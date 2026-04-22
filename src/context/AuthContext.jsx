import { useEffect, useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword , GoogleAuthProvider,signInWithEmailAndPassword, signInWithPopup,signOut } from "firebase/auth";
import auth from "../firebase.config";

export const AuthContext  =createContext ({
    user: {},
    setUser: ()=>{}
})

const AuthProvider = ({children}) =>{
    const [user,setUser] = useState(null);
    useEffect(()=>{
      const unSubscribe = auth.onAuthStateChanged((currentUser)=>{
        setUser(currentUser);
      })
      return unSubscribe;
    },[])

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
const signUpWithGoogle = () => {

const provider = new GoogleAuthProvider();
console.log("sign up with google");

signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
};

const logOut= ()=>{

signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
}

const login =  (email, password) => {
  return( signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("login succesful")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  }));
};

    return<AuthContext value={{user,setUser,signUp,signUpWithGoogle,logOut,login}}>
        {children}
    </AuthContext>
}

export default AuthProvider;