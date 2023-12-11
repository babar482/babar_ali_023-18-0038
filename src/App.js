import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Welcom from './components/Welcom';
import HeroSection from './components/HeroSection';
import BooksPublished from './components/BooksPublished';
import ContectUs from "./components/ContectUs";
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      
      <Header/>
     <Welcom/>
     <HeroSection/>
     <BooksPublished/>
     <ContectUs/>
     <Footer/>

    </div>
  );
}

export default App;
