import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    // register
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword (auth, email, password);
    }

    // log in
    const logInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    // google log in
    const googleLogIn = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    // github log in 
    const githubLogIn = () =>{
        return signInWithPopup(auth, githubProvider);
    }

    // sign out
    const signOutUser = () =>{
        return signOut(auth);
    }

    useEffect( ()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('state changed', currentUser);
            setUser(currentUser);
        })
        return ()=>{
            unSubscribe();
        }
        
    } , [])

    const authInfo = {user, createUser, logInUser, googleLogIn, githubLogIn, signOutUser}

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