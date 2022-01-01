import React from "react";
import { Portal } from "react-portal";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import { Link } from "gatsby";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

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

const Index = ({ toggle, access }) => {
     return (
          <div>
               <Sidebar id='side' ref={access} className='side-bar-layer'>
                    <aside className='side-bar bg-white  flex flex-col justify-between'>
                         <div className='w-full  flex justify-between'>
                              <div className='logo  p-2  capitalize font-pac font-semibold md:text-2xl'>idris <b className="text-sky-600 text-xl">.</b></div>

                              <button onClick={toggle} className='btn p-3 md:text-2xl '>
                                   <GrClose />
                              </button>
                         </div>
                         <div className='w-full  h-6 side-links'>
                              <ul className='links text-gray-900 flex flex-col '>
                                   {navLinks.map((item, i) => (
                                        <li className=' w-full p-3  uppercase flex items-center font-semibold md:text-2xl '>
                                             <Link
                                                  to={item.link}
                                                  activeStyle={{ backgroundColor: "#2563eb", borderColor: "#2563eb" }}
                                                  className='rounded-full w-2 h-2 md:w-5 md:h-5 border border-gray-900'></Link>
                                             <Link
                                                  onClick={toggle}
                                                  className='ml-4'
                                                  activeStyle={{ color: "#2563eb" }}
                                                  to={item.link}>
                                                  {item.name}
                                             </Link>
                                        </li>
                                   ))}
                              </ul>
                         </div>
                         <div className='w-full social '>
                              <div className='follow  flex items-center justify-between text-sm'>
                                   <h1 className='follow-text capitalize font-lato font-semibold'>follow me</h1>
                                   <ul className=' w-20 flex  items-center justify-between'>
                                        <li>
                                             {" "}
                                             <FaGithubAlt className='hover:text-sky-600 hover:text-xl' />
                                        </li>
                                        <li>
                                             {" "}
                                             <BsTwitter className='hover:text-sky-600 hover:text-xl' />
                                        </li>
                                        <li>
                                             {" "}
                                             <FaLinkedinIn className='hover:text-sky-600 hover:text-xl' />
                                        </li>
                                   </ul>
                              </div>
                         </div>
                    </aside>
               </Sidebar>
          </div>
     );
};

const Sidebar = styled.div`
     position: fixed;
     width: 100vw;
     height: 100vh;
     background: #0007;
     z-index: 15;
     top: 0;
     transition: all 0.4s ease-in-out;
     visibility: hidden;

     aside {
          width: 0;
          height: 100vh;
          visibility: hidden;
          transition: all 0.4s ease-in-out;

          .side-links {
               height: 50%;
               opacity: 0;
          }
          .social {
               transition: all 0.5s ease-in-out;
           visibility: hidden;
               opacity: 0;
          }
     }

     &.active {
     visibility: visible;
     
          aside {
               width: 290px;
               transition: all 0.4s ease-in-out;
               padding: 1rem;
                visibility: visible;
               
               .side-links {
                    transition: all 0.5s ease-in-out;

                    height: 50%;
                    opacity: 1;
               }
               .social {
                    transition: all 0.5s ease-in-out;
                    opacity: 1;

                    visibility: visible;
               }
          }
     }

     @media screen and (max-width: 768px) {
          &.active {
               aside {
                    width: 45%;
                    transition: all 0.4s ease-in-out;

                    .side-links {
                         height: 50%;
                         opacity: 1;
                    }
               }
          }
     }
     @media (max-width: 440px) {
          &.active {
               aside {
                    width: 75%;
                    transition: all 0.4s ease-in-out;

                    .side-links {
                         height: 50%;
                         opacity: 1;
                    }
               }
          }
     }
`;
export default Index;
