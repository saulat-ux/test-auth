import React, { useState } from 'react'
import styles from './login.module.css'
import { useLogin } from '../../hooks/useLogin'

const Login = () => {
    const [email , setEmail] = useState('')
    const [password ,setPassword] = useState('')
    const {login} = useLogin()

    const handlesubmit = (e) => {
        e.preventDefault()
        login(email,password)

    }
  return (
   <form className={styles['login-form']} onSubmit={handlesubmit}>
    <h2>Login</h2>
        <label>
            <span>Email:</span>
            <input type="email" onChange={(e) => setEmail(e.target.value) }/>
        </label>

           <label>
            <span>Password:</span>
            <input type="password"  onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <button className='btn'>Login</button>

   </form>
  )
}

export default Login
