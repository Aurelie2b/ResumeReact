(this.webpackJsonpresumereact=this.webpackJsonpresumereact||[]).push([[0],{46:function(e,t,a){},52:function(e,t,a){},56:function(e,t,a){},61:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),r=a(17),n=a.n(r),i=a(7),l=a(8),o=a(10),d=a(9),j=a(1),b=c.a.createContext(),m=function(e,t){return e+t},h=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={dataSkills:[{id:1,categorie:"Backend",description:["C#","PHP","SQL","JavaScript"]},{id:2,categorie:"Frameworks",description:["ASP.NET","Symfony","Codeigniter","Angular","Node JS","React","jQuery"]},{id:3,categorie:"Web",description:["HTML5","CSS3","XML/XSLT","Ajax","Json","jQuery","Responsive web design"]},{id:4,categorie:"Database",description:["Microsoft SQL Server","MySQL","PhpMyAdmin","MariaDB","Firebase"]},{id:5,categorie:"Tools",description:["Git/GitHub","Visual Studio 2019","Visual studio code","NetBeans","Brackets","XAMPP","Unit Testing"]},{id:6,categorie:"Web server",description:["Apache"]}],dispatch:function(t){e.setState((function(e){return m(e,t)}))}},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(j.jsx)(b.Provider,{value:this.state,children:this.props.children})}}]),a}(s.Component),u=b.Consumer,x=a(18),O=a(25),p=a.n(O),f=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).listener=null,s.state={status:"top"},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;p()(".navbar-nav>li>a").on("click",(function(){p()(".navbar-collapse").collapse("hide")})),this.listener=document.addEventListener("scroll",(function(t){document.scrollingElement.scrollTop>=50?"resume"!==e.state.status&&e.setState({status:"resume"}):"top"!==e.state.status&&e.setState({status:"top"})}))}},{key:"componentDidUpdate",value:function(){document.removeEventListener("scroll",this.listener)}},{key:"render",value:function(){return Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark sticky-top",style:{backgroundColor:"top"===this.state.status?"transparent":"black",color:(this.state.status,"white")},children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarToggleExternalContent","aria-controls":"navbarToggleExternalContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"text-white toggler",children:"Menu"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarToggleExternalContent",children:Object(j.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(x.b,{className:"nav-link",to:"/",children:"Home"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(x.b,{className:"nav-link",to:"/AboutMe",children:"About Me"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(x.b,{className:"nav-link",to:"/Skills",children:"Skills"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(x.b,{className:"nav-link",to:"/Education",children:"Education"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(x.b,{className:"nav-link",to:"/Experiences",children:"Experiences"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(x.b,{className:"nav-link",to:"/Projects",children:"Projects"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(x.b,{className:"nav-link",to:"/Contact",children:"Contact Me"})})]})})]})})}}]),a}(s.Component),g=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("footer",{className:"text-center text-lg-start- text-white",style:{backgroundColor:"rgba(0,0,0,0.5)"},children:[Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("ul",{className:"list-unstyled d-flex justify-content-around",children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://www.linkedin.com/in/aureliedebay/",target:"_blank",rel:"noopener noreferrer",title:"Linkedin Aur\xe9lie",className:"text-white",children:Object(j.jsx)("i",{className:"fab fa-linkedin-in mt-5 mb-4 fa-2x",style:{color:"white"}})})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"https://github.com/Aurelie2b",target:"_blank",rel:"noopener noreferrer",title:"GitHub Aur\xe9lie",className:"text-white",children:Object(j.jsx)("i",{className:"fab fa-github mt-5 mb-4 fa-2x",style:{color:"white"}})})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"tel:0032485830729",target:"_blank",rel:"noopener noreferrer",title:"Call Aur\xe9lie",className:"text-white",children:Object(j.jsx)("i",{className:"fa fa-mobile-alt mt-5 mb-4 fa-2x",style:{color:"white"}})})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"mailto:info@debayaurelie.be",target:"_blank",rel:"noopener noreferrer",title:"Email Aur\xe9lie",className:"text-white",children:Object(j.jsx)("i",{className:"fas fa-envelope mt-5 mb-4 fa-2x",style:{color:"white"}})})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"DebayAurelieResume.pdf",target:"_blank",rel:"noopener noreferrer",title:"Resume Aur\xe9lie",className:"text-white",children:Object(j.jsx)("i",{className:"fas fa-file-alt mt-5 mb-4 fa-2x",style:{color:"white"}})})})]})}),Object(j.jsx)("div",{className:"text-center p-3",style:{backgroundColor:"black"},children:Object(j.jsxs)("small",{children:["\xa9 ",(new Date).getFullYear()," Debay Aur\xe9lie | Made with L",Object(j.jsx)("span",{style:{color:"red"},children:"\u2665"}),"VE | All Rights Reserved"]})})]})}}]),a}(s.Component),v=(a(46),a(27)),N=a(14);function y(){return Object(j.jsxs)("div",{className:"content text-white mt-48 md:mt-40 pb-40 relative",children:[Object(j.jsx)("div",{className:"overlay"}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(v.a,{text:"DEBAY AUR\xc9LIE"}),Object(j.jsx)("br",{}),Object(j.jsx)(v.a,{text:"FULL STACK"}),Object(j.jsx)(v.a,{text:"WEB DEVELOPER"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("a",{href:"DebayAurelieResume.pdf",title:"Dowload Aur\xe9lie Resume",children:Object(j.jsxs)(N.a,{className:"text-white",variant:"outline-dark",children:[Object(j.jsx)("i",{className:"fas fa-file-alt mr-2 text-lg"}),"DOWLOAD MY RESUME"]})})]})]})}function w(){return Object(j.jsx)("div",{className:"container text-white",children:Object(j.jsx)("div",{className:"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg mt-16",children:Object(j.jsxs)("div",{className:"px-6 rounded",style:{backgroundColor:"rgba(0,0,0,0.5)"},children:[Object(j.jsxs)("div",{className:"flex flex-wrap justify-center",children:[Object(j.jsx)("div",{className:"w-full px-4 flex justify-center",children:Object(j.jsx)("div",{className:"relative mt-12",children:Object(j.jsx)("img",{alt:"Aurelie",src:"_MG_9537.jpg",className:"shadow-xl rounded-full h-auto align-middle border-none absolute -m-18 -ml-20 lg:-ml-16 max-w-150-px"})})}),Object(j.jsx)("div",{className:"w-full px-4 text-center mt-5",children:Object(j.jsx)("div",{className:"flex justify-center mt-5",children:Object(j.jsx)("h1",{className:"section-header",children:"About Me"})})})]}),Object(j.jsxs)("div",{className:"text-center",children:[Object(j.jsx)("h3",{className:"text-xl font-semibold leading-normal mb-2mb-2",children:"Debay Aur\xe9lie"}),Object(j.jsxs)("div",{className:"text-sm leading-normal mt-0 mb-2 font-bold ",children:[Object(j.jsx)("i",{className:"fas fa-map-marker-alt mr-2"})," ","Brussels, Belgium"]}),Object(j.jsxs)("div",{className:"text-sm leading-normal mt-0 mb-2 font-bold ",children:[Object(j.jsx)("i",{className:"fas fa-envelope mr-2"}),Object(j.jsx)("a",{href:"mailto:info@debayaurelie.be",title:"Email Aur\xe9lie",style:{color:"white"},target:"_blank",rel:"noopener noreferrer",children:"info@debayaurelie.be"})]}),Object(j.jsxs)("div",{className:"mb-2 mt-10",children:[Object(j.jsx)("i",{className:"fas fa-briefcase mr-2"}),"Full Stack Web Developer"]}),Object(j.jsxs)("div",{className:"mb-2",children:[Object(j.jsx)("i",{className:"fas fa-university mr-2"}),"Interface 3"]}),Object(j.jsxs)("div",{className:"mb-2 ",children:[Object(j.jsx)("i",{className:"fas fa-file-alt mr-2 text-lg"}),Object(j.jsx)("a",{href:"DebayAurelieResume.pdf",title:"Resume Aur\xe9lie",style:{color:"white"},className:"font-normal",target:"_blank",rel:"noopener noreferrer",children:"Download my resume"})]})]}),Object(j.jsx)("div",{className:"mt-10 py-10 text-center",children:Object(j.jsx)("div",{className:"flex flex-wrap justify-center",children:Object(j.jsx)("div",{className:"w-full lg:w-9/12 px-4",children:Object(j.jsxs)("p",{className:"mb-4 text-lg leading-relaxed",children:["I started working when I was 18. With my 14 years of experience in the world of work, I have learned to work in team, to be autonomous and structured, and I have very good contact with the client.",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"I started as a saleswomen and ended up as a project coordinator for a website leader in online flash sales in Belgium. This is how I discovered the world of IT and web development.",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Thanks to my close friends who are developers. I was able to test my taste for code and since then I keep wanting to learn new technologies.",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"I completed a full stack web developer training at Interface3 and my interest in code continues to grow, it is an exciting and rewarding job, because you learn new things all the time."]})})})})]})})})}var k=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={show:!1},e.displayListSkills=function(){var t=e.props.description.map((function(e){return Object(j.jsx)("li",{className:"card card-body mb-1 text-white",style:{backgroundColor:"rgba(0,0,0,0.5)"},children:e},e)}));return Object(j.jsx)("ul",{className:"list-group-item",style:{backgroundColor:"transparent"},children:t})},e.showSkills=function(){e.setState({show:!e.state.show})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(j.jsx)(u,{children:function(t){return Object(j.jsx)("div",{id:"accordion",className:"shadow-lg text-center rounded",style:{backgroundColor:"rgba(0,0,0,0.5)"},children:Object(j.jsxs)("div",{className:"card-header",id:"headingOne",children:[Object(j.jsx)("h5",{className:"mb-0",children:Object(j.jsx)("button",{className:"btn btn-link",style:{color:"white"},"data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",onClick:e.showSkills,children:e.props.categorie})}),e.state.show?Object(j.jsx)("div",{id:"collapseOne",className:"collapse mx-5 mt-2 rounded","aria-labelledby":"headingOne","data-parent":"#accordion",style:{background:"black"},children:e.displayListSkills(t.dispatch)}):null]})})}})}}]),a}(s.Component),C=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(j.jsx)(u,{children:function(e){return Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsx)("h1",{className:"section-header text-white",children:"Skills"}),Object(j.jsx)("div",{className:"Container m-4 mb-5",children:e.dataSkills.map((function(e){return Object(j.jsx)(k,{id:e.id,categorie:e.categorie,description:e.description},e.id)}))})]})}})}}]),a}(s.Component),S=a(21),A=a(24),I=(a(50),a(13));function E(e){var t=e.id,a=e.year,c=e.job,r=e.society,n=e.city,i=e.workDescription,l=Object(s.useState)(!1),o=Object(S.a)(l,2),d=o[0],b=o[1],m=function(){return b(!1)},h=function(){return b(!0)};return t%2?Object(j.jsx)("div",{className:"container text-center",children:Object(j.jsx)(A.VerticalTimeline,{children:Object(j.jsxs)(A.VerticalTimelineElement,{contentStyle:{background:"transparent"},className:"text-white",date:a,iconStyle:{background:"transparent"},position:"left",children:[Object(j.jsx)("h5",{className:"mt-2",children:c}),Object(j.jsx)("h5",{className:"mt-3",children:" @"+r}),Object(j.jsx)("h6",{className:"mt-3",children:n}),Object(j.jsx)(N.a,{className:"mt-3 text-white",variant:"outline-dark",onClick:h,children:"Work description"}),Object(j.jsxs)(I.a,{show:d,onHide:m,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(j.jsx)(I.a.Header,{closeButton:!0,children:Object(j.jsx)(I.a.Title,{children:"Job description"})}),Object(j.jsx)(I.a.Body,{children:i}),Object(j.jsx)(I.a.Footer,{children:Object(j.jsx)(N.a,{variant:"dark",onClick:m,children:"Close"})})]})]})})}):Object(j.jsx)("div",{className:"container text-center",children:Object(j.jsx)(A.VerticalTimeline,{children:Object(j.jsxs)(A.VerticalTimelineElement,{className:"text-white",contentStyle:{background:"transparent"},date:a,position:"right",children:[Object(j.jsx)("h5",{className:"mt-2",children:c}),Object(j.jsx)("h5",{className:"mt-3",children:" @"+r}),Object(j.jsx)("h6",{className:"mt-3",children:n}),Object(j.jsx)(N.a,{className:"mt-3 text-white",variant:"outline-dark",onClick:h,children:"Work description"}),Object(j.jsxs)(I.a,{show:d,onHide:m,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(j.jsx)(I.a.Header,{closeButton:!0,children:Object(j.jsx)(I.a.Title,{children:"Work description"})}),Object(j.jsx)(I.a.Body,{children:i}),Object(j.jsx)(I.a.Footer,{children:Object(j.jsx)(N.a,{variant:"secondary",onClick:m,children:"Close"})})]})]})})})}var L=[{id:1,year:"04/2020 > 07/2020",job:"Internship Web Developer Full Stack",society:"Banlieues Asbl",city:"Brussels",workDescription:"Banlieues helps organizations in the voluntary sector to enter the world of ICT and offer technological products and services tailored to their needs. I worked on a project called Cformatplus. I did a form in which the users can register for a video-conference on the date that suits them with a date-picker and a captcha. I created a view in which displays a list of registered users with buttons in which an employee can send emails to the users. I did the whole page, i coded and set up the mailing service as well. l created a page in which the employees will be able to write an email that must be sent to registered users using a summernoteJs library. I did bug fixing. Analysis using different UML diagrams Unit and integration Tests. SQL queries development. I used PHP, JavaScript as programming languages, PHPMyAdmin as SGBD, codeIgniter as framework, jQuery, datePickerJs, summernoteJs."},{id:2,year:"2014 > 2018",job:"Sales Coordinator",society:"Vee-Pee",city:"Brussels",workDescription:"Leader in online flash sales in Belgium. Shooting, commercial descriptions and online publication of the various products."},{id:3,year:"2012 > 2013",job:"Store Manager",society:"B52 Stores",city:"Brussels",workDescription:"Women's and men's clothing shop. Entire store management."},{id:4,year:"2010 > 2012",job:"Saleswomen",society:"Aragon communications",city:"Brussels",workDescription:"Communication agency. Application of commercial techniques and new prospects searching."},{id:5,year:"2007 > 2009",job:"Saleswomen",society:"B52 Stores",city:"Brussels",workDescription:"Women's and men's clothes and shoe store product shelving, maintenance, storage management, cashier."}];function B(){return Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsx)("h1",{className:"section-header text-white",children:"Experiences"}),Object(j.jsx)("section",{className:"mb-5 mx-5 mt-2 rounded",style:{backgroundColor:"rgba(0,0,0,0.5)"},children:L.map((function(e){return Object(j.jsx)(E,{id:e.id,year:e.year,job:e.job,society:e.society,city:e.city,workDescription:e.workDescription},e.id)}))})]})}function M(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"section-header text-white",children:"Education"}),Object(j.jsxs)("div",{className:"card text-center mb-5 rounded",style:{backgroundColor:"rgba(0,0,0,0.5)"},children:[Object(j.jsx)("div",{className:"card-header",children:Object(j.jsx)("h5",{className:"card-title text-white",children:"Training Full Stack Web developer @ Interface3"})}),Object(j.jsxs)("div",{className:"card-body text-white",children:[Object(j.jsx)("h5",{className:"card-title",children:"Certificate of competence in web development"}),Object(j.jsx)("p",{className:"card-title",children:"2019-2020"}),Object(j.jsx)("p",{className:"card-title",children:Object(j.jsx)("small",{children:"Brussels"})}),Object(j.jsx)("a",{href:"https://www.interface3.be/fr/formation/web-application-developer",title:"Details Training @ Interface 3",target:"_blank",rel:"noopener noreferrer",children:Object(j.jsx)("img",{src:"interface3.png",alt:"logo Interface 3"})})]})]}),Object(j.jsxs)("div",{className:"card text-center mt-5 mb-5",style:{backgroundColor:"rgba(0,0,0,0.5)"},children:[Object(j.jsx)("div",{className:"card-header",children:Object(j.jsx)("h5",{className:"card-title text-white border-black",children:"Child Care @ Marie Immacul\xe9e Institue"})}),Object(j.jsxs)("div",{className:"card-body text-white",children:[Object(j.jsx)("h5",{className:"card-title",children:"Secondary School Diploma in child care"}),Object(j.jsx)("p",{className:"card-title",children:"2000-2006"}),Object(j.jsx)("p",{className:"card-title",children:Object(j.jsx)("small",{children:"Brussels"})})]})]})]})}a(52);var D=a(26),T=a.n(D),P=a(36),R=function(){var e=Object(P.a)(),t=e.register,a=e.handleSubmit,c=e.errors,r=function(e,t,a){T.a.send(e,t,a).then((function(e){d()})).catch((function(e){return alert.error("There has been an error.  Here some thoughts on the error that occured:",e)}))},n=Object(s.useState)(!1),i=Object(S.a)(n,2),l=i[0],o=i[1],d=function(){return o(!0)},b=function(){return o(!1)};return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"section-header text-white",children:"Contact Me"}),Object(j.jsx)("section",{className:"overflow-hidden mb-5 rounded",style:{backgroundColor:"rgba(0,0,0,0.5)"},children:Object(j.jsxs)("div",{className:"flex flex-wrap justify-center text-white",children:[Object(j.jsxs)("div",{className:"w-full md:w-5/12 px-2 md:px-4 mr-auto mt-5 ml-5",children:[Object(j.jsxs)("form",{id:"contact-form",name:"contact_form",role:"form",onSubmit:a((function(e,t){r("emailResume","template_ctbGjLNN",{from_name:e.name,message_html:e.message,reply_to:e.email}),t.target.reset(),console.log(e)})),children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"name",children:"Name"}),Object(j.jsx)("input",{type:"text",className:"form-control",placeholder:"Jane Doe",name:"name",ref:t({required:"Please enter your name"})}),c.name&&c.name.message,Object(j.jsx)("br",{})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Email"}),Object(j.jsx)("input",{type:"email",className:"form-control",placeholder:"exemple@exemple.com","aria-describedby":"emailHelp",name:"email",ref:t({required:"Please enter an email",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"invalid email address"}})}),c.email&&c.email.message,Object(j.jsx)("br",{})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"message",children:"Message"}),Object(j.jsx)("textarea",{className:"form-control",placeholder:"Enter your message",rows:"5",name:"message",ref:t({required:!0})}),c.comment&&"oops, you forgot your message!",Object(j.jsx)("br",{})]}),Object(j.jsx)(N.a,{type:"submit",className:"mb-5 text-white",variant:"outline-dark",children:"Send"})]}),Object(j.jsxs)(I.a,{show:l,onHide:b,size:"sm","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(j.jsx)(I.a.Header,{closeButton:!0,children:Object(j.jsx)(I.a.Title,{children:"Message send"})}),Object(j.jsx)(I.a.Footer,{children:Object(j.jsx)(N.a,{variant:"secondary",onClick:b,children:"Close"})})]})]}),Object(j.jsx)("div",{className:"w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative",children:Object(j.jsx)("i",{className:"fab fa-github text-gray-800 absolute overflow-hidden -top-150-px -right-100 left-auto opacity-80 text-55"})})]})})]})},F=a(15),_=(a(56),a(28)),W=a.n(_),H=[{id:1,name:"Resume Website",categorie:"React",description:"Resume Website from scratch",picture:"resume2.jpg",githubLink:"https://github.com/Aurelie2b/resumeReact",appLink:"http://www.debayaurelie.be/"},{id:2,name:"Resume Website",categorie:"JavaScript",description:"My first website from scratch done in training",picture:"firstResumeWebsite.jpg",githubLink:"https://github.com/Aurelie2b/ResumeWebsite",appLink:"http://www.if3projets.net/wad19/aurelie/"},{id:3,name:"ImmoBab",categorie:"Angular, Firebase",description:"Training udemy. Login: aure@2b.be, Password: 123456",picture:"immoBab.jpg",githubLink:"https://github.com/Aurelie2b/ImmoBab",appLink:"https://immobab-77233.web.app/login"},{id:4,name:"AppContact",categorie:"React",description:"Training udemy",picture:"appContact.jpg",githubLink:"https://github.com/Aurelie2b/appcontacts",appLink:"https://aurelie2b.github.io/AddContact"},{id:5,name:"InterFace",categorie:"Javascript, Firebase",description:"Hackaton @ Interface3",picture:"Hackaton.png",githubLink:"https://github.com/sabidlv/Projet_Interface"},{id:6,name:"Mini game",categorie:"Unity",description:"Mini game we made in training",picture:"Unity.png",githubLink:"",appLink:""},{id:7,name:"Submarine",categorie:"OpenScad",description:"Exercice made in training",picture:"SousMarin.png",githubLink:"",appLink:""}],J=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).openModal=function(){return s.setState({show:!0})},s.closeModal=function(){return s.setState({show:!1})},s.state={currentIndex:0,show:!1,isFlipped:!1},s}return Object(l.a)(a,[{key:"renderSlides",value:function(){var e=this,t=this.state.currentIndex;return H.map((function(a,s){var c,r=(c={},Object(F.a)(c,t-2,"Carousel-slide--previous"),Object(F.a)(c,t-1,"Carousel-slide--left"),Object(F.a)(c,t,"Carousel-slide--active"),Object(F.a)(c,t+1,"Carousel-slide--right"),Object(F.a)(c,t+2,"Carousel-slide--next"),c);return s<t-2||s>t+2?null:Object(j.jsx)(W.a,{flipDirection:"horizontal",children:Object(j.jsx)("div",{className:"Carousel-slide ".concat(r[s]),onClick:function(){return e.setState({currentIndex:s})},children:Object(j.jsx)("div",{id:"carouselExampleIndicators",className:"carousel slide","data-ride":"carousel",children:Object(j.jsx)("div",{className:"carousel-inner",children:Object(j.jsxs)("div",{className:"carousel-item active",children:[Object(j.jsx)(_.FrontSide,{children:Object(j.jsxs)("div",{className:"card",style:{backgroundColor:"black"},children:[Object(j.jsx)("img",{src:a.picture,alt:a.id}),Object(j.jsx)(N.a,{className:"text-white",variant:"outline-dark",children:"View more"})]})}),Object(j.jsx)(_.BackSide,{style:{color:"white"},className:"mt-2",children:Object(j.jsxs)("div",{className:"card mt-2",style:{backgroundColor:"black"},children:[Object(j.jsx)("h6",{className:"card-title mt-3",children:a.categorie}),Object(j.jsx)("h6",{className:"card-text mt-3",children:a.description}),Object(j.jsxs)("h5",{className:"card-text mt-3",children:[Object(j.jsx)("a",{href:a.appLink,className:"m-3",target:"_blank",rel:"noopener noreferrer",style:{color:"white"},children:Object(j.jsx)("i",{className:"fas fa-link"})}),Object(j.jsx)("a",{href:a.githubLink,className:"m-3",target:"_blank",rel:"noopener noreferrer",style:{color:"white"},children:Object(j.jsx)("i",{className:"fab fa-github"})})]}),Object(j.jsx)(N.a,{className:"text-white mt-3",variant:"outline-dark",children:"Close"})]})})]})})})},a.id)})}))}},{key:"render",value:function(){var e=this,t=this.state.currentIndex;this.state.show;return Object(j.jsxs)("div",{className:"Wrapper",children:[Object(j.jsx)("div",{className:"Carousel",children:this.renderSlides()}),Object(j.jsxs)("div",{className:"Buttons",children:[Object(j.jsx)(N.a,{disabled:0===t,onClick:function(){return e.setState({currentIndex:t-1})},style:{backgroundColor:"rgba(0,0,0,0.5)"},variant:"outline-dark",children:Object(j.jsx)("i",{className:"fas fa-chevron-left"})}),Object(j.jsx)(N.a,{disabled:t===H.length-1,onClick:function(){return e.setState({currentIndex:t+1})},style:{backgroundColor:"rgba(0,0,0,0.5)"},variant:"outline-dark",children:Object(j.jsx)("i",{className:"fas fa-chevron-right"})})]})]})}}]),a}(s.Component);n.a.render(Object(j.jsx)(J,{}),document.getElementById("root"));var U=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{id:"root",children:[Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"section-header text-white",children:"Projects"}),Object(j.jsx)("section",{className:"overflow-hidden mb-5 rounded",style:{backgroundColor:"rgba(0,0,0,0.5)"},children:Object(j.jsx)(J,{})})]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]})}}]),a}(s.Component),V=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"container text-white",children:Object(j.jsxs)("div",{className:"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg mt-16",children:[Object(j.jsx)("div",{className:"px-6 rounded",style:{backgroundColor:"rgba(0,0,0,0.5)"},children:Object(j.jsxs)("div",{className:"w-full px-4 text-center",children:[Object(j.jsx)("div",{className:"flex justify-center",children:Object(j.jsx)("h1",{className:"section-header",children:"404 Not found"})}),Object(j.jsx)("div",{className:"flex justify-center",children:Object(j.jsx)(x.b,{className:"nav-link btn text-white mb-5",style:{background:"dark"},to:"/",children:"BACK TO HOME"})})]})}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]})})}}]),a}(s.Component),Q=a(5),G=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),a}(s.Component),q=Object(Q.g)(G);a(61),a(62),a(63),a(64);function z(){return Object(D.init)("user_k3U0QTPRkPhBurlE3Li0b"),Object(j.jsx)(h,{children:Object(j.jsx)(x.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(f,{}),Object(j.jsx)(q,{children:Object(j.jsxs)(Q.d,{children:[Object(j.jsx)(Q.b,{exact:!0,path:"/",component:y,children:Object(j.jsx)(y,{})}),Object(j.jsx)(Q.b,{path:"/AboutMe",component:w,children:Object(j.jsx)(w,{})}),Object(j.jsx)(Q.b,{path:"/Skills",component:C,children:Object(j.jsx)(C,{})}),Object(j.jsx)(Q.b,{path:"/Experiences",component:B,children:Object(j.jsx)(B,{})}),Object(j.jsx)(Q.b,{path:"/Education",component:M,children:Object(j.jsx)(M,{})}),Object(j.jsx)(Q.b,{path:"/Projects",component:U,children:Object(j.jsx)(U,{})}),Object(j.jsx)(Q.b,{path:"/Contact",component:R,children:Object(j.jsx)(R,{})}),Object(j.jsx)(Q.b,{path:"/NotFound",component:404,children:Object(j.jsx)(V,{})}),Object(j.jsx)(Q.a,{to:"/NotFound"})]})}),Object(j.jsx)(g,{})]})})})}var X=document.getElementById("root");n.a.render(Object(j.jsx)(z,{}),X),n.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(z,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.ff75c8c1.chunk.js.map