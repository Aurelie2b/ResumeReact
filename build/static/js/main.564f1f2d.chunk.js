(this.webpackJsonpresumereact=this.webpackJsonpresumereact||[]).push([[0],{40:function(e,t,a){},45:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),r=a(16),n=a.n(r),i=a(4),l=a(5),o=a(7),d=a(6),b=a(0),j=c.a.createContext(),m=function(e,t){return e+t},h=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={dataSkills:[{id:1,categorie:"Backend",description:["C#","PHP","SQL","JavaScript"]},{id:2,categorie:"Frameworks",description:["ASP.NET","Symfony","Codeigniter","Angular","Node JS","React","jQuery"]},{id:3,categorie:"Web",description:["HTML5","CSS3","XML/XSLT","Ajax","Json","jQuery","Responsive web design"]},{id:4,categorie:"Database",description:["Microsoft SQL Server","MySQL","PhpMyAdmin","MariaDB","Firebase"]},{id:5,categorie:"Tools",description:["Git/GitHub","Visual Studio 2019","Visual studio code","NetBeans","Brackets","XAMPP","Unit Testing"]},{id:6,categorie:"Web server",description:["Apache"]}],dispatch:function(t){e.setState((function(e){return m(e,t)}))}},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)(j.Provider,{value:this.state,children:this.props.children})}}]),a}(s.Component),u=j.Consumer,x=a(12),p=a(17),O=a.n(p),f=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).listener=null,s.state={status:"top"},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;O()(".navbar-nav>li>a").on("click",(function(){O()(".navbar-collapse").collapse("hide")})),this.listener=document.addEventListener("scroll",(function(t){document.scrollingElement.scrollTop>=50?"resume"!==e.state.status&&e.setState({status:"resume"}):"top"!==e.state.status&&e.setState({status:"top"})}))}},{key:"componentDidUpdate",value:function(){document.removeEventListener("scroll",this.listener)}},{key:"render",value:function(){return Object(b.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark sticky-top",style:{backgroundColor:"top"===this.state.status?"transparent":"black",color:(this.state.status,"white")},children:[Object(b.jsx)("button",{className:"navbar-toggler ",type:"button","data-toggle":"collapse","data-target":"#navbarToggleExternalContent","aria-controls":"navbarToggleExternalContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"text-white",children:"Menu"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarToggleExternalContent",children:Object(b.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(x.b,{className:"nav-link",to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(x.b,{className:"nav-link",to:"/AboutMe",children:"About Me"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(x.b,{className:"nav-link",to:"/Skills",children:"Skills"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(x.b,{className:"nav-link",to:"/Education",children:"Education"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(x.b,{className:"nav-link",to:"/Experiences",children:"Experiences"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(x.b,{className:"nav-link",to:"/Projects",children:"Projects"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(x.b,{className:"nav-link",to:"/Contact",children:"Contact Me"})})]})})]})}}]),a}(s.Component),g=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("footer",{className:"text-center text-lg-start- text-white",style:{backgroundColor:"rgba(0,0,0,0.5)"},children:[Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("ul",{className:"list-unstyled d-flex justify-content-around",children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://www.linkedin.com/in/aureliedebay/",target:"_blank",rel:"noopener noreferrer",title:"Linkedin Aur\xe9lie",className:"text-white",children:Object(b.jsx)("i",{className:"fab fa-linkedin-in mt-5 mb-4 fa-2x",style:{color:"white"}})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://github.com/Aurelie2b",target:"_blank",rel:"noopener noreferrer",title:"GitHub Aur\xe9lie",className:"text-white",children:Object(b.jsx)("i",{className:"fab fa-github mt-5 mb-4 fa-2x",style:{color:"white"}})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"tel:0032485830729",target:"_blank",rel:"noopener noreferrer",title:"Call Aur\xe9lie",className:"text-white",children:Object(b.jsx)("i",{className:"fa fa-mobile-alt mt-5 mb-4 fa-2x",style:{color:"white"}})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"mailto:info@debayaurelie.be",target:"_blank",rel:"noopener noreferrer",title:"Email Aur\xe9lie",className:"text-white",children:Object(b.jsx)("i",{className:"fas fa-envelope mt-5 mb-4 fa-2x",style:{color:"white"}})})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"DebayAurelieResume.pdf",target:"_blank",rel:"noopener noreferrer",title:"Resume Aur\xe9lie",className:"text-white",children:Object(b.jsx)("i",{className:"fas fa-file-alt mt-5 mb-4 fa-2x",style:{color:"white"}})})})]})}),Object(b.jsx)("div",{className:"text-center p-3",style:{backgroundColor:"black"},children:Object(b.jsxs)("small",{children:["\xa9 ",(new Date).getFullYear()," Debay Aur\xe9lie | Made with L",Object(b.jsx)("span",{style:{color:"red"},children:"\u2665"}),"VE | All Rights Reserved"]})})]})}}]),a}(s.Component),v=(a(40),a(20));function y(){return Object(b.jsxs)("div",{className:"content text-white mt-48 md:mt-40 pb-40 relative",children:[Object(b.jsx)("div",{className:"overlay"}),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(v.a,{text:"DEBAY AUR\xc9LIE"}),Object(b.jsx)("br",{}),Object(b.jsx)(v.a,{text:"FULL STACK"}),Object(b.jsx)(v.a,{text:"WEB DEVELOPER"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("a",{href:"DebayAurelieResume.pdf",title:"Dowload Aur\xe9lie Resume",children:Object(b.jsx)("button",{className:"text-white",children:"DOWLOAD MY RESUME"})})]})]})}function w(){return Object(b.jsx)("div",{className:"container text-white",children:Object(b.jsx)("div",{className:"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg mt-16",children:Object(b.jsxs)("div",{className:"px-6 rounded",style:{backgroundColor:"rgba(0,0,0,0.5)"},children:[Object(b.jsxs)("div",{className:"flex flex-wrap justify-center",children:[Object(b.jsx)("div",{className:"w-full px-4 flex justify-center",children:Object(b.jsx)("div",{className:"relative mt-12",children:Object(b.jsx)("img",{alt:"Aurelie",src:"_MG_9537.jpg",className:"shadow-xl rounded-full h-auto align-middle border-none absolute -m-18 -ml-20 lg:-ml-16 max-w-150-px"})})}),Object(b.jsx)("div",{className:"w-full px-4 text-center mt-5",children:Object(b.jsx)("div",{className:"flex justify-center mt-5",children:Object(b.jsx)("h1",{className:"section-header",children:"About Me"})})})]}),Object(b.jsxs)("div",{className:"text-center",children:[Object(b.jsx)("h3",{className:"text-xl font-semibold leading-normal mb-2mb-2",children:"Debay Aur\xe9lie"}),Object(b.jsxs)("div",{className:"text-sm leading-normal mt-0 mb-2 font-bold ",children:[Object(b.jsx)("i",{className:"fas fa-map-marker-alt mr-2"})," ","Brussels, Belgium"]}),Object(b.jsxs)("div",{className:"text-sm leading-normal mt-0 mb-2 font-bold ",children:[Object(b.jsx)("i",{className:"fas fa-envelope mr-2"}),Object(b.jsx)("a",{href:"mailto:info@debayaurelie.be",title:"Email Aur\xe9lie",style:{color:"white"},target:"_blank",rel:"noopener noreferrer",children:"info@debayaurelie.be"})]}),Object(b.jsxs)("div",{className:"mb-2 mt-10",children:[Object(b.jsx)("i",{className:"fas fa-briefcase mr-2"}),"Full Stack Web Developer"]}),Object(b.jsxs)("div",{className:"mb-2",children:[Object(b.jsx)("i",{className:"fas fa-university mr-2"}),"Interface 3"]}),Object(b.jsxs)("div",{className:"mb-2 ",children:[Object(b.jsx)("i",{className:"fas fa-file-alt mr-2 text-lg"}),Object(b.jsx)("a",{href:"DebayAurelieResume.pdf",title:"Resume Aur\xe9lie",style:{color:"white"},className:"font-normal",target:"_blank",rel:"noopener noreferrer",children:"Download my resume"})]})]}),Object(b.jsx)("div",{className:"mt-10 py-10 text-center",children:Object(b.jsx)("div",{className:"flex flex-wrap justify-center",children:Object(b.jsx)("div",{className:"w-full lg:w-9/12 px-4",children:Object(b.jsxs)("p",{className:"mb-4 text-lg leading-relaxed",children:["Hello, ",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"I started working when I was 18. With my 14 years of experience in the world of work, I have learned to work in team, to be autonomous and structured, and I have very good contact with the client.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"I started as a saleswomen and ended up as a project coordinator for a website leader in online flash sales in Belgium. This is how I discovered the world of IT and web development.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Thanks to my close friends who are developers. I was able to test my taste for code and since then I keep wanting to learn new technologies.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"I completed a full stack web developer training at Interface3 and my interest in code continues to grow, it is an exciting and rewarding job, because you learn new things all the time."]})})})})]})})})}var N=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={show:!1},e.displayListSkills=function(){var t=e.props.description.map((function(e){return Object(b.jsx)("li",{className:"card card-body mb-1 text-white",style:{backgroundColor:"rgba(0,0,0,0.5)"},children:e},e)}));return Object(b.jsx)("ul",{className:"list-group-item",style:{backgroundColor:"transparent"},children:t})},e.showSkills=function(){e.setState({show:!e.state.show})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(b.jsx)(u,{children:function(t){return Object(b.jsx)("div",{id:"accordion",className:"shadow-lg text-center rounded",style:{backgroundColor:"rgba(0,0,0,0.5)"},children:Object(b.jsxs)("div",{className:"card-header",id:"headingOne",children:[Object(b.jsx)("h5",{className:"mb-0",children:Object(b.jsx)("button",{className:"btn btn-link",style:{color:"white"},"data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",onClick:e.showSkills,children:e.props.categorie})}),e.state.show?Object(b.jsx)("div",{id:"collapseOne",className:"collapse mx-5 mt-2 rounded","aria-labelledby":"headingOne","data-parent":"#accordion",style:{background:"black"},children:e.displayListSkills(t.dispatch)}):null]})})}})}}]),a}(s.Component),k=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)(u,{children:function(e){return Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsx)("h1",{className:"section-header text-white",children:"Skills"}),Object(b.jsx)("div",{className:"Container m-4 mb-5",children:e.dataSkills.map((function(e){return Object(b.jsx)(N,{id:e.id,categorie:e.categorie,description:e.description},e.id)}))})]})}})}}]),a}(s.Component),C=a(18);a(44);function S(e){var t=e.id,a=e.year,s=e.job,c=e.society,r=e.city,n=e.workDescription;return t%2?Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(C.VerticalTimeline,{children:Object(b.jsxs)(C.VerticalTimelineElement,{contentStyle:{background:"transparent"},className:"vertical-timeline-element--work text-white",date:a,iconStyle:{background:"transparent"},position:"left",children:[Object(b.jsx)("h5",{className:"vertical-timeline-element-title text-center",children:s}),Object(b.jsx)("h5",{className:"vertical-timeline-element-title text-center",children:c}),Object(b.jsx)("h6",{className:"vertical-timeline-element-subtitle text-center",children:r}),Object(b.jsx)("p",{children:n})]})})}):Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(C.VerticalTimeline,{children:Object(b.jsxs)(C.VerticalTimelineElement,{className:"vertical-timeline-element--work text-white",contentStyle:{background:"transparent"},date:a,iconStyle:{background:"transparent"},position:"right",children:[Object(b.jsx)("h5",{className:"vertical-timeline-element-title text-center",children:s}),Object(b.jsx)("h5",{className:"vertical-timeline-element-title text-center",children:c}),Object(b.jsx)("h6",{className:"vertical-timeline-element-subtitle text-center",children:r}),Object(b.jsx)("p",{children:n})]})})})}var A=[{id:1,year:"04/2020 > 07/2020",job:"Stage Web Developer Full Stack",society:"Banlieues Asbl",city:"Brussels",workDescription:"Banlieues helps organizations in the voluntary sector to enter the world of ICT and offer technological products and services tailored to their needs. I worked on a project called Cformatplus. I did a form in which the users can register for a video-conference on the date that suits them with a date-picker and a captcha. I created a view in which displays a list of registered users with buttons in which an employee can send emails to the users. I did the whole page, i coded and set up the mailing service as well. l created a page in which the employees will be able to write an email that must be sent to registered users using a summernoteJs library. I did bug fixing. Analysis using different UML diagrams Unit and integration Tests. SQL queries development. I used PHP, JavaScript as programming languages, PHPMyAdmin as SGBD, codeIgniter as framework, jQuery, datePickerJs, summernoteJs."},{id:2,year:"2014 > 2018",job:"Sales Coordinator",society:"Vee-Pee",city:"Brussels",workDescription:"Leader in online flash sales in Belgium. Shooting, commercial descriptions and online publication of the various products."},{id:3,year:"2012 > 2013",job:"Store Manager",society:"B52 Stores",city:"Brussels",workDescription:"Women's and men's clothing shop. Entire store management."},{id:4,year:"2010 > 2012",job:"Saleswomen",society:"Aragon communications",city:"Brussels",workDescription:"Communication agency. Application of commercial techniques and new prospects searching."},{id:5,year:"2007 > 2009",job:"Saleswomen",society:"B52 Stores",city:"Brussels",workDescription:"Women's and men's clothes and shoe store product shelving, maintenance, storage management, cashier."}];function I(){return Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsx)("h1",{className:"section-header text-white",children:"Experiences"}),Object(b.jsx)("section",{className:"mb-5 mx-5 mt-2 rounded",style:{backgroundColor:"rgba(0,0,0,0.5)"},children:A.map((function(e){return Object(b.jsx)(S,{id:e.id,year:e.year,job:e.job,society:e.society,city:e.city,workdescription:e.workdescription},e.id)}))})]})}function E(){return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{className:"section-header text-white",children:"Education"}),Object(b.jsxs)("div",{className:"card text-center mb-5 rounded",style:{backgroundColor:"rgba(0,0,0,0.5)"},children:[Object(b.jsx)("div",{className:"card-header",children:Object(b.jsx)("h5",{className:"card-title text-white",children:"Training Full Stack Web developer @ Interface3"})}),Object(b.jsxs)("div",{className:"card-body text-white",children:[Object(b.jsx)("h5",{className:"card-title",children:"Certificate of competence in web development"}),Object(b.jsx)("p",{className:"card-title",children:"2019-2020"}),Object(b.jsx)("p",{className:"card-title",children:Object(b.jsx)("small",{children:"Brussels"})}),Object(b.jsx)("a",{href:"https://www.interface3.be/fr/formation/web-application-developer",title:"Details Training @ Interface 3",target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)("img",{src:"interface3.png",alt:"logo Interface 3"})})]})]}),Object(b.jsxs)("div",{className:"card text-center mt-5 mb-5",style:{backgroundColor:"rgba(0,0,0,0.5)"},children:[Object(b.jsx)("div",{className:"card-header",children:Object(b.jsx)("h5",{className:"card-title text-white border-black",children:"Child Care @ Marie Immacul\xe9e Institue"})}),Object(b.jsxs)("div",{className:"card-body text-white",children:[Object(b.jsx)("h5",{className:"card-title",children:"Secondary School Diploma in child care"}),Object(b.jsx)("p",{className:"card-title",children:"2000-2006"}),Object(b.jsx)("p",{className:"card-title",children:Object(b.jsx)("small",{children:"Brussels"})})]})]})]})}a(45);var L=a(19),B=a.n(L),M=a(30),D=function(){var e=Object(M.a)(),t=e.register,a=e.handleSubmit,s=e.errors,c=function(e,t,a){B.a.send(e,t,a).then((function(e){alert("Email successfully sent!")})).catch((function(e){return alert.error("There has been an error.  Here some thoughts on the error that occured:",e)}))};return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{className:"section-header text-white",children:"Contact Me"}),Object(b.jsx)("section",{className:"overflow-hidden mb-5 rounded",style:{backgroundColor:"rgba(0,0,0,0.5)"},children:Object(b.jsxs)("div",{className:"flex flex-wrap justify-center text-white",children:[Object(b.jsx)("div",{className:"w-full md:w-5/12 px-2 md:px-4 mr-auto mt-5 ml-5",children:Object(b.jsxs)("form",{id:"contact-form",name:"contact_form",role:"form",onSubmit:a((function(e,t){c("emailResume","template_ctbGjLNN",{from_name:e.name,message_html:e.message,reply_to:e.email}),t.target.reset(),console.log(e)})),children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"name",children:"Name"}),Object(b.jsx)("input",{type:"text",className:"form-control",placeholder:"Jane Doe",name:"name",ref:t({required:"Please enter your name"})}),s.name&&s.name.message,Object(b.jsx)("br",{})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Email"}),Object(b.jsx)("input",{type:"email",className:"form-control",placeholder:"exemple@exemple.com","aria-describedby":"emailHelp",name:"email",ref:t({required:"Please enter an email",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"invalid email address"}})}),s.email&&s.email.message,Object(b.jsx)("br",{})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"message",children:"Message"}),Object(b.jsx)("textarea",{className:"form-control",placeholder:"Enter your message",rows:"5",name:"message",ref:t({required:!0})}),s.comment&&"oops, you forgot your message!",Object(b.jsx)("br",{})]}),Object(b.jsx)("button",{type:"submit",className:"btn text-white mb-5",style:{background:"dark"},children:"Send"})]})}),Object(b.jsx)("div",{className:"w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative",children:Object(b.jsx)("i",{className:"fab fa-github text-gray-800 absolute overflow-hidden -top-150-px -right-100 left-auto opacity-80 text-55"})})]})})]})},T=a(9),P=a(21),R=a.n(P),_=(a(53),[{id:1,name:"Resume Website",categorie:"React",description:"My second website from scratch",picture:"resume2.jpg",githubLink:"https://github.com/Aurelie2b/resumeReact",appLink:"http://www.debayaurelie.be/"},{id:2,name:"Resume Website",categorie:"JavaScript",description:"My first website from scratch done in training",picture:"firstResumeWebsite.jpg",githubLink:"https://github.com/Aurelie2b/ResumeWebsite",appLink:"http://www.if3projets.net/wad19/aurelie/"},{id:3,name:"ImmoBab",categorie:"Angular, Firebase",description:"Training. Login: aure@2b.be, Password: 123456",picture:"immoBab.jpg",githubLink:"https://github.com/Aurelie2b/ImmoBab",appLink:"https://immobab-77233.web.app/login"},{id:4,name:"AppContact",categorie:"React",description:"Training",picture:"appContact.jpg",githubLink:"https://github.com/Aurelie2b/appcontacts",appLink:"https://aurelie2b.github.io/AddContact"},{id:5,name:"InterFace",categorie:"Javascript, Firebase",description:"Hackaton @ Interface3",picture:"Hackaton.png",githubLink:"https://github.com/sabidlv/Projet_Interface"},{id:6,name:"Mini game",categorie:"Unity",description:"Mini game we made in training",picture:"Unity.png",githubLink:"",appLink:""},{id:7,name:"Submarine",categorie:"OpenScad",description:"Exercice made in training",picture:"SousMarin.png",githubLink:"",appLink:""}]),F=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={currentIndex:0,isFlipped:!1},s}return Object(l.a)(a,[{key:"renderSlides",value:function(){var e=this,t=this.state.currentIndex;return _.map((function(a,s){var c,r=(c={},Object(T.a)(c,t-2,"Carousel-slide--previous"),Object(T.a)(c,t-1,"Carousel-slide--left"),Object(T.a)(c,t,"Carousel-slide--active"),Object(T.a)(c,t+1,"Carousel-slide--right"),Object(T.a)(c,t+2,"Carousel-slide--next"),c);return s<t-2||s>t+2?null:Object(b.jsx)("div",{className:"Carousel-slide ".concat(r[s]),onClick:function(){return e.setState({currentIndex:s})},children:Object(b.jsx)("div",{id:"carouselExampleIndicators",class:"carousel slide","data-ride":"carousel",children:Object(b.jsx)(R.a,{flipDirection:"horizontal",children:Object(b.jsx)("div",{className:"carousel-inner",children:Object(b.jsxs)("div",{className:"carousel-item active",children:[Object(b.jsx)(P.FrontSide,{children:Object(b.jsxs)("div",{class:"card",style:{backgroundColor:"black"},children:[Object(b.jsx)("img",{className:"d-block w-100",src:a.picture,alt:a.id}),Object(b.jsx)("div",{class:"d-block btn text-white",children:"View more"})]})}),Object(b.jsx)(P.BackSide,{children:Object(b.jsxs)("div",{class:"card",style:{backgroundColor:"black",color:"white"},children:[Object(b.jsxs)("div",{className:"card body",style:{backgroundColor:"black",color:"white"},children:[Object(b.jsx)("h5",{className:"card-title mt-5",children:a.name+"  : "+a.categorie}),Object(b.jsx)("h6",{className:"card-text mt-2",children:a.description}),Object(b.jsxs)("h3",{className:"card-text mt-5",children:[Object(b.jsx)("a",{href:a.appLink,className:"m-3",target:"_blank",rel:"noopener noreferrer",style:{color:"white"},children:Object(b.jsx)("i",{class:"fas fa-link"})}),Object(b.jsx)("a",{href:a.githubLink,className:"m-3",target:"_blank",rel:"noopener noreferrer",style:{color:"white"},children:Object(b.jsx)("i",{class:"fab fa-github"})})]})]}),Object(b.jsx)("div",{class:"card mb-2",style:{backgroundColor:"black"},children:Object(b.jsx)("div",{class:"d-block btn text-white mt-3",children:"Close"})})]})})]})})})})},a.id)}))}},{key:"render",value:function(){var e=this,t=this.state.currentIndex;return Object(b.jsxs)("div",{className:"Wrapper",children:[Object(b.jsx)("div",{className:"Carousel",children:this.renderSlides()}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"Buttons",children:[Object(b.jsx)("button",{disabled:0===t,onClick:function(){return e.setState({currentIndex:t-1})},style:{backgroundColor:"rgba(0,0,0,0.5)"},children:Object(b.jsx)("i",{class:"fas fa-chevron-left"})}),Object(b.jsx)("button",{disabled:t===_.length-1,onClick:function(){return e.setState({currentIndex:t+1})},style:{backgroundColor:"rgba(0,0,0,0.5)"},children:Object(b.jsx)("i",{class:"fas fa-chevron-right"})})]})]})}}]),a}(s.Component);n.a.render(Object(b.jsx)(F,{}),document.getElementById("root"));var W=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("div",{id:"root",children:[Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{className:"section-header text-white",children:"My projects"}),Object(b.jsx)("section",{className:"overflow-hidden mb-5 rounded",style:{backgroundColor:"rgba(0,0,0,0.5)"},children:Object(b.jsx)(F,{})})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{})]})}}]),a}(s.Component),H=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"container text-white",children:Object(b.jsxs)("div",{className:"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg mt-16",children:[Object(b.jsx)("div",{className:"px-6 rounded",style:{backgroundColor:"rgba(0,0,0,0.5)"},children:Object(b.jsxs)("div",{className:"w-full px-4 text-center",children:[Object(b.jsx)("div",{className:"flex justify-center",children:Object(b.jsx)("h1",{className:"section-header",children:"404 Not found"})}),Object(b.jsx)("div",{className:"flex justify-center",children:Object(b.jsx)(x.b,{className:"nav-link btn text-white mb-5",style:{background:"dark"},to:"/",children:"BACK TO HOME"})})]})}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{})]})})}}]),a}(s.Component),J=a(2),U=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),a}(s.Component),V=Object(J.g)(U);a(54),a(55),a(56),a(57);function Q(){return Object(L.init)("user_k3U0QTPRkPhBurlE3Li0b"),Object(b.jsx)(h,{children:Object(b.jsx)(x.a,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(f,{}),Object(b.jsx)(V,{children:Object(b.jsxs)(J.d,{children:[Object(b.jsx)(J.b,{exact:!0,path:"/",component:y,children:Object(b.jsx)(y,{})}),Object(b.jsx)(J.b,{path:"/AboutMe",component:w,children:Object(b.jsx)(w,{})}),Object(b.jsx)(J.b,{path:"/Skills",component:k,children:Object(b.jsx)(k,{})}),Object(b.jsx)(J.b,{path:"/Experiences",component:I,children:Object(b.jsx)(I,{})}),Object(b.jsx)(J.b,{path:"/Education",component:E,children:Object(b.jsx)(E,{})}),Object(b.jsx)(J.b,{path:"/Projects",component:W,children:Object(b.jsx)(W,{})}),Object(b.jsx)(J.b,{path:"/Contact",component:D,children:Object(b.jsx)(D,{})}),Object(b.jsx)(J.b,{path:"/NotFound",component:404,children:Object(b.jsx)(H,{})}),Object(b.jsx)(J.a,{to:"/NotFound"})]})}),Object(b.jsx)(g,{})]})})})}var G=document.getElementById("root");n.a.render(Object(b.jsx)(Q,{}),G),n.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(Q,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.564f1f2d.chunk.js.map