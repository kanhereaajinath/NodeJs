import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';

const Download = () => 
{

  const fileInputRef = useRef(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  
  useEffect(() => {
    // Fetch the list of uploaded files when the component mounts
    fetchUploadedFiles();
  }, []);

  const fetchUploadedFiles = async () => {
   
      const response = await axios.get('http://localhost:3002/getUploadedFiles');
      setUploadedFiles(response.data.files);
    
     
    
  };

  const handleFileUpload = async () => {
    const file = fileInputRef.current.files[0];

    if (!file) {
      console.error('No file selected.');
      return;
    }


      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post('http://localhost:3002/upload', formData);

      console.log('File uploaded successfully:', response.data);

      // Update the list of uploaded files
      fetchUploadedFiles();
   
  };

  const handleDownload = (fileName) => {
    // Trigger the file download by opening a new window with the download URL
    window.open(`http://localhost:3002/download/${(fileName)}`, '_blank');
  };

  return (
    <div>
      <input type="file" accept=".pdf" ref={fileInputRef} />
      <button onClick={handleFileUpload}>Upload File</button>

      {/* Display the list of uploaded files in a table */}
      {uploadedFiles.length > 0 ? (
        <table border={1}>
          <thead>
            <tr>
              <th>File Name</th>
              <th>File Size</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {uploadedFiles.map((file, index) => (
              <tr key={index}>
                <td>{file.name}</td>
                <td>{file.size} bytes</td>
                <td>
                  <button onClick={() => handleDownload(file.name)}>Download</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No files uploaded yet.</p>
      )}
    </div>
  );
};

export default Download;
