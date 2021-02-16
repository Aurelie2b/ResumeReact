import React, {useState} from 'react'
import ReactDOM from 'react-dom'
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
import NotFound from './404'
import ScrollTop from './ScrollTop'
import{ init } from 'emailjs-com'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'

export default function App() {

  init("user_k3U0QTPRkPhBurlE3Li0b");

  return (
    <Provider>
      <HashRouter>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}><Home/></Route>
            <Route path="/AboutMe" component={AboutMe}><AboutMe/></Route>
            <Route path="/Skills" component={Dropdown}><Dropdown/></Route>
            <Route path="/Experiences" component={Timeline}><Timeline/></Route>
            <Route path="/Education" component={Education}><Education/></Route>
            <Route path="/Projects" component={LisitngProject}><LisitngProject/></Route>
            <Route path="/Contact" component={Contact}><Contact/></Route>
            <Route path="/NotFound" component={404}><NotFound/></Route>
            <Redirect to="/NotFound"/>
          </Switch>
          <ScrollTop />
          <Footer />
        </div>
      </HashRouter>
    </Provider>
  );

}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
