import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, TwitterAuthProvider, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
const auth = getAuth(app);

export const AuthContext  = createContext()
const GoogleProvider = new GoogleAuthProvider()
const GithubProvider = new GithubAuthProvider()
const TwitterProvider = new TwitterAuthProvider()



const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const register = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
        setLoading(true)
    }

    const login = (email,password)=>{
        return signInWithPopup(auth,email,password)
        setLoading(true)
    }

    const LogOut = ()=>{
        return signOut(auth)
        setLoading(true)
    }

    const ProfileUpdate = (name)=>{
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }

    const GoogleSignIn = ()=>{
        return signInWithPopup(auth,GoogleProvider)
        setLoading(true)
    }

    const GithubSignIn = ()=>{
        return signInWithPopup(auth,GithubProvider)
        setLoading(true)
    }
    const TwitterSignIn = ()=>{
        return signInWithPopup(auth,TwitterProvider)
        setLoading(true)

    }

    useEffect(()=>{
        const UnSubscribe = onAuthStateChanged(auth, currentUser=>{
            setLoading(false)
            setUser(currentUser)
            console.log(currentUser)
        })

        return()=>{
            UnSubscribe()
        }
    })

    const authInfo = {
        register,
        login,
        user, 
        loading,
        LogOut,
        ProfileUpdate,
        GoogleSignIn,
        GithubSignIn,
        TwitterSignIn
    }

    return (
        <div>
           <AuthContext.Provider value={authInfo}>
           {children}
           </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;