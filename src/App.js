import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import "./flexboxing.css"
import "./emailForm.css"

const screenWidth = {
  "--screenWidth": "1000"
};
const screenHeight = {
  "--screenHeight": "1000"
};

class App extends Component {

  constructor(props){
    super(props)
    this.state = { width: 0, height: 0 };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions = () => {
    Object.keys(screenWidth).map(key => {
      screenWidth[key] = window.innerWidth
      const value = screenWidth[key];
      document.documentElement.style.setProperty(key, value);
    });
    Object.keys(screenHeight).map(key => {
      screenHeight[key] = window.innerHeight
      const value = screenHeight[key];
      document.documentElement.style.setProperty(key, value);
    });
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <div className = "App">
        <div className="page-bg"></div>
        <div className="comet-container">
            <div className="comet"/>
        </div>
        <div className="animation-wrapper">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
        </div>
        <Header/>
        <About/>
        <Portfolio/>
        <ContactUs/>
        <Footer/>
      </div>
    );
  }
}

export default App;
