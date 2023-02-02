import React , { useState } from 'react';
import './navbar.css'
import {SiYourtraveldottv} from 'react-icons/si'
import {AiFillCloseCircle} from 'react-icons/ai'
import {RxDragHandleDots2} from 'react-icons/rx'

const Navbar = () => {
      const[active, setActive]= useState('navBar')
      //Function to toggle navBar
      const showNav = ()=>{
        setActive('navBar  activeNavbar')
      }


      const removeNavbar = ()=>{
        setActive('navBar')
       }

  return (
    <section className='navBarSection'>
      <header className="header flex">
        <div className='logoDiv'>
          <a href="#" className="logo flex">
            <h1><SiYourtraveldottv className="icon"/>Metafora
            </h1>
          </a>
        </div>
        <div className={active}>
        <ul className="navLists flex">
            <li className="navItem">
              <a href='#' className="navLink">Home</a>
              </li>
              <li className="navItem">
              <a href='#' className="navLink">Packages</a>
              </li>
              <li className="navItem">
              <a href='#' className="navLink">Shop</a>
              </li>
              <li className="navItem">
              <a href='' className="navLink">About </a>
              </li>

              <li className="navItem">
              <a href='#' className="navLink">Pages  </a>
              </li>

              <li className="navItem">
              <a href='#' className="navLink">News  </a>
              </li>

              <li className="navItem">
              <a href='#' className="navLink">Contact</a>
              </li>

              <button className='btn'>
                <a href="#">BOOK NOW  </a>
              </button>  
          </ul>
          <div onClick={removeNavbar}
              className="closeNavbar">
            <AiFillCloseCircle className="icon"/>
          </div>
        </div>
        

        <div onClick={showNav}
        
        className="toggleNavbar">
          <RxDragHandleDots2 className="icon"/>
        </div>
        
      </header>
    </section>
  )
}

export default Navbar
