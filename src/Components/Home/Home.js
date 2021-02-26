import React from 'react'
import './Home.scss'
import { GreatThings} from 'moving-letters'
import Button from 'react-bootstrap/Button'

export default function Home() {


  return (

    <div className="content text-white mt-48 md:mt-40 pb-40 relative">
      <div className="overlay"></div>
      <div className="container" >
        <GreatThings text='DEBAY AURÉLIE' /> 
        <br/>
        <GreatThings text='FULL STACK' />
        <GreatThings text='WEB DEVELOPER' />
        <br/>
        <br/>
      
        <a href={"DebayAurelieResume.pdf"} title="Dowload Aurélie Resume"><Button className="text-white" variant="outline-dark"><i className="fas fa-file-alt mr-2 text-lg"></i>DOWLOAD MY RESUME</Button></a>
      </div>
    
     
    </div>
  )
  
}
