import { motion } from 'framer-motion'
import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div 
        initial={{x: -300, opacity: 0, scale:0.5}} 
        animate={{x: 0, opacity: 1, scale: 1}}
        transition={{duration: 1}}>
        <div className='flex flex-row items-center'>
          {/* Social Icons */}
          <SocialIcon 
            url="https://www.linkedin.com/in/vuductiep/" 
            fgColor='gray'
            bgColor='transparent'
          />
          <SocialIcon 
            url="https://leetcode.com/ductiepdt/" 
            fgColor='gray'
            bgColor='transparent'
          />
        </div>
      </motion.div>

      <motion.div 
        initial={{x: -300, opacity: 0, scale:0.5}} 
        animate={{x: 0, opacity: 1, scale: 1}}
        transition={{duration: 1}}>
        <div className='flex flex-row items-center text-gray-300 cursor-pointer'>
          <SocialIcon 
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'
          />
          <p className='uppercase'>Get in touch</p>
        </div>
      </motion.div>
      
    </header>
  )
}

export default Header