import React from 'react'
import styled from "styled-components";


const Title = ({title, left}) => {
    return (
         <Div left={left} className={` relative rounded-full ${!left && "mx-auto"} bg-sky-700`}>
              <h1 className='absolute  font-bold capitalize md:text-xl'>{title}</h1>
         </Div>
    );
}

export const HeadSummary = ({text, left}) =>{
return (
     <Header left={left} className={`header-summary mt-2  ${!left && "text-center"}`}>
          <h1
               className='tracking-wider
                                   md:text-2xl font-semibold
                                    capitalize my-2 py-4'>
               {text}
          </h1>
     </Header>
);

}

const Div = styled.div`
     width: 40px;
     height: 40px;
     h1{
     /* left: -30px; */
     left:${({left} ) => left ? "10px" : "-30px"};
     bottom: 0;
     }
     
     @media screen and (max-width:440px){
     
     h1{
     left:${({left} ) => left ? "10px" : "-20px"};
     }
     }
`;

const Header = styled.div`
     position: relative;
     &:before {
          position: absolute;
          bottom: 0;
          content: "";
          height: 4px;
          width: ${({ left }) => (left ? "10%" : "40%")};
          left: ${({ left }) => (left ? "10px" : "50%")};
          /* transform: translate(-50%); */
          transform: ${({ left }) => (left ? "translate(0)" : "translate(-50%)")};
          background-color: #0284c7;
          border-radius: 3px;
     }

     &:after {
          position: absolute;
          bottom: 0;
          content: "";
          height: 4px;
          width: 4px;
          left: ${({ left }) => (left ? "0" : "25%")};

          background-color: #0284c7;
          border-radius: 3px;
     }
`;

export default Title
