import { useRef } from 'react';
import axios from 'axios';
import Download from './cmp/download';
import { Upload } from './cmp/upload';
import { Route,Routes,Link} from 'react-router-dom';
const Home=()=>{
  return(
    <p>this is the home page </p>
  )
}
function App() {
  


  return (
  <>
  <nav>
    <ul>
       
      <Link to='/'>Home</Link>
      <br></br>
      this is the home page
      <br></br>

      <Link to='/upload'> upload</Link>
      <br></br>
      upload the file 
      
      <br></br>
      <Link to="/download">Download</Link>
      <br></br>
      upload and download file 
      <br></br>
    </ul>
  </nav>
  <Routes>
    <Route path='/'element={<Home></Home>}></Route>
    <Route path='/upload' element={<Upload></Upload>}></Route>
    <Route path='/download' element={<Download></Download>}> </Route>
  </Routes>

  </>
  );
}

export default App;
