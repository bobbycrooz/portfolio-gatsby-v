// import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import bob1 from "../images/on.jpg";
import Typewriter from "typewriter-effect";
import { Link } from "gatsby";

const Home = () => {
     return (
          <HomeContainer className=' w-full h-screen'>
               <div className='main-layer w-full h-full'>
                    <div className='hero-content flex flex-col space-y-6 md:space-y-4 md:text-5xl text-2xl font-pop font-semibold  p-4 absolute text-white capitalize'>
                         <div className='hello ml-3 md:ml-0'>
                              <p className='text-lg'> Hello</p>
                         </div>
                         <div className='typewriter px-2  '>
                              <h1 className='about-summary'>
                                   i am idris software developer,
                                    <p className='md:my-2'>i build web application with</p>
                                   <Typewriter
                                        options={{
                                             strings: ["JavaScript.", "ReactJs.", "NodeJs.", "Gatsby.", "NextJs."],
                                             autoStart: true,
                                             loop: true,
                                        }}
                                   />
                              </h1>
                         </div>
                         <div className='button-container text-lg font-bold '>
                              <Link to='/portfolio'>
                               
                                   <button className='p-2 md:px-4 px-3  capitalize btn-port bg-sky-600'>Portfolio</button>
                              </Link>

                              <button className='p-2 ml-2 md:px-4 px-3  capitalize btn-cv bg-white text-sky-600'>
                                   resume/CV
                              </button>
                         </div>
                    </div>
               </div>
          </HomeContainer>
     );
};

const HomeContainer = styled.section`
     /* background: white; */
     background-image: url(${bob1});
     background-size: cover;
     background-repeat: no-repeat;
     background-position: center;
     /* background-position-y: 70px; */

     font-size: 24px;
     font-weight: bold;

     .main-layer {
          background-color: #000000cb;
          position: relative;

          .hero-content {
               top: 50%;
               left: 10%;
               height: 300px;
               width: auto;
               transform: translateY(-50%);

               /* div{
               border: 1px solid red;
               } */

               .hello {
                    width: 60px;
                    height: auto;
                    position: relative;

                    p {
                         position: relative;

                         z-index: 92 !important;
                    }

                    &:after {
                         content: "";
                         position: absolute;
                         height: 30px;
                         width: 30px;
                         left: -10px;
                         top: -4px;
                         /* transform: translateY(-50%); */
                         border-radius: 50%;
                         z-index: 1;

                         background: #0284c7;
                    }
               }
          }
     }
     
     @media screen and (max-width:440px){
      .main-layer {
                padding:0 2rem;

          .hero-content {
               top: 50%;
               left: 0;
               height: 300px;
               width: 100%;
               transform: translateY(-50%);

               .hello {
                    width: 60px;
                    height: auto;
                    position: relative;

                    p {
                         position: relative;

                         z-index: 92 !important;
                    }

                    &:after {
                         content: "";
                         position: absolute;
                         height: 30px;
                         width: 30px;
                         left: -10px;
                         top: -4px;
                         /* transform: translateY(-50%); */
                         border-radius: 50%;
                         z-index: 1;

                         background: #0284c7;
                    }
               }
          }
     }
     
     }
     
`;

export default Home;
