import "./App.css"
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import SidebarCarousel from './components/SidebarCarousel/SidebarCarousel';
import About from './components/About/About';
import Exhibitors from "./components/Exhibitors/Exhibitors";
import Speakers from "./components/Speakers/Speakers";
import Conference from "./components/Conference/Conference";
import Committee from "./components/Committee/Committee";
import Registration from "./components/Registration/Registration";
import Awards from "./components/Awards/Awards";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar/>
      <SidebarCarousel/>
      <About/>
      <Exhibitors/>
      <Speakers/>
      <Conference/>
      <Committee/>
      <Registration/>
      <Awards/>
      <Footer/>
      {/* Your other content goes here */}
    </div>
  );
}

export default App;
