import axios from 'axios';//It imports necessary modules like axios for making HTTP requests and various React-related components and functions.
import React, { useState, useRef } from 'react';

export const SendData = () => {
  const [formData, setFormData] = useState([]);//It sets up state variables using the useState hook to manage form data (formData).
  const eid = useRef(null);//It uses useRef to create references (eid, name, salary) to input elements within the form. These references are used to directly access the input values without having to rely on the state.

  const name = useRef(null);
  const salary = useRef(null);
  function save(){
    const a = Number(eid.current.value)
    const b = name.current.value;
    const c =Number( salary.current.value)
    const newRow = { eid: a, name: b, salary: c };
    setFormData([...formData, newRow]);
    axios.post(`http://localhost:3003/student`,newRow)//It also sends an HTTP POST request to http://localhost:3003/student using Axios, presumably to save the data on a server.
  }
  function update(){
    const a=Number(eid.current.value)
    const b=name.current.value
    const c=Number(salary.current.value)
    const newrow={name:b,salary:c}
    setFormData([...formData,newrow])
    axios.put(`http://localhost:3003/student/`+a,newrow)//It sends an HTTP PUT request to update student data on the server at http://localhost:3003/student/{eid} where {eid} is the student's ID.

  }
  
  function deletone(){
    const a=Number(eid.current.value)
    const b=name.current.value
    const c=Number(salary.current.value)

    const newrow={eid:a,name:b,salary:c}
    setFormData([...formData,newrow])
axios.delete(`http://localhost:3003/student/${a}`)
//It sends an HTTP DELETE request to delete student data on the server at http://localhost:3003/student/{eid} where {eid} is the student's ID.
  }

  const handleChange = (event) => {
    event.preventDefault();//This function is meant to handle form submissions. However, it's currently commented out and doesn't do anything.
    //save()
  //  update()
  //  deletone()
    
    
  };

  return (
    <>
      <form action="" onSubmit={handleChange}>
        
       eid <input type="text" name="eid" ref={eid} />
        <br></br>
      Name  <input type="text" name="name" ref={name} />
        <br></br>
     Salary   <input type="text" name="salary" ref={salary} />
        <br></br>
        <button type="submit"  onClick={save}>Send Data </button>
        <button type='submit' onClick={update}>Put Data</button>
        <button type='submit' onClick={deletone}>Delete Data</button>
      </form>

      {/* Display the data stored in the state */}
      {formData.map((row, index) => (
        <div key={index}>
          <p>Eid: {row.eid}</p>
          <p>Name: {row.name}</p>
          <p>Salary: {row.salary}</p>
        </div>
      ))}
    </>
  );
};

export default SendData;
//Below the form, the component maps over the formData array to display the stored student data.