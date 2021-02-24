import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import $ from 'jquery'
import './Carousel.scss'

  const slides = [
    {
        id : 1,
        name: 'Resume Website',
        categorie: 'React',
        description: 'Resume Website from scratch',
        picture: 'resume2.jpg',
        githubLink : 'https://github.com/Aurelie2b/resumeReact',
        appLink : 'http://www.debayaurelie.be/'
    },
    {
        id : 2,
        name: 'Resume Website',
        categorie: 'JavaScript',
        description: 'My first website from scratch done in training',
        picture: 'firstResumeWebsite.jpg',
        githubLink : 'https://github.com/Aurelie2b/ResumeWebsite',
        appLink : 'http://www.if3projets.net/wad19/aurelie/'
    },
    {
        id : 3,
        name: 'ImmoBab',
        categorie: 'Angular, Firebase',
        description: 'Training udemy. Login: aure@2b.be, Password: 123456',
        picture: 'immoBab.jpg',
        githubLink : 'https://github.com/Aurelie2b/ImmoBab',
        appLink : 'https://immobab-77233.web.app/login'
    },
    {
        id : 4,
        name: 'AppContact',
        categorie: 'React',
        description: 'Training udemy',
        picture: 'appContact.jpg',
        githubLink : 'https://github.com/Aurelie2b/appcontacts',
        appLink : 'https://aurelie2b.github.io/AddContact'
    },
    {
        id : 5,
        name: 'InterFace',
        categorie: 'Javascript, Firebase',
        description: 'Hackaton @ Interface3',
        picture: 'Hackaton.png',
        githubLink : 'https://github.com/sabidlv/Projet_Interface',
        
    },
    {
        id : 6,
        name: 'Mini game',
        categorie: 'Unity',
        description: 'Mini game we made in training',
        picture: 'Unity.png',
        githubLink : '',
        appLink : ''
        
    },
    {
        id : 7,
        name: 'Submarine',
        categorie: 'OpenScad',
        description: 'Exercice made in training',
        picture: 'SousMarin.png',
        githubLink : '',
        appLink : ''
        
    },

  ];

  export default class Carousel extends Component {
      
    constructor(props) {
      super(props);
      this.state = {
        currentIndex: 0,
        isFlipped: false
      };
    }
 
    renderSlides() {

      const { currentIndex } = this.state;

      return slides.map((slide, index) => {
        const classMapper = {
          [currentIndex - 2]: "Carousel-slide--previous",
          [currentIndex - 1]: "Carousel-slide--left",
          [currentIndex]: "Carousel-slide--active",
          [currentIndex + 1]: "Carousel-slide--right",
          [currentIndex + 2]: "Carousel-slide--next"
        };

        if (index < currentIndex - 2 || index > currentIndex + 2) {
          return null;
        }

      return (

        <div
          key={slide.id}
          className={`Carousel-slide ${classMapper[index]}`}
          onClick={() => this.setState({ currentIndex: index })}
        >
          <Flippy flipDirection="horizontal">
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <FrontSide>
                      <div className="card" style={{ backgroundColor: 'black'}}>
                        <img className="d-block w-100" src={slide.picture} alt={slide.id}></img>
                        <bouton className="d-block btn text-white" style={{ backgroundColor: 'black'}}>View more</bouton>
                      </div>
                    </FrontSide>
                    <BackSide>
                      <div className="carousel-item active" style={{ backgroundColor: 'black', color: 'white'}}>
                        <div className="carousel-caption d-block mb-5 mx-5" style={{ backgroundColor: 'black'}}>
                          <h6 className="card-title ">{slide.categorie}</h6>
                          <h6 className="card-title ">{slide.description}</h6>
                          <h5 className="card-title"><a href={slide.appLink} className='m-3' target="_blank" rel="noopener noreferrer" style={{color: "white"}}><i className="fas fa-link"></i></a><a href={slide.githubLink} className='' target="_blank" rel="noopener noreferrer" style={{color: "white"}}><i className="fab fa-github"></i></a></h5>
                          <bouton className="d-block btn text-white" style={{ backgroundColor: 'black'}}>Close</bouton>
                        </div>
                      </div>
                    </BackSide>
                  </div>
                </div>   
              </div>
            </Flippy>
        </div>
      );
    });
  }


  render() {
    const { currentIndex } = this.state;

    return (
      <div className="Wrapper">
        <div className="Carousel">{this.renderSlides()}</div>
          <br/>
          <div className="Buttons">
          <button
            disabled={currentIndex === 0}
            onClick={() => this.setState({ currentIndex: currentIndex - 1 })}
            style={{backgroundColor: 'rgba(0,0,0,0.5)'}}
          >
          <i className="fas fa-chevron-left"></i>
          </button>
          <button
            disabled={currentIndex === slides.length - 1}
            onClick={() => this.setState({ currentIndex: currentIndex + 1 })}
            style={{backgroundColor: 'rgba(0,0,0,0.5)'}}
          >
          <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Carousel />, document.getElementById("root"));
