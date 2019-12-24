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
import bootswatchLogo from './Images/bootswatchLogo.png'
import emsocLogo from './Images/emsocLogo.png'
import ucsbLogo from './Images/ucsbLogo.png'
import learnLogo from './Images/learnLogo.png'
import evtLogo from './Images/evtLogo.png'

export default function (skill) {
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
    case "VStudio":
      return visualStudioLogo
    case "VSCode":
      return vsCodeLogo
    case "Github":
      return githubLogo
    case "Matlab":
      return matlabLogo
    case "Bootstrap":
      return bootstrapLogo
    case "Bootswatch":
      return bootswatchLogo
    case "EMSOC":
      return emsocLogo
    case "UCSB":
      return ucsbLogo
    case "LEARN":
      return learnLogo
    case "EVT":
      return evtLogo
  }
}