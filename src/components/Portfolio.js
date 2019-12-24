import React, { Component } from 'react';
import csharpLogo from './Images/cSharpLogo.png';
import unityLogo from './Images/unity.png';
import reactLogo from './Images/reactlogo.png';
import javascriptlogo from './Images/javascriptlogo.png';
import cssLogo from './Images/cssLogo.png';
import htmlLogo from './Images/htmlLogo.png';
import jestLogo from './Images/jestLogo.png';
import reduxLogo from './Images/reduxlogo.png';
import djangologo from './Images/djangologo.png';
import pythonLogo from './Images/pythonlogo.png';
import backend from './Images/backend.png';
import frontend from './Images/frontend2.png';
import rubyLogo from './Images/rubyLogo.png';
import railsLogo from './Images/railsLogo.png';
import rspecLogo from './Images/rspecLogo.png';
import postgresqlLogo from './Images/postgresqlLogo.png';
import visualStudioLogo from './Images/visualStudioLogo.png'
import gamedev from './Images/controller.png'
import vsCodeLogo from './Images/vsCodeLogo.png'
import githubLogo from './Images/githubLogo.png'
import matlabLogo from './Images/matlabLogo.png'
import bootstrapLogo from './Images/bootstrapLogo.png'
import "../flexboxing.css"

let projects = [
  {
    "name":"RZ Drift",
    "description":"RZ Drift takes drifting to a whole new level. Realistic physics in fantastical environments create an unreal driving experience",
    "logo":"images/portfolio/rz_drift_logo.jpeg",
    'gif':'images/portfolio/rz_drift_gif.gif',
    "link": "https://apps.apple.com/us/app/rz-drift/id1467063778",
    "techLogos": [
      <div className="principle-item-p">
        <img src={csharpLogo} alt="" />
      </div>, 
      <div className="principle-item-p" />,
      <div className="principle-item-p">
        <img src={unityLogo} alt="" />
      </div> ]
  },
  {
    "name":"Battlethrones",
    "description":"Fight for the fate of the Seven Kingdoms in this Game of Thrones themed Battleship game.",
    "logo":"images/portfolio/battlethroneslogo.png",
    'gif':'images/portfolio/battlethronesgif.gif',
    "link": "",
    "techLogos": [
    <div className="principle-item-p">
      <img src={javascriptlogo} alt="" />
    </div>, 
    <div className="principle-item-p" />,
    <div className="principle-item-p">
      <img src={reactLogo} alt="" />
    </div> 
    
    ]
  },
  {
    "name":"Digital Class",
    "description":"An online classroom forum where students can discuss the material they are learning in class.",
    "logo":"images/portfolio/digitalclasslogo.png",
    'gif':'images/portfolio/digitalclassgif.gif',
    "link": "",
    "techLogos": [
    <div className="principle-item-p-2">
      <img src={javascriptlogo} alt="" />
    </div>, 
    <div className="principle-item-p-3" />,
    <div className="principle-item-p-2">
      <img src={reactLogo} alt="" />
    </div>, 
    <div className="principle-item-p-3" />,
    <div className="principle-item-p-2">
      <img src={reduxLogo} alt="" />
    </div>,
    <div className="principle-item-p-3" />,
    <div className="principle-item-p-2">
      <img src={djangologo} alt="" />
    </div>,
    <div className="principle-item-p-3" />,
    <div className="principle-item-p-2">
      <img src={pythonLogo} alt="" />
    </div>,
    <div className="principle-item-p-3" />,
    ]
  },
  {
    "name":"EchoNet",
    "description":"An online classroom forum where students can discuss the material they are learning in class.",
    "logo":"images/portfolio/echonetLogo.png",
    'gif':'images/portfolio/echonetgif.gif',
    "link": "http://echo-net.herokuapp.com/",
    "techLogos": [
    <div className="principle-item-p-2">
      <img src={javascriptlogo} alt="" />
    </div>, 
    <div className="principle-item-p-3" />,
    <div className="principle-item-p-2">
      <img src={reactLogo} alt="" />
    </div>, 
    <div className="principle-item-p-3" />,
    <div className="principle-item-p-2">
      <img src={cssLogo} alt="" />
    </div>,
    <div className="principle-item-p-3" />,
    <div className="principle-item-p-2">
      <img src={rubyLogo} alt="" />
    </div>,
    <div className="principle-item-p-3" />,
    <div className="principle-item-p-2">
      <img src={railsLogo} alt="" />
    </div>,
    <div className="principle-item-p-3" />,
    ]
  },
]
let projectGrid = []

