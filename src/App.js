import React from 'react';
import './App.scss';
import Home from './components/Home/Home';
import {  Routes, Route } from "react-router-dom";
import Contact from './components/Contact/Contact'
function App() {

 
  return (

    <div className="App">
       <Home/>
      <Routes>
     <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    
    
    </div>
   
  );
}

export default App;
