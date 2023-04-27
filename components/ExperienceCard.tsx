import React from 'react'
import { ImageProp } from './ImageProperty'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-1 items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] 
      snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{y: -100, opacity: 0}}
        transition={{duration: 1.2}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        src={'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1397198907/71d8f464fb021100101a0d9af95512b3.gif'}
        alt={''}
        className="rounded-full h-32 w-32 xl:w-[200px] xl:h-[200px] object-cover object-center"
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Embbeded Software Engineer</h4>
        <p className='font-bold text-2xl mt-1'>Dasan Networks</p>
        <div className='flex space-x-2 my-2'>
          <img src="https://img.icons8.com/color/48/null/c-programming.png"/>
          <img src="https://img.icons8.com/color/48/null/network.png"/>
        </div>
        <p className='uppercase py-5 text-gray-300'>Started work Apr 2014 - Ended Feb 2015</p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard