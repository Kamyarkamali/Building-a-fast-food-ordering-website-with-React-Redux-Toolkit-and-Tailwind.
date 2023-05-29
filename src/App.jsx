import { useEffect } from 'react'
import './App.css';

//REAT-ROUTER-DOM
import { Routes,Route } from "react-router-dom";

//component
import Header from './Components/Header/Header'
import Homepage from './Components/Home/Homepage';
import Detailse from './Components/Detailse/Detailse';
import Footer from './Components/Footer/Footer';
import SingUp from './Components/SingUp/SingUp';

//image
import Home from "./images/icons/Home.png"
import Foods from './Components/Foods/Foods';
import Shopp from './Components/Shopp/Shopp';
import Login from './Components/Login/Login';
function App() {

  useEffect(()=>{
    document.title="زود فود,فست فودی با طعم خاطره و کیفیت"
    const titleElement=document.querySelector("title")
    titleElement.insertAdjacentHTML("beforebegin",`<img src=${Home} alt="Home" />`)
  },[])

  return (
    <>
      <Header/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/detailse/:id' element={<Detailse/>}/>
      <Route path='/foods' element={<Foods/>}/>
      <Route path='/shopping' element={<Shopp/>}/>
      <Route path='/sungup' element={<SingUp/>}/>
      <Route path='/login' element={<Login/>}/>
      {/* <Hero/> */}
      {/* <Title/> */}
      {/* <Favarite/> */}
      {/* <Foods/> */}
      {/* <Footer/> */}
    </Routes>
    <Footer/>
    </>
  )
}

export default App
