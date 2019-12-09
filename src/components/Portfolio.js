import React, { Component } from 'react';
import csharplogo from './Images/cSharpLogo.png';
import unitylogo from './Images/unity.png';
import reactlogo from './Images/reactlogo.png';
import javascriptlogo from './Images/javascriptlogo.png';
import reduxlogo from './Images/reduxlogo.png';
import djangologo from './Images/djangologo.png';
import pythonlogo from './Images/pythonlogo.png';

let projects = [
  {
    "name":"RZ Drift",
    "description":"RZ Drift takes drifting to a whole new level. Realistic physics in fantastical environments create an unreal driving experience",
    "logo":"images/portfolio/rz_drift_logo.jpeg",
    'gif':'images/portfolio/rz_drift_gif.gif',
    "link": "https://apps.apple.com/us/app/rz-drift/id1467063778",
    "techLogos": [
      <div className="principle-item-p">
        <img src={csharplogo} alt="" />
      </div>, 
      <div className="principle-item-p" />,
      <div className="principle-item-p">
        <img src={unitylogo} alt="" />
      </div> ]
  },
  {
    "name":"Battlethrones",
    "description":"Fight for the fate of the Seven Kingdoms in this Game of Thrones themed Battleship game.",
    "logo":"images/portfolio/battlethroneslogo.png",
    'gif':'images/portfolio/battlethronesgif.gif',
    "link": "https://apps.apple.com/us/app/rz-drift/id1467063778",
    "techLogos": [
    <div className="principle-item-p">
      <img src={javascriptlogo} alt="" />
    </div>, 
    <div className="principle-item-p" />,
    <div className="principle-item-p">
      <img src={reactlogo} alt="" />
    </div> ]
  },
  {
    "name":"Digital Class",
    "description":"An online classroom forum where students can discuss the material they are learning in class.",
    "logo":"images/portfolio/digitalclasslogo.png",
    'gif':'images/portfolio/digitalclassgif.gif',
    "link": "https://apps.apple.com/us/app/rz-drift/id1467063778",
    "techLogos": [
    <div className="principle-item-p-2">
      <img src={javascriptlogo} alt="" />
    </div>, 
    <div className="principle-item-p-3" />,
    <div className="principle-item-p-2">
      <img src={reactlogo} alt="" />
    </div>, 
    <div className="principle-item-p-3" />,
    <div className="principle-item-p-2">
      <img src={reduxlogo} alt="" />
    </div>,
    <div className="principle-item-p-3" />,
    <div className="principle-item-p-2">
      <img src={djangologo} alt="" />
    </div>,
    <div className="principle-item-p-3" />,
    <div className="principle-item-p-2">
      <img src={pythonlogo} alt="" />
    </div>,
    <div className="principle-item-p-3" />,
    ]
  },
]
const screenWidth = {
  "--screenWidth": "1000"
};
const screenHeight = {
  "--screenHeight": "1000"
};
let projectGrid = []
export default class Porfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    projectGrid = projects.map((project, i) => {
      return(
        <div className = "grid2" key = {i.toString()}>
          <a className = "gridSquareLeft" href={project.link} target="_blank">
              <img className = "gridLogo" src={project.logo}/>
              <div className={project.name != "Digital Class" ? "principles-p": "principles-p-class"}>
                {project.techLogos}
              </div>
          </a>
          <a className = "gridSquare"></a>
          <a className = "gridSquareRight" href={project.link} target="_blank">
            <img className = "gridGif" src={project.gif}/>
            <p className = "gridTitle">{project.description}</p>
          </a>
        </div>
      )
    })
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
      <section id="portfolio">
        {projectGrid}
      </section>
    );
  }
}
