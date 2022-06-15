import React, { useEffect, useState } from 'react'
import "./Nav.css"

const Nav = () => {
    

    const [show, handleShow] = useState(false);

    useEffect(() => {
      
        window.addEventListener("scroll", ()  => {
            if ( window.scrollY > 100  ) {
                handleShow(true);
            } else handleShow( false);
        });

        return () =>{
            window.removeEventListener("scroll", handleShow);
        };
 
    }, [])
    
  return (
    <div  className={`nav ${show && "nav_black" }`}>
        <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
        className="nav_logo"
        alt="Netflix logo"
          />

          <img className='nav_avatar'
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Netflix Logo" />
        
         </div>

  )
}

export default Nav