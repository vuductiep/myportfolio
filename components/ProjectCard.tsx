import { urlFor } from '@/sanity'
import { Project } from '@/typings'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

type Props = {
  project: Project
}

function ProjectCard({project}: Props) {
  return (
    <div className='flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 z-10'>
    {/* <article className='flex flex-col rounded-md items-center space-y-7 flex-shrink-1
      snap-center p-10 hover:opacity-100 bg-[#292929]
      opacity-40 cursor-pointer transition-opacity duration-200 z-10'> */}
      <motion.img 
        initial={{
          y: -300,
          opacity: 0,
        }}
        transition={{duration: 0.3}}
        whileInView={{opacity: 1, y: 0}}
        // viewport={{once: true}}
        src={urlFor(project?.image).height(300).url()}
        alt=''
        className="rounded-lg bg-white
          filter group-hover:grayscale transition duration-300 ease-in-out p-1"
      /> 
      <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
        <h4 className='text-4xl font-semibold text-center'>
          <Link href={project?.linkToBuild || ''} rel="noopener noreferrer" target="_blank">
            <span className='underline decoration-[#f7ab0a]/50'>{project?.title}</span>
          </Link>
        </h4>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          {project?.summary?.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProjectCard