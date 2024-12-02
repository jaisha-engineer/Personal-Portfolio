import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from"./components/Projects";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Service/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>

      </div>
      
  )
}

export default App;
