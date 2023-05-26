import { useEffect } from 'react'
import './App.css';

//REAT-ROUTER-DOM
import { Routes,Route } from "react-router-dom";

//component
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero';
import Title from './Components/Title/Title';
import Homepage from './Components/Home/Homepage';
import Detailse from './Components/Detailse/Detailse';

//image
import Home from "./images/icons/Home.png"
import Favarite from './Components/Favarite/Favarite';
import Footer from './Components/Footer/Footer';
import Foods from './Components/Foods/Foods';

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
      {/* <Hero/> */}
      {/* <Title/> */}
      {/* <Favarite/> */}
      {/* <Foods/> */}
      {/* <Footer/> */}
    </Routes>
    </>
  )
}

export default App
