import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../configs/fbConfig";

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