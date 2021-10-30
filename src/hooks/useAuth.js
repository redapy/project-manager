import { auth } from "../configs/fbConfig"
import { onAuthStateChanged } from "firebase/auth"
import { useState } from "react"
import { useEffect } from "react"

 const useAuth = () => {
    const [currentUser, setCurrentUser] = useState('')

    useEffect(() => {
       const unsb = onAuthStateChanged(auth, user =>  setCurrentUser(user))
        return unsb
    }, [])

    return currentUser
}

export default useAuth