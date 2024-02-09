import './App.css';
import { useState ,useEffect} from 'react';
import axios from 'axios';
import Image from './components/Image';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const api = "https://api.thecatapi.com/v1/images/search?has_breeds=1";
  const [imagesrc,setimagesrc] = useState("");
  
  const fetchInfo = () =>{
    console.log('api call');
     return axios.get(api).then((res) => {
      console.log(res);
      setimagesrc(res.data[0].url);
    });
  }

  useEffect(() => {
    fetchInfo();
  }, []);
  
  const anothercat = () =>{
    window.location.reload(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Image imagesrc={imagesrc}/>
        <hr></hr>
        <Button variant="outline-light" onClick={anothercat}>Show Another Cat 🐈</Button>
      </header>
    </div>
  );
}

export default App;
