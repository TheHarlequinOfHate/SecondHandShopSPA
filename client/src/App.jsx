import {  Route, Routes } from "react-router-dom"
import { useState } from "react"


import Header from "./components/header/Header"
import Home from "./components/homePage/HomePage"
import MenClothes from "./components/mensclothes/MenClothes"
import LogIn from "./components/login/LogIn"
import WomenCloth from "./components/women/Women"
import UserAccount from "./components/useraccount/UserAccount"
import Register from "./components/register/Register"


function App() {
  const [auth,setAith] = useState({});

  const loginSubmitHandler = (values) => {
    console.log(values)
  }

  return (
    <>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/menclothes" element={<MenClothes/>}/>
            <Route path="/login" element={<LogIn loginSubmitHandler={loginSubmitHandler} />} /> 
            <Route path="/login/register" element={<Register/>}/> 
            <Route path="/womenclothes" element={<WomenCloth/>}/>
            <Route path="/account" element={<UserAccount/>}/>
        </Routes>
    </>
  )
}

export default App
