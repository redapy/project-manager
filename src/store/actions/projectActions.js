import { addDoc, collection } from "firebase/firestore"; 
import { firestore } from "../../configs/fbConfig";

export const createProject = project => {
    return (dispatch, getState) => {
        addDoc(collection(firestore, "projects"), {
            ...project,
            authorFirstName: 'redaa',
            authorLastName: 'bahaa',
            authorID: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREAET_PROJECT', project})
        }).catch(e => {
            dispatch({type: 'CREAET_PROJECT_ERROR', e})
        })
        

    }
}