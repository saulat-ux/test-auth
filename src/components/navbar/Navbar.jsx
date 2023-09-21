import React from 'react'
import styles from './navbar.module.css'
import { Link } from 'react-router-dom'
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'

const Navbar = () => {
  const {user} = useAuthContext()
  const {logout} = useLogout()
  return (
    <nav className={styles['navbar']}>
        <ul>
            <li>Saulat form</li>
            <li><Link to='/'>Home</Link></li>
            { !user && <>
            <li>
                <Link to='/login'>Login</Link>
            </li>
            <li> <Link to='/signup'>Sign up</Link></li>
            </>}
           
           
           
           {user && <li>Hey {user.displayName}</li>}


            { user &&
            <li>
               <button className='btn' onClick={logout}>Logout</button>
            </li>

            }

   </ul>
    </nav>
   
  )
}

export default Navbar
