import { motion } from 'framer-motion'
import React from 'react'
import ExperienceCard from './ExperienceCard'
import {Experience} from "@/typings";
import { Carousel } from 'flowbite-react';

type Props = {
  experiences: Experience[]
}

function WorkExperience({experiences}: Props) {
  return (
    <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className='h-screen w-screen flex relative overflow-hidden flex-col text-left md:flex-row px-5 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray text-2xl'>
        Experience
      </h3>
      <div className='grid grid-cols-1 snap snap-center'>
        <Carousel slide={false}>
          {experiences.map( (experience) => (
            <ExperienceCard key={experience?._id} experience={experience}/>
          ))}
        </Carousel>
        
      </div>
    </motion.div>
  )
}

export default WorkExperience