import React from 'react';
import { Routes, Route } from 'react-router';
import Home from './pages/Home/index'
import About from './pages/About/index'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SingleProduct from './pages/SingleProduct/index'
import MainPro from './pages/mainPro/index'
import SearchPage from './components/search/index'
import Crete from '../src/auth/register/Crete'
import Login from '../src/auth/login/Login'
const App = () => {
  return (
    <>
  

      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/bycategory/:id' element={<About/>}/>
        <Route path='/productInfo/:id' element={<SingleProduct/>}/>
        <Route path='/targetpro/:id' element={<MainPro/>}/>
        <Route path='/search' element={<SearchPage/>}/>
        <Route path='/register' element={<Crete/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    <Footer/>
    </>
  );
};

export default App;