import React, {useState} from 'react'
import './ScrollTop.css'


  const ScrollArrow = () =>{

    const [showScroll, setShowScroll] = useState(false)
  
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400){
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 400){
        setShowScroll(false)
      }
    };
  
    const scrollTop = () =>{
      window.scrollTo({top: 0, behavior: 'smooth'});
    };
  
    window.addEventListener('scroll', checkScrollTop)
  

  return (
    <div className="scrollTop">
      <a onClick={scrollTop}  className='m-3' style={{color: "white"}}><i class="fas fa-arrow-up" className="" style={{display: showScroll ? 'flex' : 'none'}}></i></a>
    </div>
     
  );

}

export default ScrollArrow;