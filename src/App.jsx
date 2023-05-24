import { useEffect } from 'react'
import './App.css';

//component
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero';
import Title from './Components/Title/Title';

//image
import Home from "./images/icons/Home.png"

function App() {

  useEffect(()=>{
    document.title="زود فود,فست فودی با طعم خاطره و کیفیت"
    const titleElement=document.querySelector("title")
    titleElement.insertAdjacentHTML("beforebegin",`<img src=${Home} alt="Home" />`)
  },[])

  return (
    <>
      <Header/>
      <Hero/>
      <Title/>
    </>
  )
}

export default App
