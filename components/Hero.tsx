import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, My name's Tiep",
            "I-code-for-food.tsx",
            "<andFunAsWell />",
        ],
        loop: true,
        delaySpeed: 2000,
    })

    const myLoader = ({src}) => {
      return `https://assets.leetcode.com/users/ductiepdt/${src}`
    }
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <Image 
        src={'avatar_1587364877.png'} 
        alt={''} width={32} height={32} 
        loader={myLoader} 
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <div>
        <h2 className='text-sm uppercase text-gray-500 pb-5 tracking-[15px]'>Software Engineer</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#F7AB0A'/>
        </h1>

        <div>
          <div className='heroButton'>About</div>
          <div className='heroButton'>Experience</div>
          <div className='heroButton'>Skills</div>
          <div className='heroButton'>Projects</div>
        </div>
      </div>
    </div>
  )
}

export default Hero
