import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

import Title, { HeadSummary } from "../../components/Title";



const Contact = (props) => {

     return (
          <AboutContainer className='bg-gray-900 w-screen md:h-screen h-auto'>
               <div className='main-layer flex items-center justify-center  w-full h-full px-4 md:px-28 lg:px-40 py-20'>
                    <div className=' content flex flex-col-reverse md:flex-row items-center justify-center p-0     '>
                         <div className='img '>
                              <StaticImage src='../../images/bblack.png' alt='' placeholder='blurred' />
                         </div>
                        <span className='md:w-9 w-0 h-11 my-6 md:my-0 md:h-0 '></span>
                         <div className='constact-form text-white  h-full '>
                              <div className='  head'>
                                   <Title title='contact' left />
                                   <HeadSummary left text='get in touch with me today' />
                              </div>

                              <div className='header-summary  my-4 text-sm'>
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis est in consequatur
                                   illum,Debitis est in consequatur illum, Debitis est in consequatur illum,
                                   
                              </div>

                              <form action='' className='drop-msg  '>
                                   <div className='name flex w-full  space-x-4'>
                                        <div className='form-container'>
                                             <label className='capitalize font-medium' htmlFor='name'>
                                                  name
                                             </label>
                                             <input type='text' name='name' id='' />
                                        </div>

                                        <div className='form-container'>
                                             <label className='capitalize font-medium' htmlFor='name'>
                                                  email
                                             </label>
                                             <input type='text' name='name' id='' />
                                        </div>
                                   </div>
                                   <div className='message'>
                                        <div className='textarea'>
                                             <label htmlFor='name' className='capitalize font-medium'>
                                                  message
                                             </label>
                                             <textarea name='' id='' cols='30' rows='10'></textarea>
                                        </div>
                                   </div>
                                   <button className='p-2 px-4 my-4    capitalize btn-port bg-sky-600 font-semibold'>send</button>
                              </form>
                         </div>
                    </div>
               </div>
          </AboutContainer>
     );
};

const AboutContainer = styled.section`
     .main-layer {
          .constact-form {
               width: 50%;

               form {
                    margin-top: 20px;

                    .form-container {
                         position: relative;
                         height: 50px;
                         width: 100%;
                         label {
                              padding: 4px 8px;
                              background-color: #111827;
                              position: absolute;
                              top: -15px;
                              left: 20px;
                         }

                         input {
                              background: transparent;
                              width: 100%;
                              height: 100%;
                              border: 1px solid #fff;
                              padding: 15px;
                              &:focus {
                                   outline: 1px solid #0284c7;
                                   border: 1px solid transparent;
                              }
                         }
                    }

                    .message {
                         margin: 20px 0;
                         .textarea {
                              border: 1px solid #fff;
                              position: relative;
                              height: 210px;
                              textarea {
                                   background: transparent;
                                   width: 100%;
                                   height: 100%;
                                   padding: 15px;
                                   &:focus {
                                        outline: 1px solid #0284c7;
                                        border: 1px solid transparent;
                                   }
                              }
                              label {
                                   padding: 4px 8px;
                                   background-color: #111827;
                                   position: absolute;
                                   top: -15px;
                                   left: 20px;
                              }
                         }
                    }
               }
          }
     }
     
         /* small screen */
      @media screen and (max-width:440px){
      .main-layer {
          .constact-form {
               width: 100%;
          }
     }
     }
`;
export default Contact;
