import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/users')
    .then( res => res.json())
    .then( data => setUsers(data))
  }, [])

  console.log(users);
  return (
    <>
      
      <h1>Users management system</h1>
      <h2>Users : {users.length}</h2>

    </>
  )
}

export default App
