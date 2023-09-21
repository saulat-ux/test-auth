import React, { useState } from 'react'
import styles from './signup.module.css'
import { useSignup } from '../../hooks/useSignup'

const Signup = () => {
    const {signup} = useSignup()

    const [email , setEmail] = useState('')
    const [password ,setPassword] = useState('')
    const [displayName , setDisplayName] = useState('')

    const handlesubmit = (e) => {
        e.preventDefault()
        signup(email,password ,displayName)

    }
  return (
    <form className={styles['signup-form']} onSubmit={handlesubmit}>
    <h2>Sign up</h2>

    <label>
            <span>Display name:</span>
            <input type="text" onChange={(e) => setDisplayName(e.target.value)} />
        </label>

        <label>
            <span>Email:</span>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </label>

           <label>
            <span>Password:</span>
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button className='btn'>Sign up</button>

   </form>
  )
}

export default Signup
