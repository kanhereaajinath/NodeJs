import { useRef } from 'react';
import axios from 'axios';
export const Upload=()=>{

  const fileInputRef = useRef(null);

  const handleFileUpload = async () => {
 const file = fileInputRef.current.files[0];
 const formData = new FormData();// It allows you to create a new FormData object that represents a set of key/value pairs corresponding to the form fields and their values.
 formData.append('file', file);//This line appends a file to the FormData object. 
 const response = await axios.post('http://localhost:3002/upload', formData);

      console.log('File uploaded successfully:', response.data);
     
  };

  return (
    <div>
      <input type="file"  ref={fileInputRef} />
      <button onClick={handleFileUpload}>Upload File</button>
    </div>
  );
}

