// import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import bob from "../../images/off.jpg";
import { SiJavascript, SiNodedotjs, SiTypescript, SiNextdotjs, SiGatsby, SiReact } from "react-icons/si";
import Title, { HeadSummary } from "../../components/Title";

// import styledComponents from "styled-components";

// import { UserContext } from "../../Context/userContext";

import ModalImage from "react-modal-image";

const skillList = [
     {
          name: "JavaScript",
          icon: <SiJavascript />,
          color: "#2563eb",
          img: (
               <StaticImage
                    src='../../images/off.jpg'
                    placeholder='blurred'
                    style={{ height: "100%", width: "100%" }}
               />
          ),
     },
     {
          name: "NodeJs",
          icon: <SiNodedotjs />,
          color: "#4f46e5",
          img: (
               <StaticImage
                    placeholder='blurred'
                    style={{ height: "100%", width: "100%" }}
                    src='../../images/off.jpg'
               />
          ),
     },
     {
          name: "TypeScript",
          icon: <SiTypescript />,
          color: "#7c3aed",
           img: (
               <StaticImage
                    placeholder='blurred'
                    style={{ height: "100%", width: "100%" }}
                    src='../../images/off.jpg'
               />
          ),    },

     {
          name: "NextJs",
          icon: <SiNextdotjs />,
          color: "#9333ea",
          img: (
               <StaticImage
                    placeholder='blurred'
                    style={{ height: "100%", width: "100%" }}
                    src='../../images/off.jpg'
               />
          ),
     },

     {
          name: "Gatsby",
          icon: <SiGatsby />,
          color: "#c026d3",
          img: (
               <StaticImage
                    placeholder='blurred'
                    style={{ height: "100%", width: "100%" }}
                    src='../../images/off.jpg'
               />
          ),    },

     {
          name: "ReactJs",
          icon: <SiReact />,
          color: "#db2777",
          img: (
               <StaticImage
                    placeholder='blurred'
                    style={{ height: "100%", width: "100%" }}
                    src='../../images/off.jpg'
               />
          ),
     },

     {
          name: "ReactJs",
          icon: <SiReact />,
          color: "#db2777",
          img: (
               <StaticImage
                    placeholder='blurred'
                    style={{ height: "100%", width: "100%" }}
                    src='../../images/off.jpg'
               />
          ),    },

     {
          name: "ReactJs",
          icon: <SiReact />,
          color: "#db2777",
           img: (
               <StaticImage
                    placeholder='blurred'
                    style={{ height: "100%", width: "100%" }}
                    src='../../images/off.jpg'
               />
          ),    },
];

const nav = [
     {
          name: "all work",
          set: () => {},
          active: true,
     },

     {
          name: "react",
          set: () => {},
     },

     {
          name: "nextjs",
          set: () => {},
     },

     {
          name: "gatsby",
          set: () => {},
     },
];

