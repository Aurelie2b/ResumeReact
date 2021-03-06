import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './Carousel.scss'

import Button from 'react-bootstrap/Button'

import Flippy, { FrontSide, BackSide } from 'react-flippy'

  const slides = [
    {
        id : 1,
        name: 'Resume Website',
        categorie : 'React',
        description : 'Resume Website from scratch',
        picture : 'resume2.jpg',
        githubLink : 'https://github.com/Aurelie2b/resumeReact',
        appLink : 'http://www.debayaurelie.be/'
    },
    {
        id : 2,
        name : 'Resume Website',
        categorie : 'JavaScript',
        description : 'My first website from scratch done in training',
        picture : 'firstResumeWebsite.jpg',
        githubLink : 'https://github.com/Aurelie2b/ResumeWebsite',
        appLink : 'http://www.if3projets.net/wad19/aurelie/'
    },
    {
        id : 3,
        name : 'ImmoBab',
        categorie : 'Angular, Firebase',
        description : 'Training udemy. Login: aure@2b.be, Password: 123456',
        picture : 'immoBab.jpg',
        githubLink : 'https://github.com/Aurelie2b/ImmoBab',
        appLink : 'https://immobab-77233.web.app/login'
    },
    {
        id : 4,
        name : 'AppContact',
        categorie : 'React',
        description : 'Training udemy',
        picture : 'appContact.jpg',
        githubLink : 'https://github.com/Aurelie2b/appcontacts',
        appLink : 'https://aurelie2b.github.io/AddContact'
    },
    {
        id : 5,
        name : 'InterFace',
        categorie : 'Javascript, Firebase',
        description : 'Hackaton @ Interface3',
        picture : 'Hackaton.png',
        githubLink : 'https://github.com/sabidlv/Projet_Interface',
        
    },
    {
        id : 6,
        name: 'Mini game',
        categorie : 'Unity',
        description : 'Mini game we made in training',
        picture : 'Unity.png',
        githubLink : '',
        appLink : ''
        
    },
    {
        id : 7,
        name: 'Submarine',
        categorie : 'OpenScad',
        description : 'Exercice made in training',
        picture : 'SousMarin.png',
        githubLink : '',
        appLink : ''
        
    },

  ];

  export default class Carousel extends Component {

    
    constructor(props) {
      super(props);
      this.state = {
        currentIndex : 0,
        show: false,
        isFlipped: false
      };
    }
    

    openModal = () => this.setState({ show: true});
    closeModal = () => this.setState({ show: false });

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

        <Flippy flipDirection="horizontal">
        <div
          key={slide.id}
          className={`Carousel-slide ${classMapper[index]}`}
          onClick={() => this.setState({ currentIndex: index })}
          
        >
     
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
       
          <div className="carousel-inner">
            <div className="carousel-item active">
              <FrontSide>
                <div className="card" style={{ backgroundColor: 'black'}}>
                  <img src={slide.picture} alt={slide.id}/>
                  <Button className="text-white" variant="outline-dark">View more</Button>
                </div>
              </FrontSide>
              

              <BackSide style={{color: 'white'}} className="mt-2">

                <div className="card mt-2" style={{ backgroundColor: 'black'}}>
                  <h6 className="card-title mt-3">{slide.categorie}</h6>
                  <h6 className="card-text mt-3">{slide.description}</h6>
                  <h5 className="card-text mt-3"><a href={slide.appLink} className='m-3' target="_blank" rel="noopener noreferrer" style={{color: "white"}}><i className="fas fa-link"></i></a><a href={slide.githubLink} className='m-3' target="_blank" rel="noopener noreferrer" style={{color: "white"}}><i className="fab fa-github"></i></a></h5>
                  <Button className="text-white mt-3" variant="outline-dark">Close</Button>
                </div>

              </BackSide>

            </div>
          </div>   
        
      </div>
    
        </div>
        </Flippy>   
      );
    });
  }


  render() {
    const { currentIndex } = this.state
    const { show } = this.state


    return (
      <div className="Wrapper">
        <div className="Carousel">{this.renderSlides()}</div>
       
          <div className="Buttons">
          <Button
            disabled={currentIndex === 0}
            onClick={() => this.setState({ currentIndex: currentIndex - 1 })}
            style={{backgroundColor: 'rgba(0,0,0,0.5)'}}
            variant="outline-dark"
          >
          <i className="fas fa-chevron-left"></i>
          </Button>
          <Button
            disabled={currentIndex === slides.length - 1}
            onClick={() => this.setState({ currentIndex: currentIndex + 1 })}
            style={{backgroundColor: 'rgba(0,0,0,0.5)'}}
            variant="outline-dark"
          >
          <i className="fas fa-chevron-right"></i>
          </Button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Carousel />, document.getElementById("root"));
