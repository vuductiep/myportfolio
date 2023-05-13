import {motion} from 'framer-motion'
import React from 'react'
import {Skill} from "@/typings";
import {urlFor} from "@/sanity";
import Link from "next/link";

type Props = {
  directionLeft?: boolean,
  skill: Skill
}

function SkillCard({directionLeft, skill}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{
          x: directionLeft ? -100 : 100,
          opacity: 0
        }}
        transition={{duration: 0.5}}
        whileInView={{opacity: 1, x: 0}}
        src={urlFor(skill?.image).url()}
        className="rounded-lg h-16 w-16 md:w-28 md:h-28 xl:w-32 xl:h-32 bg-white
          filter group-hover:grayscale transition duration-300 ease-in-out p-1"
      />
      <div className='rounded-lg absolute opacity-0 group-hover:opacity-80 transition duration-300
        ease-in-out group-hover:bg-white h-16 w-16 md:w-28 md:h-28 xl:w-32 xl:h-32 z-0'>
        <div className='flex items-center justify-center h-full'>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href={skill?.url ? skill.url : ""}
            className='text-3xl font-bold text-black opacity-100'>
            {skill?.progress}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SkillCard
