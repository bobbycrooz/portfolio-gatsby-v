// import { Link } from "gatsby";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import styled from "styled-components";
import bob1 from "../images/on.jpg";
import Typewriter from "typewriter-effect";
import { Link } from "gatsby";

const one = {
  start: {
    opacity: 0,
  },
  finish: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 2.5,
      type: "spring",
      staggerChildren: 0.2,
      when:"afterChildren"
    },
  },
};

const Home = () => {
  return (
    <AnimatePresence>
      <HomeContainer className=" w-full h-screen">
        <div className="main-layer w-full h-full">
          <motion.div className="hero-content flex flex-col space-y-6 md:space-y-4 md:text-5xl text-2xl font-pop font-semibold  p-4 absolute text-white capitalize">
            <motion.div
              animate={{
                opacity: 1,
                transition: { duration: 1, delay: 1 },
              }}
              initial={{ opacity: 0 }}
              className="hello ml-3 md:ml-0"
            >
              <p className="text-lg"> Hello</p>
            </motion.div>
            <motion.div
              animate={{
                opacity: 1,
                transition: { duration: 1, delay: 2 },
              }}
              initial={{ opacity: 0 }}
              className="typewriter px-2  "
            >
              <motion.h1 className="about-summary">
                i am idris software developer,
                <motion.p className="md:my-2">
                  i build web application with
                </motion.p>
                <motion.div
                  animate={{
                    opacity: 1,
                    transition: { duration: 1, delay: 2 },
                  }}>
                 <Typewriter
                  options={{
                    strings: [
                      "JavaScript.",
                      "ReactJs.",
                      "NodeJs.",
                      "Gatsby.",
                      "NextJs.",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
                </motion.div>
               
              </motion.h1>
            </motion.div>
            <motion.div
              animate={{
                opacity: 1,
                transition: { duration: 1, delay: 3 },
              }}
              initial={{ opacity: 0 }}
              className="button-container text-lg font-bold "
            >
              <Link to="/portfolio">
                <button className="p-2 md:px-4 px-3  capitalize btn-port bg-sky-600">
                  Portfolio
                </button>
              </Link>

              <button className="p-2 ml-2 md:px-4 px-3  capitalize btn-cv bg-white text-sky-600">
                resume/CV
              </button>
            </motion.div>
          </motion.div>
        </div>
      </HomeContainer>
    </AnimatePresence>
  );
};

const HomeContainer = styled.section`
  background-image: url(${bob1});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

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

  @media screen and (max-width: 440px) {
    .main-layer {
      padding: 0 2rem;

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
