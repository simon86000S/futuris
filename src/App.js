import React from 'react';
import './App.scss';
import Home from './components/Home/Home';
import {  Routes, Route } from "react-router-dom";
function App() {

 
  return (

    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    
    
    </div>
   
  );
}

export default App;
