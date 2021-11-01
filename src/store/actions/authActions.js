import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, firestore } from "../../configs/fbConfig";

export const signIn = (email, password) => {
    return (disaptch, getState) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            disaptch({type: 'LOGIN_SUCCES'})
        })
        .catch(e => {
            disaptch({type: 'LOGIN_FAILD', e})
        })
    }
}

export const signout = () => {
    return dispatch => {
        signOut(auth)
        .then(() => dispatch({type: 'SIGNOUT_SUCCES'}))
    }
}

export const signup = (email, password, firstName, lastName) => {
    return (dispatch, getState) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            const user = userCredential.user;
            const userRef = doc(firestore, 'users', user.uid)
            return setDoc(userRef, {
                    firstName,
                    lastName,
                    initials: firstName[0]+lastName[0]
                })
        }).then(() => {
            dispatch({type: 'SIGNUP_SUCCES'})
        }).catch(e => {
            dispatch({type: 'SIGNUP_FAILD', e})
        })
    }
}

export const syncUser = (user) => {
    return {type: 'SYNC_USER', user}
}

