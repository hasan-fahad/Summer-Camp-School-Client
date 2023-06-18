/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { createContext } from 'react';
import axios from 'axios';

export const AuthContext = createContext(null);
export const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider();
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (name, photo) =>{
        setLoading(true)
        return updateProfile(name, photo)
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(()=>{ const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        console.log('current user', currentUser);

        // get and set token
        if(currentUser){
            axios.post('https://summer-camp-school-server-bay.vercel.app/jwt', {email: currentUser.email})
            .then(data =>{
                
                localStorage.setItem('access-token', data.data.token)
                setLoading(false);
            })
        }
        else{
            localStorage.removeItem('access-token')
        }

        
    });
    return () => {
        return unsubscribe();
    }
}, [])
    const updateUserData = (user, name, photoURL)=>{
        updateProfile(user,{
          displayName:name, photoURL: photoURL
        })
        .then(()=>{
          console.log('user name and photo URL updated');
        })
        .catch(error =>{
          console.log(error)
        })
      }
    const authInfo ={
        user,
        createUser,
        signIn,
        updateProfile,
        logOut,
        loading,
        provider,
        githubProvider,
        updateUserData
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;