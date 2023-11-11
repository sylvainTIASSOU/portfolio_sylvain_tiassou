/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */

'use client'
import React, {useState} from "react";
import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaJava,
  FaKaggle,
  FaLinux,
  FaNode,
  FaPhp,
  FaRProject,
  FaGit,
  FaPython,
} from "react-icons/fa";
import { BiLogoMicrosoft, BiLogoAndroid } from 'react-icons/bi'

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiFlutter
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Systeme d\'exploitation',
        icons: [
          <FaLinux />,
          <BiLogoMicrosoft />,
          
        ],
      },
      {
        title: 'Logiciel de programmation',
        icons: [
          <FaJava />,
          <FaPython />,
          <FaRProject />,
          
        ],
      },
      {
        title: 'Developpement Web',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <FaPhp />,
          <SiFramer />,
          <FaNode />
        ],
      },

      {
        title: 'Dévéloppement Mobile',
        icons: [
          <SiFlutter />,
          <BiLogoAndroid />,
          
        ],
      },

      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'certificat',
    info: [
      {
        title: 'Word - Excel - PowerPoint',
        stage: '2015 - 2016',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer',
        stage: '2020-2023',
      },
      {
        title: 'Web Developer',
        stage: '2020-2023',
      },
      {
        title: 'Web Mobile ',
        stage: '2020-2023',
      },
      {
        title: 'Analyse de donnée ',
        stage: '2020-2023',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - UCAO-UUT',
        stage: '2020-2023',
      },
      {
        title: 'Computer Science - UCAO-UUT',
        stage: '2020-2023',
      },
      {
        title: 'Certified Graphic Designer ',
        stage: '2020-2023',
      },
      {
        title: 'Data Analyse - UCAO-UUT',
        stage: '2020-2023',
      },
    ],
  },
];

const About = () => {
const [index, setIndex] = useState(0)

  return (
    <div className="pb-[20%] h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/** avata img */}
      <motion.div 
      variants={fadeIn('right', 0.2)}
      initial='hidden'
      animate='show'
      exit='hidden'
      className="hidden xl:flex absolute bottom-0 -left-[210px] h-[600px]"
      >
        <Avatar />
      </motion.div>

      <div className=' md:mt-[4%] md:ml-[5%] container mx-auto h-full flex flex-col items-center md:flex-row gap-x-4'>
        <div className=" flex flex-col justify-center">
          <h2 className=" relative text-[25px] leading-tight md:text-[44px] md:leading-[1.1] mb-3 font-semibold; ">
            Des <span className="text-accent">histoires</span> captivantes donnent naissance à de magnifiques designs
          </h2>

          <p className=" font-extrabold text-white relative max-w-[500px] mx-auto md:mx-0 mb-6 md:mb-12 px-2 md:px-0">
          Il y a 4 mois, j'ai commencé à travailler en freelance en tant que développeur.</p>

        </div>
        <motion.div
         variants={fadeIn('left', 0.4)}
         initial='hidden'
         animate='show'
         exit='hidden'
         className="flex flex-col w-full xl:max-w-[48%] h-[480px]">

          
            <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
              {
                aboutData.map((item, itemIndex) => {
                  return <div
                   key={itemIndex}
                    className = {`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'}
                      cursor-pointer capitalize xl:text-lg relative after:w*8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                    onClick={() => setIndex(itemIndex)}
                  >
                   {item.title}
                  </div>
                })
              }
            </div>
            <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
              {
                aboutData[index].info.map((item, itemindex) => {
                  return (
                    <div 
                    className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
                    key={itemindex}
                    >
                      {/**title */}
                      <div>{item.title}</div>
                      <div className="hidden md:flex">-</div>
                      <div>{item.stage} </div>

                      <div className="flex gap-x-4">

                        {/** icons */}

                        {
                          item.icons?.map((icon, itemindex) => {
                            return <div className="text-2xl text-white" key={itemindex}> {icon} </div>;
                          })
                        }

                      </div>

                    </div>
                  );
                })
              }
            </div>
          

        </motion.div>
      </div>

    </div>
  );
};

export default About;
