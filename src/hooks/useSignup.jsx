import { useState } from "react";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";


export const useSignup = () => {
    const [error , setError] = useState(null)
    const {dispatch} = useAuthContext()
    
    const signup = async (email, password, displayName) => {
        setError(null)
       
        try {
            const {user} = await createUserWithEmailAndPassword(auth, email, password)
            console.log(user)
            if(!user){
                throw new Error('could not complete error')
            }
            await updateProfile(user, {displayName})

            dispatch({type: "LOGIN" , payload: user})
        } catch (error) {
            console.log(error.message)
            setError(error.message)
            
        }
    }
    return {error , signup}

}