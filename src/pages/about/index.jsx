import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
// import bob from "../../images/bblue.png";
import { SiJavascript, SiNodedotjs, SiTypescript, SiNextdotjs, SiGatsby, SiReact } from "react-icons/si";

// import styledComponents from "styled-components";

// import { UserContext } from "../../Context/userContext";

const skillList = [
     {
          name: "JavaScript",
          icon: <SiJavascript />,
          color: "#2563eb",
          link: "",
     },
     {
          name: "NodeJs",
          icon: <SiNodedotjs />,
          color: "#4f46e5",
          link: "",
     },
     {
          name: "TypeScript",
          icon: <SiTypescript />,
          color: "#7c3aed",
          link: "",
     },

     {
          name: "NextJs",
          icon: <SiNextdotjs />,
          color: "#9333ea",
          link: "",
     },

     {
          name: "Gatsby",
          icon: <SiGatsby />,
          color: "#c026d3",
          link: "",
     },

     {
          name: "ReactJs",
          icon: <SiReact />,
          color: "#db2777",
          link: "",
     },
];

const About = (props) => {
     // const userCtx = React.useContext(UserContext);

     return (
          <AboutContainer className='bg-gray-900 w-screen md:h-screen h-auto'>
               <div className='main-layer flex  items-center justify-center  w-full h-full px-6 md:px-28 lg:px-40 py-20'>
                    <div className=' content flex flex-col-reverse md:flex-row items-center justify-center p-0'>
                         <div className='img '>
                              <StaticImage src='../../images/bblue.png' alt='' placeholder='blurred' />
                         </div>
                         <span className='md:w-9 w-0 h-11 my-6 md:my-0 md:h-0 '></span>
                         <div className='about-container  text-white font-pop font-medium '>
                              <div className='hello font-semibold my-2'>
                                   <p className='text capitalize'>hello</p>
                              </div>
                              <div className='header-text   text-white font-pop font-bold mt-0  text-3xl  py-4'>
                                   I am idris ifeoluwa
                              </div>
                              <div className='header-summary  my-2 md:text-xl'>
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis est in consequatur
                                   illum,Debitis est in consequatur illum, Debitis est in consequatur illum,
                                   <br />
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis est in consequatur
                                   illum,Debitis est in consequatur illum, Debitis est in consequatur illum, Lorem ipsum
                                   dolor sit amet consectetur adipisicing elit. Debitis est in consequatur illum,Debitis
                                   est in consequatur illum, Debitis est in consequatur illum,
                        
                              </div>
                              <div className='offers  py-4 p-1'>
                                   <div className='hello my-2'>
                                        <p className='text capitalize  font-semibold my-2'>skills</p>
                                   </div>

                                   <div className='skill grid md:grid-cols-3 grid-cols-2  gap-2 mt-3'>
                                        {skillList.map((item, i) => (
                                             <div className='skill-container flex items-end   p-2'>
                                                  <div
                                                       style={{ backgroundColor: `${item.color}` }}
                                                       className='shade w-7 h-7 rounded-full relative'>
                                                       <span className='icon absolute md:text-xl'>{item.icon}</span>
                                                  </div>
                                                  <Link
                                                       to={item.link}
                                                       activeStyle={item.color}
                                                       className='skill-name font-joe font-medium ml-4 mt-3 md:text-xl '>
                                                       {item.name}
                                                  </Link>
                                             </div>
                                        ))}
                                   </div>
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
          .content {
               width: 100%;
               height: auto;
               padding: 10px 8px;

               .div {
                    height: 100%;
               }
               .img {
                    width: 400px;
               }
               .about-container {
                    width: 50%;
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

                    .header-text {
                         position: relative;
                         &:before {
                              content: "";
                              position: absolute;
                              height: 5px;
                              width: 130px;
                              bottom: 0;
                              /* transform: translateY(-50%); */
                              z-index: 1;

                              background: #0284c7;
                         }
                    }

                    .header-summary {
                    }

                    .offers {
                         .skill {
                              &-container {
                                   .shade {
                                        .icon {
                                             bottom: -5px;
                                             right: -5px;
                                        }
                                   }
                                   
                              
                              }
                         }
                    }
               }
          }
     }
     
     /* small screen */
          @media screen and (max-width:440px){
    .main-layer {
          .content {
           
               padding: 0px 0px;

               .div {
                    height: 100%;
               }
               .img {
                    width: 100%;
               }
               .about-container {
                    width: 100%;
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

                    .header-text {
                         position: relative;
                         &:before {
                              content: "";
                              position: absolute;
                              height: 5px;
                              width: 130px;
                              bottom: 0;
                              /* transform: translateY(-50%); */
                              z-index: 1;

                              background: #0284c7;
                         }
                    }

                    .header-summary {
                    }

                    .offers {
                         .skill {
                              &-container {
                                   .shade {
                                        .icon {
                                             bottom: -5px;
                                             right: -5px;
                                        }
                                   }
                                   
                              
                              }
                         }
                    }
               }
          }
     }
     }
`;
export default About;
