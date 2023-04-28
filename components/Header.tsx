import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

function Header({}: Props) {
  const leetcode = {
    icon:
      'M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z',
    mask:
      'M0,0v64h64V0H0z',
  }

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
        </div>
      </motion.div>
      
      <motion.div 
        initial={{x: -300, opacity: 0, scale:0.5}} 
        animate={{x: 0, opacity: 1, scale: 1}}
        transition={{duration: 1}}
        className='flex flex-row items-center text-gray-300 cursor-pointer'>
          <SocialIcon 
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'
            url='#contact'
          />
          <Link href={'#contact'}>
            <p className='uppercase'>
              Get in touch
            </p>
          </Link>
      </motion.div>
      
      
      
    </header>
  )
}

export default Header