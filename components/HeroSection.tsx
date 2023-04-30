import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from "next/link";
import { motion } from 'framer-motion';
import {PageInfo} from "@/typings";
import {urlFor} from "@/sanity";

type Props = {
  pageInfo: PageInfo
}

function HeroSection({pageInfo}: Props) {
    const [text, count] = useTypewriter({
        words: [
            `Hi, My name's ${pageInfo.name.trim().split(' ').slice(-1)}`,
            "I-code-for-food.tsx",
            "<AndFunAsWell />",
        ],
        loop: true,
        delaySpeed: 2000,
    })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{opacity: 1, x: 0}}
        viewport={{once: true}}
        src={urlFor(pageInfo?.heroImage).url()}
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
      >
      </motion.img>
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
          <Link href={'#education'}>
            <button className='heroButton'>Education</button>
          </Link>
          <Link href={'#experience'}>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href={'#skills'}>
            <button className='heroButton'>Skills</button>
          </Link>
        </div>
        <div className={'pt-5'}>
          <Link href={'#projects'}>
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
