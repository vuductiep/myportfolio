import React from 'react'
import {Project} from "@/typings";
import ProjectCard from './ProjectCard';

type Props = {
  projects: Project[]
}

function ProjectsSection({projects}: Props) {
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray text-2xl'>
        Projects
      </h3>
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandotary z-20
        scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar'>
        {projects?.map((project, index) => (
          <ProjectCard project={project} key={index}/>
        ))}
      </div>
      <div className='w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12'></div>
    </div>
  )
}

export default ProjectsSection
