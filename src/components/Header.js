import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>  
        <header id="home">
          <nav id="nav-wrap">
              <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
              <ul id="nav" className="nav">
                <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                <li><a className="smoothscroll" href="#about">About</a></li>
                <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                <li><a className="smoothscroll" href="#contact">Contact</a></li>
              </ul>
          </nav>

          <div className="row banner">
              <div>
                  <img className="profile-pic"  src="images/main.jpg" alt="" />
              </div>
              <div className="banner-text">
                <div class="retroContainer">
                  <h1 className = "retroText" data-text="Ryan Young">
                    Ryan Young
                  </h1>
                </div>
              </div>
          </div>

          <p className="scrolldown">
              <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
          </p>

        </header>
      </React.Fragment>
    );
  }
}
