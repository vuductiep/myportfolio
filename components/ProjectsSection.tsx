import React from 'react'
import {Project} from "@/typings";
import ProjectCard from './ProjectCard';
import { Carousel } from 'flowbite-react';

type Props = {
  projects: Project[]
}

function ProjectsSection({projects}: Props) {
  return (
    <div className='h-screen relative flex overflow-hidden flex-col md:flex-row justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray text-2xl'>
        Projects
      </h3>
      <div className='grid grid-cols-1 z-10'>
        <Carousel slide={false}>
          {projects?.map((project) => (
            <ProjectCard project={project} key={project?._id}/>
          ))}
        </Carousel>
      </div>
      <div className='w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12 z-0'></div>
    </div>
  )
}

export default ProjectsSection
