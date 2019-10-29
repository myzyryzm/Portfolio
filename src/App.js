import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from  './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';
class App extends Component {
  render() {
    return (
      <div className = "App">
        <div className="page-bg"></div>

        <div className="animation-wrapper">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
        </div>

        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <ContactUs resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;
