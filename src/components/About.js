import React, { Component } from 'react';
import getLogo from './getLogo'
import resume from './ryan_young_resume.pdf'

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
    "techSkills": ["C#", "Unity", "VStudio"]
  },
  {
    "name": "Other Tech Skills",
    "description":"Frontend development takes advantage of my interest in design and tech. I love the color indigo... and I love handling API requests with axios.",
    "techSkills": ["Github", "VSCode", "Matlab", "Bootstrap", "Bootswatch"]
  }
]
let devGrid = []
let aboutMePast = ["EMSOC", "UCSB", "LEARN", "EVT"]
let aboutMe = null
let aboutMeLogos = []

export default class About extends Component {
  constructor(props) {
    super(props);
    aboutMeLogos = aboutMePast.map((past, j) => {
      return (
        <div key = {j} className = "logoColumn">
          <img className = "logoImage" src = {getLogo(past)}></img>
          <h1 className = "logoTitle">{past}</h1>
        </div>
      )
    })

    aboutMe = 
    <div className = "aboutMeWidth topParent">
      <div className = "flexParent">
        <div className = "titleColumn" >
            <h1 className = "devTitle aboutTitleSize" data-text = "About Me">About Me</h1>
        </div>
        <div className = "devSkillColumn" >
          <img src={getLogo("About Me")} className = "devSkillLogo" />
        </div>
        <div className = "techSkillsColumn" >
          <div className = "techRow">
            {aboutMeLogos}
          </div>
        </div>
        <div className = "devDescriptionColumn" >
          <p className = "devDescription devDescriptionSize">software engineer who excels at critical thinking and is driven by an everlasting desire to solve problems.  a quick learner who will persevere through whatever challenges that may be encountered when finding solutions.  driven by a desire to innovate and make an impact on the world for the better.</p>
        </div>
        <div className = "aboutButtonsParent">
          <a className = "resumeLogoButton" href = "https://github.com/myzyryzm" target = "_blank">
            <img src={getLogo("Github Small")} className = "devSkillLogo" />
          </a>
          <div className = "resumeButtonParent">
            <a className = "resumeButton resumeFontSize" href = {resume} target = "_blank">Resume</a>
          </div>
          <a className = "resumeLogoButton" href = {"https://linkedin.com/in/mryanyoung"} target = "_blank">
            <img src={getLogo("Linkedin")} className = "devSkillLogo" />
          </a>
        </div>
      </div>
    </div>

    devGrid = devSkills.map((devSkill, i) => {
      let techSkills = devSkill["techSkills"].map((skill, j) => {
        return (
          <div key = {j} className = "logoColumn">
            <img className = "logoImage" src = {getLogo(skill)}></img>
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
              <img src={getLogo(devSkill["name"])} className = "devSkillLogo" />
            </div>
            <div className = "techSkillsColumn" >
              <div className = "techRow">
                {techSkills}
              </div>
            </div>
            <div className = "devDescriptionColumn" >
              <p className = "devDescription devDescriptionSize">{devSkill["description"]}</p>
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <section id="about">
        {aboutMe}
        <div className = "devFlexParent">
          {devGrid}
        </div>
      </section>
    );
  }
}
