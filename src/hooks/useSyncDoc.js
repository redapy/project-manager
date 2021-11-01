import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../configs/fbConfig";
import { useEffect} from "react";
import { useDispatch } from "react-redux";
import { syncUser } from "../store/actions/authActions";

export const useSyncDoc = (collection, uid) => {
    const dispatch = useDispatch()
    useEffect(() => {
        const userRef = doc(firestore, collection, uid)
        getDoc(userRef)
        .then(doc => {
            dispatch(syncUser(doc.data()))
        })
    },[collection, uid, dispatch])
}





