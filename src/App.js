import React,{useState} from 'react';
import './App.scss';
import Home from './components/Home/Home';
import {  Routes, Route } from "react-router-dom";
import Contact from './components/Contact/Contact'
import Description from './components/Description/Description';
import Photo from './components/Photos/photo';
function App() {
const [button, setButton] = useState(false)
const handleButton=()=>{
  setButton(true)
}
  return (

    <div className="App">
      
       <Home/>
       <Description/>
      <Routes>
     <Route path='/contact' element={<Contact/>}></Route>
     <Route path='/photo' element={<Photo button={()=>handleButton()}></Photo>}></Route>
      </Routes>
    
    
    </div>
   
  );
}

export default App;
