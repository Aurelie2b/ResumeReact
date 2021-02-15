import React from 'react'
import './Home.scss'
import { GreatThings} from 'moving-letters'

export default function Home() {


  return (

    <div className="content text-white">
      <div className="overlay"></div>
      <div className="container">
        <br/>
        <br/>
        <GreatThings text='DEBAY AURÉLIE' /> 
        <br/>
        <GreatThings text='FULL STACK' />
        <GreatThings text='WEB DEVELOPER' />
        <br/>
        <a href={"DebayAurelieResume.pdf"} title="Dowload Aurélie Resume"><button className="text-white">DOWLOAD MY RESUME</button></a>
      </div>
      <br/>
    </div>
  )
  
}
