import React from 'react'
import {ImageProp} from './ImageProperty'
import Image from 'next/image'
import {motion} from 'framer-motion'
import {Experience} from "@/typings";
import {urlFor} from "@/sanity";

type Props = {
  experience: Experience
}

function ExperienceCard({experience}: Props) {
  return (
    <article className='flex flex-col rounded-1 items-center space-y-7 flex-shrink-0
      w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 hover:opacity-100 bg-[#292929]
      opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <div className='px-0 md:px-10'>
        <div >
          <div>
            <h4 className='text-4xl font-light'>{experience?.jobTitle}</h4>
            <p className='font-bold text-2xl mt-1'>{experience?.company}</p>
          </div>

          {/*<div className={'flex flex-row'}>*/}
          {/*  <motion.img*/}
          {/*    initial={{y: -100, opacity: 0}}*/}
          {/*    transition={{duration: 1.2}}*/}
          {/*    whileInView={{opacity: 1, y: 0}}*/}
          {/*    viewport={{once: true}}*/}
          {/*    src={urlFor(experience?.companyImage).width(200).url()}*/}
          {/*    alt={''}*/}
          {/*    // className="rounded-full h-32 w-32 xl:w-[200px] xl:h-[200px] object-cover object-center"*/}
          {/*    className="ml-5 object-cover object-center brightness-200"*/}
          {/*  />*/}
          {/*</div>*/}
        </div>

        <div className='flex space-x-2 my-2'>
          {experience?.technologies.map((tech) => (
            <img
              key={tech?._id}
              src={urlFor(tech?.image).url()}
              className={'h-10 w-10'}
            />
          ))}
        </div>
        <p className='uppercase py-5 text-gray-300'>
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience?.isCurrentlyWorkingHere ? "Present" :
            new Date(experience?.dateEnded).toDateString()}
        </p>
        {/*<ul className='list-disc space-y-4 ml-5 text-lg max-h-80 overflow-y-scroll*/}
        {/*  pr-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#f7ab0a]/80'>*/}
        <ul className='list-disc space-y-4 ml-5 text-lg max-h-80 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#f7ab0a]/80'>
          {experience?.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard