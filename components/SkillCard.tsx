import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  directionLeft?: boolean
}

function SkillCard({directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{
          x: directionLeft ? -150: 150, 
          opacity: 0
        }}
        transition={{duration: 0.5}}
        whileInView={{opacity: 1, x: 0}}
        src={'https://img.icons8.com/color/48/null/java-coffee-cup-logo--v1.png'}
        className="rounded-full h-24 w-24 border border-gray-500 md:w-28 md:h-28 xl:w-32 xl:h-32 filter object-cover group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-100'>100%</p>
        </div>
      </div>
    </div>
  )
}

export default SkillCard