import React, { Component } from 'react';
import frontEnd from './Images/front-end-2.png';
import backEnd from './Images/back-end-2.png';
import controller from './Images/controller.png';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div>
           <h5 className = "title">About Me</h5>
           <div className="technologies-list"></div>
           <p className="intro-p">{resumeData.aboutme}</p>

           <div className="technologies">
             <h4 className = "title">Dev Skills</h4>
             <div className="technologies-list"></div>
           </div>
           <div className="principles">
            <div className="principle-item">
              <img src={frontEnd} alt="" />
              <h3>Front-End</h3>
              <p className="principle-p">SEVERAL WORDS WILL BE HERE</p>
            </div>

            

            <div className="principle-item">
              <img src={backEnd} alt="" />
              <h3>Back-End</h3>
              <p className="principle-p">REDACTED REDACTED REDACTED REDACTED REDACTED REDACTED REDACTED REDACTED</p>
            </div>

            

            <div className="principle-item">
              <img src={controller} alt="" />
              <h3>Video Game</h3>
              <p className="principle-p">WORD ANOTHERWORD TWOMORE WORDS LONGWORDBEFOREASHORT ONE </p>
            </div>
          </div>
          <h5 className = "title">Tech Skills</h5>
           <div className="technologies-list"></div>
         </div>
         <div className="principles-2">
            <div className="principle-item-2">
              
            </div>

            <div className="diamond-container">
              <span className="diamond diamond-mobile"></span>
            </div>

            
          </div>
      </section>
    );
  }
}

// <div className = "header-break"></div>
// <div className="diamond-container-three">
//   <span className="diamond"></span>
//   <span className="diamond"></span>
//   <span className="diamond"></span>
// </div>
