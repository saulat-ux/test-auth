import React from 'react'
import styles from './home.module.css'
import { useAuthContext } from '../../hooks/useAuthContext'

const Home = () => {
  const {user} = useAuthContext()
  return (
    <div className={styles['home']}>
      {user && <>
     
      <h2>Hi {user.displayName} </h2>
      <p>welcome to my webiste</p>
     
    
      
      </>} 
    </div>
  )
}

export default Home
