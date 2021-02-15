import React, {Fragment} from 'react'
import { Provider } from './Components/Skills/DataSkills'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import AboutMe from './Components/AboutMe/AboutMe'
import Dropdown from './Components/Skills/Dropdown'
import Timeline from './Components/Experiences/Timeline'
import Education from './Components/Education/Education'
import Contact from './Components/ContactMe/Contact'
import LisitngProject from './Components/Projects/ListingProjects'
import{ init } from 'emailjs-com'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import {BrowserRouter as Router, Route} from 'react-router-dom'

export default function App() {

  init("user_k3U0QTPRkPhBurlE3Li0b");
  
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header/>
          <Fragment>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/AboutMe" component={AboutMe} />
            <Route exact path="/Skills" component={Dropdown} />
            <Route exact path="/Experiences" component={Timeline} />
            <Route exact path="/Education" component={Education} />
            <Route exact path="/Projects" component={LisitngProject} />
            <Route exact path="/Contact" component={Contact}/>
          </Fragment>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}


