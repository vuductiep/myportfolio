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
    <div className='w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center
    p-20 md:p-50 xl:p-100'>
      <motion.img
        initial={{
          y: -300,
          opacity: 0,
        }}
        transition={{duration: 1}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        src={urlFor(project?.image).url()}
        alt=''
        className="rounded-lg bg-white h-32 md:h-40 xl:h-60 filter group-hover:grayscale transition duration-300 ease-in-out p-1"
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
