import React from 'react'
import Home from './pages/Home/Home'
import {Routes,Route} from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
  <>
  <ToastContainer/>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    </Routes>
  </>
  )
}

export default App