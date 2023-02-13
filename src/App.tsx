import { useEffect, useState } from 'react'
import './App.css'
import { Home, Login, Register, Navbar } from './containers'
import { Routes, Route, useNavigate } from 'react-router-dom'

function App() {
  const [userData, setUserData] = useState({})
  const [isLogged, setIsLogged] = useState(false);
  const [loginError, setLoginError] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigateTo = useNavigate()

  useEffect(() => {
    if(isEmptyObject(userData)){
      setIsLogged(false)
    } else {
      setIsLogged(true)
    }
  }, [userData])

  useEffect(() => {
    if(!isLogged){
      setUserData({})
    }
  }, [isLogged])

  function handleSubmit(e: any) {
    e.preventDefault()
    const registerData = {
      username,
      password
    }

    async function getData () {
      try{
        const fetching = await fetch('http://localhost/react-php/login.php', {
          method: 'post',
          headers: { "Content-Type": 'application/json'},
          body: JSON.stringify(registerData)
        })

        const fetchingData = await fetching.text()
        if(fetchingData == "Wrong username or password"){
          setLoginError(fetchingData)
        } else  {
          const parsedData = JSON.parse(fetchingData)
          setUserData({...parsedData, notHashedPassword: password})
          setLoginError('')
          navigateTo('/')
        }
        }
        catch(err){
          console.error(err)
        }
      }
      getData()
      setUsername('')
      setPassword('')
  }

  function isEmptyObject(obj: object) {
    for (let key in obj){ 
      if(obj.hasOwnProperty(key)) return false
    }
    return true
  }

  return (
    <div className='App'>
      <Navbar
      isLogged={isLogged}
      setIsLogged={setIsLogged}/>
      <Routes>
        <Route path='/' element={ <Home userData = {userData}/>}/>
        <Route path='/login' element={ 
        <Login 
          handleSubmit={handleSubmit}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          loginError= {loginError}
          />
        }/>
        <Route path='/register' element={ <Register />}/>

      </Routes>
    </div>
  )
}

export default App