let devSkills = [
  {
    "name": "Front End Development",
    "description":"Frontend development takes advantage of my interest in design and tech. I create responsive webpages that efficiently transmit information from client to user.",
    "techSkills": ["Javascript", "CSS", "HTML", "React", "Redux", "Jest"]
  },
  {
    "name": "Back End Development",
    "description":"Application design starts with how you set up your backend.  I understand the importance of creating an organized databse that takes advantage of MVC design.",
    "techSkills": ["Ruby", "Python", "Rails", "Django", "Postgresql", "RSpec"]
  },
  {
    "name": "Video Game Development",
    "description":"Frontend development takes advantage of my interest in design and tech. I love the color indigo... and I love handling API requests with axios.",
    "techSkills": ["C#", "Unity", "Visual Studio"]
  },
  {
    "name": "Other Tech Skills",
    "description":"Frontend development takes advantage of my interest in design and tech. I love the color indigo... and I love handling API requests with axios.",
    "techSkills": ["Github", "VSCode", "Matlab", "Bootstrap"]
  }
]
let devGrid = []

export default class Porfolio extends Component {
  constructor(props) {
    super(props);

    projectGrid = projects.map((project, i) => {
      return(
        <div className = "grid2" key = {i.toString()}>
          <a className = "gridSquareLeft" href={project.link} target="_blank">
              <img className = "gridLogo" src={project.logo}/>
              <div className="principles-p">
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

    devGrid = devSkills.map((devSkill, i) => {
      let techSkills = devSkill["techSkills"].map((skill, j) => {
        return (
          <div key = {j} className = "logoColumn">
            <img className = "logoImage" src = {this.getLogo(skill)}></img>
            <h1 className = "logoTitle">{skill}</h1>
          </div>
        )
      })
      return (
        <div key = {i} className = "flexParentWidth topParent">
          <div className = "flexParent">
            <div className = "titleColumn" >
                <h1 className = "devTitle devTitleSize" data-text = {devSkill["name"]}>{devSkill["name"]}</h1>
            </div>
            <div className = "devSkillColumn" >
              <img src={this.getLogo(devSkill["name"])} className = "devSkillLogo" />
            </div>
            <div className = "techSkillsColumn" >
              <div className = "techRow">
                {techSkills}
              </div>
            </div>
            <div className = "devDescriptionColumn" >
              <p className = "gridTitle">{devSkill["description"]}</p>
            </div>
          </div>
        </div>
      )
    })
  }

  getLogo = (skill) => {
    switch(skill){
      case "Front End Development":
        return frontend
      case "Javascript":
        return javascriptlogo
      case "HTML":
        return htmlLogo
      case "CSS":
        return cssLogo
      case "React":
        return reactLogo
      case "Redux":
        return reduxLogo
      case "Jest":
        return jestLogo
      case "Back End Development":
        return backend
      case "Ruby":
        return rubyLogo
      case "Python":
        return pythonLogo
      case "Rails":
        return railsLogo
      case "Django":
        return djangologo
      case "Postgresql":
        return postgresqlLogo
      case "RSpec":
        return rspecLogo
      case "Video Game Development":
        return gamedev
      case "C#":
        return csharpLogo
      case "Unity":
        return unityLogo
      case "Visual Studio":
        return visualStudioLogo
      case "VSCode":
        return vsCodeLogo
      case "Github":
        return githubLogo
      case "Matlab":
        return matlabLogo
      case "Bootstrap":
        return bootstrapLogo
    }
  }
  
  render() {
    return (
      <section id="portfolio">
        <div className = "devFlexParent">
          {devGrid}
        </div>
        {projectGrid}
      </section>
    );
  }
}