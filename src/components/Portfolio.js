import React, { Component } from 'react';
let port = [
  {
    "name":"RZ Drift",
    "description":"Mobile Racing Game",
    "imgurl":"images/portfolio/rz_drift_logo.jpeg",
    "link": "https://apps.apple.com/us/app/rz-drift/id1467063778"
  },
  {
    "name":"RZ Drift",
    "description":"Mobile Racing Game",
    "imgurl":"images/portfolio/rz_drift_logo.jpeg",
    "link": "https://apps.apple.com/us/app/rz-drift/id1467063778"
  },
  {
    "name":"RZ Drift",
    "description":"Mobile Racing Game",
    "imgurl":"images/portfolio/rz_drift_logo.jpeg",
    "link": "https://apps.apple.com/us/app/rz-drift/id1467063778"
  },
  {
    "name":"RZ Drift",
    "description":"Mobile Racing Game",
    "imgurl":"images/portfolio/rz_drift_logo.jpeg",
    "link": "https://apps.apple.com/us/app/rz-drift/id1467063778"
  }
]
// {
//   "name":"BattleThrones",
//   "description":"Game of Thrones Themed Battleship",
//   "imgurl":"images/portfolio/battlethrones.jpeg",
//   "link": ""
// },
const screenWidth = {
  "--screenWidth": "1000"
};
const screenHeight = {
  "--screenHeight": "1000"
};
export default class Porfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    console.log(window.innerWidth)
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
    console.log(screenWidth["--screenWidth"])
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }



  render() {
    let grid = []
    let gridRows = 2 * Math.ceil(port.length * 0.5) -1
    let gridSquares = 3 * gridRows
    let portDex = 0
    for(let i = 0; i < gridSquares; i++){
      let curRow = i < 3 ? 0 : (i - i % 3) / 3
      let addRow = curRow < 1 || curRow % 2 == 0
      let isEven = i == 0 || i % 2 == 0
      if(!addRow || !isEven){
        grid.push(<a className = "gridSquare"></a>)
      }
      else {
        grid.push(<a className = "gridSquare" href={port[portDex].link} target="_blank">
                      <img className = "gridImage" src={`${port[portDex].imgurl}`}/>
                      <h1 className = "gridTitle" >Title Is Cool</h1>
                  </a>)
        portDex++
      }
    }
    return (
      <section id="portfolio">
          <div>
            <div>
              <div className = "grid">
                {grid}
              </div>
            </div>
          </div>
      </section>
        );
  }
}
