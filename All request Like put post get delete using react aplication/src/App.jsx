import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import SendDta from './cmp/sendData'
import { Data } from './cmp/featching'
import { Route, Routes ,Link} from 'react-router-dom'
const Home =()=>{
  return(
    <p>This is the home page </p>
  )
}
function App() {
 

  return (
   
<>
<nav>
  <ul>
  <li><Link to='/send'>Send</Link></li>
  <li><Link to='/'>Home</Link></li>
  <li><Link to='/Data'> Data </Link></li>
  </ul>

</nav>
<Routes>
  <Route path='/send' element={<SendDta></SendDta>}></Route>
  <Route path='/Data' element={<Data></Data>}></Route>
  <Route path='/' element={<Home></Home>}></Route>
</Routes>
</>
 ) 
}

export default App;
