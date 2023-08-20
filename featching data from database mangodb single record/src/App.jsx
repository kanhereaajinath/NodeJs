import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [userinfo,setUserInfo]=useState({})
  const [textbox,setTextbox]=useState('')
  const handleEventExchange = (event) => {
    setTextbox(event.target.value);
  };

  const buttonClick=()=>{
    let p1=axios.get(`http://localhost:3002/student/${textbox}`)
    p1.then((obj) => {
      setUserInfo(obj.data);
      alert("data inserted succfully")
    }).catch((error) => {
      if (error.response && error.response.status === 404) {
        // Handle the 404 error
        console.error('Resource not found:', error);
      } else {
        // Handle other errors
        console.error('Axios request error:', error);
      }
    });
  } 

  return (
    <>
     <input type="text" name="" value={textbox} onChange={handleEventExchange} />
  <button onClick={buttonClick}>Click Here</button>
  <>
  <table>
    <th>eid</th>
    <th>name</th>
    <th>salary</th>
    <tr>
      <td>{userinfo.eid}</td>
      <td>{userinfo.name}</td>
      <td>{userinfo.salary}</td>
    </tr>
  </table>
  </>
    </>
  )
}

export default App
