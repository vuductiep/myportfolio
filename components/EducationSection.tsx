import React from 'react'
import { motion } from 'framer-motion'
import {Education} from "@/typings";
import EducationCard from "@/components/EducationCard";
import { Carousel } from 'flowbite-react';

type Props = {
  education: Education[]
}

function EducationSection({education}: Props) {
  return (
    <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      // className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
      className='h-screen flex relative flex-col text-left md:flex-row max-w-full px-5 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray text-2xl'>
        Education
      </h3>
      {/* <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory
        scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'> */}
      <div className='grid grid-cols-1'>
        <Carousel slide={false}>
          {education.map( education => (
            <EducationCard key={education?._id} education={education} />
          ))}
        </Carousel>
      </div>
    </motion.div>
  )
}

export default EducationSection