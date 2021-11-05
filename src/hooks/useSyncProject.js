import { collection, onSnapshot} from "firebase/firestore"
import { firestore } from "../configs/fbConfig"
import { useDispatch } from "react-redux"
import { useEffect } from "react"


export const useSyncProject = (collectionName, action) => {
    const dispatch = useDispatch()
    useEffect(() => {
        const projectRef = collection(firestore, collectionName)
        const unsb = onSnapshot(projectRef, snapshot => {
            dispatch(action(snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))))
        })
        return unsb
     }, [dispatch,action,collectionName])
}