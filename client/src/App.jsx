import {  Route, Routes } from "react-router-dom"


import Header from "./components/header/Header"
import Home from "./components/homePage/HomePage"
import MenClothes from "./components/mensclothes/MenClothes"
import LogIn from "./components/login/LogIn"
import WomenCloth from "./components/women/Women"
import UserAccount from "./components/useraccount/UserAccount"
import Register from "./components/register/Register"
import { AuthContextProvider } from "./context/AuthContext"
import SellPage from "./components/sell/SellPage"
import DetailsPage from "./components/details/DetailPage"


function App() {
  
  return (
    <>
      <AuthContextProvider>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/menclothes" element={<MenClothes/>}/>
            <Route path="/menclothes/:id" element={<DetailsPage/>}/>
            <Route path="/login" element={<LogIn  />} /> 
            <Route path="/login/register" element={<Register/>}/> 
            <Route path="/womenclothes" element={<WomenCloth/>}/>
            <Route path="/womenclothes/:id" element={<DetailsPage/>}/>
            <Route path="/account" element={<UserAccount/>}/>
            <Route path="/sell" element={<SellPage/>}/>
        </Routes>
      </AuthContextProvider>
    </>
  )
}

export default App
