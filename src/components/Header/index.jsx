import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import SideBar from "../sidebar";

const navLinks = [
     {
          name: "Home",
          link: "/",
          color: "#4338ca",
     },

     {
          name: "Portfolio",
          link: "/portfolio",
          color: "#7e22ce",
     },

     {
          name: "Contact",
          link: "/contact",
          color: "#a21caf",
     },

     {
          name: "About",
          link: "/about",
          color: "#be185d",
     },
];

const Header = () => {
const sideBarRef = React.useRef()

function openSidebar(){


     const sideb = document.getElementById("side");
     
     sideb.classList.toggle('active')
 
     
}
     
     return (
          <>
              <SideBar access={sideBarRef}  toggle={openSidebar}>Sometimes portaled?</SideBar>
               <Nav className=''>
                    <div className='logo  p-2 fixed capitalize font-pac font-semibold md:text-2xl text-xl'>idris<b className="text-sky-600 ml-1">.</b></div>
                    <button onClick={openSidebar} className='menu  flex flex-col space-y-2 justify-center items-end'>
                         <div className='one'></div>
                         <div className='two'></div>
                         <div className='three'></div>
                    </button>
                    <nav className='dot-links  h-28 w-2  flex flex-col items-center justify-between'>
                         {navLinks.map((item, i) => (
                              <Link
                                   to={item.link}
                                   activeStyle={{ backgroundColor: `${item.color}` }}
                                   className='w-3 h-3 rounded-full border  bg-transparent'
                              />
                         ))}
                    </nav>
                    <div className='follow  flex flex-col items-center justify-between'>
                         <ul className=' flex flex-col  items-center justify-between space-y-2'>
                              <FaGithubAlt className='hover:text-sky-600 hover:text-xl text-sm md:text-lg' />
                              <BsTwitter className='hover:text-sky-600 hover:text-xl text-sm md:text-lg' />
                              <FaLinkedinIn className='hover:text-sky-600 hover:text-xl text-sm md:text-lg' />
                         </ul>
                         <h1 className='follow-text capitalize font-lato md:font-semibold text-sm md:text-lg'>follow me</h1>
                    </div>
                    <nav className='nav-links'>
                         <div className='navbar w-full h-full bg-white flex items-center justify-center border border-black mx-auto'>
                              <ul className='w-full flex justify-around text-black '>
                                   {navLinks.map((item) => (
                                        <li>
                                             <Link
                                                  className='hover:text-blue-600 font-semibold font-joe text-slate-700'
                                                  activeStyle={{ color: "#2563eb" }}
                                                  to={item.link}>
                                                  {item.name}
                                             </Link>
                                        </li>
                                   ))}
                              </ul>
                         </div>
                    </nav>
               </Nav>
          </>
     );
};

const Nav = styled.div`
     position: fixed;
     top: 0;
     left: 0;
     background-color: transparent;
     color: white;
     z-index: 10;

     .logo {
          left: 44px;
          top: 35px;

          transition: all 0.4s ease;

          &:hover {
               transform: scale(1.2);
               transition: all 0.4s ease;
          }
     }

     .menu {
          position: fixed;
          width: 70px;
          height: 55px;
          right: 44px;
          top: 35px;
          padding: 5px 7px;

          div {
               height: 4px;
               width: 100%;
               background-color: #f3f4f6;
               border-radius: 4px;
          }
          .two {
               width: 75%;
               transition: all 0.4s ease;
          }

          .three {
               width: 50%;
               transition: all 0.4s ease;
          }

          &:hover {
               .two {
                    width: 87%;
               }

               .three {
                    width: 60%;
               }
          }
     }

     .dot-links {
          position: fixed;
          /* width: 70px; */
          /* height: 55px; */
          right: 44px;
          top: 50%;
          transform: translateY(-50%);
          padding: 5px 7px;
     }

     .follow {
          position: fixed;
          width: 25px;
          height: 170px;
          left: 44px;
          top: 50%;
          transform: translateY(-50%);
          padding: 1px;

          ul {
               width: 20px;
               height: auto;
          }

          &-text {
               width: 100px;
               /* height: 20px; */
               transform: rotate(-90deg);
               margin: 0;
               position: relative;

               &:before {
                    content: "";
                    position: absolute;
                    height: 2px;
                    width: 40px;
                    right: -30px;
                    top: 50%;
                    /* transform: translateY(-50%); */
                    border-radius: 8px;

                    background: white;
               }
          }
     }

     .nav-links {
          position: fixed;
          bottom: 0;
          width: 100%;
          height: 32px;
          background: #2563eb;
          padding: 1px 0;
          z-index: 12;

          .navbar {
               ul {
                    /* border: 1px solid black; */
                    width: 400px;
               }
          }
     }
     
     
     @media screen and (max-width:440px){

     .logo {
          left: 20px;
          top: 15px;

          transition: all 0.4s ease;

          &:hover {
               transform: scale(1.2);
               transition: all 0.4s ease;
          }
     }

     .menu {
          width: 50px;
          height: 36px;
          right: 20px;
          top: 19px;
          padding: 5px 7px;
          

          div {
               height: 3px;
               width: 100%;
               background-color: #f3f4f6;
               border-radius: 4px;
          }
           .one {
               width: 45%;
               transition: all 0.4s ease;
          }
          .two {
               width: 75%;
               transition: all 0.4s ease;
          }

          .three {
               width: 45%;
               transition: all 0.4s ease;
          }

          &:hover {
          
            .one {
               width: 100%;
          }
               .two {
                    width: 87%;
               }

               .three {
                    width: 60%;
               }
          }
     }

     .dot-links {
          position: fixed;
          /* width: 70px; */
          /* height: 55px; */
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          padding: 2px 4px;
        display: none;
          
     }

     .follow {
        display: none;
          width: 25px;
          height: 150px;
          left: 20px;
          top: 50%;
      

          ul {
               width: 20px;
               height: auto;
          }

          &-text {
             

               &:before {
                    
                    height: 2px;
                    width: 40px;
                    right: -20px;
                    
                 
               }
          }
     }

     .nav-links {
          position: fixed;
          bottom: 0;
          width: 100%;
          height: 32px;
          background: #2563eb;
          padding: 1px 0;
          z-index: 12;

          .navbar {
               ul {
                    /* border: 1px solid black; */
                    width: 400px;
               }
          }
     }
     
     }
     @media screen and (max-width:740px){}
`;

export default Header;
