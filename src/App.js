import React,{useState,useRef,useEffect} from 'react';
import './App.scss';
import Home from './components/Home/Home';
import {  Routes, Route } from "react-router-dom";
import Contact from './components/Contact/Contact'
import Description from './components/Description/Description';
import Photo from './components/Photos/photo';

function App() {
const [button, setButton] = useState(false)
const app = useRef()
const handleButton=()=>{
  setButton(true)
}
const bulle = useRef()

useEffect(() => {
 
window.addEventListener('mousemove',(e)=>{
  const x=e.clientX 
  const y=e.clientY 

if(x < 1510 && y <  710 ) {
  bulle.current.style.transform=`translate3d(calc(${x}px - 50%),calc(${y}px - 50%),0)`

}else{
  bulle.current.style.transform="none"
}
})

}, [])


  return (

    <div ref={app} className="App">
      <span className='span' ref={bulle}></span>
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
