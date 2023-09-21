
import './App.css'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import {BrowserRouter ,Route, Routes, Navigate} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

function App() {
  const {user} = useAuthContext()


  return (
    <div className='App'>
     <BrowserRouter>
      <Navbar/>
     <Routes>

        <Route path='/' element={user ? <Home/> : <Navigate to='/login'/>}/>
        <Route path='/login' element={!user ? <Login/> : <Navigate to='/'/>}/>
        <Route path='/signup' element={!user ? <Signup/> : <Navigate to='/'/>}/>

     </Routes>
     
     </BrowserRouter>
    </div>
  )
}

export default App
