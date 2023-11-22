import { motion } from 'framer-motion'
import React from 'react'
import {PageInfo} from "@/typings";
import {urlFor} from "@/sanity";

type Props = {
  pageInfo: PageInfo
}

function AboutSection({pageInfo}: Props) {
  return (
    <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className='h-screen flex flex-col relative text-center md:text-left md:flex-col max-w-7xl px-5 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray text-2xl'>About</h3>
      <motion.img
        initial={{
          x: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{opacity: 1, x: 0}}
        viewport={{once: true}}
        src={urlFor(pageInfo?.profilePic).url()}
        className='-mb-20 md:mb-0 w-32 h-32 rounded-md object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[500px] xl:h-[500px]'
      >
      </motion.img>
      <div className='px-0 md:px-10'>
        {/*<h4 className='text-4xl font-semibold'>*/}
        {/*  Let&apos;s get to know <span className='underline decoration-[#f7ab0a]'>me</span>&nbsp;*/}
        {/*</h4>*/}
        <p className='text-justify'>
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  )
}

export default AboutSection