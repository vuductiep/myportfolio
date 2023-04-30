import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function ProjectsSection({}: Props) {
  const projects = [1, 2, 3, 4, 5]
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandotary z-20
        scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin'>
        {projects.map((project, index) => (
          <div key={index} className='w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44'>
            <motion.img 
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{duration: 1}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              src='https://gaion.kr/images/vision_01.jpg'
              alt=''
            />
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#f7ab0a]/50'>Case study {index+1} of {projects.length}</span>
              </h4>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12'></div>
    </div>
  )
}

export default ProjectsSection