const Portfolio = (props) => {
     // const userCtx = React.useContext(UserContext);
     const [showDetails, setShowDetails] = React.useState(false);

     return (
          <AboutContainer className='bg-gray-900 w-screen h-auto '>
               <div className='main-layer flex items-center justify-center  w-full h-full p-20 px-4 b  md:px-28 lg:px-40 text-white'>
               
                    <div className='main-content  mx-auto h-full w-full flex flex-col items-center text-center'>
                    
                         <div className='header'>
                              <Title title='portfolio' />
                              <HeadSummary text="let's see my work" />
                         </div>

                         <div className='works mt-11   w-full'>
                              <ul className='works-nav  py-2 flex space-x-3 mx-auto my-2 justify-center '>
                                   {nav.map((item, i) => (
                                        <li>
                                             <button
                                                  className={`link-btn ${
                                                       item.active && "bg-sky-600"
                                                  } capitalize p-1 px-3  rounded-md font-semibold text-xs cursor-pointer`}>
                                                  {item.name}
                                             </button>
                                        </li>
                                   ))}
                              </ul>

                              {showDetails && (
                                   <div className='details_box md:p-4 h-auto w-full flex flex-col justify-center  items-center'>
                                        <div className='image-box'>
                                             {
                                                  <ModalImage
                                                       className='modal-image  '
                                                       small={bob}
                                                       large={bob}
                                                       alt='Hello World!'
                                                  />
                                             }
                                        </div>
                                        <span className='md:w-11 '></span>
                                        <div className='details-box text-left  md:w-1/2 md:p-5 w-full'>
                                             <div className='flex w-full  items-center my-4'>
                                                  <h1 className='project-name text-2xl font-semibold capitalize'>
                                                       ajo app
                                                  </h1>
                                                  <button
                                                       onClick={() => setShowDetails((p) => !p)}
                                                       className=' ml-6 btn border  p-1 px-3  capitalize  shadow font-semibold hover:bg-sky-600 hover:border-transparent '>
                                                       live
                                                  </button>
                                                  <button
                                                       onClick={() => setShowDetails((p) => !p)}
                                                       className=' ml-6 btn border  p-1 px-3  capitalize  shadow font-semibold hover:bg-sky-600 hover:border-transparent '>
                                                       close
                                                  </button>
                                             </div>
                                             <ul className='ml-4 my-3 list-disc'>
                                                  {skillList.map((item, i) => (
                                                       <li className='my-2'>
                                                            buildt eith and ojaodjoojiefo oeeed of de jdjjjfo df o dfijd
                                                            afdadjojd
                                                       </li>
                                                  ))}
                                             </ul>
                                        </div>
                                   </div>
                              )}

                              <div className='container grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 gap-y-6 md:mt-6'>
                                   {skillList.map((item, i) => (
                                        <div className='portfolio-card w-full h-48  relative'>
                                             <div className='w-full h-full'>{item.img}</div>
                                             <div className='card-door-one absolute text-center text-sky-600 font-semibold  capitalize flex flex-col justify-center items-center space-y-4'>
                                                  <h1 className='name text-sm '>portfolio</h1>
                                                  <button
                                                       onClick={() => setShowDetails((p) => !p)}
                                                       className='btn  p-1 px-3 text-white capitalize hover:bg-sky-600 border hover:border-0 shadow font-semibold'>
                                                       details
                                                  </button>
                                             </div>
                                             <div className='card-door-two border border-sky-600 absolute flex justify-center items-center'>
                                                  <button className='btn border  p-1 px-3  capitalize  shadow font-semibold hover:bg-sky-600 hover:border-0 '>
                                                       live
                                                  </button>
                                             </div>
                                        </div>
                                   ))}
                              </div>
                         </div>
                         
                    </div>
               </div>
          </AboutContainer>
     );
};

const AboutContainer = styled.section`
     /* background: white; */

     .main-layer {

          .main-content {

               .header {
                    height: 170px;
               }

               .works {
                    .image-box .modal-image {
                         width: 250px;
                         height: 250px;
                    }
                    .portfolio-card {
                         height: 15rem;
                         /* border: 1px solid red; */
                         .card-door-one {
                              position: absolute;
                              top: 0;
                              width: 100%;
                              height: 0;
                              background: #0001;
                              visibility: hidden;
                              border-top-color: transparent;
                              transition: all 0.4s ease-in-out;

                              .name,
                              .btn {
                                   opacity: 0;
                              }
                         }
                         .card-door-two {
                              position: absolute;
                              bottom: 0;
                              width: 100%;
                              height: 0%;
                              background: #0001;
                              visibility: hidden;
                              border-bottom-color: transparent;
                              transition: all 0.4s ease-in-out;
                              .btn {
                                   opacity: 0;
                              }
                         }

                         &:hover {
                              .card-door-one {
                                   height: 50%;
                                   visibility: visible;
                                   background: #000a;
                                   transition: all 0.4s ease-in-out;
                                   .name,
                                   .btn {
                                        transition: all 0.5s ease-in-out;

                                        opacity: 1;
                                   }
                                   &:hover {
                                        background: #000e;
                                   }
                              }
                              .card-door-two {
                                   height: 50%;
                                   visibility: visible;
                                   background: #0008;
                                   transition: all 0.4s ease-in-out;

                                   .btn {
                                        transition: all 0.6s ease-in-out;

                                        opacity: 1;
                                   }
                                   &:hover {
                                        background: #000b;
                                   }
                              }
                         }
                    }
               }
          }
     }
     
     @media screen and (max-width:440px){
       .main-layer {
          .main-content {

               .works {
                    .image-box .modal-image {
                         width: 100%;
                         height: 250px;
                    }
                 
               }
          }
     }
     }
`;
export default Portfolio;
