import axios from 'axios'

import { useState } from 'react'
import { Route, Routes ,Link} from 'react-router-dom'
export const Data=()=>{

 const [userInfo, setUserInfo] = useState([]);
const [textbox, setTextBox] = useState('');

const handleEvent = (event) => {
  setTextBox(event.target.value);
};

const button_click = () => {
  axios.get(`http://localhost:3003/student/${textbox}`)
    .then((response) => {
      setUserInfo(response.data);
    })
    .catch((err) => {
      console.error(err);
    });
};

return (
  <>
    <input type="text" value={textbox} onChange={handleEvent} />
    <button onClick={button_click}>Click Here</button>


    <table>
      <thead>
        <tr>
          <th>eid</th>
          <th>name</th>
          <th>salary</th>
        </tr>
      </thead>
      <tbody>
        {userInfo.map((user, index) => (
          <tr key={index}>
            <td>{user.eid}</td>
            <td>{user.name}</td>
            <td>{user.salary}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);
}
