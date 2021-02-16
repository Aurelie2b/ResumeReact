import React from "react";

export default function AboutMe() {

  return (
    <div className="container text-white">
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6 rounded" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
        
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative mt-12">
                <img
                  alt="..."
                  src={"_MG_9537.jpg"}
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-18 -ml-20 lg:-ml-16 max-w-150-px"
                />
              </div>
            </div>
            <div className="w-full px-4 text-center mt-5">
              <div className="flex justify-center mt-5">
                <h1 className="section-header">About Me</h1>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold leading-normal mb-2mb-2">
              Debay Aurélie
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 font-bold ">
              <i className="fas fa-map-marker-alt mr-2"></i>{" "}
              Brussels, Belgium
            </div>
            <div className="text-sm leading-normal mt-0 mb-2 font-bold ">
              <i className="fas fa-envelope mr-2"></i>
              <a href={"mailto:info@debayaurelie.be"} title="Email Aurélie" style={{color:'white'}} target="_blank" rel="noopener noreferrer">info@debayaurelie.be</a>
            </div>
            <div className="mb-2 mt-10">
              <i className="fas fa-briefcase mr-2"></i>
              Full Stack Web Developer
            </div>
            <div className="mb-2">
              <i className="fas fa-university mr-2"></i>
              Interface 3
            </div>
            <div className="mb-2 ">
              <i className="fas fa-file-alt mr-2 text-lg"></i>
              <a href={"DebayAurelieResume.pdf"} title="Resume Aurélie" style={{color:'white'}} className="font-normal" target="_blank" rel="noopener noreferrer">Download my resume</a> 
            </div>
        
          </div>
          <div className="mt-10 py-10 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed">
                Hello, my name is Aurélie.<br/><br/>
                I started working when I was 18. With my 14 years of experience in the world of work, I have learned to work in team, to be autonomous and structured, and I have very good contact with the client.<br/><br/>
                I started as a saleswomen and ended up as a project coordinator for a website leader in online flash sales in Belgium. This is how I discovered the world of IT and web development.<br/><br/>
                Thanks to my close friends who are developers.
                I was able to test my taste for code and since then I keep wanting to learn new technologies.<br/><br/>               
                I completed a full stack web developer training at Interface3 and my interest in code continues to grow, it is an exciting and rewarding job, because you learn new things all the time.             
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}