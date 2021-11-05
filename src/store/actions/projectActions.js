import { addDoc, collection } from "firebase/firestore"; 
import  {auth, firestore}  from "../../configs/fbConfig";

export const createProject = project => {
    return (dispatch, getState) => {
        const user = getState().auth.user
        const uid = auth.currentUser.uid
        addDoc(collection(firestore, "projects"), {
            ...project,
            authorFirstName: user.firstName,
            authorLastName: user.lastName,
            authorID: uid,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREAET_PROJECT', project})
        }).catch(e => {
            dispatch({type: 'CREAET_PROJECT_ERROR', e})
        })
        

    }
}

export const syncingProject = (data) => {
    return {type: 'INITIAL_PROJECT', data}
}