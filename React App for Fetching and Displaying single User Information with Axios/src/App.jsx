import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import axios from 'axios'

function App() {
  
  const [userInfo, setUserInfo] = useState({});
  //In this example, as the user types in the input field, the handleTextboxChange function is called, 
  //updating the textboxValue state, and causing a re-render of the component with the new value displayed 
  //beneath the input field.

   const [textboxValue, setTextboxValue] = useState('');
  const handleTextboxChange = (event) => {
    setTextboxValue(event.target.value);
  };

  const button_Click = () => {
    let p1 = axios.get(`http://localhost:3010/user/${textboxValue}`);
// this line of code is initiating an HTTP GET request to a URL constructed using the value of the textboxValue variable.
// The actual endpoint seemsto be related to retrieving user information from a server located at http://localhost:3010.
   
    p1.then((obj) => {
      setUserInfo(obj.data);
    }).catch((err) => {
      console.log(err);
      
    });
  };

  return (
    <>
      <input type="text" name="" id="" onChange={handleTextboxChange} value={textboxValue}/>
      <button onClick={button_Click}>Click here</button>
      <>
    <table border={1}>
      <th>id</th>
      <th>Name</th>
      <th>Sir_name</th>
      <th>Gender</th>
      <th>Phone</th>
      <tr>
        <td>{userInfo.id}</td>
        <td>{userInfo.Name}</td>
        <td>{userInfo.Sir_name}</td>
        <td>{userInfo.Gender}</td>
        <td>{userInfo.Phone}</td>
      </tr>
    </table>
      </>
    </>
  );
}

export default App;




