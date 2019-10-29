import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="container">
            <div>
               <div className = "header-parent">
                  <h2>About Me</h2>
                  <div className = "header-break"></div>
               </div>
               <p>{resumeData.aboutme}</p>
            </div>
         </div>
      </section>
    );
  }
}
