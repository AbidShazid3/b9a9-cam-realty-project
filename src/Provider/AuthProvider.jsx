import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
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

    const authInfo = {user, createUser, logInUser, signOutUser}

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