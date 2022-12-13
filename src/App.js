import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Demo from './component/Demo';
import User from './component/User';
import Info from './component/Info';




function App() {
  return (
    <>
      <Menu></Menu>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='Contact' element={<Contact />} />
        <Route path='Demo' element={<Demo />} />
        <Route path='User' element={<User />} />
        <Route path='info' element={<Info />} />
      </Routes>
    </>
  );
}

export default App;
