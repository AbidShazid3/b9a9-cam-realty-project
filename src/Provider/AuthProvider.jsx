import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // register
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword (auth, email, password);
    }

    // update profile
    const updateUserProfile = (name, image)=>{
        setLoading(true);
        return updateProfile ( auth.currentUser, {
            displayName: name,
            photoURL: image,
        })
    }

    // log in
    const logInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // google log in
    const googleLogIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // github log in 
    const githubLogIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    // sign out
    const signOutUser = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect( ()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('state changed', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unSubscribe();
        }
        
    } , [])

    const authInfo = {user, loading, createUser, updateUserProfile, logInUser, googleLogIn, githubLogIn, signOutUser}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes={
    children: PropTypes.node,
}

export default AuthProvider;