import React, { Component } from 'react';

export default class Header extends Component {

    constructor(props) {
        super(props);
    
        this.listener = null;
        this.state = {
          status: "top"
        };
      }
    
      componentDidMount() {
        this.listener = document.addEventListener("scroll", e => {
          var scrolled = document.scrollingElement.scrollTop;
          if (scrolled >= 120) {
            if (this.state.status !== "amir") {
              this.setState({ status: "amir" });
            }
          } else {
            if (this.state.status !== "top") {
              this.setState({ status: "top" });
            }
          }
        });
      }
    
      componentDidUpdate() {
        document.removeEventListener("scroll", this.listener);
      }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark sticky-top"
            style={{
                backgroundColor: this.state.status === "top" ? "transparent" : "black",
                color: this.state.status === "top" ? "white" : "blue",
              }}  >
            <a className="navbar-brand" href="/">My Resume</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto ">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/AboutMe">About Me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Skills">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Education">Education</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Experiences">Experiences</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Contact">Contact Me</a>
                    </li>
                </ul>
            </div>
        </nav>
        );
    }
}


