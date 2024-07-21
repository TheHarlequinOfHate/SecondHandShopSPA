import {  Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./components/homePage/HomePage"
import MenClothes from "./components/mensclothes/MenClothes"
import LogIn from "./components/login/LogIn"
import WomenCloth from "./components/women/Women"


function App() {

  return (
    <>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/menclothes" element={<MenClothes/>}/>
            <Route path="/login" element={<LogIn/>}/>
            <Route path="/womenclothes" element={<WomenCloth/>}/>
        </Routes>
    </>
  )
}

export default App
