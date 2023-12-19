

import './App.css';
import {Routes, Route} from "react-router-dom";
import SectionFive from './components/SectionFive';
import { SectionOne } from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
       <SectionFive />
       <Footer/>
      
    </div>
  );
}

export default App;
