import {CommonDateFormat} from '@/lib/commonConstants';
import {urlFor} from "@/sanity";
import {Experience} from "@/typings";
import {format} from 'date-fns';
import {motion} from 'framer-motion';
import Link from 'next/link';

type Props = {
  experience: Experience
}

function ExperienceCard({experience}: Props) {
  return (
    <article className='flex flex-col rounded-md items-center bg-[#292929] my-2 cursor-pointer p-1 sm:p-5'>
      {/*<article className='flex flex-col rounded-1 items-center space-y-7 flex-shrink-1*/}
      {/*  snap-center p-10 hover:opacity-100 bg-[#292929]*/}
      {/*  opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden rounded-md'>*/}
      <motion.img
        initial={{y: -50, opacity: 0}}
        transition={{duration: 1}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        src={urlFor(experience?.companyImage).url()}
        alt={''}
        // className="rounded-full h-32 w-32 xl:w-[200px] xl:h-[200px] object-cover object-center"
        className={`h-14 w-auto md:h-[100px] md:w-auto xl:h-[150px] xl:w-auto object-cover object-center 
        bg-slate-50 rounded-sm p-2`}
      />
      <div className='pb-10 pt-5 px-10'>
        <div>
          <h4 className='text-4xl font-light'>{experience?.jobTitle}</h4>
          <Link href={experience?.url}>
            <p className='font-bold text-2xl mt-1'>{experience?.company}</p>
          </Link>
        </div>

        <div className='flex space-x-2 my-2'>
          {experience?.technologies.map((tech) => (
            <img
              key={tech?._id}
              src={urlFor(tech?.image).url()}
              className={'h-10 w-10 bg-white rounded p-1'}
              alt={''}
            />
          ))}
        </div>
        <p className='uppercase py-5 text-gray-300'>
          {format(new Date(experience?.dateStarted), CommonDateFormat)} -{" "}
          {experience?.isCurrentlyWorkingHere ? "Present" :
            format(new Date(experience?.dateEnded), CommonDateFormat)}
        </p>
        {/*<ul className='list-disc space-y-4 ml-5 text-lg max-h-80 overflow-y-scroll*/}
        {/*  pr-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#f7ab0a]/80'>*/}
        {/*<ul className='list-disc space-y-4 ml-5 text-lg max-h-80 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#f7ab0a]/80'>*/}
        <div className={''}>
          <ul className='list-disc space-y-4 ml-5 text-lg'>
            {experience?.points?.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

export default ExperienceCard