import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import UserCtxWrapper from "../Context/userContext";

const Layouts = ({ children }) => {
     return (
          <UserCtxWrapper>
               <App id='root-elem' className='h-auto w-screen bg-white flex justify-center items-center overflow-x-hidden'>
                    <Header />
                    {children}
               </App>
          </UserCtxWrapper>
     );
};

const App = styled.main``;

export default Layouts;
