import React from "react";
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './pajes/Navbar'
import TranslatBox from './pajes/TranslatBox'
import {ToastContainer } from 'react-toastify'
import './App.css'


const App = () =>{
  return(
    <>
    <Navbar />
    <TranslatBox />
    <ToastContainer autoClose={3000} />
    </>
  )
}



export default App