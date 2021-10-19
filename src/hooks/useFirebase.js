import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, FacebookAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import initializeAuthentiation from '..//Firebase/firebase.init';

initializeAuthentiation();

const useFirebase = () => {
    const [user, setUser] = useState({});
    console.log(user);
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState('');

    const auth = getAuth();


    // google sign in
    const signInUsingGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .finally(() => setIsLoading(false));
    }
    // facebook sign in
    const signInUsingFb = () => {
        setIsLoading(true)
        const fbProvider = new FacebookAuthProvider();
        signInWithPopup(auth, fbProvider)
            .then(result => {
                setUser(result.user);
            })
            .finally(() => setIsLoading(false));

    }

    // email and password sign in
    const handleRegistration = e => {
        e.preventDefault();
        if (pass.length < 6) {
            setError('Password must be at least 6 charachter');
            return;
        }

        isLogin ? processLogin(email, pass) : createNewUser(email, pass);
    }

    const processLogin = (email, pass) => {
        signInWithEmailAndPassword(auth, email, pass)
            .then((result) => {
                console.log(result.user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const createNewUser = (email, pass) => {
        createUserWithEmailAndPassword(auth, email, pass)
            .then((result) => {
                // const user = result.user;
                console.log(result.user);
                setError('');
                verifyEmail();
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then((result) => {

        }).catch((error) => {
            setError(error.message);
        });
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then((result) => {
            });
    }

    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePassChange = e => {
        setPass(e.target.value);
    }

    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then((result) => {

            })
    }

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => {
                setIsLoading(false)
            })
    }
    // observe user state changed 
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    return {
        user,
        isLoading,
        signInUsingGoogle,
        signInUsingFb,
        logOut,
        email,
        pass,
        error,
        isLogin,
        handleEmailChange, handleNameChange, handlePassChange, handleRegistration, handleResetPassword, toggleLogin
    }

}

export default useFirebase;