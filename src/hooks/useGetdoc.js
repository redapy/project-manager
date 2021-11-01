import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../configs/fbConfig";

export const useGetdoc = (collection, uid) => {
    const [user, setUser] = useState({})
    useEffect(() => {
        const userRef = doc(firestore, collection, uid)
        getDoc(userRef)
        .then(doc => {
            setUser(doc.data())
        })
    },[collection, uid])
    return user
}


