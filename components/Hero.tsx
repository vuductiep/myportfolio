import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import Link from "next/link";

type Props = {}

type ImageProp = {
    src: string,
    width?: number,
    height?: number
}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, My name's Tiep",
            "I-code-for-food.tsx",
            "<AndFunAsWell />",
        ],
        loop: true,
        delaySpeed: 2000,
    })

    const myLoader = (loaderProps : ImageProp) => {
      return `https://assets.leetcode.com/users/ductiepdt/${loaderProps.src}`
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
      <div className={'z-20'}>
        <h2 className='text-sm uppercase text-gray-500 pb-5 tracking-[15px]'>Software Engineer</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#F7AB0A'/>
        </h1>

        <div className={'pt-5'}>
          <Link href={'#about'}>
            <button className='heroButton'>About</button>
          </Link>
          <Link href={'#experience'}>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href={'#skills'}>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href={'#projects'}>
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
