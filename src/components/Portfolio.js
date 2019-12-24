import React, { Component } from 'react';
import getLogo from './getLogo'
let projects = [
  {
    "name":"RZ Drift",
    "description":"RZ Drift takes drifting to a whole new level. Realistic physics in fantastical environments create an unreal driving experience",
    "logo":"images/portfolio/rz_drift_logo.jpeg",
    'gif':'images/portfolio/rz_drift_gif.gif',
    "link": "https://apps.apple.com/us/app/rz-drift/id1467063778",
    "techLogoClass": "principle-item-p",
    "techLogos": ["C#", "Unity"],
    "gridColorClass": "gridColorRZDrift"
  },
  {
    "name":"Battlethrones",
    "description":"Fight for the fate of the Seven Kingdoms in this Game of Thrones themed Battleship game.",
    "logo":"images/portfolio/battlethroneslogo.png",
    'gif':'images/portfolio/battlethronesgif.gif',
    "link": "",
    "techLogoClass": "principle-item-p",
    "techLogos": ["Javascript", "React"],
    "gridColorClass": "gridColorBattlethrones"
  },
  {
    "name":"Digital Class",
    "description":"An online classroom forum where students can discuss the material they are learning in class.",
    "logo":"images/portfolio/digitalclasslogo.png",
    'gif':'images/portfolio/digitalclassgif.gif',
    "link": "",
    "techLogoClass": "principle-item-p-2",
    "techLogos": ["Javascript", "React", "Redux", "Python", "Django"],
    "gridColorClass": "gridColorClass"
  },
  {
    "name":"EchoNet",
    "description":"Echo Net gives users the tools to help build out and track their technical professional network.",
    "logo":"images/portfolio/echonetLogo.png",
    'gif':'images/portfolio/echonetgif.gif',
    "link": "http://echo-net.herokuapp.com/",
    "techLogoClass": "principle-item-p-2",
    "techLogos": ["Javascript", "React", "CSS", "Ruby", "Rails"],
    "gridColorClass": "gridColorEchonet"
  },
]
let projectGrid = []

export default class Porfolio extends Component {
  constructor(props) {
    super(props);

    projectGrid = projects.map((project, i) => {
      let techLogos = project.techLogos.map((skill, j) => {
        return (
          <div key = {j} className={project.techLogoClass}>
            <img src={getLogo(skill)} alt="" />
          </div>
        )
      })
      return(
        <div className = {`grid2 ${project["gridColorClass"]}`} key = {i}>
          <a className = "gridSquareLeft" href={project.link} target="_blank">
              <div className = "gridLogoParent">
                <img className = "gridLogo" src={project.logo}/>
              </div>
              <div className="principles-p">
                {techLogos}
              </div>
          </a>
          <a className = "gridSquareRight" href={project.link} target="_blank">
            <img className = "gridGif" src={project.gif}/>
            <div className = "gridTitleParent">
              <p className = "gridTitle">{project.description}</p>
            </div>
          </a>
        </div>
      )
    })
  }

  render() {
    return (
      <section id="portfolio">
        {projectGrid}
      </section>
    );
  }
}